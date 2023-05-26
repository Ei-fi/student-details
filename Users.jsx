import axios from 'axios'
import { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Users = () => {
  let [content, setContent] = useState([])
  let [contentpages,setContentPages]=useState(2)
  let [currentPage,setCurrentPage]=useState(1)
  let [filterdata,setFilterData]=useState([])
  let [query,setQuery]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3000/user")
      .then((response) => {
        // console.log(response.data);
        setContent(response.data)
        setFilterData(response.data)
      })
      .catch(() => {
        console.log("data not found");
      })},[])

      const  numOfPages=Math.ceil(content.length/contentpages)
      const pages=[...Array(numOfPages+1).keys()].slice(1)
      
      const indexOfLast=currentPage*contentpages;
      const indexOfFirst=indexOfLast-contentpages;
      const visible=content.slice(indexOfFirst,indexOfLast)

      const handlesearch=(event1)=>{
        const getSearch=event1.target.value
        if(getSearch.length>0)
        {
          const searchData=content.filter((data)=>data.name.toLowerCase().includes(getSearch))
          setContent(searchData)
        }
        else{
          setContent(filterdata)
        }
        setQuery(getSearch)
      }

  return (
    <div id={style.usee}>
      Filter:  <input type="text" id="myinput"  value={query} onChange={(e)=>handlesearch(e)}/>
    <div id={style.use}>
      <select onChange={(e)=>setContentPages(e.target.value)}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
      {visible.map((x) => {
        return (
          <div >
            <table id="mytable">
              <tr >
                <th colspan="2">Student {x.id}</th>
              </tr>
              <tr><td>Name</td>
              <td>:{x.name}</td>
              </tr>
              <tr><td>Total marks</td>
              <td>:{x.tmarks}</td></tr>
             
            </table>
          </div>
        )
      })}
      
      <p>{pages.map(pages=>(<span key={pages} onClick={()=>{setCurrentPage(pages)}}>{pages} | </span>))}</p>
      
    </div>
    </div>
    
  )
}

export default Users