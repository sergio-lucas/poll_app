/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;


function doSomething(condition) {
  if (condition) {
    return true;
  }
  return "";
}

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;
const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const foo = 1;
const bar = 2;

function Links() {
  return (
    <>
      <Link
        className="navbar-brand"
        to="/"
      >
        Poll App
      </Link>

      <Collapse>
        <List>
          <Item>
            <Link
              className="nav-link"
              to="/poll/list"
            >
              List Poll
            </Link>
          </Item>

          <Item>
            <Link
              className="nav-link"
              to="/poll/create"
            >
              Create Poll
            </Link>
          </Item>
        </List>
      </Collapse>
    </>
  );
}

export default Links;
