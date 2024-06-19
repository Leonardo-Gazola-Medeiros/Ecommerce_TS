import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './css/Home.css';

interface Item {
    id: string;
    nome: string;
    foto: string;
    descricao: string;
    valor_venda: number | undefined;
    quantidade: number;
    categoria: string;
}

const Home: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/items');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    const filteredItems = items.filter(item =>
        item.nome.toLowerCase().includes(search.toLowerCase()) && item.quantidade > 0
    );

    return (
        <div className="home-container">
            <Navbar />
            <div className="content">
                <h1>Items Disponíveis</h1>
                <input
                    type="text"
                    placeholder="Buscar por nome do item..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="items-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="item-card">
                            <img src={item.foto} alt={item.nome} />
                            <h2>{item.nome}</h2>
                            <p>{item.descricao}</p>
                            <p className="price">
                                R$ {item.valor_venda}
                            </p>
                            <p>Categoria: {item.categoria}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
