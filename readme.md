# Gerenciador de Produtos com PostgreSQL

Este é um programa em JavaScript para gerenciar produtos com funcionalidades de cadastrar, alterar, listar e deletar produtos. Ele utiliza o banco de dados PostgreSQL para armazenar os dados e interage com o usuário por meio de um menu em linha de comando.

## Pré-requisitos

1. **Node.js**
   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

2. **PostgreSQL**
   - Um banco de dados PostgreSQL em execução.
   - Crie um banco de dados e configure uma tabela chamada `produtos` com o seguinte comando SQL:
     ```sql
    -- Table: public.produtos

    -- DROP TABLE IF EXISTS public.produtos;

        CREATE TABLE IF NOT EXISTS public.produtos
    (
        id integer NOT NULL DEFAULT nextval('produtos_id_seq'::regclass),
        nomedoproduto text COLLATE pg_catalog."default" NOT NULL,
        categoria text COLLATE pg_catalog."default" NOT NULL,
        quantidade integer NOT NULL,
        preco double precision NOT NULL,
        CONSTRAINT produtos_pkey PRIMARY KEY (id)
    )

     ```

3. **Pacotes Node.js**
   - Instale as dependências `pg` e `prompt-sync` executando o comando:
     ```bash
     npm install
     ```

## Configuração

1. **Clone ou baixe o repositório:**
   - Certifique-se de que o arquivo do programa está salvo em uma pasta local.

2. **Edite a configuração do banco de dados:**
   - No arquivo JavaScript, atualize as informações de conexão do PostgreSQL no bloco de configuração:
     ```javascript
     const client = new Client({
         user: 'seu_usuario',
         host: 'localhost',
         database: 'seu_banco',
         password: 'sua_senha',
         port: 5432, // Porta padrão do PostgreSQL
     });
     ```
   - Substitua `seu_usuario`, `seu_banco` e `sua_senha` pelos valores correspondentes ao seu ambiente.

## Como executar

1. **Abra o terminal e navegue até a pasta do programa:**
   ```bash
   cd caminho/para/a/pasta
   ```

2. **Execute o programa:**
   ```bash
   node index.js
   ```


3. **Interaja com o menu:**
   - Escolha as opções apresentadas no menu para realizar as operações desejadas.
   - Exemplo:
     - **1:** Cadastrar Produto
     - **2:** Alterar Produto
     - **3:** Listar Produtos
     - **4:** Deletar Produto
     - **5:** Sair

## Funcionalidades

1. **Cadastrar Produto**
   - Insira os dados do produto: nome, categoria, quantidade e preço.
   - O produto será salvo na tabela do banco de dados.

2. **Alterar Produto**
   - Informe o ID do produto existente para alterá-lo.
   - Atualize os campos desejados.

3. **Listar Produtos**
   - Exibe todos os produtos cadastrados no banco de dados.

4. **Deletar Produto**
   - Informe o ID do produto que deseja excluir.
   - O produto será removido do banco de dados.

## Observações

- Certifique-se de que o PostgreSQL está em execução antes de iniciar o programa.
- Caso encontre problemas de conexão, verifique as configurações no código e as permissões do banco de dados.

## Encerrando o programa

- Escolha a opção **5** no menu para encerrar o programa e desconectar do banco de dados.

## Documentação do código
- Conexão com banco de dados
Aqui foi utilizada a biblioteca PG para conexão com PostgreSQL.
- menu
Utilizado biblioteca prompt-sync para o menu.
Criação das funcionalidades de cadastrar, listar, alterar e deleter produtos.
- Funcionalidades
Na execução do código abre o menu de opções na qual classificando a opção desejada é selecionado para cadastro de produto além de alteração e deletar. Também é possível a opção de listar na qual vai aparecer a tabela de produtos com suas características. Por fim tem a opção sair para finalizar a aplicação.
---

Se você tiver dúvidas ou problemas ao executar o programa, sinta-se à vontade para entrar em contato!

