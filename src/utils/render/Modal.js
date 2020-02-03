import { addCard } from '../../modules/Cards';
import { renderCard } from '../render';

const closeModal = () => {
    document.querySelector('.modal-wrapper').remove();
};

const addNewTask = async ({ columnId, name }) => {
    if (name) {
        const card = await addCard(name, columnId);
        document.querySelector(`.column-tasks[data-column-id="${columnId}"]`).append((renderCard(card)));
        closeModal();
    }
};

export const Modal = columnId => {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    modalWrapper.addEventListener('click', closeModal);

    const dialog = document.createElement('div');
    dialog.classList.add('dialog-window');
    dialog.addEventListener('click', event => event.stopPropagation());

    const input = document.createElement('input');
    input.classList.add('form-control');

    const addBtn = document.createElement('button');
    addBtn.classList.add('btn');
    addBtn.classList.add('btn-success');
    addBtn.innerText = 'Add Task';
    addBtn.addEventListener('click', () => addNewTask({ columnId, name: input.value }));

    dialog.append(input);
    dialog.append(addBtn);

    modalWrapper.append(dialog);

    return modalWrapper;
};
