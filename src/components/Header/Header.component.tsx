import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to='/frontend-mentor-galleria/' className={styles.logo}>
          <img src={Logo} className={styles.logoIcon} alt='logo' />
        </Link>
        {location.pathname === "/frontend-mentor-galleria/" ? (
          <Link
            to={"/frontend-mentor-galleria/starry-night"}
            className={styles.slideshowLink}
          >
            <span className={styles.slideshow}>START SLIDESHOW</span>
          </Link>
        ) : (
          <Link
            to='/frontend-mentor-galleria/'
            className={styles.slideshowLink}
          >
            <span className={styles.slideshow}>STOP SLIDESHOW</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
