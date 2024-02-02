import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



function Navbar() {
  return (
	<body>
    <div>
		<div id="page">
			<div id="header">
				<div id="logo">
					<a href="index.html"><Image src="/assets/images/logo.png" alt="LOGO" height="112" width="118"/></a>
				</div>
				<div id="navigation">
					<ul>
						<li className="selected">
							{/* <a href="index.html">Home</a> */}
							<Link href="/home">HOME</Link>
						</li>
						<li>
							{/* <a href="about.html">About</a> */}
							<Link href="/about">About</Link>
						</li>
						<li>
							<a href="rooms.html">Rooms</a>
						</li>
						<li>
							<a href="dives.html">Dive Site</a>
						</li>
						<li>
							<a href="foods.html">Food</a>
						</li>
						<li>
							<a href="news.html">News</a>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>
				</div>
			</div>
            </div>
            </div>
			</body>
			
  )
}

export default Navbar;