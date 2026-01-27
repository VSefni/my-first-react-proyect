import './App.css'
import CatalogoFrutas from "./Components/CatalogoFrutas.jsx";
import {useState} from "react";

function App() {
    const frutas = [
        { emoji:"🍎", nombre:"Manzana", origen:"Chile",vitamina:"C", color:"Rojo", id:1 },
        { emoji:"🥝", nombre:"Kiwi", origen:"Nueva Zelanda",vitamina:"C", color:"Verde", id:2 },
        { emoji:"🫐", nombre:"Arándanos", origen:"España",vitamina:"K", color:"Azul", id:3 },
        { emoji:"🍌", nombre:"Plátanos", origen:"Malasia",vitamina:"B6", color:"Amarillo", id:4 },
        { emoji:"🍊", nombre:"Mandarina", origen:"China",vitamina:"C", color:"Naranja", id:5 }
    ];

    const [numero, setNumero] = useState(0);

    const siguiente = () => {
        const btnsig = document.getElementById("btnsig");
        numero === frutas.length-1 ? btnsig.disabled = true : setNumero(numero + 1);
    }

    const anterior = () => {
        const btnprev = document.getElementById("btnprev");
        numero === 0 ? btnprev.disabled = true : setNumero(numero - 1);
    }

    return (
        <div className="App">
            <CatalogoFrutas fruta={frutas[numero]}/>
            <div className="botones">
                <button onClick={anterior} className="boton" id="prev">Anterior</button>
                <button onClick={siguiente} className="boton" id="sig">Siguiente</button>
            </div>
        </div>
    )
}

export default App
