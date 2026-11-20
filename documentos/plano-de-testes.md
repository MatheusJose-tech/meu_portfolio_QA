# 📋 Plano de Testes

## 1. Objetivo
Garantir a confiabilidade funcional, a integridade das regras de negócio e a usabilidade responsiva em fluxos de cadastro, busca de eventos/produtos e fechamento de pedidos.

## 2. Escopo

### Dentro do Escopo (In-Scope)
* **Módulo A — Automation Exercise:** Cadastro de conta, login (positivo e negativo), busca no catálogo, manipulação de carrinho e validação de valores totais.
* **Módulo B — Doity (Ambiente Público):** Busca de eventos na vitrine pública, tratamento de caracteres especiais/vazios na pesquisa, responsividade em dispositivos móveis e validação visual de campos obrigatórios.

### Fora do Escopo (Out-of-Scope)
* Submissão de inscrições falsas, emissão de boletos/PIX ou qualquer gravação em banco de dados de produção da plataforma Doity (boas práticas éticas de QA).
* Testes de carga e estresse (Performance).

## 3. Estratégia e Técnicas Aplicadas
* **Testes de Caixa Preta:** Validação de entradas e saídas sem dependência da estrutura interna do código.
* **Análise de Valor Limite e Particionamento de Equivalência:** Testes com campos vazios, formatos de e-mail inválidos, strings extensas e quantidades mínimas/negativas.
* **Testes de Regressão:** Suíte automatizada em Cypress executada a cada alteração nos scripts para garantir que fluxos permaneçam íntegros.
* **Testes de Compatibilidade/Responsividade:** Simulação de viewports Desktop (`1366x768`) e Mobile (`375x812` ) via Cypress.

## 4. Ambiente de Execução
* **Sistema Operacional:** Windows 11
* **Navegadores:** Google Chrome 157+
* **Ferramentas de Apoio:** Cypress, Git/GitHub
