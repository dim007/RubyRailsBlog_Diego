import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";

export default class ArticleNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  //className="ml-auto" this aligns to the right
  render() {
    return (
      <Navbar type="dark" fixed="top" theme="dark" expand="md">
        <NavbarBrand href="/articles">Diego Martinez</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/about">
                About
              </NavLink>
            </NavItem>
            <Dropdown open={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>Contact</DropdownToggle>
              <DropdownMenu>
                <DropdownItem><a href="mailto:diegomartinezzero@gmail.com?Subject=Hello%20again" target="_top">Email</a></DropdownItem>
                <DropdownItem href="#"><a href="https://www.linkedin.com/in/diego-martinez-001/">LinkedIn</a></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
          <Nav navbar className="ml-auto"> 
           <NavItem>
              <NavLink href="#" active>
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}