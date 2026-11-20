# 🛡️ Portfólio de QA — Automação E2E & Testes Exploratórios

Repositório dedicado à demonstração prática de processos de **Garantia de Qualidade de Software (QA)**, abrangendo desde o planejamento e escrita de casos de teste em caixa preta até a automação end-to-end (E2E) com **Cypress** e documentação estruturada de defeitos.

## 🎯 Estratégia e Escopo do Projeto

Para simular um cenário completo de plataforma de inscrições e venda de ingressos sem gerar dados falsos em ambientes produtivos, o projeto foi dividido em duas frentes complementares:

1. **Automação E2E (`automationexercise.com`):** Ambiente homologado para testes de QA utilizado para validar fluxos transacionais completos (cadastro de usuário, autenticação, busca, adição ao carrinho, cálculo de valores e checkout).
2. **Testes Exploratórios e Responsividade (`doity.com.br`):** Auditoria não invasiva (apenas leitura e validação de interface client-side) focada na experiência do participante: busca de eventos públicos, comportamento com entradas limite, validação de formulários sem submissão e responsividade mobile.

## 📂 Estrutura do Repositório

```text
/meu-portfolio-QA
├── README.md
├── /documentos
│   ├── plano-de-testes.md
│   ├── casos-de-teste.md
│   └── relatorio-de-bugs.md
├── /automacao
│   ├── /cypress
│   │   ├── /e2e
│   │   │   └── fluxo-compra-cadastro.cy.js
│   │   └── /support
│   │       └── commands.js
│   ├── cypress.config.js
│   └── package-lock.json
│   └── package.json
└── /evidencias
    ├── screenshots/
    └── videos/
```

## 📊 Resumo da Cobertura de Testes

| Frente de Teste | Casos Planejados | Automatizados | Exploratórios / Manuais | Falhas / Melhorias Mapeadas |
| :--- | :---: | :---: | :---: | :---: |
| **Automation Exercise (E2E)** | 5 | 5 | 5 | 2 |
| **Doity (Exploratório & UI)** | 3 | 1 | 3 | 0 |
| **Total** | **8** | **6** | **8** | **2** |

## 🛠️ Tecnologias Utilizadas

* **Automação E2E:** Cypress (v13+)
* **Linguagem:** JavaScript (ES6+) & Node.js
* **Documentação:** Markdown

## 🚀 Como Executar os Testes Automatizados

### Pré-requisitos
* [Node.js](https://nodejs.org/) (v18 ou superior) instalado.

### Passo a passo
```bash
# 1. Clone o repositório
git clone https://github.com/MatheusJose-tech/meu-portfolio-QA.git

# 2. Acesse a pasta de automação
cd meu-portfolio-QA/automacao

# 3. Instale as dependências
npm install

# 4. Execute os testes em modo headless (gera vídeos e screenshots automaticamente)
npx cypress run

# Ou abra a interface interativa do Cypress
npx cypress open
```

## 👨‍💻 Autor
**Matheus Jose Silva Rocha**      
Graduando em Ciência da Computação — Universidade Federal de Alagoas (UFAL) 

[LinkedIn](https://www.linkedin.com/in/matheusjose123) | [GitHub](https://github.com/MatheusJose-tech)
