export const countdownTimer = () => {
  const discountText = document.querySelector('.hero__text');
  const herotimer = document.querySelector('.hero__timer');
  const daysNum = document.querySelector('.timer__count_days');
  const hoursNum = document.querySelector('.timer__count_hours');
  const minNum = document.querySelector('.timer__count_minutes');
  const deadline = herotimer.dataset.timerDeadline;
  const daysText = document.querySelector('.timer__units_days');
  const hoursText = document.querySelector('.timer__units_hours');
  const minText = document.querySelector('.timer__units_minutes');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();

    const timeRemaining = dateStop - dateNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 60);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, seconds, minutes, hours, days};
  };


  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ?
      2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };


  const start = () => {
    const timer = getTimeRemaining();
    const days = timer.days;
    const hours = timer.hours;
    const minutes = timer.minutes;

    daysNum.textContent = days;
    hoursNum.textContent = (hours < 10) ? ('0' + hours) : hours;
    minNum.textContent = (minutes < 10) ? ('0' + minutes) : minutes;

    daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minText.textContent = declOfNum(minutes,
        ['минута', 'минуты', 'минут']);


    const intervalId = setTimeout(start, 1000);

    if (timer.timeRemaining < 60000) {
      clearTimeout(intervalId);
      discountText.style.display = 'none';
      herotimer.style.display = 'none';
    }
  };

  start();
};
