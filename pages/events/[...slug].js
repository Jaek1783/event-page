import { Fragment } from 'react';
import {useRouter} from 'next/router';

import EventList from '../../components/events/event-list';
import {getFilteredEvents} from '../../dummy-data';
import ResultTitle from '../../components/events/results-title';
import EerrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

const FilterEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){
        return <Fragment>
                    <EerrorAlert>
                        <p className='center'>...Loading</p>
                    </EerrorAlert>
                    <div className="center">
                        <Button link='/events'>Show All Events</Button>
                    </div>
               </Fragment> 
        
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
         return <Fragment>
                    <EerrorAlert>
                        <p>Please checking Your Date</p>
                    </EerrorAlert>
                    <div className="center">
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </Fragment>
         
    }

   const filteredEvents = getFilteredEvents({
    year:numYear,
    month:numMonth
   });
// console.log(filteredEvents);
   if(!filteredEvents || filteredEvents.length === 0){
    return <Fragment>
        <EerrorAlert>
            <p>Sorry, notFound chosen filter!</p>
        </EerrorAlert>
        <div className="center">
            <Button link='/events'>Show All Events</Button>
        </div>
    </Fragment>
   }

   const date = new Date(numYear, numMonth -1); 

    return(
        <Fragment>
            <ResultTitle date={date }/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
};
export default FilterEventPage;