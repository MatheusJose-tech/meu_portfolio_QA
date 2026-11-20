describe("Suíte E2E — Plataforma E-commerce", () => {
  it("TC-001: Deve exibir mensagem de erro ao tentar login com credenciais inválidas", () => {
    cy.tentarLogin("usuario.inexistente@teste.com", "senha123");

    cy.contains("Your email or password is incorrect!")
      .should("be.visible")
      .and("have.css", "color", "rgb(255, 0, 0)");
    cy.wait(1000);
    cy.screenshot("tc001-login-invalido");
  });

  it("TC-002: Deve buscar um item existente e exibir nos resultados", () => {
    cy.buscarProduto("Blue Top");

    cy.contains("Searched Products").should("be.visible");
    cy.get(".productinfo p").should("contain.text", "Blue Top");

    cy.wait(1000);
    cy.screenshot("tc002-busca-produto");
  });

  it("TC-003: Deve adicionar produto ao carrinho e validar quantidade e valor", () => {
    cy.visit("/products");

    // Adiciona o primeiro item da vitrine ao carrinho
    cy.get(".product-overlay").first().invoke("show");
    cy.contains("Add to cart").first().click();

    // Avança pelo modal para a página do carrinho
    cy.contains("View Cart").click();
    cy.url().should("include", "/view_cart");

    // Valida quantidade = 1 e existência de preço calculado
    cy.get(".cart_quantity button").first().should("have.text", "1");
    cy.get(".cart_total_price").first().should("be.visible");
  });

  it("TC-004: Deve validar o bloqueio de cadastro com e-mail já cadastrado", () => {
    
    cy.visit("/login");
    cy.get('[data-qa="signup-name"]').type("123");
    cy.get("input[data-qa='signup-email']").type("123@gmail.com");
    cy.get('[data-qa="signup-button"]').click();

    cy.contains("Email Address already exist!").should("be.visible");
    cy.wait(1000);
    cy.screenshot("tc004-email-duplicado");
  });
  
  it("TC-005: Validar comportamento de colocar quantidade negativa no produto", () => {
    
    cy.visit("/product_details/1");
    cy.get('#quantity').clear().type("-1");
    cy.wait(1000);
    
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.wait(1000);
    
    cy.screenshot("tc005-quantidade-negativa");

  });
  })