import React from "react";

const SpecialButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
const SpecialButton = props => {
  return <button>{props.specialIcon}</button>;
};
export default SpecialButton;