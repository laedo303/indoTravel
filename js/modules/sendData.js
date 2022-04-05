export const sendData = () => {
  const reservForm = document.querySelector('.reservation__form');
  const reservDate = document.querySelector('.reservation__data');
  const reservPrice = document.querySelector('.reservation__price');


  const xhrResponse = (body, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

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
          title: reservDate.value,
          body: reservPrice.value,
        },
        (data) => {
          reservForm.textContent = `Заявка успешно отправлена, номер заявки ${data.id}`;
        },
    );
  });
};
