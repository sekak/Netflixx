import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';
const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

function Watch() {
	const location = useLocation()
	console.log(location);
  return (
	<div className='watch'>
		<div className="top">
			<ArrowBackIcon/> HOME
		</div>
		<video autoPlay controls progress src={trailer} className = 'video'/>
	</div>
  )
}

export default Watch
