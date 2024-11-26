

import "../Header.css"

function Header({title="default header title"}) {
    return (
      <>
      <div className="container">
          <h1>{title}</h1>
      </div>    
      </>
    );
}
  
export default Header; 