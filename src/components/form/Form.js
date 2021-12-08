import {useState} from "react"
import "./Form.css"
const Form = () => {
    const [values, setValues] = useState({
    name:"",
    surname:"",
    email:"",
    country:""
    
    });

    const handlerValues = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(values.name=="" || values.surname=="" || values.email=="" || values.country==""){
            
           alert(`Tüm değerleri girdiğinizden emin olunuz`) 
        }
        else{
            alert ( `
        userName: ${values.name}
        surName : ${values.surname}
        email   : ${values.email}
        country : ${values.country}`
        )

        }
        
    };
       
    return (
        
       <div className="container">
           
           <div className="container-down">
               
                <form onSubmit={handleSubmit}>
                    <h2>Enter İnformation</h2>
                    <div>
                        <label htmlFor="name"> Name</label><br />
                    <   input onChange={handlerValues} type="text" value={values.name} name="name" placeholder="Name" />
                    </div>
                    <div className="sur">    
                        <label htmlFor="surname">Surname</label><br />
                        <input onChange={handlerValues} type="text" value={values.surname} name="surname" placeholder="Surname" />
                    </div>
                    <div className="ema">
                        <label htmlFor="email"> Email</label><br />
                        <input onChange={handlerValues} type="email" value={values.email} name="email" placeholder="Email" />
                    </div>


                    <label id="count" htmlFor="country">Choose a Country</label><br />
                    <select value={values.country} onChange={handlerValues} name="country" id="country">
                        <option value="turkey">Turkey</option>
                        <option value="germany">Germany</option>
                        <option value="usa">USA</option>
                        <option value="hollanda">Hollanda</option>
                    </select><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
       </div>
    )
}
export default Form;