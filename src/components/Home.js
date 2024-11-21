

import Header from "./Header";
import TodoList from "./TodoList";

function Home() {
    return (
      <> 
          <Header title="React To Do List App v1.0.0"/>
          <div>
              <TodoList title="FrayedKnot Task Manager"/>
          </div>     
          
      </>
    );
}
  
export default Home; 