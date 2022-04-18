export const sendFooterForm = () => {
  const footerForm = document.querySelector('.footer__form');
  const footerInput = document.querySelector('.footer__input');
  const footerFormTitle = document.querySelector('.footer__form-title');
  const footerText = document.querySelector('.footer__text');
  const footerInputWrap = document.querySelector('.footer__input-wrap');

  const xhrResponse = (body, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', () => {
      const data = JSON.parse(xhr.response);
      callback(data);
    });

    xhr.addEventListener('error', () => {
      footerFormTitle.textContent =
      `...Упс, что-то пошло не так`;

      footerText.remove();
      footerInputWrap.remove();

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
          footerFormTitle.textContent =
          `Ваша заявка успешно отправлена`;

          footerText.textContent =
          `Наши менеджеры свяжутся с вами в течении 3-х рабочих дней`;

          footerInputWrap.remove();
        },
    );
  });
};
