// const DBconnection = require("./dbconnection");
const DB = require("./DBconnection");
DB.connect();
// DB.conn.query("CREATE DATABASE iraq", function(err, db) {
// if (err) throw err;
// console.log("DB connection created");
// })
const conn=DB.conn;
const database=DB.database
const createDB=()=> conn.query(`SHOW DATABASES LIKE '${DB.database}'`, function (err, db) {
    if (err) throw err;
    else if (db != '') console.log("db is already created");
    else {
        DB.conn.query("CREATE DATABASE iraq", function (err, db) {
            if (err) throw err;
            console.log("DB connection created");
        });
    }
    // console.log(db)
});
module.exports={
    createDB,
    conn,
    database
}