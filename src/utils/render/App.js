import { getBGImage } from '../../modules';
import { renderBoard } from '../render';

const render = async () => {
  const app = document.getElementById('app');

  const photo = await getBGImage();

  app.style.backgroundImage = `url(${photo})`;

  const containerEl = document.createElement('div');
  const rowEl = document.createElement('div');
  const colEl = document.createElement('div');

  containerEl.className = 'container h-100';
  rowEl.className ='row h-100';
  colEl.className = 'col-12 h-100';

const boardEl = await renderBoard();

  colEl.append(boardEl);
  rowEl.append(colEl);

  containerEl.append(rowEl);

  app.append(containerEl);

};


export { render };
