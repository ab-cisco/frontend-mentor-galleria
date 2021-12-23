import { Masonry } from "masonic";
import { useWindowSize } from "@react-hook/window-size";

import Card from "./components/Card.component";

import artData from "../../db/data.json";
import { handleColumnCount } from "./Gallery.utils";
import { PictureObject } from "../../interfaces/global";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  const galleryData: Array<PictureObject> = artData;
  const [width] = useWindowSize();

  return (
    <div className={styles.masonryGrid}>
      <Masonry
        items={galleryData}
        columnGutter={40}
        columnWidth={310}
        render={Card}
        columnCount={handleColumnCount(width)}
      />
    </div>
  );
};

export default Gallery;
