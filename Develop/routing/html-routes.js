const path = require("path");

module.exports = function(app) {
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(_dirname + "Develop/public/notes.html"));
    });
    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname + "Develop/public/idex.html"));
    });
};