import {Fragment} from 'react';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from './event-search';
import {useRouter} from 'next/router';
const AllEventsPage = (props)=>{
    // const allEvents = getAllEvents();
    const router = useRouter();
    const {events}=props;
    const findEventsHandler = (year , month)=>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment >
    )
};
export const getStaticProps = async ()=>{
    const events = await getAllEvents();
    return {
        props :  {
            events
        },
        revalidate : 60
    }
};
export default AllEventsPage;