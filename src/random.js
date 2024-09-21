import { useState } from "react";

function RandomNumber(){

var[random,setrandom]= useState(0)

function randomnum(){
    setrandom(Math.floor(Math.random()*10)+1)
}

return(
    <div id="outerbox">
        <h1>Generated Random Number ={random}</h1>
        <button id="button"onClick={randomnum}>RandomNumber</button>
    </div>
)
}

export default RandomNumber