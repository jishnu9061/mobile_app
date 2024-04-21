import styles from "./navbar.module.css";
import logo_light from "../../assets/logo-white.png";
import logo from "../../assets/jishnu-logo.png";
import logo_black from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/night.png";

export  const NavBar = () => {
    return(
        <div className={styles.navbar}>
           <img src={logo} alt="" className={styles.logo} />
          <ul className={styles.ordered}>
            <li className={styles.list}><a className={styles.atag} href="">Home</a></li>
            <li className={styles.list}><a className={styles.atag} href="">About</a></li>
            <li className={styles.list}><a className={styles.atag} href="">Contact</a></li>
            <li className={styles.list}><a className={styles.atag} href="">Experience</a></li>
          </ul>
        <div className={styles.searchbox}>
          <input type="text" placeholder="Search"  className={styles.input} />
          <img src={search_icon_light} alt="" />
        </div>
        {/* <img src={toogle_light}alt="" className="toogle-icon" /> */}
        </div>
    )
};
export default NavBar;