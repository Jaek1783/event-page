import {useRouter} from 'next/router';
import EventList from '../../components/events/event-list';
import {getFilteredEvents} from '../../dummy-data';
const FilterEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){
        return <p className='center'>...Loading</p>
    }
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    // console.log(numYear, numMonth);
    if(
        isNaN(numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 || 
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1 
    ){
         return <p>Please checking Your Date</p>
    }

   const filteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth
   });
// console.log(filteredEvents);
   if(!filteredEvents || filteredEvents.length === 0){
    return <p>Sorry, notFound chosen filter!</p>
   }

    return(
        <div>
            <EventList items={filteredEvents}/>
        </div>
    )
};
export default FilterEventPage;