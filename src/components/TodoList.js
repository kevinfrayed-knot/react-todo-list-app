

import { useEffect, useState } from "react";

import "../TodoList.css";

//page level context state/data - all functions can access state/data
const todolist_array = [
  {id:1,name:"item one",completed:false},
  {id:2,name:"item two",completed:false},
  {id:3,name:"item three",completed:true},
  {id:4,name:"item four",completed:false},
  {id:5,name:"item five",completed:true},
  {id:6,name:"item six",completed:false},  
]

function TodoList(props) {

  const [msg, setMsg] = useState("");
  const [txtnewitem, setNewItem] = useState("");
  //component/function state/array - functions with Todolist can acess function array and page/context arrray
  const [todolist, setTodoList] = useState(todolist_array);
  const [filtered_todolist, setFilteredTodoList] = useState(null);

    useEffect((e)=>{

      //onComponent/page load 
      //ie: get data from api and update state/todolist
      setFilteredTodoList(todolist); 

    },[]) //1. onpage load [], 2. page unload, 3. on state update [msg], 4. un page /refresh

    const handleAddNewItem = (e)=>{
      try {

        let _msg = "# handleAddNewItem"

        if(txtnewitem == null | txtnewitem.trim().length === 0){

          _msg = "# please enter a valid item"
          setMsg(_msg)
          return false; //stop button click 
        }

        var _newitem = {id: (new Date()).getTime(),name:txtnewitem, completed:false};

        //todolist.push(_newitem);

        setTodoList((prevval)=>{
          
            //spread operator - get all array items ie: array.push
            const _lst = [...prevval,_newitem]
           
            setFilteredTodoList(_lst);

            return _lst;
        });

        _msg = "# new item added"
        setMsg(_msg)

        setNewItem("")

        console.log(_msg)
        console.log(txtnewitem)

      } catch (error) {
        
        let _msg = "# handleAddNewItem::error"
        setMsg(_msg)

        console.log(_msg)
        console.log(error)
      }
    }

    
    const handleDeleteItem = (e, id) => {

      e.preventDefault();

      let _msg = "## handleDeleteItem";

      try {
         
          let _index = -1;

          const _item_found = todolist.find((item,index)=>{
              _index = index;
              return item.id === id;
          })

          const _name = (_item_found !== null )? _item_found.name:"";

          const _ret = window.confirm(`Delete item - ${_name} ?`);

          if(!_ret || _index === -1){
              return true;
          }

          setTodoList((prevval)=>{

              //spread operator ... - retieve previous array items 
              let _lst = [...prevval]
             
              //-- delete 1 item found at index found 
              _lst.splice(_index,1);

              setFilteredTodoList(_lst);

              return _lst;
          })
         
          _msg = `# item deleted: ${_name}, index:${id}`;
          setMsg(_msg);

          setNewItem("");

      } catch (error) {            
          
          _msg = `handleDeleteItem::Error - ${error}`;
          setMsg(_msg);
          console.log(_msg);
          console.log(error)
      }
   }

    const handleDisplayAll = (e) => {
        e.preventDefault();

        let _msg = "# handleDisplayAll";

        try {
           
           setFilteredTodoList(todolist);

           setNewItem("");

        } catch (error) {            
            _msg = `handleDisplayAll::Error - ${error}`;
            setMsg(_msg);
            
            console.log(_msg);
            console.log(error)
        }
    }

    const handleDisplayCompleted = (e) => {
        e.preventDefault();

        let _msg = "# handleDisplayCompleted";

        try {
           
            setFilteredTodoList(todolist.filter((item)=>{
                return (item.completed === true)
            }));
           
           setNewItem("")
           
        } catch (error) {            
            _msg = `handleDisplayCompleted::Error - ${error}`;
            setMsg(_msg);
            
            console.log(_msg);
            console.log(error);
        }
    }


    const handleDisplayUnCompleted = (e) => {
        e.preventDefault();

        let _msg = "# handleDisplayUnCompleted";

        try {
           
            setFilteredTodoList(todolist.filter((item)=>{
                return (item.completed === false)
            }));
           
           setNewItem("")
           
        } catch (error) {            
            _msg = `handleDisplayUnCompleted::Error - ${error}`;
            setMsg(_msg);
            
            console.log(_msg);
            console.log(error);
        }
    }

     const handleItemToggle = (e, id) => {

      let _msg = "# handleItemToggle";

       try
       {
            let _lst1 = todolist.map((item)=>{
                return   (item.id === id)?                  
                      {...item,completed:!item.completed}
                  :
                      {...item};                
              });

              let _lst2 = filtered_todolist.map((item)=>{
                return   (item.id === id)?                  
                      {...item,completed:!item.completed}
                  :
                      {...item};                
              });

            setTodoList(_lst1);
            setFilteredTodoList(_lst2);

            setNewItem("");

        } catch (error) {            
            
            _msg = `handleItemToggle::Error - ${error}`;
            setMsg(_msg);

            console.log(_msg);
            console.log(error)
        }
    }

    return (
      <>
        <div className="container">
         <h4>{props.title}</h4>
         <div>
          <span>Add New Tasks: </span>
          <input type="text" value={txtnewitem} onChange={(e)=>setNewItem(e.target.value)} name="txtitemname" maxLength={25} placeholder="* add new item"></input>
          {" "}
          <button onClick={handleAddNewItem}>Add</button>
          {" "}
          <a href="#/" onClick={(e)=>{setNewItem(""); setMsg("")}}>reset</a>
        </div>
        <div>
          <p>{msg}</p>
        </div>
        <div>          
          <a onClick={handleDisplayAll} href="#/">all</a> {" | "}
          <a href="#/" onClick={handleDisplayCompleted}>completed</a> {" | "}
          <a href="#/" onClick={handleDisplayUnCompleted}>incomplete</a>
        </div>
        <p></p>
        <div>          
          {filtered_todolist && filtered_todolist.map((item)=>
            <p key={item.id}>
              <>
                <input onChange={(e)=>handleItemToggle(e,item.id)} type="checkbox" checked={item.completed}/>{" "}
                <span style={{'textDecoration':(item.completed)?"line-through":""}}>{item.name}</span> {" "}
                <button onClick={(e)=>handleDeleteItem(e,item.id)}>x</button>              
              </>
            </p>
          )}          
         </div>
       </div>
      </>
    );
  }
  
  export default TodoList;
  

  

  

  
