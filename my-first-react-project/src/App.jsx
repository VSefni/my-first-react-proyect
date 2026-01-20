import './App.css'
import CatalogoFrutas from "./CatalogoFrutas.jsx";

function App() {
    const frutas = [
        { emoji:"🍎", nombre:"Manzana", origen:"chile",vitamina:"C", color:"Rojo", id:1 },
        { emoji:"🥝", nombre:"Kiwi", origen:"chile",vitamina:"C", color:"Rojo", id:2 },
        { emoji:"🫐", nombre:"Arándanos", origen:"chile",vitamina:"C", color:"Rojo", id:3 },
        { emoji:"🍌", nombre:"Plátanos", origen:"chile",vitamina:"C", color:"Rojo", id:4 },
        { emoji:"🍊", nombre:"Mandarina", origen:"chile",vitamina:"C", color:"Rojo", id:5 }
    ]
    return (
        <div className="App">
            <CatalogoFrutas fruta={frutas[0]}/>
            <CatalogoFrutas fruta={frutas[1]}/>
            <CatalogoFrutas fruta={frutas[2]}/>
            <CatalogoFrutas fruta={frutas[3]}/>
            <CatalogoFrutas fruta={frutas[4]}/>
        </div>
    )
}

export default App
