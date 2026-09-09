import { createRoot } from "react-dom/client"
import ChefClaudeApp from "./ChefClaudeApp"
import MessagesApp from "./MessagesApp"
import ContactCardApp from "./ContactCardApp"
import EventListenerApp from "./eventListenerApp"
import StateApp from "./StateApp"
import FormApp from "./FormApp"
const root = createRoot(document.getElementById("root"))
root.render(
    <ChefClaudeApp/>
)