import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MiddlePage() {
  return(
	
    
    <div id="contents">
				<div id="adbox">
					<Image width={852} height={450} src="/assets/images/sea-sound.jpg" alt="Img"/>
					<h1>Enjoy the Summer with Us!</h1>
					<p>
						This website template has been designd by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forum</a>.
					</p>
				</div>
				<div id="main">
					<div className="box">
						<div>
							<div>
								<h3>Latest Blog</h3>
								<ul>
									<li>
										<h4><Link href="news.html">2023 Bikini Contest Winners</Link></h4>
										<span>April 02, 2023</span>
										<p>
											Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet...
										</p>
									</li>
									<li>
										<h4><Link href="news.html">Top 10 Diving Spots</Link></h4>
										<span>May 29, 2023</span>
										<p>
											Maecenas scelerisque odio quis arcu fringilla malesuada. Nulla facilisi. In libero nulla, fermentum ut pretium ac, pharetra et eros...
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="testimonials" className="box">
						<div>
							<div>
								<h3>Testimonials</h3>
								<p>
									“In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis. Aenean quis elit mauris, nec vestibulum lorem.” <span>- <a href="index.html">Juan De La Cruz</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="sidebar">
					<div className="section">
						<Link href="rooms.html"><Image width={285} height={150} src="/assets/images/rooms.png" alt="Img"/></Link>
					</div>
					<div className="section">
						<Link href="dives.html"><Image width={285} height={150} src="/assets/images/dive-site.png" alt="Img"/></Link>
					</div>
					<div className="section">
						<Link href="foods.html"><Image width={285} height={150} src="/assets/images/food.png" alt="Img"/></Link>
					</div>
				</div>
			</div>
			
      
  )
}

export default MiddlePage