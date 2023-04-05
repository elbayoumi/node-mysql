
   const mysql=require("mysql");
   const database="iraq";
   const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "603721",
    database:database
});
connect=()=>{
    conn.connect((err)=>{
    if (err){ 
        
        throw err;
    // console.log("error connecting to database")
    }
    else console.log(" connected successfully");
});


}

module.exports={
    connect,
    conn,
    database
};