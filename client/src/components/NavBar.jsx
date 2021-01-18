import React, { Component } from 'react'

import Logo from './Logo'
import Links from './Links'
import { Container, TopNav } from './content'



class NavBar extends Component {
    render() {
        return (
          <TopNav>
            <Container>
              <Logo />
              <Links />
            </Container>
          </TopNav>
        )
    }
}

export default NavBar
