import React, { useState } from 'react';
import Botao from '../Botao/Botao';
import CardItens from '../CardItens/CardItens';
import Titulo from '../Titulo/Titulo';
import './ContainerPrincipal.css';

function ContainerPrincipal() {
    const [showAvailable, setShowAvailable] = useState(false);

    const handleAllProductsClick = () => {
        setShowAvailable(false);
    };

    const handleAvailableNowClick = () => {
        setShowAvailable(true);
    };

    return (
        <div className='container'>
            <Titulo />
            <div className="botoes">
                <Botao titulobotao="All Products" ativo={!showAvailable} onClick={handleAllProductsClick} />
                <Botao titulobotao="Available Now" ativo={showAvailable} onClick={handleAvailableNowClick} />
            </div>
            <div className="cards">
                <CardItens showAvailable={showAvailable} />
            </div>
        </div>
    );
}

export default ContainerPrincipal;
