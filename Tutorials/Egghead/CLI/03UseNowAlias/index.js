/* jshint esversion:6 */
/* jshint node:true */
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send(`Hello ${process.env.HELLO}!`);
});

app.listen(3000, function() {
    console.log("Exaple app listening on port 3000");
});

/**
 create alias:

 now alias {ID} papoi
 Success! Alias created {ID}: https://papoi.now.sh
*/
