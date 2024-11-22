

import { useEffect, useState } from "react";

function ContactUs() {

    const [msg, setMsg] = useState("");

    useEffect((e)=>{


    },[]) //1. onpage load [], 2. page unload, 3. on state update [msg], 4. un page /refresh

    const handleFormSubmit = (e) => {

      e.preventDefault();
      const _msg = "# handleFormSubmit"
      setMsg(_msg)

      //try/catch 

    }

    
    const handleFormReset = (e) => {

      e.preventDefault();
      const _msg = "# handleFormReset"
      setMsg(_msg)

      //try/catch 
      
    }

    return (
      <>
        <p></p>
        <p>Contact Us</p>
        <p>{msg}</p>
        <div className="output"></div>
        <p></p>
        <div>
          <form>
            <label>* First Name: </label><input name="txtfirstname" type="text" maxLength={20} placeholder="* firstname required" /><br></br>
            <label>* Last Name: </label><input name="txtlastname" type="text" maxLength={20}  placeholder="* lastname required"/><br></br>
            <label>* Email: </label><input name="txtemail" type="text"  maxLength={30}  placeholder="* email required"/><br></br>
            <label>* Comment: </label><br></br>
            <textarea name="txtcomment" rows={5} cols={30}  placeholder="* comment required"/><p></p>
            <button onClick={handleFormSubmit}>Submit</button>
            {"   "}
            <a href="#/" onClick={handleFormReset}>reset</a>
        </form>
      </div>
    </>
    );
  }
  
  export default ContactUs;
  