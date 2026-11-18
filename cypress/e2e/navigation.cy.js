describe('Rick and Morty App', () => {
  it('renders the HomePage at /', () => {
    cy.visit('/');
    cy.contains('h2', 'Wubba Lubba Dub-Dub!');
    cy.get('nav').should('be.visible');
  });

  it('navigates between pages via the NavBar without reloading', () => {
    cy.visit('/');
    cy.window().then((win) => {
      win.noReload = true;
    });

    cy.get('nav').contains('a', 'About').click();
    cy.location('pathname').should('eq', '/about');
    cy.contains('h2', 'About Rick and Morty');
    cy.window().its('noReload').should('eq', true);

    cy.get('nav').contains('a', 'Characters').click();
    cy.location('pathname').should('eq', '/characters');
    cy.window().its('noReload').should('eq', true);
  });

  it('renders character cards and paginates to the next page', () => {
    cy.visit('/characters');
    cy.contains('.card-title', 'Rick Sanchez').should('be.visible');
    cy.get('.card').should('have.length', 20);

    cy.contains('button', 'Next').click();
    cy.contains('.card-title', 'Aqua Morty').should('be.visible');
    cy.contains('button', 'Previous').should('not.be.disabled');
  });

  it('renders the 404 NotFound page inside the layout for unknown routes', () => {
    cy.visit('/this-dimension-does-not-exist');
    cy.contains('h2', '404 - Page Not Found');
    cy.get('nav').should('be.visible');
    cy.contains('a', 'Back home').click();
    cy.location('pathname').should('eq', '/');
  });
});