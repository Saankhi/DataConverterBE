var mysql = require('mysql');


var con = mysql.createConnection({
    // host: "dull-lime-dolphin-shoe.cyclic.app",
    host: "localhost",
    user: "saanUser",
    password: "saan27",
    database: "data_converter"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE headers ( fileName VARCHAR(45), headerValues VARCHAR(100), FOREIGN KEY (fileName) REFERENCES template(fileName) )"
    //  var sql = "CREATE INDEX fk_constraint_headers ON template(fileName)";
    // var sql = "ALTER TABLE headers ADD CONSTRAINT fk_constraint FOREIGN KEY (fileName) REFERENCES template(fileName) ON DELETE CASCADE"
    

    // con.query(sql, (err, result) => {
    //     if (err) throw err;
    //     console.log("Qurey Executed")
    // })
});


module.exports = con;