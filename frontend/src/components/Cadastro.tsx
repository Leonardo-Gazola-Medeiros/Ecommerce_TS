import React, { useState } from 'react';
import axios from 'axios';

const Cadastro: React.FC = () => {
    const [formData, setFormData] = useState({
        id: '',
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
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/cadastro', formData);
            alert('Item cadastrado com sucesso!');
            setFormData({
                id: '',
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
        } catch (error) {
            alert('Erro ao cadastrar item');
        }
    };

    return (
        <div>
            <h1>Cadastro de Itens</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID do item:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="nome">Nome do item:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="foto">Foto Ilustrativa do item:</label>
                <input
                    type="text"
                    id="foto"
                    name="foto"
                    value={formData.foto}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="descricao">Descrição do Item:</label>
                <textarea
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="valorCompra">Valor de compra:</label>
                <input
                    type="number"
                    id="valorCompra"
                    name="valorCompra"
                    value={formData.valorCompra}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="valorVenda">Valor de Venda:</label>
                <input
                    type="number"
                    id="valorVenda"
                    name="valorVenda"
                    value={formData.valorVenda}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="quantidade">Quantidade em Estoque:</label>
                <input
                    type="number"
                    id="quantidade"
                    name="quantidade"
                    value={formData.quantidade}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="estoqueMinimo">Estoque Mínimo:</label>
                <input
                    type="number"
                    id="estoqueMinimo"
                    name="estoqueMinimo"
                    value={formData.estoqueMinimo}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="categoria">Categoria:</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="Porção">Porção</option>
                    <option value="Bebida">Bebida</option>
                    <option value="Combo">Combo</option>
                    <option value="Diversos">Diversos</option>
                </select>
                <br />
                <label htmlFor="localEstoque">Local do Estoque:</label>
                <input
                    type="text"
                    id="localEstoque"
                    name="localEstoque"
                    value={formData.localEstoque}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="informacoes">Informações em geral:</label>
                <textarea
                    id="informacoes"
                    name="informacoes"
                    value={formData.informacoes}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
