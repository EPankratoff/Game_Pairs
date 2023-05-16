export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (Count) => {
  const cardsIcons = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "football-ball",
    "atom",
    "basketball-ball",
  ];

  switch (Count) {
    case 10:
      return cardsIcons.slice(0, 5);
    case 12:
      return cardsIcons.slice(0, 6);
    case 14:
      return cardsIcons.slice(0, 7);
    case 16:
      return cardsIcons;
    default:
      break;
  }
};
