var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "phpmyadmin",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "INSERT INTO custumers (name, address) VALUES ('Company Inc', 'Highway 01'), ('Company Cia', 'Mountain 02'), ('Company Inc', 'Highway 03'), ('Company Inc', 'Highway 04'), ('Company Inc', 'Highway 05'), ('Company Inc', 'Highway 06'), ('Company Inc', 'Highway 07'), ('Company Inc', 'Highway 08'), ('Company Inc', 'Highway 09'), ('Company Inc', 'Highway 10'), ('Company Inc', 'Highway 11'), ('Company Inc', 'Highway 12'), ('Company Inc', 'Highway 13'), ('Company Inc', 'Highway 14'), ('Company Inc', 'Highway 15'), ('Company Inc', 'Highway 16'), ('Company Inc', 'Highway 17'), ('Company Inc', 'Highway 18'), ('Company Inc', 'Highway 19'), ('Company Inc', 'Highway 20')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})