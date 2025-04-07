import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo href="/">
        <LogoImage src="/src/images/logo.jpeg" alt="InnovaSphere Logo" />
      </Logo>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerIcon>☰</HamburgerIcon>
      </HamburgerMenu>
      <Nav isMenuOpen={isMenuOpen}>
        <StyledNavLink to="/" activeClassName="active" onClick={toggleMenu}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active" onClick={toggleMenu}>
          About
        </StyledNavLink>
        <StyledNavLink to="/jobs" activeClassName="active" onClick={toggleMenu}>
          Jobs
        </StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 40%;
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 3rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.span`
  color: grey;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #282c34;
    padding: 1rem;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  color: grey;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export default Header;