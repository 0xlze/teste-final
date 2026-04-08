import vulpix from './vulpix.webp'
import './App.css';
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <main>
          <div className='display'>
            {/* Correção 1: Adicionado o atributo alt */}
            <img src={vulpix} alt="Vulpix" /> 
            <h3>Name</h3>
            <h3>Type</h3>
            <button>More</button>
          </div>

          <div className='lista'>
            <div className='pokeSearch'>
              <input type="text"
                placeholder='Digite o Pokemon ou o Tipo...'
              />
            </div>
            <ul>
              <li>#037 Vulpix</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button>Veja mais</button>
          </div>
        </main>
      </div>
    </>
  );
}

// Correção 2: Removido o ponto final extra após 16px
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(30, 30, 30);
  font-family: 'Jockey One', sans-serif;
  font-size: 16px;
}

li {
  list-style: none;
}
`

export default App;
