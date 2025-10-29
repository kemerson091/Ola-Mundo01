const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Inicial</title>
    </head>
    <body>
        <h1>Olá, Kemerson! Seu servidor Node.js está funcionando 🎉</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});






// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Rota 1: Página inicial
// app.get('/', (req, res) => {
//   res.statusCode=200;
//   res.writeHead()
//   res.send(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Document</title>
//       </head>
//       <body>
          
//       </body>
//       </html>
//     `);
// });

// // Rota 2: Sobre
// app.get('/sobre', (req, res) => {
//   res.send('Esta é a rota /sobre do servidor Node.js.');
// });

// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });