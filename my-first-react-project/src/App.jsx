import './App.css'
import CatalogoFrutas from "./CatalogoFrutas.jsx";
import {useState} from "react";

function App() {
    const frutas = [
        { emoji:"🍎", nombre:"Manzana", origen:"chile",vitamina:"C", color:"Rojo", id:1 },
        { emoji:"🥝", nombre:"Kiwi", origen:"chile",vitamina:"C", color:"Rojo", id:2 },
        { emoji:"🫐", nombre:"Arándanos", origen:"chile",vitamina:"C", color:"Rojo", id:3 },
        { emoji:"🍌", nombre:"Plátanos", origen:"chile",vitamina:"C", color:"Rojo", id:4 },
        { emoji:"🍊", nombre:"Mandarina", origen:"chile",vitamina:"C", color:"Rojo", id:5 }
    ]

    const [numero, setNumero] = useState(0);

    const siguiente = () => {
        if (numero === frutas.length-1) {
            setNumero(0)
        } else {
            setNumero(numero + 1);
        }
    }
    const anterior = () => {
        if (numero === 0) {
            setNumero(frutas.length-1)
        } else {
            setNumero(numero - 1);
        }
    }

    return (
        <div className="App">
            <CatalogoFrutas fruta={frutas[numero]}/>
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Siguiente</button>
        </div>
    )
}

export default App
