import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div id="footer">
      
			<div>
				<ul className="navigation">
					<li className="active">
						<Link href="">Home</Link>
					</li>
					<li>
						<Link href="">About</Link>
					</li>
					<li>
						<Link href="">Rooms</Link>
					</li>
					<li>
						<Link href="">Dive Site</Link>
					</li>
					<li>
						<Link href="">Food</Link>
					</li>
					<li>
						<Link href="">News</Link>
					</li>
					<li>
						<Link href="">Contact</Link>
					</li>
				</ul>
				<div id="connect">
					<Link href="http://pinterest.com/fwtemplates/" target="_blank" className="pinterest"></Link>
					<Link href="http://freewebsitetemplates.com/go/facebook/" target="_blank" className="facebook"></Link> 
					<Link href="http://freewebsitetemplates.com/go/twitter/" target="_blank" className="twitter"></Link>
					<Link href="http://freewebsitetemplates.com/go/googleplus/" target="_blank" className="googleplus"></Link>
				</div>
			</div>
			<p>
				© 2023 by BHACCASYONIZTAS BEACH RESORT. All Rights Reserved
			</p>
		</div>
		
  )
}

export default Footer