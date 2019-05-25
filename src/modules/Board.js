import { getColumns, renderColumn } from './Columns';

const render = () => {
  const app = document.getElementById('app');

  const containerEl = document.createElement('div');
  const rowEl = document.createElement('div');
  const colEl = document.createElement('div');

  containerEl.className = 'container mt-2';
  rowEl.className ='row';
  colEl.className = 'col-12';

  let boardEl = document.createElement('div');

  boardEl.className = 'board';
  boardEl = renderColumn(boardEl, getColumns());

  colEl.append(boardEl);
  rowEl.append(colEl);

  containerEl.append(rowEl);

  app.append(containerEl);

};


export { render };
