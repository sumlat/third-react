export default function FormApp(){

    function SignUp(formData){
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const description = formData.get("description")
        // const radio = formData.get("employmentStatus")
        // const dietaryOptions = formData.getAll("dietaryOptions")
        // const favColor = formData.get("favColor")

        const data = Object.fromEntries(formData)
        const dietaryOptions = formData.getAll("dietaryOptions")
        const getAll = {
            ...data,
            dietaryOptions
        }
        console.log(getAll)
    }
    return(
        <section>
            <h1>SignUp Form</h1>
            <form action={SignUp}>
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" defaultValue={"johndoe@gmail.com"} placeholder="johndoe@yopmail.com" />

                <label htmlFor="password">Password: </label>
                <input id="password" type="password" defaultValue={"pa$$word123"} name="password"  />

                <label htmlFor="password">Description: </label>
                <textarea id="description" type="description" defaultValue={"this is the decription"} name="description"  ></textarea>

                <fieldset>
                    <legend>Employment Status</legend>

                    <label htmlFor="radio">
                        <input type="radio" name="employmentStatus" id="radio" value={"part-time"} />
                        Part-time
                    </label>

                    <label htmlFor="radio">
                        <input type="radio" name="employmentStatus" id="radio" value={"unemployed"} />
                        Unemployed
                    </label>

                    <label htmlFor="radio">
                        <input type="radio" name="employmentStatus" id="radio" defaultChecked={true} value={"full-time"} />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary Options</legend>

                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietaryOptions" id="checkbox" value={"kosher"} />
                        Kosher
                    </label>

                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietaryOptions" id="checkbox" value={"vegan"} />
                        Vegan
                    </label>

                    <label htmlFor="checkbox">
                        <input type="checkbox" name="dietaryOptions" id="checkbox" defaultChecked={true} value={"gluten-free"} />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">Choose your favourite colour</label>
                <select name="favColor" id="favColor" required>
                    <option value="red" disabled>---Choose your favorite color</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>


                <button>Submit</button>
            </form>
        </section>
    )
}