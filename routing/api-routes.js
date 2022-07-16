// const { text } = require("body-parser");
// const fs = require("fs");
// let uniqid = require("uniqid");

// module.exports = function (app) {
//     app.get("/api/notes", (req, res) => {
//         console.log("Execute GET notes request");
//         let data = fs.readFileSync("./Develop/db/db.json", "utf-8");
//         res.json(JSON.parse(data));
//     });
//     app.post("/api/notes", (req, res) => {
//         const newNotes = {
//             ...req.body,
//             id:uniqid(),
//         };
//         console.log("Post Request for new notes");
//         let data = fs.readFileSync("./Develop/db/db.json", "utf-8");
//         const dataJson = JSON.parse(data);
//         dataJson.push(newNotes);
//         fs.writeFile(
//             "./Develop/db/db.json",
//             JSON.stringify(dataJson),
//             (err, text) => {
//                 if(err) {
//                     console.error(err);
//                     return;
//                 }
//                 console.log("Hello", text);
//             }
//         );
//         app.delete("/api/notes/:id", (req, res) =>{
//             let data = fs.readFileSync("./Develop/db/db.json", "utf-8");
//             const dataJson = JSON.parse(data);
//             const newNotes = data.JSON.filter((note) => {
//                 return note.id !== req.params.id;
//             });
//             fs.writeFile("./Develop/db/db.json", JSON.stringify(newNotes), (err, text) => {
//                 if(err) {
//                     console.error(err);
//                     return;
//                 }
//             });
//             res.json(newNotes);
//         });
//     });
// };