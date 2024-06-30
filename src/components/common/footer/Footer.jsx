import { NavLink } from "react-router-dom";
import { RouteConstant } from "../../../shared/constants/route";
import style from "./Footer.module.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { CONSTANT_LABEL } from "../../../shared/constants/constantData";
import { useEffect } from "react";
function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const links = document.querySelectorAll(`.${style.link}`); // Update the selector to match the className of NavLink
    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", scrollToTop);
      });
    };
  }, []);

  return (
    <div className="container-fluid p-0 mt-2">
      <footer
        className={style.footer_container}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mt-3">
                <h6 className={style.use_usfull_link}>
                  Almanac Social Welfare
                </h6>
                <p className={style.contact_details}>
                  Almanac Social Welfare funds for Education and Healthcare programs
                   for the underprivileged. We do this by giving
                  visibility of the poor and what makes us unique is our
                  transparency level by ensuring each penny received is spent on
                  the needy
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className={style.use_usfull_link}>Useful links</h6>
                <>
                  <p>
                    <NavLink to={RouteConstant.HOME} className={style.link}>
                      {CONSTANT_LABEL.HOME}
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to={RouteConstant.ABOUT_US} className={style.link}>
                      {CONSTANT_LABEL.ABOUT}
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to={RouteConstant.EDUCATION}
                      className={style.link}
                    >
                      {CONSTANT_LABEL.EDUCATION}
                    </NavLink>
                  </p>
                  {/* <p>
                    <NavLink
                      to={RouteConstant.HEALTHCARE}
                      className={style.link}
                    >
                      {CONSTANT_LABEL.HEALTHCARE}
                    </NavLink>
                  </p>
                  <p>
                  <NavLink to={RouteConstant.BLOG} className={style.link}>
                    {CONSTANT_LABEL.BLOG}
                  </NavLink>
                </p> */}
                </>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mt-3">
                <h6 className={style.use_usfull_link}>Useful links</h6>
                <p>
                  <NavLink to={RouteConstant.MEMBERSHIP} className={style.link}>
                    {CONSTANT_LABEL.MEMBERSHIP}
                  </NavLink>
                </p>
                <p>
                  <NavLink to={RouteConstant.NEWS_MEDIA} className={style.link}>
                    {CONSTANT_LABEL.NEW_AND_MEDIA}
                  </NavLink>
                </p>
                <p>
                  <NavLink to={RouteConstant.PAYMENT_CANCELATION} className={style.link}>
                    {CONSTANT_LABEL.PAYMENT_CANCELATION}
                  </NavLink>
                </p>
                {/* <p>
                  <NavLink to={RouteConstant.PAYMENT_CANCELATION} className={style.link}>
                    {CONSTANT_LABEL.PAYMENT_CANCELATION}
                  </NavLink>
                </p>
                <p>
                  <NavLink to={RouteConstant.PRIVACY_POLICY} className={style.link}>
                    {CONSTANT_LABEL.PRIVACY_POLICY}
                  </NavLink>
                </p>
                <p>
                  <NavLink to={RouteConstant.TERMS_AND_CONDITION} className={style.link}>
                    {CONSTANT_LABEL.TERMS_AND_CONDITION}
                  </NavLink>
                </p> */}
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mt-3">
                <h6 className={style.use_usfull_link}>Contact</h6>
                <p className={style.contact_details}>
                  <i className="fas fa-home mr-3"></i>{" "}
                  <b>Registered Address: </b>{CONSTANT_LABEL.REGISTERED_ADDRESS}
                </p>
                <p className={style.contact_details}>
                  <i className="fas fa-home mr-3"></i> <b>Branch Address: </b>
                  {CONSTANT_LABEL.BRANCH_ADDRESS}
                </p>
                {/* <p className={style.contact_details}>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  {CONSTANT_LABEL.SOCIAL_WELFARE_ALMANAC_EMAIL}
                </p>
                <p className={style.contact_details}>
                  <i className="fas fa-phone mr-3"></i><strong>Phone No:</strong> 011 - 43506838
                </p> */}
              </div>
            </div>
          </section>
          <section className="pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="pt-3 pb-3">
                  © 2023 Copyright: &nbsp;
                  <a className={style.link}>
                    {CONSTANT_LABEL.ALMANAC_INFOTECH_INDIA_PRIVATE_LIMITED}
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="text-center btn btn-outline-light btn-floating m-1"
                  role="button"
                  href={RouteConstant.FACEBOOK_PROFILE_URL}
                >
                  <FaFacebookSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1"
                  role="button"
                  href={RouteConstant.TWITTER_PROFILE_URL}
                >
                  <FaTwitterSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1"
                  role="button"
                  href={RouteConstant.LINKEDIN_PROFILE_URL}
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1"
                  role="button"
                  href={RouteConstant.INSTAGRAM_PROFILE_URL}
                >
                  <FaInstagramSquare />
                </a>
                <a
                  className="text-center btn btn-outline-light btn-floating m-1"
                  role="button"
                  href="https://www.youtube.com/channel/UC583mQAnBvt0eEfSZKzLhlA"
                >
                  <FaYoutubeSquare />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
