/// <reference types="cypress" />

describe('Header', () => {
    const HOME_PAGE_PATH = '/';
    const ABOUT_US_PAGE_PATH = '/about-us';
    const CONTACT_PAGE_PATH = '/contact';
    const LOGIN_PAGE_PATH = '/account/login';
    const REGISTER_PAGE_PATH = '/account/register';

    describe('Desktop', () => {
        it('Should load the logo', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .logo-container img')
                .should('be.visible')
                .and(elements => {
                    const image = elements[0] as HTMLImageElement;
                    expect(image.naturalWidth).to.be.greaterThan(0);
                });
        });
    
        it('Should redirect to the Home page when logo is clicked', () => {
            cy.visit(ABOUT_US_PAGE_PATH);
            cy.get('.header-content .logo-container img').click();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
        });
    
        it('Should redirect to the Home page when "Excursions" link from the navbar is clicked', () => {
            cy.visit(ABOUT_US_PAGE_PATH);
            cy.get('.header-content .navigation-container #nav_all_wycieczki').click();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
        });
    
        it('Should not redirect from the current page when "Gallery" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .navigation-container #nav_all_galeria').click();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
        });
    
        it('Should redirect to the About Us page when "About us" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .navigation-container #nav_all_onas').click();
            cy.location('pathname').should('eq', ABOUT_US_PAGE_PATH);
        });
    
        it('Should redirect to the Contact page when "Contact" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .navigation-container #nav_all_kontakt').click();
            cy.location('pathname').should('eq', CONTACT_PAGE_PATH);
        });
    
        it('Should open a user\'s dropdown menu when the button is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .header-menu-container .header-menu-toggle-btn').click();
            cy.get('.header-content .header-menu-dropdown-container')
                .should('exist')
                .should('be.visible');
        });
    
        it('Should redirect to the Login page when button from the dropdown menu is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .header-menu-container .header-menu-toggle-btn').click();
            cy.get('#header-menu-option-link-login').click();
            cy.location('pathname').should('eq', LOGIN_PAGE_PATH);
        });

        it('Should redirect to the Register page when button from the dropdown menu is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.get('.header-content .header-menu-container .header-menu-toggle-btn').click();
            cy.get('#header-menu-option-link-register').click();
            cy.location('pathname').should('eq', REGISTER_PAGE_PATH);
        });
    });

    describe('Mobile', () => {
        before(() => {
            cy.visit(LOGIN_PAGE_PATH);
        });

        beforeEach(() => {
            cy.viewport(991, 800); // MD Viewport
        })

        it('Should open a side menu when the menu icon is clicked and the document is under the LG viewport', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('app-menu')
                .should('exist')
                .should('be.visible');
        });

        it('Should close the side menu', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.close-btn').click();
            cy.get('app-menu')
                .should('not.exist');
        });
    
        it('Should redirect to the Home page when "Excursions" link from the navbar is clicked', () => {
            cy.visit(ABOUT_US_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-wycieczki').click();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
        });

        it('Should not redirect from the current page when "Gallery" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-galeria').click();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
        });
    
        it('Should redirect to the About Us page when "About us" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-onas').click();
            cy.location('pathname').should('eq', ABOUT_US_PAGE_PATH);
        });
    
        it('Should redirect to the Contact page when "Contact" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-kontakt').click();
            cy.location('pathname').should('eq', CONTACT_PAGE_PATH);
        });

        it('Should redirect to the Contact page when "Login" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-login').click();
            cy.location('pathname').should('eq', LOGIN_PAGE_PATH);
        });

        it('Should redirect to the Contact page when "Register" link from the navbar is clicked', () => {
            cy.visit(HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-register').click();
            cy.location('pathname').should('eq', REGISTER_PAGE_PATH);
        });

        it('Should login and check if logout button is visible and works', () => {
            cy.login();
            cy.location('pathname').should('eq', HOME_PAGE_PATH);
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-logout')
                .should('exist')
                .should('be.visible')
                .click();
            cy.openSideMenuOnMobileViewport();
            cy.get('.navigation-container #side-menu-nav-login')
                .should('exist')
                .should('be.visible');
        });
    });
});