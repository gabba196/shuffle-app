let cardList = [
  { value: 1, color: "#6F98A8" },
  { value: 2, color: "#2B8EAD" },
  { value: 3, color: "#2F454E" },
  { value: 4, color: "#2B8EAD" },
  { value: 5, color: "#2F454E" },
  { value: 6, color: "#BFBFBF" },
  { value: 7, color: "#BFBFBF" },
  { value: 8, color: "#6F98A8" },
  { value: 9, color: "#2F454E" },
];

const generateCards = () => {
  cardList.forEach((card) => {
    const cardItem = document.createElement("div");

    cardItem.innerText = card.value;
    cardItem.className = "card";

    window.innerWidth >= 960
      ? (cardItem.style.background = card.color)
      : (cardItem.style.borderLeft = `10px solid ${card.color}`);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        cardItem.style.borderLeft = null;
        cardItem.style.background = card.color;
      } else {
        cardItem.style.background = null;
        cardItem.style.borderLeft = `10px solid ${card.color}`;
      }
    });
    document.getElementById("cardGrid").appendChild(cardItem);
  });
};

const onShuffle = () => {
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });

  cardList = cardList.sort(() => Math.random() - 0.5);
  generateCards();
};

const onSort = () => {
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });

  cardList = cardList.sort((a, b) => a.value - b.value);
  generateCards();
};
