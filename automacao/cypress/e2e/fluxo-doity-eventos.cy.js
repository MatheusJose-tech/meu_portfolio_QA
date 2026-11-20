describe("Suíte E2E — Plataforma de Eventos", () => {
  it("TC-006: Validar busca pública de produtos na Doity", () => {
    cy.viewport(1280, 720);
    cy.visit("https://doity.com.br/eventos");

    cy.get('.w-full').type("Maceió");
    cy.get('.flex-wrap > .rounded-full').click();

    cy.get(':nth-child(1) > .group > .flex > .mt-auto').contains("Maceió").should("be.visible");
    cy.wait(1000);
    cy.screenshot("tc005-doity-busca-eventos");
  });

  it("TC-007: Validar comportamento da busca com termo inexistente / caracteres especiais", () => {
    cy.viewport(1280, 720);
    cy.visit("https://doity.com.br/eventos");

    cy.get('.w-full').type("@@@###999xyz");
    cy.get('.flex-wrap > .rounded-full').click();

    cy.get(':nth-child(1) > .group > .flex > .mt-auto').should("be.visible");
    cy.wait(1000); 
    cy.screenshot("tc006-doity-busca-vazia");
  });

  it("TC-008: Deve validar carregamento responsivo da vitrine pública da Doity em Mobile", () => {
    const larguraMobile = 375; 
    cy.viewport(larguraMobile, 812);
    cy.visit("https://doity.com.br/teste-3-12");
    cy.get("body").should("be.visible");
    
    cy.window().then((win) => {
    const scrollHtml = win.document.documentElement.scrollWidth;
    const scrollBody = win.document.body.scrollWidth;

    expect(scrollHtml, "Largura do HTML não deve ultrapassar a tela").to.be.lte(larguraMobile);
    expect(scrollBody, "Largura do Body não deve ultrapassar a tela").to.be.lte(larguraMobile);
  });

    cy.get("h1, h2").filter(":visible").each(($titulo) => {
    const rect = $titulo[0].getBoundingClientRect();

    expect(rect.left, "Título não deve cortar à esquerda").to.be.gte(0);
    expect(rect.right, "Título não deve vazar à direita").to.be.lte(larguraMobile);
  });

  cy.get("a, button").filter(":visible").each(($botao) => {
    const rect = $botao[0].getBoundingClientRect();

    if (rect.width > 0 && rect.height > 0) {
      expect(rect.left, "Botão dentro da margem esquerda").to.be.gte(0);
      expect(rect.right, "Botão dentro da margem direita").to.be.lte(larguraMobile);
    }
  });

  cy.wait(1000);
  cy.screenshot("tc007-doity-mobile");

  });
});

  
