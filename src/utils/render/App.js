import { renderBoard } from '../render';

const render = async () => {
  const app = document.getElementById('app');

  const containerEl = document.createElement('div');
  const rowEl = document.createElement('div');
  const colEl = document.createElement('div');

  containerEl.className = 'container mt-2';
  rowEl.className ='row';
  colEl.className = 'col-12';

const boardEl = await renderBoard();

  colEl.append(boardEl);
  rowEl.append(colEl);

  containerEl.append(rowEl);

  app.append(containerEl);

};


export { render };
