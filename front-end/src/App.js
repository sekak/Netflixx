import './App.css';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';


function App() {
	const user = true;
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={user ? <Home /> : <Register />} />
					<Route path="/login" element={!user ? <Login /> : <Home />} />
					<Route path="/register" element={!user ? <Register /> : <Home />} />
					{
						user &&
						(
							<> <Route path="/movies" element={<Home type="movies" />} />
								<Route path="/series" element={<Home type="series" />} />
								<Route path="/watch" element={<Watch />} />
							</>)}
				</Routes>
			</Router>
		</div>
	);
}

 
 

export default App;
