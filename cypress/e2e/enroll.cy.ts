/// <reference types="cypress" />

import { IExcursionsGetListShortItemRes } from "src/app/core/contracts";

describe('Excursion Enroll page', () => {

    const API_URL = 'https://localhost:44330';

    let getTestPath = (excursionId: number) => `/excursions/enroll/${excursionId}`;

    let excursionId: number = 0;

    it('Should redirect to the excursion details', () => {
        cy.clearBrowserCache();
        cy.intercept('GET', `${API_URL}/Excursions/GetListShort`).as('GetListShort');
        cy.visit('/');
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items as IExcursionsGetListShortItemRes[];
            excursionId = items[0].id;
            cy.visit(getTestPath(excursionId));
            cy.location('pathname').should('eq', getTestPath(excursionId));
        });
    });

    it('Should show loading spinner while Enroll page details are loading', () => {
        cy.visit(getTestPath(excursionId));
        cy.get('app-loading-spinner').should('exist');
        cy.get('app-loading-spinner', { timeout: 10000 }).should('not.exist');
        cy.get('.excursions-enroll-container')
            .should('exist')
            .should('be.visible');
    });

    it('Should make sure that the booker\'s form is visible', () => {
        cy.visit(getTestPath(excursionId));
        cy.get('app-excursions-enroll-form-booker')
            .should('exist')
            .should('be.visible');
    });

    it('Should make sure that participants count dropdown works', () => {
        cy.visit(getTestPath(excursionId));
        cy.get('.select-container').click();
        cy.get('.select-option-container').eq(3).click();
        cy.get('app-excursions-enroll-form-booker')
            .should('exist')
            .should('be.visible')
            .should('have.length', 1);
        cy.get('app-excursions-enroll-form-participant')
            .should('exist')
            .should('be.visible')
            .should('have.length', 3);
    });
});