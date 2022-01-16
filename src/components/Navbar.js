import * as React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const NavTitle = styled(NavbarBrand)`
font-size: 1.7rem;
padding-left: 20px;
`;
const StyledNavLink = styled(NavLink)`font-size: 1.2rem`;


const TopNavBar = () => {
  const navTab = [
    { label: 'About', url: '/about' },
    { label: 'Play With Me', url: '/games' },
    { label: 'Blog', url: '/blog' }
  ];

  const renderNavLink = () => {
    return navTab.map((item) => (
      <NavItem>
        <StyledNavLink href={item.url}>{item.label}</StyledNavLink>
      </NavItem>
    ));
  };

  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavTitle href="/home">Pho the Bunny</NavTitle>
      <Nav className="me-auto" navbar>
        {renderNavLink()}
      </Nav>
    </Navbar>
  );
};
export default TopNavBar;