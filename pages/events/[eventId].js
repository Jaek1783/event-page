// import { getEventById } from '../../dummy-data';
// import {useRouter} from 'next/router';
import { Fragment } from 'react';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
const EventDetailPage = (props) => {
    // const router = useRouter();
    // const eventId = router.query.eventId;
    // const event = getEventById(eventId);
    const event = props.selectedEvent;
    if(!event){
        return(
            <p>No Found Page</p>
        );
    }
    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics
                image = {event.image}
                imageAlt={event.title}
                date = {event.date}
                address={event.location}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
};
export const getStaticProps = async (context)=>{
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    return {
        props : {
            selectedEvent : event
        },
        revalidate : 30
    }
};
export const getStaticPaths = async ()=>{
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({params : {eventId : event.id}}));
    return{
        paths,
        fallback:true
    }
};
export default EventDetailPage;