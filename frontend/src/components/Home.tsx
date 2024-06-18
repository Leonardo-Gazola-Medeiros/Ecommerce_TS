import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
    id: string;
    nome: string;
    foto: string;
    descricao: string;
    valorVenda: number;
    quantidade: number;
    categoria: string;
}

const Home: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('http://localhost:3000/items');
            setItems(response.data);
        };
        fetchItems();
    }, []);

    const filteredItems = items.filter(item =>
        item.nome.toLowerCase().includes(search.toLowerCase()) && item.quantidade > 0
    );

    return (
        <div>
            <h1>Items Disponíveis</h1>
            <input
                type="text"
                placeholder="Buscar por nome do item..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {filteredItems.map(item => (
                    <div key={item.id} className="item">
                        <h2>{item.nome}</h2>
                        <img src={item.foto} alt={item.nome} />
                        <p>{item.descricao}</p>
                        <p>R$ {item.valorVenda}</p>
                        <p>Categoria: {item.categoria}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
