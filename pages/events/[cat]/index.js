import Image from 'next/image'
import Link from 'next/link';


const EventsCatPage = ( {data, pageName} ) => {
    // let modPageName = pageName.slice(0)
    // modPageName = modPageName.charAt(0).toUpperCase() + modPageName.slice(1)

    // or

    let modPageName = pageName.slice(0)
    modPageName = modPageName.split('')[0].toUpperCase() + modPageName.slice(1)
    return (
        <div>
            <h1>Events in {modPageName}</h1>
            <div>
                {data.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                         <Image src={ev.image} alt={ev.title} width={200} height={100}/> <h2>{ev.title}</h2><p>{ev.description}</p>
                    </Link>
                ))}
                
            </div>
        </div>
        
    )
}

export default EventsCatPage; 

// specififes the page url
export async function getStaticPaths(){
    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                cat: ev.id.toString()
            }
        }
    })


    return {
        paths: allPaths,
        fallback: false 
        // fallback false returns a 404 if the path does not match the id
    }
}

// this function shows the page content
export async function getStaticProps(context){
    
    const id = context?.params.cat
    const { allEvents } = await import('/data/data.json')
    const data = allEvents.filter((ev) => ev.city === id)
   
    return {props: {data, pageName: id}} 
    // pageName:id creates a pageName variable and attaches id to it
}