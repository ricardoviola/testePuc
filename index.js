const Client = require('pg').Client
const cliente = new Client({
  user: 'postgres',
  password: 'Lua027167&',
  host: 'localhost',
  port: 5432,
  database: 'DBCADPAC'  
})


/*cliente.connect();
cliente.query('select * from Pacientes')
.then(results => {
    const resultado = results.rows
    console.table(resultado)
})
.finally(() => cliente.end())
*/



async function getPacientes(){
    try{
        await cliente.connect()
        console.log('Conexão bem sucedida')
        const resultado = await cliente.query('select * from BDpacientes')
        console.table(resultado.rows)
    }

    catch(ex){
        console.log('Ocorreu um erro em getBDpacientes. Erro:'+ ex)

    }    

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }   
}

//getPacientes()

async function setPacientes(nome){

    try{
        await cliente.connect()
        console.log('Conexão bem sucedida')
        await cliente.query('insert into pacientes("nome") values('+"'"+nome+"');")
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('select * from pacientes')
        console.table(resultado.rows)
    }

    catch(ex){
        console.log('Ocorreu um erro em getBDpacientes. Erro:'+ ex)

    }    

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }   
}

const entrada = require("prompt-sync")();
let nome = entrada("Digite seu nome:");
setPacientes(`${nome}`);

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







