import React from "react";
import Logo from "./Logo";
import Container from "@material-ui/core/Container";
import HomeBanner from "../../../Images/home.png";

function Header() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${HomeBanner})` }}>
      {/* <img src={HomeBanner} alt="Home Banner" /> */}
      <Container>
        <Logo />
      </Container>
    </div>
  );
}

export default Header;
