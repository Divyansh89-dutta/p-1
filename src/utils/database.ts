import mysql from 'mysql';


const pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "gazzali1997",
    database: "specialists",
    port: 3306
})

export async function MobileUpdate(mobile: number){
    pool.query(`insert into Newsletter values (${mobile.toString()});`,(err, results)=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log(results);
        }
    })
}

export async function Signup(role:any, email:any, mobile:number, username:string, password:string){
    pool.query(`insert into Newsletter values (${mobile.toString()});`,(err, results)=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log(results);
        }
    })
}
// Need to write for the express server as well
