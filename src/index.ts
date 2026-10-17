import express from "express";
import type {Empresa} from "./models/Empresa.js" 

const app = express()
app.use(
     express.json()
)
const PORT = 3000;

const empresas: Empresa[] = [ 
    {
        nome: "Lumi",
        documento: "123456789",
        ativa: true
    }

]


app.get("/empresas", (req, res) => {
    res.json(empresas)
});


app.get("/", (req, res) => {
    res.send("O Lumi API iniciou")

});

app.listen(
    PORT,
    () => {
        console.log("O servidor iniciou!")
    }

)

