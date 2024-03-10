

const Pool=require('pg').Pool;

const pool=new Pool({
    user:"postgres",
    host:"host.docker.internal",
    //host:"postgres",
    // host : "localhost",
    database:"students",
    password:"bhumigres",
    port:5432,
});

module.exports=pool;






