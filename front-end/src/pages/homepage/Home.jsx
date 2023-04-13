 import { useEffect, useState } from 'react'
import Feature from '../../component/Featured/Feature'
import List from '../../component/List/List'
import Navbar from '../../component/Navbar/Navbar'
import './home.css'
import axios from "axios"

const Home = ({type}) => {
	const [lists,setList] = useState([])
	const [genre,setGenre] = useState(null)

  useEffect(()=>{
	const getList = async () =>{
		try{	
			const res = await axios.get(`http://localhost:8080/api/list${type ? "?type=" + type : ""}${genre ? "&genre=" : ""}`
			,{headers:{
				token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjgzYjgyM2Y4MjU4MDM0MDU1Yzk5NiIsImFkbWluIjp0cnVlLCJpYXQiOjE2ODA4NzU0MDUsImV4cCI6MTY4MTMwNzQwNX0.hxcb1QCR1mxeuF2FydRF7cR6AiEfsQ7Z4ZYD1oz9iYY"
			}}
			)
			console.log(res.data)
			setList(res.data);
		}catch(err) 
		{
			console.log("hhad",err)
		}
	} 
	getList();
  },[type,genre])

  return (
	<div className='home'>
	  <Navbar/>
	  <Feature type= {type}/>
	  {lists.map((list)=>(
		<List key={list._id} list={list}/>
	  ))}
 	</div>
  )
}

export default Home
