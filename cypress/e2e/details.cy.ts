/// <reference types="cypress" />

import { IExcursionsGetListShortItemRes } from "src/app/core/contracts";

describe('Excursion details', () => {
    const API_URL = 'https://localhost:44330';

    let excursionId: number = 0;

    it('Should redirect to the excursion details', () => {
        cy.clearBrowserCache();
        cy.intercept('GET', `${API_URL}/Excursions/GetListShort`).as('GetListShort');
        cy.visit('/');
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items as IExcursionsGetListShortItemRes[];
            excursionId = items[0].id;
            cy.visit(`/excursions/details/${excursionId}`);
        });
    });

    it('Should show loading spinner while excursion details are loading', () => {
        cy.visit(`/excursions/details/${excursionId}`);
        cy.get('app-loading-spinner').should('exist');
        cy.get('app-loading-spinner', { timeout: 10000 }).should('not.exist');
        cy.get('.excursions-details-content').should('be.visible');
    });

    it('Should make sure that the information about the excursion is shown', () => {
        cy.visit(`/excursions/details/${excursionId}`);
        cy.get('.excursions-details-content .title')
            .should('exist')
            .and('not.be.empty');

        cy.get('.excursions-details-content .date')
            .should('exist')
            .and('not.be.empty');

        cy.get('.excursions-details-content .ckeditor-viewer')
            .should('exist')
            .and('not.be.empty');
    });

    it('Should check if price is available and there\'s a button to enroll', () => {
        cy.visit(`/excursions/details/${excursionId}`);
        cy.get('.price-container .price').should('exist');
        cy.get('.sign-up-btn').should('exist').and('contain.text', 'Zapisz się na wycieczkę');
    });

    it('It should check if images are displayed correctly and there\'s a way to switch between them', () => {
        cy.visit(`/excursions/details/${excursionId}`);
        cy.get('app-excursions-details-images').should('exist').and('be.visible');
        cy.get('app-excursions-details-images picture').should('have.length.greaterThan', 0);
        cy.get('app-excursions-details-images picture').then(pics => {
            if (pics.length > 1) {
                cy.get('app-excursions-details-images picture').eq(1).find('img').click({ force: true });
            }
        });
    });
});