import React from 'react';
import '../Fruta.css'

function CatalogoFrutas({fruta}) {
    return (
        <div className="catalogoFrutas">
            <div className="fruta-card">
                <div className="fruta-emoji">{fruta.emoji}</div>
                <h2 className="fruta-nombre">{fruta.id}. {fruta.nombre}</h2>
                <div className="fruta-info">
                    <p><strong>Color:</strong> {fruta.color}</p>
                    <p><strong>Origen:</strong> {fruta.origen}</p>
                    <p><strong>Vitamina:</strong> {fruta.vitamina}</p>
                </div>
                <button className="boton-detalle" onClick={()=>{
                    window.open(
                        "https://es.wikipedia.org/wiki/" + fruta.nombre,
                        "_blank",
                        "noopener,noreferrer"
                    )
                }}>Ver más</button>
            </div>
        </div>
    );
}

export default CatalogoFrutas;