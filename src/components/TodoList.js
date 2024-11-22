

import { useEffect, useState } from "react";

function TodoList(props) {

  const [msg, setMsg] = useState("");

    useEffect((e)=>{


    },[]) //1. onpage load [], 2. page unload, 3. on state update [msg], 4. un page /refresh

    return (
      <>
        <h4>{props.title}</h4>
        <div>
          <span>item: </span>
          <input type="text" name="txtitemname" maxLength={25} placeholder="* add new item"></input>
          {" "}
          <button>Add</button>
          {" "}
          <a href="#/">reset</a>
        </div>
        <div>
          <p>{msg}</p>
        </div>
        <div>          
          <a href="#/">all</a> {" | "}
          <a href="#/">completed</a> {" | "}
          <a href="#/">in-completd</a>
        </div>
        <p></p>
        <div>
          <p>
            <>
              <input type="checkbox" checked={true}/>{" "}
              <span>item one</span> {" "}
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={false}/>{" "}
              <span>item two</span> {" "} 
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={true}/>{" "}
              <span>item three</span> {" "}
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={false}/>{" "}
              <span>item four</span> {" "}
              <button>x</button>              
            </>
          </p>
        </div>
      </>
    );
  }
  
  export default TodoList;
  
