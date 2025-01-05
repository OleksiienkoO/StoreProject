import React from "react";
import Logo from "../../../../assets/rozetkaLogoWhite.png";

function Header({ children }) {
  return (
    <div>
      <img src={Logo} width="240px" />{" "}
      <div className="left-side"> {children} </div>{" "}
    </div>
  );
}
export default Header;
