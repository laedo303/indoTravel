const tourDate = document.getElementById('tour__date');
const reservationDate = document.getElementById('reservation__date');

const tourPeople = document.getElementById('tour__people');

const loadTours = async () => {
  const db = await fetch('./db.json');
  const data = await db.json();
  return data;
};

const createElemDate = (elem) => {
  const dateOption = document.createElement('option');
  dateOption.className = 'tour__option';
  dateOption.setAttribute('value', elem);
  dateOption.textContent = elem;
  return dateOption;
};

export const renderTours = async () => {
  const data = await loadTours();

  const tours = data.map(elem => {
    const tour = createElemDate(elem.date);
    return tour;
  });

  tourDate.append(...tours); // ! почему этот не работает ?
  reservationDate.append(...tours); // А этот работает ?
};

