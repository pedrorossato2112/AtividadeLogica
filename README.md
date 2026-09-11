# Auditoria de Estoque Assíncrona

Atividade de auditoria de estoque utilizando TypeScript e `fs/promises`.

## Requisitos atendidos

- `type ItemEstoque` com `id`, `nome`, `preco` e `quantidade`.
- `type RelatorioAuditoria` com `valorTotalEstoque` e `produtosCriticos`.
- Leitura assíncrona de `./estoque.json` usando `fs/promises`.
- Encadeamento com `.then()` e tratamento de erro com `.catch()`.
- Cálculo do valor total do estoque (`preco * quantidade`).
- Filtro de produtos críticos com `quantidade < 5`.
- Persistência do relatório formatado em `./auditoria.json`.

## Como executar

```bash
npm install
npm run dev
```

Ou:

```bash
npm install
npm run build
npm start
```

Após a execução, o arquivo `auditoria.json` será criado/atualizado.
