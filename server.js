const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.status(200).send("<h1>Node JS MySql App</h1>");
});

app.post("/submit", (req, res) => {
    console.log("Dados recebidos:", req.body);
    res.status(200).send("Dados recebidos com successo!") 
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server Running"); 
}); 

