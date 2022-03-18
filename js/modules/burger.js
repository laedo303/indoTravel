export const burger = () => {
  const menu = document.querySelector('.header__menu');

  document.body.addEventListener('click', (e) => {
    const target = e.target;
    console.log('target: ', target);

    if (target.classList.contains('header__menu-button')) {
      menu.classList.toggle('header__menu_active');
    } else {
      menu.classList.remove('header__menu_active');
    }
  });
};
