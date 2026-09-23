
export default function PadButton(props){

    return(
        <button 
        onClick={() => {props.toggle(props.id)}} 
        className={props.isOn ? "on" : undefined} 
        style={{backgroundColor : props.color}}>

        </button>
    )
}