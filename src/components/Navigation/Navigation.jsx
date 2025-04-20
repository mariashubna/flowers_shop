import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../images/logo4.png";
import { GiFlowerPot } from "react-icons/gi";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";
// import { selectFavorite } from "../../redux/favorites/selectors";
// import { useSelector } from "react-redux";

const Navigation = () => {
  //   const location = useLocation();
  //   const favorites = useSelector(selectFavorite);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };
  return (
    <header className={css.header}>
      <div className={`container ${css.wrap} `}>
        <Link className={css.logo} to="/">
          <img src={logo} width="28" height="28" alt="logo" />
        </Link>
        <nav>
          <NavLink className={getActiveClass} to="/">
            About us
          </NavLink>
          <NavLink className={getActiveClass} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={getActiveClass} to="/flowers">
            Assortment
          </NavLink>
          <NavLink className={getActiveClass} to="/favorites">
            Favorites
          </NavLink>
        </nav>
        <GiFlowerPot className={css.basket} />
        {/* {location.pathname === "/catalog" && favorites.length > 0 && (
          <FavoriteButton />
        )} */}
      </div>
    </header>
  );
};

export default Navigation;
