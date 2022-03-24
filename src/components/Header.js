import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <p>
          <a href='#model-s'>Model S</a>
        </p>
        <p>
          <a href='#model-3'>Model 3</a>
        </p>
        <p>
          <a href='#model-x'>Model X</a>
        </p>
        <p>
          <a href='#model-y'>Model Y</a>
        </p>
      </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  postion: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: red;
  }
`
