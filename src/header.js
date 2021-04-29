import React from "react";

const Header = (props) => {
  return (
    <>
      <div>
        {props.name}
        {props.age}
      </div>
    </>
  );
};

export default Header;
