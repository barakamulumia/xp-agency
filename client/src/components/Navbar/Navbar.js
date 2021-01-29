import React, { Fragment, useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { DecisionDialog } from "../";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const toggleMobileMenu = () =>
    setClick((state) => {
      return !state;
    });

  const closeMobileMenu = () => {
    if (click) {
      setClick(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      <IconContext.Provider
        value={{
          color: "#fff",
        }}
      >
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              XpressKenya
            </NavLogo>
            <MobileIcon onClick={toggleMobileMenu}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={closeMobileMenu} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/discover">Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                {button ? (
                  <DecisionDialog
                    actionText="Sign Up"
                    btnText="Sign Up"
                    primary="true"
                    small="true"
                  />
                ) : (
                  <DecisionDialog
                    actionText="Sign Up"
                    btnText="Sign Up"
                    big="true"
                    primary="true"
                  />
                )}
              </NavItem>
              <NavItem>
                {button ? (
                  <DecisionDialog
                    actionText="Sign In"
                    btnText="Sign In"
                    secondary="true"
                    small="true"
                  />
                ) : (
                  <DecisionDialog
                    actionText="Sign In"
                    btnText="Sign In"
                    secondary="true"
                    big="true"
                  />
                )}
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
