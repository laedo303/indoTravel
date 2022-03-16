export const burger = () => {
  console.log('burger');

  const btnOpen = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.header__menu');

  btnOpen.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
  });
};
