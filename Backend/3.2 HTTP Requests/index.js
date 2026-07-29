import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me</h1><p> Mobile Number: +91 9876543210</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p> I am Abhinav Pal. I am a Web Developer.</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});