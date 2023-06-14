import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const CatEvent = ({data, pageName}) => {
    let modPageName = pageName.slice(0)
    modPageName = modPageName.split('')[0].toUpperCase() + modPageName.slice(1)
    return (
        <div className='cat_events'>
            <h1>Events in {modPageName}</h1>
            <div className='content'>
                {data.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <div className='card'>
                            <Image src={ev.image} alt={ev.title} width={300} height={300}/> <h2>{ev.title}</h2><p>{ev.description}</p>
                         </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default CatEvent