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


=> App.js
import './App.css';
import Dest from './Dest'

const user={
  name:'sri',
  city:'bhimavarm',
  state:'ap'
}
function App() {   
    return ( 
        <Dest details={user} />
    )
}
export default App
