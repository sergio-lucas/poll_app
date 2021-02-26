import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import {
  Container, TopNav,
} from "./content";


function NavBar() {
  return (
    <TopNav>
      <Container>
        <Logo />

        <Links />
      </Container>
    </TopNav>
  );
}

export default NavBar;
