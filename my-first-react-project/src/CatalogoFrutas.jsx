import React from 'react';
import './Fruta.css'

function CatalogoFrutas({fruta}) {
    return (
        <div className="catalogoFrutas">
            <div className="fruta-card">
                <div className="fruta-emoji">{fruta.emoji}</div>
                <h2 className="fruta-nombre">{fruta.nombre}</h2>
                <div className="fruta-info">
                    <p><strong>Color:</strong> {fruta.color}</p>
                    <p><strong>Origen:</strong> {fruta.origen}</p>
                    <p><strong>Vitamina:</strong> {fruta.vitamina}</p>
                </div>
                <button className="boton-detalle">Ver más</button>
            </div>
        </div>
    );
}

export default CatalogoFrutas;