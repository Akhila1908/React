// Nested components
// JSX: Java script XML
// we write the HTML code in JS is known as JSX for React
// In every function should be the data should be wrritrn with in the HTML tags

import React from "react"
const Java=()=>{
    return(
        <h3>mangoes</h3>
    )
}

const Ak=()=>{
    return(
        <h2>AKKKKK</h2>
    ) 
} 

function Sample(){
    return(
        <div>This is the one  
        <Java />
        <Ak />
        </div>
    )
}

export default Sample;