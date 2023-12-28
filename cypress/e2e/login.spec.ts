describe('Login spects', () => {
  it('visit login page', () => {
    cy.visit('/');
  });

  it('should have the focus on user input when clicked', () => {
    cy.visit('/');
    cy.findByRole('textbox').click();

    cy.get('input[name="user"]').should('have.focus');
  });

  it('should show error alert when credentials are invalid', () => {
    const user = "user";
    const password = "test";

    cy.visit('/');
    cy.findByRole('textbox').type(user);
    cy.get('input[name="password"]').type(password);
    cy.findByRole('button').click();
    cy.findByRole('alert');

    cy.get('input[name="user"]').should('have.value', user);
    cy.get('input[name="password"]').should('have.value', password);
    //cy.get('alert').should('have.been.calledWith', 'Usuario y/o password no válidos');
  });

  it('should navigate to submodule-list ult when the credentials are valid', () => {
    const user = 'admin';
    const password = 'test';

    cy.visit('/');
    cy.findByRole('textbox').type(user);
    cy.get('input[name="password"]').type(password);

    cy.get('input[name="user"]').should('have.value', user);
    cy.get('input[name="password"]').should('have.value', password);
    cy.findByRole('button').click();

    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  })
});
