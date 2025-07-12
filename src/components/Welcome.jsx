import React from "react";
//
//passing props in functinal arguments
function Welcome(props){
    return(
        <div>
            <h2>Welcome, {props.profession} from the functional components</h2>
            <p>Props , {props.name}is passing inside the functional argument</p>
        </div>
    )
}
export default Welcome;