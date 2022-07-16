const express = require("express");
const fs = require("fs");
// const apiRoutes = require("./Develop/routing/api-routes");
// const htmlRoutes = require("./Develop/routing/html-routes");
const path = require("path");
const { notes } = require("./db/db.json");


// const util = require("util");


// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

const app = express();
const PORT = process.env.PORT || 3015;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

function makeNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify({ notes })
        );
        return note;
}
app.get("/api/notes", (req, res) => {
    // fs.readFileSync("./Develop/db/db.json", "utf-8").then(function(data) {
    //     notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
// });

app.post("/api/notes", (req, res) => {
    req.body.id = notes.length + 1;
    const note = makeNote(req.body, notes);
    res.json(note);
    });

app.delete("/api/notes/:id", (req, res) => {
    const idToDelete = parseInt(req.params.id);
    fs.readFileSync("./db/db.json", "utf-8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        const newNotesData = []
        for(let i = 0; i<notes.length; i++) {
            if(idToDelete !== notes[i].id) {
                newNotesData.push(notes[i])
            }
        }
        return newNotesData
    }).then(function(notes) {
        fs.writeFileSync("./db/db.json", JSON.stringify(notes))
        res.send('saved!');
    }) 
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
});
