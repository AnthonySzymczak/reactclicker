// Import useState Hook from React
import React, {useState} from 'react';

function Counter() {
  // Using `useState`, declare a new state variable, called "count", and set it to 0
  // Name the returned setter method "setCount"
  // YOUR CODE HERE
  //
  const [count,setCount] = useState(0)
function increment(){
  setCount((prevState) => prevState + 1)
}
function decrement(){
  setCount((prevState) => prevState - 1)
}
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        {/* Add the count variable to show the current count value below*/}
        

        <p className="card-text">Click Count:  {count} </p>
       {/* When the button is clicked, we call setCount with the incremented value of count */}
       
       
        <button onClick={increment} className="btn btn-primary">Increment by One</button>{' '}
       
         {/* When the button is clicked, we call setCount with the decremented value of count */}
        <button onClick={decrement}className="btn btn-danger">Decrement by One</button>
        
      </div>
    </div>
  );
}

export default Counter;
