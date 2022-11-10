import modules from './button.module.css';
import Link from 'next/link';
const Button = (props)=>{
    if(props.link){
        return(
            <Link href={props.link}>
                <a className={modules.btn}>{props.children}</a>
            </Link>
        )
    }
    return <button className={modules.btn} onClick={props.onClick}>{props.children}</button>
};
export default Button;