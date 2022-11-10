import EventItem  from "./event-item";
import modules from './event-list.module.css';
const EventList = (props)=>{
    const {items} = props;
    return(
        <ul className={modules.list}>
            {items.map(event =>
                <EventItem
                    key={event.id}
                    title = {event.title}
                    image = {event.image}
                    date = {event.date}
                    location = {event.location}
                    id = {event.id}
                />)}
        </ul>
    )
};
export default EventList;