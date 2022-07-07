import React from 'react'

const Resultado = ({resultado}) => {
    const{PRICE,HIGHDAY,LOWDAY, IMAGEURL} = resultado
 
    return (
    <div className="text-center">
        
        <p>El Precio es de <span>{PRICE}</span></p>
         <p>El precio más alto del día: <span>{HIGHDAY}</span></p>   
         <p>El precio más bajo del día: <span>{LOWDAY}</span></p>   
  </div>)
}

export default Resultado