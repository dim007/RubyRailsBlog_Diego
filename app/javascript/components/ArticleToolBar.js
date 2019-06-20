import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function ArticleToolBar(props) {
    return (
        <Nav tabs>
        <NavItem>
            <NavLink active={props.home} href="/articles">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink active={props.create} href="/articles/new">Create Article</NavLink>
        </NavItem>
        <NavItem>
            <NavLink active={props.contact} href="/contact">Contact</NavLink>
        </NavItem>
        </Nav>
    );

}
