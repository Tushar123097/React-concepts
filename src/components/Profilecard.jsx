import React from "react";
 
//add Tailwind for better animation 
//props taking data from App.jsx
function ProfileCard(props){
    return (
        <div className="max-w-xs mx-auto bg-red-400 rounded-lg shadow p-4 flex flex-col items-center">
         <h1 className="w-24 h-24 rounded-full mb-2 text-2xl">{props.name}</h1>
         <img
         src={props.image}
         />
         <h1 className="text-gray-600 text-center">{props.bio}</h1>
        </div>

    );
}
export default ProfileCard;