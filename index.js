const Client = require('pg').Client
const cliente = new Client({
  user: 'postgres',
  password: 'Lua027167&',
  host: 'localhost',
  port: 5432,
  database: 'DBPRodutos'  
})

async function getProdutos(){
    try{
        await cliente.connect()
        console.log('Conexão bem sucedida')
        const resultado = await cliente.query('SELECT * FROM public."Produtos"')
        console.table(resultado.rows)
    }

    catch(ex){
        console.log('Ocorreu um erro em getBDProdutos. Erro:'+ ex)

    }    

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }   
}

//getProdutos()

async function setProdutos(nome){

    try{
        await cliente.connect()
        console.log('Conexão bem sucedida')
        await cliente.query('INSERT INTO public."Produtos" values(1,"categoria", 4, "nomedoproduto", 10.00 );')
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('SELECT * FROM public."Produtos"')
        console.table(resultado.rows)
    }

    catch(ex){
        console.log('Ocorreu um erro em getBDPRodutos. Erro:'+ ex)

    }    

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }   
}

const entrada = require("prompt-sync")();
let nome = entrada("Digite o nome do produto:");
setProdutos(`${nome}`);

async function delPacientes(nome){
    try{
        await cliente.connect()
        console.log('Conexão bem sucedida')
        await cliente.query("delete from pacientes where nome ='"+nome+"'")
        console.log('Paciente excluído na tabela')

        const resultado = await cliente.query('select * from pacientes')
        console.table(resultado.rows)
    }

    catch(ex){
        console.log('Ocorreu um erro em pacientes. Erro:'+ ex)

    }    

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }   
}

//delPacientes('Ricardo')







