# 🐞 Relatório de Bugs e Melhorias

### BUG-001
| Campo | Detalhe |
| :--- | :--- |
| **Título** | [Carrinho] Sistema permite inserir quantidade zero ou negativa na página de detalhes do produto |
| **Ambiente** | Chrome 157, Win 11, Automation Exercise|
| **Passos para Reproduzir** | 1. Acessar `automationexercise.com/product_details/1`;<br>2. Alterar o campo numérico `'Quantity'` de `1` para `-1`;<br>3. Clicar em `'Add to cart'` e abrir o carrinho |
| **Resultado Atual** | O sistema aceita o valor negativo sem validação no front-end, gerando subtotal negativo no carrinho |
| **Resultado Esperado** | O campo deve bloquear valores menores que `1` (`min="1"`) e exibir mensagem de validação antes do envio |
| **Severidade** | Alta |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/tc005-quantidade-negativa.png` |

---

### BUG-002
| Campo | Detalhe |
| :--- | :--- |
| **Título** | [Loja / Catálogo] Quebra de alinhamento no grid de produtos gera espaços em branco entre as linhas |
| **Ambiente** | Chrome 157, Win 11, Automation Exercise |
| **Passos para Reproduzir** | 1. Acessar `automationexercise.com/products`;<br>2. Rolar até o rodape; |
| **Resultado Atual** | A variação na altura dos cards provoca quebra prematura de linha (*wrapping*), deixando espaços vazios na fileira superior e deslocando um produto para a linha de baixo mesmo havendo largura disponível. |
| **Resultado Esperado** | Todos os cards de produtos da mesma fileira devem manter altura padronizada e distribuição contínua nas colunas do grid, sem espaços ociosos. |
| **Severidade** | Baixa |
| **Evidência** | `evidencias/screenshots/fluxo-compra-cadastro.cy.js/espacos-em-branco.png` |

---
