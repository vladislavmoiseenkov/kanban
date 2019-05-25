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
  {
    id: 10,
    title: 'Task 1',
    column: 8,
  },
  {
    id: 11,
    title: 'Task 2',
    column: 9,
  },
  {
    id: 12,
    title: 'Task 3',
    column: 9,
  },
  {
    id: 13,
    title: 'Task 4',
    column: 5,
  },
];

const getCards = () => {
  return cards;
};

const renderCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';
  cardEl.setAttribute('id', `card-${card.id}`);

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-title d-flex justify-content-between';

  const title = document.createElement('p');
  title.append(card.title);

  const removeCardBtn = document.createElement('button');
  const trashIcon = document.createElement('i');
  removeCardBtn.setAttribute('data-id', card.id);
  trashIcon.setAttribute('data-id', card.id);


  removeCardBtn.className = 'remove-card-btn';
  trashIcon.className = 'fa fa-trash-o';


  removeCardBtn.setAttribute('type', 'button');
  removeCardBtn.append(trashIcon);

  cardHeader.append(title);
  cardHeader.append(removeCardBtn);

  cardEl.append(cardHeader);

  return cardEl;
};

const removeCard = (id, cards) => {
  if (!id) {
    return cards;
  }

  document.getElementById(`card-${id}`).remove();

  return cards.filter(card => card.id !== +id);
};

export { getCards, renderCard, removeCard };
