export default function EventListenerApp(){
    function HandleClick(){
        alert("I was clicked!")
    }
    function HandleMouseOver(){
        alert("I was hovered")
    }
    return(
        <main className="container">
            <img src="https://picsum.photos/640/360" alt="image from picsum" />
            <button onClick={HandleClick} onMouseOver={HandleMouseOver}>Click me!</button>
        </main>
    )
}