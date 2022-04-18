import {showModal} from './showModal.js';

const reservForm = document.querySelector('.reservation__form');
const reservationDate = document.getElementById('reservation__date');
const reservPeople = document.getElementById('reservation__people');
const dateAndPeople = document.querySelector('.reservation__data');
const price = document.querySelector('.reservation__price');

export const xhrResponse = (body, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });

  xhr.addEventListener('error', () => {
    reservForm.textContent = `...Упс, что-то пошло не так`;
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
};


export const sendResevationForm = () => {
  reservForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (dateAndPeople.textContent === '' &&
        price.textContent === '') {
      alert('Выберите дату и количество человек');
      return;
    } else {
      const dateInfo = reservationDate.value;
      const priceInfo = price.textContent;
      const peopleInfo = reservPeople.value;
      showModal(dateInfo, priceInfo, peopleInfo);
    }
  });

  // modalBtnEdit.addEventListener('click', () => {
  //   overlay.remove();
  // });


  // modalBtnConfirm.addEventListener('click', () => {
  //   overlay.remove();
  //   xhrResponse(
  //       {
  //         title: reservDate.textContent,
  //         price: reservPrice.textContent,
  //         fullName: reservName.value,
  //         phoneNumber: reservPhone.value,
  //       },
  //       (data) => {
  //         reservForm.textContent =
  //           `Заявка отправлена, номер заявки ${data.id}`;
  //       },
  //   );
  // });
};

// ! Написать функцию которая отправляет данные на сервер,
// ! экспортировать её в файл modal.js  и вставить вызов функции
// ! в событие кнопки !!!
