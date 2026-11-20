# 🧪 Casos de Teste

---

### TC-001
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-001 |
| **Título** | Validar login com credenciais inválidas |
| **Pré-condição** | Usuário acessou a página de login (`automationexercise.com/login`) |
| **Passos** | 1. Inserir e-mail inválido (`usuario.inexistente@teste.com`);<br>2. Inserir senha qualquer (`senha123`);<br>3. Clicar em 'Login' |
| **Resultado Esperado** | Mensagem de erro: `'Your email or password is incorrect!'` exibida em vermelho |
| **Resultado Real** | Mensagem exibida corretamente. **Status: APROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/tc001-login-invalido.png` |

---

### TC-002
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-002 |
| **Título** | Validar busca de item existente no catálogo |
| **Pré-condição** | Usuário está na página de produtos (`automationexercise.com/products`) |
| **Passos** | 1. Localizar o campo de busca;<br>2. Digitar `'Blue Top'`;<br>3. Clicar no botão de pesquisar (lupa) |
| **Resultado Esperado** | Exibir seção `'SEARCHED PRODUCTS'` contendo apenas itens correspondentes ao termo pesquisado |
| **Resultado Real** | Produto exibido conforme esperado. **Status: APROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/tc002-busca-produto.png` |

---

### TC-003
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-003 |
| **Título** | Validar adição de produto ao carrinho e persistência do valor total |
| **Pré-condição** | Carrinho inicialmente vazio na página de produtos |
| **Passos** | 1. Selecionar o primeiro produto disponível;<br>2. Clicar em `'Add to cart'`;<br>3. Clicar em `'View Cart'` no modal de confirmação |
| **Resultado Esperado** | Produto listado no carrinho com quantidade `1` e preço unitário igual ao valor total |
| **Resultado Real** | Item adicionado e valores calculados corretamente. **Status: APROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/videos/fluxo-compra-cadastro.cy.js.mp4` |

---

### TC-004
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-004 |
| **Título** | Validar bloqueio de cadastro com e-mail já registrado |
| **Pré-condição** | Existir uma conta previamente cadastrada com o e-mail utilizado |
| **Passos** | 1. Acessar `automationexercise.com/login`;<br>2. Na seção `'New User Signup!'`, informar um nome e um e-mail já existente;<br>3. Clicar em `'Signup'` |
| **Resultado Esperado** | Sistema impede o avanço e exibe a mensagem `'Email Address already exist!'` |
| **Resultado Real** | Bloqueio e alerta exibidos corretamente. **Status: APROVADO** |
| **Prioridade** | Média |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/tc004-email-duplicado.png` |

---

### TC-005
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-005 |
| **Título** | Validar comportamento de colocar quantidade negativa no produto |
| **Pré-condição** | Usuário colocou uma quantidade negativa de produto da loja, por exemplo no produto (`automationexercise.com/product_details/1`) |
| **Passos** | 1. Entrar no produto;<br>2. Inserir uma quantidade negativa no produto;<br>3. Adicionar no carrinho |
| **Resultado Esperado** | Bloqueio e alerta exibidos negando o usuario colocar quantidade negativa|
| **Resultado Real** | O sistema deixa o usuario colocar a quantidade negativa e ficam salvos no carrinho os valores negativos de quantidade do produto e o valor do produto. **Status: REPROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/tc005-quantidade-negativa.png` |

---

### TC-006
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-006 |
| **Título** | [Doity] Validar busca pública de eventos na vitrine principal |
| **Pré-condição** | Usuário acessou a página de eventos da Doity (`doity.com.br/eventos`) |
| **Passos** | 1. Localizar a barra de busca de eventos;<br>2. Inserir termo relacionado à tecnologia/computação (ex.: `'Tecnologia'` ou `'Maceió'`);<br>3. Submeter a pesquisa |
| **Resultado Esperado** | Listagem de eventos públicos filtrados de acordo com o termo ou cidade informada |
| **Resultado Real** | Resultados carregados e filtrados corretamente. **Status: APROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-doity-eventos.cy.js/tc005-doity-busca-eventos.png` |

---

### TC-007
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-007 |
| **Título** | [Doity] Validar comportamento da busca com termo inexistente / caracteres especiais |
| **Pré-condição** | Usuário está na página de listagem de eventos da Doity |
| **Passos** | 1. Inserir string aleatória sem correspondência (`'@@@###999xyz'`);<br>2. Executar a busca |
| **Resultado Esperado** | Sistema não apresenta erro HTTP (500/404) |
| **Resultado Real** | Tratamento adequado sem quebra de página. **Status: APROVADO** |
| **Prioridade** | Média |
| **Evidência** | `evidencias/screenshots/fluxo-doity-eventos.cy.js/tc006-doity-busca-vazia.png` |

---

### TC-008
| Campo | Detalhe |
| :--- | :--- |
| **ID** | TC-008 |
| **Título** | [Doity] Validar responsividade da página de evento em viewport Mobile |
| **Pré-condição** | Página pública de um evento aberta no navegador |
| **Passos** | 1. ativar o modo dispositivo (`375x812`) no cypress;<br>2. Rolar toda a página do topo ao rodapé;<br>3. Verificar alinhamento de textos, botões de inscrição e ausência de rolagem horizontal |
| **Resultado Esperado** | Elementos adaptados à largura mobile sem sobreposição de texto ou quebra de layout |
| **Resultado Real** | Layout fluido e legível em resolução mobile. **Status: APROVADO** |
| **Prioridade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-doity-eventos.cy.js/tc007-doity-mobile.png` |
