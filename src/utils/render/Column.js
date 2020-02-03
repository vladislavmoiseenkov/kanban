import { addCard, updateCard } from '../../modules/Cards';
import { renderCard, Modal } from './index';

const dragOver = (event) => {
  event.preventDefault();
};
const dragEnter = (event) => {
  event.preventDefault();
  if (event.toElement.classList.contains('column')) {
    event.target.classList.add('dragEnter');
  }
};
const dragLeave = (event) => {
  event.target.classList.remove('dragEnter');
};
const dragDrop = async (event) => {
  if (event.toElement.classList.contains('column-tasks')) {
    const cardId = event.dataTransfer.getData('card-id');

    const { columnId } = event.target.dataset;

    event.target.className = 'column-tasks';

    const cardEl = document.querySelector(`[data-id='${cardId}']`);
    cardEl.classList.remove('invisible');

    event.target.append(cardEl);
    await updateCard(cardId, { columnId });
  }
};
const openModal = event => {
  const { columnId } = event.target.dataset;
  document.body.append(Modal(columnId));
};

const renderColumn = (column) => {
  const columnEl = document.createElement('div');
  columnEl.className = 'column';
  columnEl.setAttribute('data-column-id', column._id);

  const columnHeaderEl = document.createElement('div');
  columnHeaderEl.className = 'd-flex justify-content-between column-header';

  const titleEl = document.createElement('p');
  titleEl.className = 'column-title w-100';
  titleEl.append(column.name);

  columnHeaderEl.append(titleEl);

  const addTaskBTN = document.createElement('button');
  addTaskBTN.className = 'btn';
  addTaskBTN.innerHTML = '&#10010';
  addTaskBTN.setAttribute('data-column-id', column._id);
  addTaskBTN.addEventListener('click', openModal);

  columnHeaderEl.append(addTaskBTN);
  columnEl.append(columnHeaderEl);

  columnEl.addEventListener('dragover', dragOver);
  columnEl.addEventListener('dragenter', dragEnter);
  columnEl.addEventListener('dragleave', dragLeave);
  columnEl.addEventListener('drop', dragDrop);

  return columnEl;
};

export { renderColumn };
