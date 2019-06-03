import { getColumns } from './Columns';
import { getCards } from './Cards';
import { renderCard, renderColumn } from '../utils/render';

const render = async () => {
  const app = document.getElementById('app');

  const containerEl = document.createElement('div');
  const rowEl = document.createElement('div');
  const colEl = document.createElement('div');

  containerEl.className = 'container mt-2';
  rowEl.className ='row';
  colEl.className = 'col-12';

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

  colEl.append(boardEl);
  rowEl.append(colEl);

  containerEl.append(rowEl);

  app.append(containerEl);

};


export { render };
