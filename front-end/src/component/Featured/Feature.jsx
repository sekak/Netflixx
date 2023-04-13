
import './feature.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Feature({ type }) {
	return (
		<div className='feature'>
			{type && (
				<div className="category">
					<span>{type === "movies" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img src="https://c4.wallpaperflare.com/wallpaper/462/921/235/stranger-things-netflix-series-5k-wallpaper-preview.jpg" alt="df" className="img-feature" />
			<div className="info">
				<img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="fd" className="imgwithin" />
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
					adipisci repellendus eum quasi illo, velit numquam, maxime tempora
					sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
					temporibus eum earum?
				</span>
				<div className="buttons">
					<div className="play">
						<PlayArrowIcon />
						<span> Play</span>
					</div>
					<div className="more">
						<InfoOutlinedIcon />
						<span> Info</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feature
