import React from "react";
// import  validate  from "./validate.js";

export default function AppBar() {
  const [name, setname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [aadhar, setaadhar] = React.useState("");
  const [phoneno, setphoneno] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const [dose, setdose] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      
      name    : ${name}
      email   : ${email}
      aadhar  : ${aadhar}
      phoneno : ${phoneno}
      dose    : ${dose}
      Gender  : ${Gender}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

//const {errors, setErrors} = useState({});


const handleclick=(event)=>{
    event.preventDefault()
        const vaccine={name,email,aadhar,phoneno,dose}
        console.log(vaccine)
   // setErrors(validate(name,email,phoneno));
    
        fetch("http://localhost:8080/vaccine/vac",{
            method:"POST",
            headers:{"content-Type":"application/JSON"},
            body:JSON.stringify(vaccine)
          }).then(()=>{
          console.log("New Registration is added")
          })
        }

  return (<div className="regi-main">
           <form onSubmit={handleSubmit}>
              <h1>Vaccination Registration Form</h1>
      
          <label>
              Name   :
                <input
                  name="name"
                  type="name"
                  value={name}
                  onChange={e => setname(e.target.value)}
                  required />
          
           </label>
                  {/* {errors.name && <p name="errors">{errors.name}</p>} */}
      
      <br></br>
      
          <label>
              Email Id  :
              <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required />
              {/* {errors.email && <p name="errors">{errors.email}</p>} */}
          </label>
      
      <br></br>
      
            <label>
              Aadhar:
              <input
                  name="aadhar"
                  type="aadharNo"
                  value={aadhar}
                  onChange={e => setaadhar(e.target.value)}
                  required />
      </label>
      
      <br></br>
      
            <label>
              Phoneno:
                <input
                  name="phoneno"
                  value={phoneno}
                  onChange={e => setphoneno(e.target.value)}
                  required>
          
               </input>
            {/* {errors.phoneno && <p name="errors">{errors.phoneno}</p>} */}
            </label>

      <br></br>
      
      
            <label>
              Dose:
                <input
                  name="dose"
                  type="dose"
                  value={dose}
                  onChange={e => setdose(e.target.value)}
                  required />
          
            </label>

      <br></br>
            <label>
              Gender:
                <input
                  name="Gender"
                  type="Gender"
                  value={Gender}
                  onChange={e => setGender(e.target.value)}
                  required />
            </label>

      <br></br>

      
            <label>
                <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required />
                    Please check your details and apply
            </label>
      
      
    <br></br>
      

              <button onClick={handleclick}>Register</button>
    
    </form>
    
    </div>
    

  );
}
