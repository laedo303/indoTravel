export const sendFooterForm = () => {
  const footerForm = document.querySelector('.footer__form');
  const footerInput = document.querySelector('.footer__input');

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

  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhrResponse(
        {
          email: footerInput.value,
        },
        (data) => {
          footerForm.textContent =
          `Наши менеджеры свяжутся с вами в течении 3-х рабочих дней`;
        },
    );
  });
};
