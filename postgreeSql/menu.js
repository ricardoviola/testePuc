const prompt = require('prompt-sync')();

// Array para armazenar os produtos
let produtos = [];

// Função para gerar um ID único
const gerarId = () => {
    return produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
};

// Função para exibir o menu
const exibirMenu = () => {
    console.log("\nMenu de Produtos:");
    console.log("1. Cadastrar Produto");
    console.log("2. Alterar Produto");
    console.log("3. Listar Produtos");
    console.log("4. Deletar Produto");
    console.log("5. Sair"); 
};

// Função para cadastrar um produto
const cadastrarProduto = () => {
    const nome = prompt("Digite o nome do produto: ");
    const categoria = prompt("Digite a categoria do produto: ");
    const quantidade = parseInt(prompt("Digite a quantidade: "), 10);
    const preco = parseFloat(prompt("Digite o preço: "));

    const produto = {
        id: gerarId(),
        nome,
        categoria,
        quantidade,
        preco,
    };

    produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
};

// Função para alterar um produto
const alterarProduto = () => {
    const id = parseInt(prompt("Digite o ID do produto que deseja alterar: "), 10);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        console.log("Produto não encontrado!");
        return;
    }

    produto.nome = prompt(`Digite o novo nome do produto (${produto.nome}): `) || produto.nome;
    produto.categoria = prompt(`Digite a nova categoria (${produto.categoria}): `) || produto.categoria;
    produto.quantidade = parseInt(prompt(`Digite a nova quantidade (${produto.quantidade}): `), 10) || produto.quantidade;
    produto.preco = parseFloat(prompt(`Digite o novo preço (${produto.preco}): `)) || produto.preco;

    console.log("Produto alterado com sucesso!");
};

// Função para listar os produtos
const listarProdutos = () => {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("\nLista de Produtos:");
    produtos.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}, Quantidade: ${produto.quantidade}, Preço: R$${produto.preco.toFixed(2)}`);
    });
};

// Função para deletar um produto
const deletarProduto = () => {
    const id = parseInt(prompt("Digite o ID do produto que deseja deletar: "), 10);
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        console.log("Produto não encontrado!");
        return;
    }

    produtos.splice(indice, 1);
    console.log("Produto deletado com sucesso!");
};

// Loop principal
let opcao;
do {
    exibirMenu();
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            cadastrarProduto();
            break;
        case '2':
            alterarProduto();
            break;
        case '3':
            listarProdutos();
            break;
        case '4':
            deletarProduto();
            break;
        case '5':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
} while (opcao !== '5');
