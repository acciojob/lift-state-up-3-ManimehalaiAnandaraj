
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption,setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }
  return (
    <div className="parent">
       <h1>Parent Component</h1>
       <div className="child1">
        <h3>Child Component</h3>
       <ChildComponent option = "Option 1" onOptionClick = {handleOptionClick} ></ChildComponent>
       </div>
       <div className="child2">
       <h3>Child Component</h3>
       <ChildComponent option = "Option 2" onOptionClick = {handleOptionClick}></ChildComponent> 
       </div>
       <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

function ChildComponent({option,onOptionClick})
{
  return(
    <div>
      <button onClick={() =>onOptionClick(option)}>{option}</button>
    </div>
  )
}

export default App
