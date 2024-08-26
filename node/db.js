import mysql from "mysql2";

 const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "crud",
});

db.connect((err) => {
    if (err) console.log(err);
    else console.log("Your Database is Connected Successfully");
});

export default db;
