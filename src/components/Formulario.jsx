
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../helper/CONTSANTES'
import { useEffect, useState} from 'react'
import Error from './Error'


const Formulario = ({setMonedas}) => {
 
    const [criptos, setCriptos] =useState([])
    const [error, setError] =useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu criptomoneda", criptos)
    
   
    useEffect(()=>{
        const consultarAPI = async() =>{
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
          
          const respuesta = await fetch(url)
         
          const resultado = await respuesta.json()
          
          const arrayCriptos = resultado.Data.map(cripto=>{
           
            const objeto = {
              id: cripto.CoinInfo.Name,
              nombre: cripto.CoinInfo.FullName
            }
            
            return objeto
          })
          setCriptos(arrayCriptos)
       
        }

        consultarAPI()
    },[])

    const handleSubmit = e =>{
      e.preventDefault()

      if([moneda, criptomoneda].includes("")){
        setError(true)
        
      }
       setError(false)
       setMonedas({
        moneda,
        criptomoneda
       })

    }

    return (

      <>
        {error && <Error />}
        <form onSubmit={handleSubmit} className= "flex items-center justify-center">
            <SelectMonedas />

            <SelectCriptomoneda />
            
            <input type="submit" value="COTIZAR" className="bg-red-700 font-bold text-white rounded p-3" />


        </form>
          
      </>
  )
}

export default Formulario