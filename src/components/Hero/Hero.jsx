import { NavLink } from "react-router-dom";
import css from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={`container ${css.home_wrap}`}>
        <h1 className={css.title}>Blooms that Speak for You</h1>
        <p className={css.info}>
          Discover handcrafted floral arrangements made with love, care, and a
          touch of magic – delivered fresh, just For U.
        </p>
        <NavLink className={css.btn} to="/catalog">
          Shop now
        </NavLink>
      </div>
    </section>
  );
};
export default Hero;
