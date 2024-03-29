import Image from 'next/image'
import React from 'react'

function FoodPage() {
  return (
    <div id="contents">
				<div className="box">
					<div>
						<div className="body">
							<h1>Food</h1>
							<ul id="foods">
								<li>
									<h2><a href="foods.html">SeaFood Special</a></h2>
									<div className="infos">
										<a href="foods.html"><Image src="/assets/images/seafoods.jpg" alt="Img" height={169} width={780}/><span className="cover"></span></a>
										<p>
											<span>Fried Salmon Special</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ...
										</p>
									</div>
								</li>
								<li>
									<h2><a href="foods.html">Sumptuous Desserts</a></h2>
									<div className="infos">
										<a href="foods.html"><Image src="/assets/images/desserts.jpg" alt="Img" height={169} width={780}/><span className="cover"></span></a>
										<p>
											<span>Choco Ice Cream Sandwich</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ...
										</p>
									</div>
								</li>
								<li>
									<h2><a href="foods.html">Buffet</a></h2>
									<div className="infos">
										<a href="foods.html"><Image src="/assets/images/buffet.jpg" alt="Img" height={169} width={780}/><span className="cover"></span></a>
										<p>
											<span>Mixed Buffet</span> I'm a product overview. Here you can write more information about your product. Buyers like to know ...
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
  )
}

export default FoodPage