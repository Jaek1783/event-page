// import {getFeaturedEvents} from '../dummy-data';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
const HomePage = (props)=>{
    return(
        <div>
            <EventList items = {props.events} />
        </div>
    )
};

export const getStaticProps = async ()=>{
    const featureEvents = await getFeaturedEvents();
    return {
        props : {
           events :  featureEvents
        },
        revalidate: 1800
    }
};
export default HomePage;