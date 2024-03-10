import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Andreczko Michalina</h1>

        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>

        <HeaderCartButton onClickSth={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Sery podpuszczkowe" />
      </div>
    </Fragment>
  );
};

export default Header;


