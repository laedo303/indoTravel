export const sendData = () => {
  const reservForm = document.querySelector('.reservation__form');
  const reservDate = document.querySelector('.reservation__data');
  const reservPrice = document.querySelector('.reservation__price');
  const reservName = document.querySelector('#reservation__name');
  const reservPhone = document.querySelector('#reservation__phone');

  const xhrResponse = (body, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', () => {
      const data = JSON.parse(xhr.response);
      callback(data);
    });

    xhr.addEventListener('error', () => {
      console.log('error');
    });

    xhr.send(JSON.stringify(body));
  };

  reservForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhrResponse(
        {
          title: reservDate.textContent,
          price: reservPrice.textContent,
          fullName: reservName.value,
          phoneNumber: reservPhone.value,
        },
        (data) => {
          reservForm.textContent = `Заявка отправлена, номер заявки ${data.id}`;
        },
    );
  });
};
