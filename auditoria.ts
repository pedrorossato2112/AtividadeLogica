import { readFile, writeFile } from "fs/promises";

type ItemEstoque = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

type RelatorioAuditoria = {
  valorTotalEstoque: number;
  produtosCriticos: ItemEstoque[];
};

readFile("./estoque.json", "utf-8")
  .then((conteudo) => {
    const estoque: ItemEstoque[] = JSON.parse(conteudo);

    const valorTotalEstoque = estoque.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );

    const produtosCriticos = estoque.filter(
      (item) => item.quantidade < 5
    );

    const relatorio: RelatorioAuditoria = {
      valorTotalEstoque,
      produtosCriticos,
    };

    return writeFile(
      "./auditoria.json",
      JSON.stringify(relatorio, null, 2),
      "utf-8"
    );
  })
  .then(() => {
    console.log("Auditoria concluída com sucesso.");
  })
  .catch((erro: unknown) => {
    console.error("Erro ao executar a auditoria:", erro);
  });
