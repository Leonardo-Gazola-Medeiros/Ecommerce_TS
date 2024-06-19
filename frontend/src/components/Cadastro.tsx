import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Cadastro.css';
import Navbar from './Navbar';

const CadastroItens: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        foto: '',
        descricao: '',
        valorCompra: 0,
        valorVenda: 0,
        quantidade: 0,
        estoqueMinimo: 0,
        categoria: 'Porção',
        localEstoque: '',
        informacoes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Envie os dados para o backend
        try {
            const response = await fetch('http://localhost:3000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert('Erro ao cadastrar item');
        }
    };

    return (
        <div>
        <Navbar />
        <div className="cadastro-container">
            <h1>Cadastro de Itens</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foto">Foto:</label>
                    <input type="text" id="foto" name="foto" value={formData.foto} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="valorCompra">Valor:</label>
                    <input type="number" id="valorCompra" name="valorCompra" value={formData.valorCompra} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="valorVenda">Valor de Venda:</label>
                    <input type="number" id="valorVenda" name="valorVenda" value={formData.valorVenda} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidade">Estoque:</label>
                    <input type="number" id="quantidade" name="quantidade" value={formData.quantidade} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="estoqueMinimo">Estoque Mínimo:</label>
                    <input type="number" id="estoqueMinimo" name="estoqueMinimo" value={formData.estoqueMinimo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="categoria">Categoria:</label>
                    <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
                        <option value="Porção">Porção</option>
                        <option value="Unidade">Unidade</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="localEstoque">Local do Estoque:</label>
                    <input type="text" id="localEstoque" name="localEstoque" value={formData.localEstoque} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="informacoes">Informações:</label>
                    <textarea id="informacoes" name="informacoes" value={formData.informacoes} onChange={handleChange} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
};

export default CadastroItens;
