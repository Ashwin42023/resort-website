import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const DIVE_DATA = [{
    image: "/assets/images/reef1.jpg",
    discription: "",
    title: "Gale Reef",
},
{
    image: "/assets/images/reef2.jpg",
    discription: "",
    title: "Dawson’s Reef",
},
{
    image: "/assets/images/reef3.jpg",
    discription: "",
    title: "Claire’s reef",
},
]

function DataPage() {
    return (
        <div id="contents">
            <div className="box">
                <div>
                    <div className="body">
                        <h1>Dive Site</h1>
                        <ul id="sites">
                        {DIVE_DATA.map((data, index) => {
                                return (
                            <li key={index}>
                                <Link href="dives.html"><Image height={280} width={400} src={data.image} alt="Img" /></Link>
                                <h2><Link href="dives.html">{data.title}</Link></h2>
                                <p>
                                    Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis.
                                </p>
                                <p>
                                    Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet.
                                </p>
                            </li>
                                )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataPage