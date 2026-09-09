import React from "react"

export default function StateApp(){
    
  const allFavoriteThings = ["💦", "😺", "💡", "🔥", "🎁", 
  "🐴", "🍎", "🔔", "🥩"]
  const [myFavorite,setMyFavourite] = React.useState([])
  
  const thingsElements = myFavorite.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavourite(prevFavourite => [...prevFavourite, allFavoriteThings[prevFavourite.length] ])
  }
    
    return(
        <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
    )
}