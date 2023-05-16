import { starsGame } from "./startGame.js";

export const createGameMenu = () => {
  const title = document.createElement("h2");
  const gameSection = document.querySelector(".game-section__container");
  gameSection.innerHTML = "";
  title.textContent = "Выбор сложности";
  title.classList.add("game-menu__title");

  const createButton = (dif) => {
    const button = document.createElement("button");

    button.classList.add("game-menu__dif-btn");
    button.textContent = `${dif} карт`;

    button.addEventListener("click", () => starsGame(dif));

    return button;
  };

  gameSection.append(
    title,
    createButton(10),
    createButton(12),
    createButton(14),
    createButton(16)
  );
};
