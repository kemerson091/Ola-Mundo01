const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à rota principal!');
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
  res.send('Esta é a rota /sobre do servidor Node.js.');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});