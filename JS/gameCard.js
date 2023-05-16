export const createGameCard = (defultIcon, flipCardIcon) => {
  const card = document.createElement('div');
  card.classList.add('game-card');

  const notFlippedCard = document.createElement('i');
  const flippedCard = document.createElement('i');

  notFlippedCard.classList.add('fa', `fa-${defultIcon}`);
  flippedCard.classList.add('fa', `fa-${flipCardIcon}`);

  card.append(flippedCard, notFlippedCard);

  return card;


}
