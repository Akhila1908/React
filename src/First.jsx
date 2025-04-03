//Props: 
// props are the properties ,that transfer the data from one component to another component
// that is from parent component to child component
//  the child component can only read the data ,and not allowed to modify
// For props we use the arrow functions


import React from 'react'
const Second=(props)=>{
    return(
         <h4>{props.name}</h4>
    )
}

const First=(props)=>{   // in this arrow function we can pass any name according to our convention
    return(
        <div>
       <h5>
       <Second name={props.name} />   {/* Pass the name prop to Second */}
        {props.place}</h5>
        </div>
    )
}
export default First