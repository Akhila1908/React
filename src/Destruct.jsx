 import React from 'react'

 const Destruct = (props) => {
    
        const {model ,year,dealer,color} =props.car
return(
    <section>
    <div>{model}</div>
    <div>{year}</div>
    <div>{dealer}</div>
    <div>{color}</div>
    </section>
    )
 }
 export default Destruct