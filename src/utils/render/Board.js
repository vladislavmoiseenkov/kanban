import { getColumns, getCards } from './../../modules';
import { renderColumn, renderCard } from '../render';

export const renderBoard = async () => {
  let boardEl = document.createElement('div');

  boardEl.className = 'board';

  const cards = await getCards();
  const columns = await getColumns();

  columns.forEach(column => {
    const columnEl = renderColumn(column);
    const tasksList = document.createElement('div');
    tasksList.setAttribute('data-column-id', column._id);
    tasksList.classList.add('column-tasks');
    cards
      .filter(card => card.columnId === column._id)
      .map(renderCard)
      .forEach(cardEl => tasksList.append(cardEl));
    columnEl.append(tasksList);
    boardEl.append(columnEl);
  });

  return boardEl;
};
