import styles from "./ProgressBar.module.scss";

const ProgressBar = ({
  pictureCount,
}: {
  pictureCount: number | undefined;
}) => {
  const totalCount = 15;

  const handleProgress = () => {
    const array = [];
    if (pictureCount === undefined) return [];

    for (let i = 0; i <= totalCount; i++) {
      if (i <= pictureCount) {
        array.push(true);
      } else {
        array.push(false);
      }
    }
    return array;
  };

  return (
    <div className={styles.progress}>
      {handleProgress().map((bar) =>
        bar ? (
          <div className={styles.progressActive}></div>
        ) : (
          <div className={styles.progressInactive}></div>
        )
      )}
    </div>
  );
};

export default ProgressBar;
