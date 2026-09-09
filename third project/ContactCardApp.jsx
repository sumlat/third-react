import React from "react"
import starFilled from "./src/assets/icons8-star-filled-30.png"
import emptyStar from "./src/assets/icons8-star-50.png"

export default function ContactCardApp(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "johndoe@example.com",
        isFavorite: true
    })
    let starIcon = contact.isFavorite ? starFilled : emptyStar

    function toggleFavorite() {
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })
}

    return(
        <main>
            <article className="card">
                <img
                    src="https://ui-avatars.com/api/?name=John+Doe"
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite ? true : false}
                        aria-label= {contact.isFavorite ? "Remove to favourite" : "Add from favourite"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
                            className="favorite"
                        />
                    </button>
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