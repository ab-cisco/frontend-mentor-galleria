import { Link } from "react-router-dom";

import BackButtonImage from "../../../../assets/images/icon-back-button.svg";
import NextButtonImage from "../../../../assets/images/icon-next-button.svg";

import styles from "./Navigation.module.scss";

const Navigation = ({
  name,
  artistName,
  prevPicture,
  nextPicture,
}: {
  name: string | undefined;
  artistName: string | undefined;
  prevPicture: string;
  nextPicture: string;
}) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationTitle}>
        <div className={styles.navigationName}>{name}</div>
        <div className={styles.navigationArtist}>{artistName}</div>
      </div>
      <div className={styles.navigationButtons}>
        <Link to={`/${prevPicture}`} className={styles.navigationButtonsLink}>
          <img
            src={BackButtonImage}
            className={styles.navigationButtonsIcon}
            alt='prevButton'
          />
        </Link>
        <Link to={`/${nextPicture}`} className={styles.navigationButtonsLink}>
          <img
            src={NextButtonImage}
            className={styles.navigationButtonsIcon}
            alt='nextButton'
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
