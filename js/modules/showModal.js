import {loadStyle} from './loadStyle.js';
import {xhrResponse} from './sendResevationForm.js';


const reservDate = document.querySelector('#reservation__date');
const reservPrice = document.querySelector('.reservation__price');
const reservName = document.querySelector('#reservation__name');
const reservPhone = document.querySelector('#reservation__phone');
const reservForm = document.querySelector('.reservation__form');


export const showModal = async (dateInfo, priceInfo, peopleInfo) => {
  await loadStyle('../../css/modal.css');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'overlay_confirm');

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');

  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = `Подтверждение заявки`;

  const description = document.createElement('p');
  description.classList.add('modal__text');
  description.textContent = `
      Бронирование путешествия в Индию на ${peopleInfo} чел.
    `;

  const date = document.createElement('p');
  date.classList.add('modal__text');
  date.textContent = `В даты: ${dateInfo}`;

  const price = document.createElement('p');
  price.classList.add('modal__text');
  price.textContent = `${priceInfo}`;

  const modalButton = document.createElement('div');
  modalButton.classList.add('modal__button');

  const confirm = document.createElement('button');
  confirm.classList.add('modal__btn', 'modal__btn_confirm');
  confirm.textContent = 'Подтверждаю';

  const edit = document.createElement('button');
  edit.classList.add('modal__btn', 'modal__btn_edit');
  edit.textContent = 'Изменить данные';

  modalButton.append(confirm, edit);
  modalWindow.append(title, description, date, price, modalButton);
  overlay.append(modalWindow);

  document.body.append(overlay);

  return new Promise(resolve => {
    edit.addEventListener('click', () => {
      overlay.remove();
      resolve(false);
    });

    confirm.addEventListener('click', () => {
      overlay.remove();
      xhrResponse(
          {
            title: reservDate.value,
            price: reservPrice.textContent,
            fullName: reservName.value,
            phoneNumber: reservPhone.value,
          },
          (data) => {
            reservForm.textContent =
      `Заявка отправлена, номер заявки ${data.id}`;
          },
      );

      reservDate.value = '';
      reservPrice.textContent = '';
      reservName.value = '';
      reservPhone.value = '';

      resolve(true);
    });
  });
};
