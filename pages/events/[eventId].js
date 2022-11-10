import { Fragment } from 'react';
import {useRouter} from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
const EventDetailPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
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
export default EventDetailPage;