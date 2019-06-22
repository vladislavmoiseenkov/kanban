import { removeCard, updateCard } from '../../modules/Cards';
import { TARGET_BUTTON, TARGET_ICON } from '../constants';

const renderCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';
  cardEl.setAttribute('draggable', 'true');
  cardEl.setAttribute('data-id', `card-${card._id}`);

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-title d-flex justify-content-between';

  const title = document.createElement('p');
  title.append(card.name);
  title.setAttribute('contenteditable', 'true');
  title.setAttribute('data-card-title', `title-${card._id}`);
  title.addEventListener('blur', async (event) => {
    const newName = event.target;

    if (newName.innerText.length && (card.name !== newName.innerText)) {
      await updateCard(card._id, newName.innerText);
      card.name = newName.innerText;
    } else if (card.name !== newName.innerText) {
      newName.append(card.name);
    }
  });

  title.addEventListener('keypress', async (event) => {
    const name = event.target;

    if (event.charCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
    if (event.charCode === 27) {
      name.append(card.name);
      event.target.blur();
    }
  });

  const removeCardBtn = document.createElement('button');
  const trashIcon = document.createElement('i');
  removeCardBtn.addEventListener('click', async (event) => {
    if ((await removeCard(card._id)).message === 'OK') {
      removeCardFromDOM(card._id);
    }
  });

  removeCardBtn.setAttribute('data-id', card._id);
  trashIcon.setAttribute('data-id', card._id);

  removeCardBtn.className = 'remove-card-btn';
  trashIcon.className = 'fa fa-trash-o';


  removeCardBtn.setAttribute('type', 'button');
  removeCardBtn.append(trashIcon);

  cardHeader.append(title);
  cardHeader.append(removeCardBtn);

  cardEl.append(cardHeader);

  return cardEl;
};

const removeCardFromDOM = (id) => {
  document.querySelector(`[data-id='card-${id}']`).remove();
};

export { renderCard, removeCardFromDOM };
