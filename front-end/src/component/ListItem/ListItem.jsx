
import { useEffect, useState } from 'react'
import './listitem.scss'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add'; import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


const ListItem = ({ item }) => {
	const [absolut, setAbsolut] = useState(false);
	console.log(item)
	const [movie, setMovie] = useState([])
	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get(`http://localhost:8080/api/movie/${item}`,
					{ headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjgzYjgyM2Y4MjU4MDM0MDU1Yzk5NiIsImFkbWluIjp0cnVlLCJpYXQiOjE2ODA4NzU0MDUsImV4cCI6MTY4MTMwNzQwNX0.hxcb1QCR1mxeuF2FydRF7cR6AiEfsQ7Z4ZYD1oz9iYY" } })
				setMovie(res.data);
				console.log(res.data); 
			} catch (err) {
				console.log(err)
			}
		}
		getMovie();
	}, [item])
	return (
		<Link to={{pathname:"/watch", movie: movie}} style={{textDecoration:"none"}}>
		<div className='listitem'
			style={{ zIndex: absolut && 999 }}
			onMouseEnter={() => setAbsolut(true)}
			onMouseLeave={() => setAbsolut(false)} >
			{absolut ?
				(
					<img
					src={movie.img}
					alt=""
				/>
				)
				:
				(
				<><img
					src={movie.img}
					alt=""
				/>
				<h2  >name</h2></>)
			}

			<div className="iteminfo">
				<div className="icons">
					<PlayArrowOutlinedIcon className='icon' />
					<AddIcon className='icon' />
					<ThumbUpOutlinedIcon className='icon' />
					<ThumbDownOutlinedIcon className='icon' />
 				</div>
					<div className="iteminfotop">
 						<span className="limit">+16{movie.limit} | {movie.duration}1h 23min | {movie.genre}</span>
						<span>{movie.year}</span>
					</div>
			</div>
		</div>
		</Link>
	)
}


export default ListItem
