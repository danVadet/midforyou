
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT

const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "*"
}))

app.get('/produtos', async (request, response) =>{
    const products = await prisma.product.findMany();
   
   return response.json(products);
});


app.post('/produto', async (request, response) =>{

    const newProduct = request.body;

    const product = await prisma.product.create({
        data: {
            nome: newProduct.nome,
            peso: newProduct.peso,
            volume: newProduct.volume

        }
    })
   
   return response.send("Produto criado com sucesso")
});

app.delete('/produtos/:id', async (request, response) => {

    const productId  = request.params.id;

    await prisma.product.delete({
        where: {
            id: parseInt(productId),
        }
    })
    return response.send("Produto excluído com sucesso")
});


app.listen(port, () => {
    console.log(`Server on port ${port}`);
});