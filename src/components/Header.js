import { useState } from "react";

const Header = () =>{
	const [user, setUser] = useState("Login");

 const handleLogin = ()=>{
	setUser(user === "Login"  ? "Logout" : "Login")
 }

  return (
		<div className='header-container'>
			<div className='nav-logo'>
				<img
					src='https://i.pinimg.com/564x/da/8a/9f/da8a9f985210a4f3d7ef8e27e05d978b.jpg'
					alt=''
					className='nav-logo'
				/>
			</div>

			<div className='nav-links'>
				<ul className='nav-items'>
					<li>Home</li>
					<li>Food</li>
					<li>Blog</li>
					<li>About Us</li>
				</ul>
			</div>

			<div className='nav-cart'>
				<i className='fa-solid fa-cart-shopping'></i>
				<i className='fa-solid fa-user'></i>
				<button 
				onClick={handleLogin}
				className="log-btn">
					{user}{' '}
					{
						user === "Login" ? <span >

						<i className='fa-solid fa-circle'></i>
					</span> : "  "
					}
				</button>
			</div>
		</div>
	);
}

export default Header;