import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart() {
	const data = [
		{ name: "January", Total: 1000 },
		{ name: "February", Total: 100 },
		{ name: "March", Total: 900 },
		{ name: "April", Total: 100 },
		{ name: "May", Total: 700 },
		{ name: "June", Total: 60 }

	];
	return (
		<div className='chart'>
			<h2 className="title">Last six month (Revently)</h2>
			<ResponsiveContainer width="100%" aspect={2 / 0.5}>
			<AreaChart width={730} height={250} data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" stroke='gray'/>
 				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
			</AreaChart>
			</ResponsiveContainer>

		</div>
	)
}

export default Chart
