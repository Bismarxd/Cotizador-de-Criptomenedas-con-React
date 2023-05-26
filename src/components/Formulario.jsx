import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import useSelectMoneda from '../hooks/useSelectMoneda';
import { monedas } from '../data/monedas';
import Error from './Error';

const InputSubmit = styled.input`
  background-color: #dd910584;
  border: none;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    background-color: #ffd588;
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    border: 2px solid #fff;
  }
`;

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
   
    const [ moneda, SelectMoneda ] = useSelectMoneda('Elige tu Moneda', monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMoneda('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            });

            setCriptos(arrayCriptos);
        }
        consultarAPI();
      
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda, criptomoneda].includes('')) {
         
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 3000);
            return;
        }

        setError(false)
        setMonedas({
          moneda, criptomoneda
        })
    }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
    
      <form 
          onSubmit={handleSubmit}
      >

          <SelectMoneda/>
          <SelectCriptomoneda/>
          <InputSubmit
              type="submit" 
              value="Calcular"
          />
      </form>
    </>

    
  )
}

export default Formulario