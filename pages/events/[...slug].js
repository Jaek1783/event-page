import { Fragment } from 'react';
import {useRouter} from 'next/router';

import EventList from '../../components/events/event-list';
// import {getFilteredEvents} from '../../dummy-data';
import { getFilteredEvents} from '../../helpers/api-util';
import ResultTitle from '../../components/events/results-title';
import EerrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

const FilterEventPage = (props) => {
    const router = useRouter();

    // const filterData = router.query.slug;
    // if(!filterData){
    //     return <Fragment>
    //                 <EerrorAlert>
    //                     <p className='center'>...Loading</p>
    //                 </EerrorAlert>
    //                 <div className="center">
    //                     <Button link='/events'>Show All Events</Button>
    //                 </div>
    //            </Fragment> 
        
    // }
    // const filteredYear = filterData[0];
    // const filteredMonth = filterData[1];

    // const numYear = +filteredYear;
    // const numMonth = +filteredMonth;
    // console.log(numYear, numMonth);
    if(props.hasError){
         return <Fragment>
                    <EerrorAlert>
                        <p>Please checking Your Date</p>
                    </EerrorAlert>
                    <div className="center">
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </Fragment>
         
    }

   const filteredEvents = props.events;

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

   const date = new Date(props.date.year, props.date.month -1); 

    return(
        <Fragment>
            <ResultTitle date={date }/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
};

export const getServerSideProps = async (context)=>{
    const {params} = context ;

    const filterData = params.slug;

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
         return {
            props : {hasError : true },
            // notFound : true,
            // redirect : {
            //     destination : '/error'
            // }
         }
    }

   const filteredEvents = await getFilteredEvents({
    year:numYear,
    month:numMonth
   });
    return{
        props : {
            events : filteredEvents,
            date : {
                year : numYear,
                month : numMonth
            }
        }
    };
};
export default FilterEventPage;