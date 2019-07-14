import { addCard, updateCard } from '../../modules/Cards';
import { renderCard } from './index';
import { draggable } from '../utils';

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
  console.log(event);
  if (event.toElement.classList.contains('column')) {
    const cardId = draggable.el.dataset.id.replace('card-', '');
    const { columnId } = event.target.dataset;

    event.target.className = 'column';
    event.target.append(draggable.el);

    await updateCard(cardId, { columnId });
  }
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
  const icon = document.createElement('i');
  addTaskBTN.className = 'btn btn-success';
  icon.className = 'fa fa-plus';
  addTaskBTN.append(icon);
  addTaskBTN.addEventListener('click', async () => {
    const title = prompt('Card name', '');
    if (title && title.length) {
      const newTask = await addCard(title, column._id);
      columnEl.append(renderCard(newTask));
    }
  });

  columnHeaderEl.append(addTaskBTN);
  columnEl.append(columnHeaderEl);

  columnEl.addEventListener('dragover', dragOver);
  columnEl.addEventListener('dragenter', dragEnter);
  columnEl.addEventListener('dragleave', dragLeave);
  columnEl.addEventListener('drop', dragDrop);

  return columnEl;
};

export { renderColumn };
