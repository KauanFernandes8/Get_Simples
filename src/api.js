const express = require('express'); /*Importações do Express*/
const app = express(); /*Instanciação da Aplicação*/


app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à Minha API!' }); /*Rota GET raiz do projeto*/
  });



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});