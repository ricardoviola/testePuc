PGUSER=<RICARDO>
PGHOST=<PGHOST>
PGPASSWORD=<PGPASSWORD>Rv03182002@</PGPASSWORD>
PGDATABASE=<PGDATABASE>BDCADPACIENTES</PGDATABASE>
PGPORT=<PGPORT>5432</PGPORT>

const dotenv = require("dotenv")
dotenv.config()

const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
 
const connectDb = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
 
        await pool.connect()
        const res = await pool.query('SELECT * FROM clients')
        console.log(res)
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()