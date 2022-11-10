import Link from 'next/link';   
const EventItem = (props)=>{
    const {title, image, date, location, id} = props;
    const humanDate = new Date(date).toLocaleString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const formattedAddress = location.replace(',','\n');
    const exploreLink = `/events/${id}`;
    return<li>
        <img src={"/"+image} alt={title} />
        <div>
            <div>{title}</div>
            <div>
                <time>{humanDate}</time>
            </div>
            <div>
                <address>{formattedAddress}</address>
            </div>
            <div>
                <Link href={exploreLink}>Explore Event</Link>
            </div>
        </div>
    </li>
};
export default EventItem;