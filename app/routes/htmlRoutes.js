var path = require("path");

module.exports = function(app){
    app.get("/viewTables", function(req, res){
        res.sendFile(path.join(__dirname, "../public/viewTables.html"));
    });

    app.get("/makeReservation", function(req, res){
        res.sendFile(path.join(__dirname, "../public/makeReservation.html"))
    })

    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}