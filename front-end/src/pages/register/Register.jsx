import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './register.scss'

const netflix = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"

function Register() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const emailRef = useRef()
	const passwordRef = useRef()

	const storeEmail = () => {
		setEmail(emailRef.current.value);
		console.log(email);
	}
	const storePassword = () => {
		setEmail(passwordRef.current.value);
		console.log(password);
	}

	const handleKeyPress = (event) => {
		if(event.key === 'Enter'){
		 storeEmail();
		}
	  }
	return (
		<div className='register'>
			<div className="top">
				<img className="logo" src={netflix} />
				<button className="signin">SIGN IN</button>
			</div>
			<div className="containe">
				<h1 className='title_h1'>Unlimited movies, TV shows, and more.</h1>
				<h2 className='title_h2'>Watch anywhere. Cancel anytime.</h2>
				<p className='title_p3'>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{
					!email ? (
						<div className='input-search'>
							<input className='email' type='email' placeholder='email address' ref ={emailRef} onKeyPress={(event)=>handleKeyPress(event)}  />
							<button className='button' onClick={storeEmail}   >Get Started</button>
						</div>
					) :
						(
							<form className='input-search'>
								<input className='password' type='password' placeholder='Password' ref ={passwordRef}/>
								<Link to='/login'><button className='button' onKeyPress={(event)=>handleKeyPress(event)} onClick={storePassword} >Start </button></Link>
							</form>
						)
				}

			</div>
		</div>
	)
}

export default Register
