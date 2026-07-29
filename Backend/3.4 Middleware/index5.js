import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit", (req, res)=> {
    console.log(req.body);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
})