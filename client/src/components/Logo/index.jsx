import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../../logo.svg";

const Logo = styled.a.attrs({
  className: "navbar-brand",
})``;

function LogoView({ width }) {
  return (
    <Logo href="/">
      <img
        alt="Poll app"
        height="ds"
        src={logo}
        width={width}
      />
    </Logo>
  );
}

LogoView.propTypes = {
  width: PropTypes.number.isRequired,
};

export default LogoView;
