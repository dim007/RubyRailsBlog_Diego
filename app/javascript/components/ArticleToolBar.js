import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "shards-react";

// "m-auto" aligns center aprrently
export default function ArticleToolBar(props) {
    return (
        <Navbar type="dark" fixed="bottom" theme="dark" expand="md">
            <Nav navbar className="m-auto"> 
                <NavItem>
                    <NavLink href="/articles" active>
                    <img src="https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_960_720.png" width="30" height="30" />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://www.instagram.com/bumonium/">
                    <img src="https://www.pngkey.com/png/full/47-476407_ig-png-png-free-stock-instagram-logo-small.png" width="30" height="30"></img>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://www.linkedin.com/in/diego-martinez-001/">
                    <img src="https://www.iconsdb.com/icons/preview/gray/linkedin-3-xxl.png" width="30" height="30" />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://www.youtube.com">
                    <img src="http://www.logospng.com/images/129/icono-youtube-la-red-social-gratis-de-grey-icons-129206.png" width="30" height="30" />
                    </NavLink>
                </NavItem>

            </Nav>

        </Navbar>

    );

}
