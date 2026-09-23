import Body from "./passingDataAppComponent/Body"
import Header from "./passingDataAppComponent/Header"
import React from "react"

export default function PassingDataApp(){
    const [userName, setUserName] = React.useState("Joe")
    return(
        <>
            <Body userName = {userName}/>
            <Header userName = {userName}/>
        </>
    )
}