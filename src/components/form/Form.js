import {useState} from "react"
import "./Form.css"
const Form = () => {
    const [name, setName] = useState("")
    const handlerName = () => {
        setName({name})
    }
    return (
        
       <div className="container">
           <div className="container-down">
                <form>
               
                    <div>
                        <label htmlFor="name"> Name</label><br />
                    <   input onChange={handlerName} type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="sur">    
                        <label htmlFor="surname">Surname</label><br />
                        <input type="text" name="surname" id="surname" placeholder="Surname" />
                    </div>
                    <div className="ema">
                        <label htmlFor="email"> Email</label><br />
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <label id="count" htmlFor="country">Choose a Country</label><br />
                    <select name="country" id="country">
                        <option value="turkey">Turkey</option>
                        <option value="turkey">Germany</option>
                        <option value="turkey">USA</option>
                        <option value="turkey">Hollanda</option>
                    </select><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
       </div>
    )
}
export default Form;