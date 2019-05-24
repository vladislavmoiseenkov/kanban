const cards = [{
    id: 15,
    title: 'Зробити домашку',
    column: 7,
  },
  {
    id: 9,
    title: 'Встановити Node.js',
    column: 8,
  },
];

const getCards = () => {
  return cards;
};

const renderCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';

  const title = document.createElement('p');
  title.className = 'card-title';
  title.append(card.title);

  cardEl.append(title);

  return cardEl;
};

export { getCards, renderCard };
