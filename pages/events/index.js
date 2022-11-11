import {Fragment} from 'react';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from './event-search';
import {useRouter} from 'next/router';
const AllEventsPage = ()=>{
    const allEvents = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year , month)=>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={allEvents}/>
        </Fragment >
    )
};
export default AllEventsPage;