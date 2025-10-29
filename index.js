const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                background-color: rgb(50, 173, 173);
                width:100%;
                height:100%;
            }
        </style>
    </head>
    <body>
        <p>Adicionei um paragrafo!</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
<<<<<<< HEAD
});
=======
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
>>>>>>> ac35e6b5ed7267b021f8f50be584a632dadef6b3
