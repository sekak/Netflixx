import { useRef, useState } from 'react'
import './login.scss'

const netflix = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"

function Login() {

	return (
		<div className='login'>
			<div className="top">
				<img className="logo" src={netflix} />
			</div>
			<div className='containe'>
			<form className='form'>
				<h1>Sign in</h1>
				<input type='email' placeholder='Email or Phone number' className='inp-email' />
				<input type='password' placeholder='Password' className='inp-pass' />
				<button className='butt-sign'>SIGN IN</button>
				<span>
					New to Netflix? <b>Sign up now.</b>
				</span>
				<small>
					This page is protected by Google reCAPTCHA to ensure you're not a
					bot. <b>Learn more</b>.
				</small>
			</form>
			</div>
		</div>
	)
}

export default Login
