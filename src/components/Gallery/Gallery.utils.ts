export const handleColumnCount = (width: number): number => {
  if (width <= 375) {
    return 1;
  }

  if (width > 375 && width <= 768) {
    return 2;
  }

  if (width > 768 && width <= 1440) {
    return 4;
  }

  return 4;
};
