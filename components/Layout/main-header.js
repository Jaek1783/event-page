import Link from 'next/link';
import modules from './main-header.module.css';
const MainHeader = ()=>{
    return(
        <header className={modules.header}>
            <div className={modules.logo}>
                <Link href='/'>NextEvents</Link>
            </div>
            <nav className={modules.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default MainHeader;