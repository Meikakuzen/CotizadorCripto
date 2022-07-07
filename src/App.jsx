import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import {useState, useEffect} from 'react'
import Resultado from './components/Resultado'


const Contenedor = styled.div`
  max-width: 900px;
  margin:0 auto;
  width: 90%;

`

const Heading = styled.h1`
    color: red;
    font-family: Helvetica; 
`


function App() {
 
  const [monedas, setMonedas] =useState({})
  const [resultado, setResultado] = useState({})

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async() =>{
        
        const {moneda, criptomoneda} = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado= await respuesta.json()
        
        setResultado(resultado.DISPLAY[criptomoneda][moneda])//de forma dinamica va a ir entrando dentro del objeto tomando las llaves diferentes en cada consulta
        
      }
      cotizarCripto()
    }
    
  }, [monedas])
  

  return (
    <Contenedor>
      <Heading className="font-bold text-4xl text-center">Cotizador Criptomonedas</Heading>
      <Formulario 
      setMonedas={setMonedas}/>
  {resultado.PRICE && <Resultado resultado={resultado}/>}
    </Contenedor>
  )
}

export default App
