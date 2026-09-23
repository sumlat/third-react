import React from "react"
import ClaudeRecipe from "./ChefClaudeMainComponents/ClaudeRecipe"
import IngredientList from "./ChefClaudeMainComponents/IngredientList"
import { getRecipeFromMistral } from "./ai"

export default function Main(){
    const[addIngredient, setAddIngredient] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    function SubmitForm(formData){
        const newIngredient = formData.get("ingredient")
        setAddIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }

    async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(addIngredient)
    setRecipe(recipeMarkdown)
}

    return(
        <main>
            <form action={SubmitForm} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>
            {addIngredient.length > 0 && <IngredientList 
             addIngredient = {addIngredient} 
             getRecipe = {getRecipe}/> }

            { recipe && <ClaudeRecipe recipe={recipe}/>} 

        </main>
    )
}