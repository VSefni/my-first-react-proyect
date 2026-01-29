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
            setNumero(numero + 1);
    }

    const anterior = () => {
            setNumero(numero - 1);
    }

    return (
        <div className="App">
            <CatalogoFrutas fruta={frutas[numero]}/>
            <div className="botones">
                <button onClick={anterior} className="boton" id="btnprev" disabled={numero === 0}>Anterior</button>
                <button onClick={siguiente} className="boton" id="btnsig" disabled={numero === frutas.length - 1}>Siguiente</button>
            </div>
        </div>
    )
}

export default App
