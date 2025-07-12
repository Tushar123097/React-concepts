import { useState } from 'react'
import Welcome from './components/Welcome'
import Second from './components/second'
import ProfileCard from './components/ProfileCard'
import profiles from './components/data'
import UseState from './components/Usestate'
import Useeffect from './components/Useeffect'
import './App.css'

function App() {

  //creating variable inside the JSX code!!
  // we can declear more than one JSX variable inside the JSX
  const name = "this is first JSX variable code!"
  const tryandcatch = "this is second JSX var code!"

  // Rendering multiple profile card!
  //this is coming from data.jsx files for better understanding
  // const profiles = [
  //   {
  //     name : "Ader",
  //     image : "https://randomuser.me/api/portraits/men/32.jpg",
  //     bio : "Just a fresher with lots of skills with full stack and Android Dev"

  //   },
  //   {
  //        name : "Mychel",
  //        image : "https://randomuser.me/api/portraits/men/32.jpg",
  //        bio : "He is Addicated to Problem solving like Data Struvture and Algorithm"
  //   },
  //   {
  //     name : "Devine Johnsons",
  //     image : "https://randomuser.me/api/portraits/men/32.jpg",
  //     bio : "Well know for Mobile App creatiion and scalable website thats deal with lots of user"

  //   },
  // ];
  return (
      <div>
       <h1>Return it same as, {name}</h1>
       <p>Just clear all, {tryandcatch} of the errror!</p>
       {/* This is functional components  */}
       {/* it must start with Capital letter */}
       <Welcome name = "Dr.Strange!" profession = "save the earth!"/>
       {/* name is a prps */}
       {/* second render from react component */}
       <Second/>

       {/* Props is a argument functional components */}

  {/* This is for single profile now i am going to create for multiple profile card using array dont confuse it is for single profile */}
  <div className='flex gap-4 justify-center flex-wrap mt-6'>
  {profiles.map((profiles, idx) =>(
       <ProfileCard
        // name = "Adver"
        // image = "https://randomuser.me/api/portraits/men/32.jpg"
        // bio = "Engineering in Information Technology hobby Problem solving by unsing language JAVA Platform Leetcode Coding Ninja and codeforces etc"
         
        key = {idx}
        name = {profiles.name}
        image = {profiles.image}
        bio = {profiles.bio}
       />
       ))}
      </div>
      <UseState/>
      <Useeffect/>
      
    </div>
      
  )
}

export default App
