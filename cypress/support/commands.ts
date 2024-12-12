
declare namespace Cypress {
    interface Chainable {
        clearBrowserCache(): Chainable<void>;
        openSideMenuOnMobileViewport(): Chainable<void>;
        login(username?: string, password?: string): Chainable<void>;
    }
}

Cypress.Commands.add('clearBrowserCache', () => {
    cy.wrap(Cypress.automation('remote:debugger:protocol', {
        command: 'Network.clearBrowserCache',
    }));
});

Cypress.Commands.add('openSideMenuOnMobileViewport', () => {
    cy.get('.header-content .action-buttons-container .menu-btn').click();
});

Cypress.Commands.add('login', (username: string = 'admin123', password: string = 'admin123') => {
    cy.visit('/account/login');
    cy.get('#login').clear().type(username);
    cy.get('#password').clear().type(password);
    cy.get('#login-btn').click();
});