 import React from 'react'

 const Destruct = (props) => {
    
        const {model ,year,dealer,color} =props.details
return(
    <section>
    <div>{name}</div>
    <div>{city}</div>
    <div>{state}</div>
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
