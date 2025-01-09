const prompt = require('prompt-sync')();
const { Client } = require('pg');

// Configuração da conexão com o banco de dados PostgreSQL
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'DBPRodutos',
    password: 'Lua027167&',
    port: 5432, // Porta padrão do PostgreSQL
});

// Conectando ao banco de dados
(async () => {
    try {
        await client.connect();
        console.log("Conectado ao banco de dados PostgreSQL com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        process.exit(1);
    }
})();


// Função para exibir o menu
const exibirMenu = () => {
    console.log("\nMenu de Produtos:");
    console.log("1. Cadastrar Produto");
    console.log("2. Alterar Produto");
    console.log("3. Listar Produtos");
    console.log("4. Deletar Produto");
    console.log("5. Sair");
};

async function cadastrarProdutos(){

    const nomedoproduto = prompt("Digite o nome do produto: ");
    const categoria = prompt("Digite a categoria do produto: ");
    const quantidade = parseInt(prompt("Digite a quantidade: "), 10);
    const preco = parseFloat(prompt("Digite o preço: "));

    try {
        const query = 'INSERT INTO produtos (nomedoproduto, categoria, quantidade, preco) VALUES ($1, $2, $3, $4)';
        await client.query(query, [nomedoproduto, categoria, quantidade, preco]);
        console.log("Produto cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error.message);
    }
}

async function listarProdutos(){
    try {
        const { rows } = await client.query('SELECT * FROM produtos');
        //console.log(rows)
        if (rows.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }

        console.log("\nLista de Produtos:");
        rows.forEach(produto => {
            //console.log(produto)
            console.log(`ID: ${produto.id}, Nome: ${produto.nomedoproduto}, Categoria: ${produto.categoria}, Quantidade: ${produto.quantidade}, Preço: R$${produto.preco.toFixed(2)}`);
        });
    } catch (error) {
        console.error("Erro ao listar produtos:", error.message);
    }
}

async function alterarProdutos(){
    const id = parseInt(prompt("Digite o ID do produto que deseja alterar: "), 10);

    try {
        const { rows } = await client.query('SELECT * FROM produtos WHERE id = $1', [id]);
        if (rows.length === 0) {
            console.log("Produto não encontrado!");
            return;
        }

        const produto = rows[0];
        const nomedoproduto = prompt(`Digite o novo nome do produto (${produto.nomedoproduto}): `) || produto.nomedoproduto;
        const categoria = prompt(`Digite a nova categoria (${produto.categoria}): `) || produto.categoria;
        const quantidade = parseInt(prompt(`Digite a nova quantidade (${produto.quantidade}): `), 10) || produto.quantidade;
        const preco = parseFloat(prompt(`Digite o novo preço (${produto.preco}): `)) || produto.preco;

        const query = 'UPDATE produtos SET nomedoproduto = $1, categoria = $2, quantidade = $3, preco = $4 WHERE id = $5';
        await client.query(query, [nomedoproduto, categoria, quantidade, preco, id]);
        console.log("Produto alterado com sucesso!");
    } catch (error) {
        console.error("Erro ao alterar produto:", error.message);
    }
};




const main = async () => {
    let opcao;
    do {
        exibirMenu();
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                await cadastrarProdutos();
                break;
            case '2':
                await alterarProdutos();
                break;
            case '3':
                await listarProdutos();
                break;
            case '4':
                await deletarProduto();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    } while (opcao !== '5');

    await client.end();
    console.log("Conexão com o banco de dados encerrada.");
};

main();