import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ROOM_DATA = [{
    image: "/assets/images/first-class.jpg",
    discription: "A jhopdi is a small and humble dwelling Often found in slums or makeshift settlements Resilient individuals make their homes there Hidden within are stories of compassion and dedication in society",
    rate: "7000/day",
    title:"jhopdi"
},
{
    image: "/assets/images/deluxe.jpg",
    discription: "A kachcha house is a simple dwelling constructed with materials like mud or other natural elements It often involves the use of wood mud or other locally available resources Resilient individuals make their homes in these makeshift dwellings These houses reflect a connection to nature through their basic construction",
    rate: "10000/day",
    title:"kachaa house"
},
{
    image: "/assets/images/suite.jpg",
    discription: "A pakka house refers to a permanent and well-constructed dwelling made of durable materials These houses are typically built with materials like bricks concrete or other solid structures Residents of pakka houses enjoy the stability and longevity of their homes Such structures often signify a higher level of permanence",
    rate: "15000/day",
    title:"pakka house"
}
]


function RoomsData() {

    return (



        <div id="contents">
            <div className="box">
                <div>
                    <div className="body">
                        <h1>Rooms</h1>
                        <ul id="rooms">
                            {ROOM_DATA.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <Link href="rooms.html"><Image height={250} width={300} src={data.image} alt="Img" /></Link>
                                        <h2><Link href="rooms.html">{data.title}</Link></h2>
                                        <p>
                                            {data.discription}
                                        </p>
                                        <span className="rate">{data.rate}</span>
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

export default RoomsData