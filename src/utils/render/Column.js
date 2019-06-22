import { addCard } from '../../modules/Cards';
import { renderCard } from './index';

const renderColumn = (column) => {

  const columnEl = document.createElement('div');
  columnEl.className = 'column';
  columnEl.setAttribute('data-column-id', column._id);

  const columnHeaderEl = document.createElement('div');
  columnHeaderEl.className = 'd-flex justify-content-between';

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
    const title = prompt('Card name', '')
    if (title && title.length) {
      const newTask = await addCard(title, column._id);
      columnEl.append(renderCard(newTask));
    }
  });

  columnHeaderEl.append(addTaskBTN);
  columnEl.append(columnHeaderEl);

  return columnEl;
};

export { renderColumn };
