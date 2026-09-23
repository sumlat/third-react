import React from "react"
import Count from "./countComponent.jsx/count"

export default function CounterApp(){
    const [count, setCount] = React.useState(0)

    function Subtract(){
        setCount(prevCount => prevCount - 1)
    }
    function Addition(){
        setCount(prevCount => prevCount + 1)
    }
    return(
        <main className="container">
            <div className="counter">
                <button aria-label="decrease count" onClick={Subtract} className="minus">-</button>
                <Count number  = {count}/>


                <button aria-label="increase count" onClick={Addition} className="add">+</button>

            </div>
        </main>
    )
}