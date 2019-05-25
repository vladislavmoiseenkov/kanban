import { getCards, renderCard, removeCard } from './Cards';

const columns = [
  {
    id: 5,
    title: 'ToDo',
  },
  {
    id: 7,
    title: 'In Progress',
  },
  {
    id: 9,
    title: 'Resolved',
  },
  {
    id: 8,
    title: 'Done',
  }
];

const getColumns = () => {
  return columns;
};

const renderColumn = (boardEl, columns) => {
  let cards = getCards();

  for (let column of columns) {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.addEventListener('click', (event) => {
      cards = removeCard(event.target.dataset.id, cards);
    });

    const titleEl = document.createElement('p');
    titleEl.className = 'column-title';
    titleEl.append(column.title);
    columnEl.append(titleEl);

    for (let card of cards) {
      if (card.column === column.id) {
        columnEl.append(renderCard(card));
      }
    }

    boardEl.append(columnEl);

  }

  return boardEl;
};

export { getColumns, renderColumn };
