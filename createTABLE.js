const createDB=require('./createDB');
createDB.createDB();
let sql = `
CREATE TABLE City (
    PersonID int PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
`;
createDB.conn.query("DESC City",(err,result) => {
    if(result==undefined){
        reateDB.conn.query(sql,(err,res)=>{

            if(err) throw err;
        else
            console.log(res);
        
        })
    }else console.log('table is already exist');


    
})
