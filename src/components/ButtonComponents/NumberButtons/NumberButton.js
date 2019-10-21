import React from "react";


const NumberButton = (props) => {
  console.log(props);
  return (
    <button className='num_button' onClick={()=> {props.changeData(props.number)}}>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
