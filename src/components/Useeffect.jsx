import React, { useState } from "react";
import { useEffect } from "react";
function Useeffect(){
const [count , setCount] = useState(0);

useEffect (() =>{
    console.log("count changed:", count)
}, [count]);
function Useeffect(){
    return(

     <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
     </div>
    );
}
}
export default Useeffect;