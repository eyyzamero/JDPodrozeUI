/// <reference types="cypress" />

import { IExcursionsGetListShortItemRes } from '../../src/app/core/contracts';

describe('Home Page', () => {
    const PAGE_PATH = '/';
    const API_URL = 'https://localhost:44330';

    beforeEach(() => {
        cy.intercept('GET', `${API_URL}/Excursions/GetListShort`).as('GetListShort');
    });

    it('Should make a GetListShort API call to obtain list of excursions', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').its('response.statusCode').should('eq', 200);
    });

    it('Should check if the GetListShort API response contains "items" property as an array', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items;
            expect(items).to.be.an('array');
        });
    });

    it('Should check if correct number of excursions was rendered in the "Excursions" section', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items;
            cy.get('app-excursions-home-list-item').should('have.length', items.length);
        });
    });

    it('Should check if correct number of excursions was rendered in the carousel', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items as IExcursionsGetListShortItemRes[];
            const inCarouselItems = items.filter(item => item.inCarousel === true);
            cy.get('.carousel-item').should('have.length', inCarouselItems.length);
        });
    });

    it('Should check if an image request was made for each excursion', () => {
        cy.clearBrowserCache();
        cy.intercept('GET', `${API_URL}/Excursions/GetImageNew/**`).as('getImages');
        cy.visit(PAGE_PATH);
        cy.get('@getImages.all').should('have.length.greaterThan', 1);
    });

    it('Should check if prices are correctly displayed for each excursion', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then((interception) => {
            const items = interception.response?.body.items as IExcursionsGetListShortItemRes[];

            items.forEach((excursion, index) => {
                cy.get('.excursions-home-list-item-content')
                    .eq(index)
                    .find('.excursions-home-list-item-price-value')
                    .should('contain.text', `${excursion.priceGross.toFixed(2).replace('.', ',')} PLN`);
            });
        });
    });

    it('Should check if carousel starts displaying excursions from the index 0', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then(() => {
            cy.get('#slide-image-0').should('have.class', 'active');
        });
    });

    it('Should check if carousel after 5.5 seconds is displaying second excursion', () => {
        cy.visit(PAGE_PATH);
        cy.wait('@GetListShort').then(() => {
            cy.wait(5500);
            cy.get('#slide-image-1').should('have.class', 'active');
        });
    });

    it('Should check if newsletter modal is displayed when the button to sign up is clicked', () => {
        cy.visit(PAGE_PATH);
        cy.get('.excursions-home-newsletter-enroll-btn').click();
        cy.get('app-excursions-home-newsletter-modal')
            .should('exist')
            .should('be.visible');
    });

    it('Should check if section "Excursions" is scrolled into view after clicking "offer" anchor tag', () => {
        cy.visit(PAGE_PATH);
        cy.get('.excursions-home-list-container').then(elements => {
            const element = elements[0];
            cy.stub(element, 'scrollIntoView').as('scrollIntoView');
        });
        cy.get('#show-offer-link').click();
        cy.get('@scrollIntoView').should('have.been.calledOnce');
    });
});