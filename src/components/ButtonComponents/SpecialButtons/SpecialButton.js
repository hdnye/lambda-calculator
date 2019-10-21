import React from "react";

const SpecialButton = (props) => {
  console.log(props);
  return (
    <button className='spec_button' onClick={()=> {props.changeData(props.special)}}>
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton;