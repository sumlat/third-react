import starFilled from "/src/assets/icons8-star-filled-30.png"
import emptyStar from "/src/assets/icons8-star-50.png"

export default function Star(props){
    let starIcon = props.isFilled ? starFilled : emptyStar
    return(
        <>
        <button
            aria-pressed={props.isFilled ? true : false}
            aria-label= {props.isFilled ? "Remove to favourite" : "Add from favourite"}
            className="favorite-button">

        <img
        onClick={props.onClick}
        src={starIcon}
        alt={props.isFilled ? "Filled star icon" : "Empty star icon"}
        className="favorite"/>
        </button>
        </>
        
    )
}