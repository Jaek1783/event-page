import modules from './button.module.css';
import Link from 'next/link';
const Button = (props)=>{
    return(
        <Link href={props.link}>
            <a className={modules.btn}>{props.children}</a>
        </Link>
    )
};
export default Button;