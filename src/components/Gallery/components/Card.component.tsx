import { Link } from "react-router-dom";

import styles from "./Card.module.scss";
import { PictureObject } from "../../../interfaces/global";
import { artsHeight } from "./Card.utils";

const Card = ({ data, index }: { data: PictureObject; index: number }) => {
  return (
    <Link to={data.key} key={index}>
      <div
        className={styles.card}
        style={{
          height: `${artsHeight[index]}`,
          backgroundImage: `url(${data.images.gallery})`,
        }}
      >
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <div className={styles.cardName}>{data.name}</div>
            <div className={styles.cardArtist}>{data.artist.name}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
