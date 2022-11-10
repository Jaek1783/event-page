import Link from 'next/link';
import modules from './event-item.module.css';
const EventItem = (props)=>{
    const {title, image, date, location, id} = props;
    const humanDate = new Date(date).toLocaleString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const formattedAddress = location.replace(',','\n');
    const exploreLink = `/events/${id}`;
    return <li className={modules.item}>
        <img src={"/"+image} alt={title} />
        <div className={modules.content}>
            <div className={modules.summary}>
                <h2>{title}</h2>
                <div className={modules.date}>
                    <time>{humanDate}</time>
                </div>
                <div className={modules.address}>
                    <address>{formattedAddress}</address>
                </div>
                <div className={modules.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </div>
    </li>
};
export default EventItem;