



import {useState} from "react"

function ContactUs2() {

  const [msg, setMsg] = useState("")
  const [txtname, setName] = useState("")
  const [txtemail, setEmail] = useState("")
  const [txtphone, setPhone] = useState("")
  const [txcomment, setComment] = useState("")

  const btnHandleFormValidation = (event)=>
  {
      event.preventDefault();

      try {
        
        let _msg = "## btnHandleFormValidation"
        console.log(_msg)

        _msg = ""
        setMsg(_msg)  
        
        if(txtname == null | txtname.trim().length === 0) {
          _msg = "## please enter a valid name"
          setMsg(_msg)  
          return false; //stop button click 
        }
            
        if(txtemail == null | txtemail.trim().length === 0) {
          _msg = "## please enter a valid email"
          setMsg(_msg)  
          return false; //stop button click 
        }

        if(txcomment == null | txcomment.trim().length === 0) {
          _msg = "## please enter a valid comment"
          setMsg(_msg)  
          return false; //stop button click 
        }

      } catch (error) {        
        const _msg = "## btnHandleFormValidation::Error"
        console.log(_msg)
        console.log(error)
      
      }

    }

    const handleNameChange = (event)=>
      {
        event.preventDefault();
  
        try {
          
          let _msg = "## handleNameChange"
          console.log(_msg)
  
          //# get current value from text field, update state
          setName(event.target.value)
          
          console.log("## event.target.name: ", event.target.name)
          console.log("## event.target.value: ", event.target.value)
          console.log("## txtname: ", txtname)
      
        } catch (error) {        
          const _msg = "## handleNameChange::Error"
          console.log(_msg)
          console.log(error)
        
        }
  
      }

      const handleEmailChange = (event)=>
        {
          event.preventDefault();
    
          try {
            
            let _msg = "## handleEmailChange"
            console.log(_msg)
    
            setEmail(event.target.value)
            
            console.log("## event.target.name: ", event.target.name)
        
          } catch (error) {        
            const _msg = "## handleEmailChange::Error"
            console.log(_msg)
            console.log(error)
          
          }
    
        }
  
    return (
      <>
          <p></p>
          <h1>Contact Us - 1.0.0</h1>
          <p>{msg}</p>
          <div className="output"></div>
          <p></p>
          <div>
            <form>
              <label>* Name: </label><input name="txtname" onChange={handleNameChange} type="text" maxLength={20}></input><br></br>
              <label>* Email: </label><input name="txtemail" onChange={handleEmailChange} type="text"  maxLength={30}></input><br></br>
              <label> Phone: </label><input name="txtphone" onChange={(event)=>setPhone(event.target.value)} type="text"  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea name="txtcomment" onChange={(e)=>setComment(e.target.value)} rows={5} cols={30}></textarea><p></p>
              <button onClick={btnHandleFormValidation}>Submit</button>
              {"   "}
              <button>reset</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs2;


 