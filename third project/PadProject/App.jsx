import Pad from "./Pad"
import React from "react"
import PadButton from "./PadButton"

export default function PadApp(){
    const [colorPads, setColorPads] = React.useState(Pad)
    const padsElement = colorPads.map(padElement => (
        <PadButton color = {padElement.color} toggle = {Toggle} key={padElement.id} id={padElement.id} isOn = {padElement.on}/>
    ))

    function Toggle(id){
        setColorPads(prevValue => prevValue.map(item => {
            return item.id === id ? {...item, on : !item.on} : item
        }))
    }
    return(
        <main>
            <div className="pad-container">
                {padsElement}
            </div>
        </main>
    )
}