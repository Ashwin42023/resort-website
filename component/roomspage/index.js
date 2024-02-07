import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RoomsPage() {
  return (
    <div id="contents">
				<div className="box">
					<div>
						<div className="body">
							<h1>Rooms</h1>
							<ul id="rooms">
								<li>
									<Link href="rooms.html"><Image height={250} width={300} src="/assets/images/first-class.jpg" alt="Img"/></Link>
									<h2><Link href="rooms.html">First className Room</Link></h2>
									<p>
										Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique. Pellentes que habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas idios.
									</p>
									<span className="rate">Rate: 220 / Day</span>
								</li>
								<li>
									<Link href="rooms.html"><Image height={250} width={300} src="/assets/images/deluxe.jpg" alt="Img"/></Link>
									<h2><Link href="rooms.html">Deluxe Room</Link></h2>
									<p>
										Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis.
									</p>
									<span className="rate">Rate: 150 / Day</span>
								</li>
								<li>
									<Link href="rooms.html"><Image height={250} width={300} src="/assets/images/suite.jpg" alt="Img"/></Link>
									<h2><a href="rooms.html">Suite Room</a></h2>
									<p>
										Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis.
									</p>
									<span className="rate">Rate: 180 / Day</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
  )
}

export default RoomsPage