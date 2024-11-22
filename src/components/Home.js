

import Header from "./Header";
import TodoList from "./TodoList";

function Home() {
    return (
      <> 
          <Header title="React To Do List App v0.0.3"/>
          <div>
              <TodoList title="FrayedKnot Task Manager v0.0.3"/>
          </div>     
          
      </>
    );
}
  
export default Home; 