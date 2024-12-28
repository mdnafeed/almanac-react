import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo_icon from "../../../assets/logo.png";
import logo_azad from "../../../assets/logo-azad.png";
import g_20_logo from "../../../assets/g20-logo(1).png";
import { NavLink, Link } from "react-router-dom";
import { RouteConstant } from "../../../shared/constants/route";
import { CONSTANT_LABEL } from "../../../shared/constants/constantData";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  const handleToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

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
      {/* <header> */}
      <Navbar
        expand="lg" 
        className="bg-body-tertiary p-0 no-print-header"
        sticky="top"
        style={{ boxShadow: "0 1px 10px rgba(0,0,0,.2)" }}
      >
        <Container fluid className="p-1">
          <Navbar.Brand>
            <NavLink to={RouteConstant.HOME}>
              <img src={logo_icon} alt="" className={styles.logo} />
            </NavLink>
            {/* <NavLink to="https://amritmahotsav.nic.in/">
                <img src={logo_azad} alt="" className={styles.logo} />
              </NavLink>
              <NavLink to="https://www.g20.in/en/">
                <img src={g_20_logo} alt="" className={styles.logo} />
              </NavLink> */}
          </Navbar.Brand>
          <div className={styles.almanacHeader}>
            <h5>ALMANAC SOCIAL WELFARE</h5>
            <p>(Regd. Under Govt. of NCT of Delhi Registration Act <span className={styles.headerFont}>1882</span>)</p>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                as={Link}
                to={RouteConstant.HOME}
                className={styles.headerLink}
              >
                {CONSTANT_LABEL.HOME}
              </Nav.Link>
              <NavDropdown
                show={dropdownOpen}
                onToggle={handleToggle}
                // onMouseEnter={toggleDropdown}
                // onMouseLeave={toggleDropdown}
                title="ABOUT US"
                className={`${styles.trustDropdown}`}

                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to={RouteConstant.ABOUT_US}>
                  {CONSTANT_LABEL.ABOUT}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={RouteConstant.CONTACT}>
                  {CONSTANT_LABEL.CONTACT}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={RouteConstant.NEWS_MEDIA}>
                  {CONSTANT_LABEL.NEW_AND_MEDIA}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={RouteConstant.BLOG}>
                  {CONSTANT_LABEL.BLOG}
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to={RouteConstant.TERMS_AND_CONDITION}
                >
                  {CONSTANT_LABEL.TERMS_AND_CONDITION}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={RouteConstant.PRIVACY_POLICY}>
                  {CONSTANT_LABEL.PRIVACY_POLICY}
                </NavDropdown.Item>
              </NavDropdown>
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
                to={RouteConstant.MEMBERSHIP}
                className={styles.headerLink}
              >
                MEMBERSHIP
              </Nav.Link>

              <Nav.Link>
                <div id="google_translate_element"></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
