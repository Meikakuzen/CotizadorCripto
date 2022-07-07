import {useState} from 'react'
import styled from '@emotion/styled'



const Label = styled.label`
    font: bold;
    color: red;
    font-size: 36px;
    padding-right: 100px
    display: block;
    font-family: Helvetica;
    margin: 15px
`
const Select = styled.select`
    padding: 14px;
    font-size: 18px;
`


const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

  
  const SelectMonedas = ()=>(
    <>
        <Label>{label}</Label>
        <Select
        value={state}
        onChange={(e)=>setState(e.target.value)}>
            <option value="">Seleccione</option>

            {opciones.map(opcion=>(
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}

        </Select>

    </>
    
  )
  
  return [state,SelectMonedas]
  
}

export default useSelectMonedas