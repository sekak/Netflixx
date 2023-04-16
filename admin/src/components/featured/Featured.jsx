import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Featured() {
  return (
	<div className='featured'>
	  <div className="top">
		<h1 className="title">Total Revenue</h1>
		<MoreVertIcon fontSize='small'/>
	  </div>
	  <div className="bottom">
			<div className="featuredChat">
				<CircularProgressbar value={66}  text={"70%"}/>
			</div>
			<p className="title">Total sales made today</p>
       	 	<p className="amount">$420</p>
        	<p className="desc">
       		   Previous transactions processing. Last payments may not be included.
        </p>

		<div className="summary">
			<div className="items">
				<div className="itemtitle">
					Target
				</div>
				<div className="percentage positive" >
					<KeyboardArrowUpIcon/>
					$2.21k
				</div>
			</div>
			<div className="items">
				<div className="itemtitle">
					Target
				</div>
				<div className="percentage positive" >
					<KeyboardArrowUpIcon/>
					$1.24k
				</div>
			</div>
			<div className="items">
				<div className="itemtitle">
					Target
				</div>
				<div className="percentage negative" >
					<KeyboardArrowDownIcon/>
					$0.3k
				</div>
			</div>
		</div>
	  </div>
	</div>
  )
}

export default Featured
