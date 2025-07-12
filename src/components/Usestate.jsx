import { useState } from "react";
//declear a state variable
function UseState() {
const [count, setCount] = useState(0);
//count is your state variable 
//setcount is a function to update value
//usestate(0) means the intial value is 0

return(
    <div className="flex flex-col items-center gap-2">
        <p className="text-lg">Count:{count}</p>
        <button
        className="bg-blue-500 text-white px-3 py-2 rounded"
        onClick={() => setCount(count + 1)}
        >
            Increase
            
        </button>
        <button 
        className="bg-blue-500 text-white px-3 py-2 rounded"
        onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>

        {/* for reset and set it to zero */}
        <button 
        className="bg-blue-500 text-white px-3 py-2 rounded"
        onClick={() => setCount(count = 0)}
        >

        </button>
    </div>

);
}
export default UseState;