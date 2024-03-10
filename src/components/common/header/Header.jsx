import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo_icon from "../../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { RouteConstant } from "../../../shared/constants/route";
import { CONSTANT_LABEL } from "../../../shared/constants/constantData";
function Header() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
    <header>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary p-0 no-print-header"
          sticky="top"
          style={{ boxShadow: "0 1px 10px rgba(0,0,0,.2)" }}
        >
          <Container fluid className="p-1">
            <NavLink to={RouteConstant.HOME}   >
              <img src={logo_icon} alt="" className={styles.logo} />
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <NavLink to={RouteConstant.HOME}  >
                  <img src={logo_icon} alt="" className={styles.logo} />
                </NavLink>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.HOME}
                    className={styles.headerLink}
                  >
                    {CONSTANT_LABEL.HOME}
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.ABOUT_US}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.ABOUT}
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.EDUCATION}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.EDUCATION}                  
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.HEALTHCARE}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.HEALTHCARE}
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.BLOG}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.BLOG}
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.MEMBERSHIP}
                    className={styles.headerLink}

                  >
                    MEMBERSHIP
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.NEWS_MEDIA}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.NEW_AND_MEDIA}
                  </Nav.Link>
                  <Nav.Link
                    
                    as={Link}
                    to={RouteConstant.CONTACT}
                    className={styles.headerLink}

                  >
                    {CONSTANT_LABEL.CONTACT}
                  </Nav.Link>
                  <div id="google_translate_element"></div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       
      ))}
       </header>
    </>
  );
}

export default Header;
