import { useLocation } from "react-router-dom";

import ProgressBar from "./components/ProgressBar/ProgressBar.component";
import Navigation from "./components/Navigation/Navigation.component";
import { getNearbyPictures, getPicture } from "../../utils/picture";

import styles from "./Footer.module.scss";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/frontend-mentor-galleria/") return null;

  const pcitureName = location.pathname.slice(1);
  const picture = getPicture(pcitureName);

  if (picture === undefined) return null;

  const [index, prevPicture, nextPicture] = getNearbyPictures(pcitureName);

  return (
    <div className={styles.footer}>
      <ProgressBar pictureCount={index} />
      <Navigation
        name={picture?.name}
        artistName={picture?.artist.name}
        prevPicture={prevPicture}
        nextPicture={nextPicture}
      />
    </div>
  );
};

export default Footer;
