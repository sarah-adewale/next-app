
import CatEvent from '../../../src/components/events/catEvent';


const EventsCatPage = ({data, pageName}) => <CatEvent data={data} pageName={pageName}/>

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