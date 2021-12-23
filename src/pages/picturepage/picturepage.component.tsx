import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";

import { getPicture } from "../../utils/picture";

import { ReactComponent as ViewButtonImage } from "../../assets/images/icon-view-image.svg";

import styles from "./picturepage.module.scss";

const PictureTitle = ({
  name,
  artistName,
  artisImage,
}: {
  name: string;
  artistName: string;
  artisImage: string;
}) => {
  return (
    <div className={styles.title}>
      <div className={styles.titleText}>
        <div className={styles.titleName}>{name}</div>
        <div className={styles.titleArtistName}>{artistName}</div>
      </div>
      <div className={styles.titleArtistImage}>
        <img src={artisImage} alt={artistName} />
      </div>
    </div>
  );
};

const PictureDescription = ({
  description,
  year,
  link,
}: {
  description: string;
  year: number;
  link: string;
}) => {
  return (
    <div className={styles.description}>
      <div className={styles.descriptionYear}>{year}</div>
      <div className={styles.descriptionBody}>
        <div className={styles.descriptionText}>{description}</div>
        <a href={link} className={styles.descriptionLink}>
          GO TO SOURCE
        </a>
      </div>
    </div>
  );
};

const PictureLightBox = ({ image, name }: { image: string; name: string }) => {
  const [isLightBoxShow, setIsLightBoxShow] = useState(false);

  const handleClick = () => setIsLightBoxShow(!isLightBoxShow);

  return (
    <>
      <div className={styles.lightboxButton} onClick={handleClick}>
        <ViewButtonImage />
        <div className={styles.lightboxText}>VIEW IMAGE</div>
      </div>
      {isLightBoxShow && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxWrapper}>
            <div className={styles.lightboxWrapperContent}>
              <span
                className={styles.lightboxCloseButton}
                onClick={handleClick}
              >
                CLOSE
              </span>
              <img src={image} alt={name} className={styles.lightboxImage} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PictureImage = ({
  image,
  lightboxImage,
  name,
}: {
  image: string;
  lightboxImage: string;
  name: string;
}) => {
  return (
    <div className={styles.picture}>
      <img src={image} alt={name} className={styles.pictureImage} />
      <PictureLightBox image={lightboxImage} name={name} />
    </div>
  );
};

const PicturePage = () => {
  const params = useParams();
  const picture = getPicture(params.pictureName);
  const [width] = useWindowSize();

  if (!picture) return null;

  return (
    <div className={styles.content}>
      <PictureImage
        image={
          width <= 375 ? picture.images.hero.small : picture.images.hero.large
        }
        lightboxImage={picture.images.gallery}
        name={picture.name}
      />
      <PictureTitle
        name={picture.name}
        artistName={picture.artist.name}
        artisImage={picture.artist.image}
      />
      <PictureDescription
        description={picture.description}
        year={picture.year}
        link={picture.source}
      />
    </div>
  );
};

export default PicturePage;
