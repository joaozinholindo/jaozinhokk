// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para processar o agendamento
app.post('/agendar', (req, res) => {
    const { nome, email, data, hora } = req.body;
    console.log(`Agendamento recebido: Nome: ${nome}, Email: ${email}, Data: ${data}, Hora: ${hora}`);
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
