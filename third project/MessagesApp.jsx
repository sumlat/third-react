import React from "react"

export default function MessagesApp(){

    const [unreadMessages, setUnreadMessages] = React.useState([])

    return(
        <div>
            {unreadMessages.length === 0 &&<h1>You are all caught up!</h1>}
            {unreadMessages.length === 1 &&<h1>You have one unread message</h1>}
            {unreadMessages.length > 1 &&<h1>You have {unreadMessages.length} messages</h1>}
        </div>
    )
}