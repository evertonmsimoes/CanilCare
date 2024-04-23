import React, { useState } from 'react';
import './CanilCare.css'; 
import { chamarAPI } from './ChamadaApi'; 

function CanilCare() {
    const [melhorPetshop, setMelhorPetshop] = useState('');
    const [precoTotal, setPrecoTotal] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = document.getElementById('data').value;
        const qtdPequenos = document.getElementById('caes_pequenos').value;
        const qtdGrandes = document.getElementById('caes_grandes').value;

        const partesData = data.split('-');
        const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;;

        try {
            const dataAPI = await chamarAPI(dataFormatada, qtdPequenos, qtdGrandes);
            setMelhorPetshop(dataAPI.melhor_petshop);
            setPrecoTotal(dataAPI.preco_total);
            setErro('');
        } catch (error) {
            setErro('Erro ao obter os dados do servidor. Por favor, tente novamente mais tarde.');
        }
    };


    return (
        <div>
            <div className="header">
                <img src="./src/img/Logo.jpg"  alt="Descrição da Imagem"/>
                <h1>Escolha do Petshop</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" name="data" required />
                    <label htmlFor="caes_grandes">Número de Cães Grandes:</label>
                    <input type="number" id="caes_grandes" name="caes_grandes" min="0" required />
                    <label htmlFor="caes_pequenos">Número de Cães Pequenos:</label>
                    <input type="number" id="caes_pequenos" name="caes_pequenos" min="0" required />
                    <input type="submit" value="Escolher Melhor Petshop" />
                </form>
                {erro && <p>{erro}</p>}
                {melhorPetshop && precoTotal !== null &&
                    <div>
                        <p>Melhor Petshop: {melhorPetshop}</p>
                        <p>Preço Total: R$ {precoTotal.toFixed(2)} Reais.</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default CanilCare;

