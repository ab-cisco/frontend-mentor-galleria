import artData from "../db/data.json";
import { PictureObject } from "../interfaces/global";

export const getPicture = (name: string = ""): PictureObject | undefined => {
  return artData.find((picture) => picture.key === name);
};

export const getNearbyPictures = (
  name: string = ""
): [number | undefined, string, string] => {
  const findedIndex = artData.findIndex((picture) => picture.key === name);
  const prevPicture =
    findedIndex - 1 < 0
      ? artData[artData.length - 1].key
      : artData[findedIndex - 1].key;
  const nextPicture =
    findedIndex + 1 >= artData.length
      ? artData[0].key
      : artData[findedIndex + 1].key;
  return [findedIndex, prevPicture, nextPicture];
};
