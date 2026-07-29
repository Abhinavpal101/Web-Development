import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", async (req, res)=> {
    try{
    const result = await axios.get("https://api.coinpaprika.com/v1/tickers");
    const topcoin = (result.data.slice(0,10));
    res.render("index.ejs", {coins : topcoin});
    }
    
    catch (error) {
        res.status(500).send(error.message);
    };
});

app.post("/submit", async(req,res)=>{
    const usercoin = req.body.userQuery;
    const result = await axios.get(`https://api.coinpaprika.com/v1/tickers/${usercoin}`);
    res.send(result.data);
})

app.listen(port, ()=>{
    console.log(`Your server is running on ${port}`);
});