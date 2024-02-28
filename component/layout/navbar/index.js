import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



function Navbar() {
  return (
	
    <div>
		<div id="page">
			<div id="header">
				<div id="logo">
					<a href="index.html"><Image src="/assets/images/logo.png" alt="LOGO" height="112" width="118"/></a>
				</div>
				<div className='auth'>
				    <div id='auth'>
				        <Link className='ash' href="/login">LOGIN</Link>
				        <Link className='ashwin' href="/signup">SIGNUP</Link>
                    </div>
				</div>

				<div id="navigation">
					<ul>
						<li>
							{/* <a href="index.html">Home</a> */}
							<Link href="/home">HOME</Link>
						</li>
						<li>
							{/* <a href="about.html">About</a> */}
							<Link href="/about">About</Link>
						</li>
						<li>
							{/* <a href="rooms.html">Rooms</a> */}
							<Link href="/rooms">ROOMS</Link>
						</li>
						<li>
							{/* <a href="dives.html">Dive Site</a> */}
							<Link href="/divesite">DIVE SITE</Link>
						</li>
						<li>
							{/* <a href="foods.html">Food</a> */}
							<Link href="/food">FOOD</Link>
						</li>
						<li>
							{/* <a href="news.html">News</a> */}
							<Link href="/news">NEWS</Link>
						</li>
						<li>
							{/* <a href="contact.html">Contact</a> */}
							<Link href="/contact">CONTACT</Link>
						</li>
						
					</ul>
				</div>
			</div>
            </div>
            </div>
			
			
			
  )
}

export default Navbar;