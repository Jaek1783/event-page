import modules from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowButtonIcon from '../icons/arrow-right-icon';
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
                    <DateIcon/>
                    <time>{humanDate}</time>
                </div>
                <div className={modules.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
                <div className={modules.actions}>
                    {/* <Link href={exploreLink}>Explore Event</Link> */}
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={modules.icon}><ArrowButtonIcon/></span>
                    </Button>
                </div>
            </div>
        </div>
    </li>
};
export default EventItem;