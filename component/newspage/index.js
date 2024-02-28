import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Newspage() {
  return (
    <div id="contents">
				<div className="box">
					<div>
						<div id="news" className="body">
							<div className="sidebar">
								<h3>Latest News</h3>
								<ul>
									<li>
										<Link href="news.html">2023 Bikini Contest Winners</Link>
									</li>
									<li>
										<Link href="news.html">Top 10 Diving Spots</Link>
									</li>
									<li>
										<Link href="news.html">Fishing ban to be implemented this year</Link>
									</li>
									<li>
										<Link href="news.html">Lifeguard saves child from drowning</Link>
									</li>
								</ul>
								<h3>Vaction Tips</h3>
								<ul>
									<li>
										<Link href="news.html">What to bring on the beach?</Link>
									</li>
									<li>
										<Link href="news.html">Planning Fun Activities</Link>
									</li>
									<li>
										<Link href="news.html">Diving Checklist</Link>
									</li>
									<li>
										<Link href="news.html">First Aid</Link>
									</li>
									<li>
										<Link href="news.html">How to Build a Sand Castle?</Link>
									</li>
									<li>
										<Link href="news.html">Tanning Tips</Link>
									</li>
								</ul>
							</div>
							<div>
								<h1>News</h1>
								<Image width={550} height={300} src="/assets/images/kayak.jpg" alt="Img"/>
								<h2>Experience Kayaking!</h2>
								<span className="time">April 03, 2023 by: Juan De La Cruz</span>
								<p>
									Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem, ullamcorper vitae laoreet id, rutrum et tortor. Vivamus luctus, lacus id egestas facilisis, nunc nunc ultricies lorem, vitae pulvinar nibh urna vel velit.
								</p>
								<p>
									Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nulla at nunc sit amet justo cursus imperdiet. Mauris est leo, placerat nec eleifend eu, facilisis id dolor. Donec nisi nibh, elementum vitae imperdiet non, placerat et felis. Maecenas scelerisque odio quis arcu fringilla malesuada. Nulla facilisi. In libero nulla, fermentum ut pretium ac, pharetra et eros.
								</p>
								<p>
									Phasellus viverra fringilla lacus, malesuada blandit velit iaculis dignissim. Suspendisse rutrum massa mauris. Donec quis tempus elit.Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default Newspage