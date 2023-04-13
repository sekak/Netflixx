import './list.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem';
import { useRef } from 'react';
import { useState } from 'react';
const List = ({list}) => {
	const useref = useRef(null);
	const [count,setCount] = useState(1);
	const [Show,setShow] = useState(false);
	 
	const handleClick = (type) =>
	{
		if(count === 1)
			setShow(false)
		else	
			setShow(true)
		if(type === "right" && count < 5)
		{
			setCount(count + 1);
   			useref.current.style.transform = `translateX(${-230 * count}px)`
			// console.log(  count + 1)
		}
		  if(type === "left" && count >  1)
		{
			setCount(count - 1);
 			useref.current.style.transform = `translateX(${(-230 * count) + 460}px)`
  		}
	}
  return (
	<div className='list'>
	  <span className='title'>{list.title}</span>
	  <div className="wrapper">
		<ArrowBackIosNewOutlinedIcon  onClick={()=>handleClick("left")} style={Show ? {fontSize:'70px',width:'50px',height:'140px'} : {display:"none"} } className='arrowleft'/>
		<div className="container" ref={useref}>
			 {list.content.map((item,i)=>(
				<ListItem index={i} item={item}/>
			 ))}
		</div>
		<ArrowForwardIosOutlinedIcon onClick={()=>handleClick("right")}  style={{fontSize:'70px',width:'50px',height:'141px'}} className='arrowright'/>
	  </div>
	</div>
  )
}

export default List
