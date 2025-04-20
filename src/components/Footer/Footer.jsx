import css from "./Footer.module.css";
import logo from "../../images/logo4.png";
import { Link } from "react-router-dom";
import { MdOutlineLocalFlorist } from "react-icons/md";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.wrap}`}>
        <Subscribe />
        <div className={css.main_wrap}>
          <div className={css.logo_wrap}>
            <Link className={css.logo} to="/">
              <img src={logo} width="28" height="28" alt="logo" />
            </Link>
            <p>
              Handcrafted floral art for every moment. Inspired by nature,
              created with love.
            </p>
          </div>
          <div>
            <h3 className={css.subtitle}>Contact Us</h3>
            <ul className={css.info_wrap}>
              <li>
                <MdOutlineLocalFlorist />
                <a
                  className={css.info}
                  href="https://www.google.com/maps/place/Herne,+Germany"
                  target="_blank"
                >
                  Herne, Germany
                </a>
              </li>

              <li>
                <MdOutlineLocalPostOffice />
                <a className={css.info} href="mailto:info@foru-flowers.com">
                  info@foru-flowers.com
                </a>
              </li>
              <li>
                <MdOutlinePhoneAndroid />
                <a className={css.info} href="tel:+490203045006">
                  0203045006
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={css.subtitle}>Connect</h3>
            <ul className={css.info_wrap}>
              <li>
                <FaLinkedinIn />
                <a
                  className={css.info}
                  href="https://www.linkedin.com/in/mariia-svinitska/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <LuGithub />
                <a
                  className={css.info}
                  href="https://github.com/mariashubna"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={css.subtitle}>Opening Hours</h3>
            <ul className={css.info_wrap}>
              <li className={css.info}>Mon–Fri: 09:00 – 18:00</li>
              <li className={css.info}>Sat: 10:00 – 15:00</li>
              <li className={css.info}>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="container">
        © 2025 ForU Flower Boutique. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
