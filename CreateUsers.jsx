import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
  let [name,setName]=useState("")
  let [tmarks,setTmarks]=useState("")
  let navigate=useNavigate()
  let nameData=(e)=>{
    setName(e.target.value)
  }
  let tmarksData=(e)=>{
    setTmarks(e.target.value)
  }
  
  let formhandle=()=>{
    let payload ={name,tmarks}
    axios.post("http://localhost:3000/user",payload)
    .then(()=>{
      console.log("data has upload");
    }).catch(()=>{console.log("something went wrong");})
    navigate("/users")
  }

  return (
    <div id={style.form}>
        <article>
        <label htmlFor="">Name:</label>
        <input type="text" value={name} onChange={nameData} />
        
        <label htmlFor="">Total Marks:</label>
        <input type="text" value={tmarks} onChange={tmarksData}/>
        <button onClick={formhandle}>Submit</button>
        </article>
    </div>
  )
}

export default CreateUsers