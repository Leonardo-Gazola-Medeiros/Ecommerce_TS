const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const ITEMS_FILE = './items.json';

// Função para ler os items do arquivo JSON
const readItems = () => {
    if (!fs.existsSync(ITEMS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(ITEMS_FILE);
    return JSON.parse(data);
};

// Função para salvar os items no arquivo JSON
const writeItems = (items) => {
    fs.writeFileSync(ITEMS_FILE, JSON.stringify(items, null, 2));
};

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    // Simples verificação de login (apenas para fins de exemplo)
    if (usuario === 'admin' && senha === 'admin') {
        res.status(200).send({ message: 'Login bem-sucedido' });
    } else {
        res.status(401).send({ message: 'Usuário ou senha incorretos' });
    }
});

app.post('/cadastro', (req, res) => {
    const newItem = req.body;
    const items = readItems();
    items.push(newItem);
    writeItems(items);
    res.status(201).send(newItem);
});

app.get('/items', (req, res) => {
    const items = readItems();
    res.status(200).send(items);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});