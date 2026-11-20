// Comando customizado para reaproveitamento de código no fluxo de login
Cypress.Commands.add("tentarLogin", (email, senha) => {
  cy.visit("/login");
  cy.get('[data-qa="login-email"]').clear().type(email);
  cy.get('[data-qa="login-password"]').clear().type(senha);
  cy.get('[data-qa="login-button"]').click();
});

// Comando customizado para buscar produto no catálogo
Cypress.Commands.add("buscarProduto", (nomeProduto) => {
  cy.visit("/products");
  cy.get("#search_product").clear().type(nomeProduto);
  cy.get("#submit_search").click();
});
