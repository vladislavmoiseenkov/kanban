import { getColumns, getCards } from './../../modules';
import { renderColumn, renderCard } from '../render';

export const renderBoard = async () => {
  let boardEl = document.createElement('div');

  boardEl.className = 'board';

  const cards = await getCards();
  const columns = await getColumns();

  columns.forEach(column => {
    const columnEl = renderColumn(column);
    cards
      .filter(card => card.columnId === column._id)
      .map(renderCard)
      .forEach(cardEl => columnEl.append(cardEl));
    boardEl.append(columnEl);
  });

  return boardEl;
};
