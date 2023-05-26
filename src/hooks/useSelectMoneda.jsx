import { useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  color: #000;
  background-color: #ffffffc8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  option {
    font-size: 1.5rem;
    background-color: #ffffff8b;
    color: #000;
  }
`;

const useSelectMoneda = (label, opciones) => {

    const [state, setState] = useState('')
  
    const SelectMoneda = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange= {e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    );

    return [state, SelectMoneda];
};

export default useSelectMoneda;