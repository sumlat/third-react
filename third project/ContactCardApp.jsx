import React from "react"
import Star from "./contactCardComponent.jsx/Star"


export default function ContactCardApp(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "johndoe@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })}

    return(
        <main>
            <article className="card">
                <img
                    src="https://ui-avatars.com/api/?name=John+Doe"
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star
                        isFilled={contact.isFavorite}
                        onClick={toggleFavorite}
                    />
                    
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}