import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "shards-react";

// "m-auto" aligns center aprrently
export default function ArticleToolBar(props) {
    return (
        <Navbar type="dark" fixed="bottom" theme="dark" expand="md">
            <Nav navbar className="m-auto"> 
                <NavItem>
                <NavLink href="/articles" active>
                    Home
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://www.instagram.com/bumonium/">
                    <img src="https://www.pngkey.com/png/full/47-476407_ig-png-png-free-stock-instagram-logo-small.png" width="30" height="30"></img>
                    </NavLink>
                </NavItem>
            </Nav>

        </Navbar>

    );

}
