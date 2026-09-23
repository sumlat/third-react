
import avatar from "/src/assets/icons8-avatar-50.png"
export default function Header(props){
    
    return(
        <header>
            <img src={avatar} alt="" />
            <p>{props.userName}</p>
        </header>
    )
}