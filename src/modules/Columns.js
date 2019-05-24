import { getCards, renderCard } from './Cards';

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
    id: 8,
    title: 'Done',
  }
];

const getColumns = () => {
  return columns;
};

const renderColumn = (boardEl, columns) => {

  for (let column of columns) {
    console.log(column);
    const columnEl = document.createElement('div');
    columnEl.className = 'column';

    const titleEl = document.createElement('p');
    titleEl.className = 'column-title';
    titleEl.append(column.title);
    columnEl.append(titleEl);

    for (let card of getCards()) {
      if (card.column === column.id) {
        columnEl.append(renderCard(card));
      }
    }

    boardEl.append(columnEl);

  }

  return boardEl;
};

export { getColumns, renderColumn };
