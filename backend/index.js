const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilitar CORS para todas as origens
app.use(cors());

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    connection.query('SELECT * FROM users WHERE usuario = ? AND senha = ?', [usuario, senha], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Erro no servidor');
            return;
        }
        if (results.length > 0) {
            res.send({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).send({ message: 'Usuário ou senha incorretos' });
        }
    });
});

// Endpoint para criar um usuário (para fins de teste)
app.post('/register', (req, res) => {
    const { usuario, senha } = req.body;
    connection.query('INSERT INTO users (usuario, senha) VALUES (?, ?)', [usuario, senha], (err, results) => {
        if (err) {
            console.error('Error inserting into the database:', err);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.send({ message: 'Usuário registrado com sucesso!' });
    });
});

app.get('/items', (req, res) => {
    connection.query('SELECT * FROM items', (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.send(results);
    });
});

app.post('/items', (req, res) => {
    const {
        nome, foto, descricao, valorCompra, valorVenda,
        quantidade, estoqueMinimo, categoria, localEstoque, informacoes
    } = req.body;
    connection.query('INSERT INTO items (nome, foto, descricao, valor_compra, valor_venda, quantidade, estoque_minimo, categoria, local_estoque, informacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, foto, descricao, valorCompra, valorVenda, quantidade, estoqueMinimo, categoria, localEstoque, informacoes],
        (err, results) => {
            if (err) {
                console.error('Error inserting into the database:', err);
                res.status(500).send('Erro no servidor');
                return;
            }
            res.send({ message: 'Item cadastrado com sucesso!' });
        }
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
