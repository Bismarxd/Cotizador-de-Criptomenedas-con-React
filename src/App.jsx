import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import criptoimg from './img/criptoimg.png'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`

const Imagen = styled.img`
  max-width: 40rem;
  width: 80%;
  margin: 10rem auto 0 auto;
  display: block;
  
`

const Heading = styled.h1`
  font-family: 'Alkatra', cursive;
  font-size: 3rem;
  color:#FFF;
  text-transform: uppercase;

  ::after{
    content: '';
    width: 50rem;
    height: 6px;
    background-color:  #FFD700;
    display: block;
    margin: 1rem auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        setTimeout(() => {
          setCargando(false)
        }, 1000);
        

      }
      cotizarCripto()
    }

    
    
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen
        src={criptoimg}
        alt="imagen cripto"
      />
      <div>
        <Heading>Obtén una cotización instantánea de criptomonedas</Heading>      
        <Formulario
          setMonedas = {setMonedas}
        />
        {cargando && <Spinner/>}
        {resultado.PRICE &&  <Resultado resultado={resultado} />}

      </div>
     

    </Contenedor>
    
  )
}

export default App
