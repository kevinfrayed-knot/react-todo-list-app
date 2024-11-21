

function TodoList(props) {
    return (
      <>
        <h4>{props.title}</h4>
        <div>
          {"item [   ] add reset"}
        </div>
        <div>
          <p>{" msg "}</p>
        </div>
        <div>
          {" all | completed | in-completd"}
        </div>
        <p></p>
        <div>
          <p>
            {"[x] item one [x]"}
          </p>
          <p>
            {"[] item two [x]"}
          </p>
          <p>
            {"[x] item three [x]"}
          </p>
          <p>
            {"[] item four [x]"}
          </p>
        </div>
      </>
    );
  }
  export default TodoList;