/* eslint-disable max-len */
export const renderTours = async () => {
  const tourDate = document.getElementById('tour__date');
  const reservationDate = document.getElementById('reservation__date');
  const tourPeople = document.getElementById('tour__people');
  const reservPeople = document.getElementById('reservation__people');
  const datesName = document.getElementsByName('dates');
  const peopleName = document.getElementsByName('people');

  // ! getting data of all tours:
  const loadTours = async () => {
    const db = await fetch('./db.json');
    const data = await db.json();
    return data;
  };
  const loadToursData = await loadTours();

  // ! create date selects:
  const createFirstOption = (elem) => {
    const firstOption = document.createElement('option');
    firstOption.value = '';
    firstOption.className = 'tour__option';
    firstOption.textContent = elem;
    return firstOption;
  };
  const createDateOption = (elem) => {
    const dateOption = document.createElement('option');
    dateOption.value = elem;
    dateOption.className = 'tour__option';
    dateOption.textContent = elem;
    return dateOption;
  };
  const createTourDate = () => {
    tourDate.replaceChildren(createFirstOption('Выберите дату'));
    reservationDate.replaceChildren(createFirstOption('Выберите дату'));

    loadToursData.forEach(elem => {
      tourDate.append(createDateOption(elem.date));
      reservationDate.append(createDateOption(elem.date));
    });

    if (reservationDate.hasChildNodes()) {
      const elems = reservationDate.childNodes;
      for (let i = 0; i < elems.length; ++i) {
        elems[i].classList.add('reservation__option');
      }
    }
  };
  createTourDate();

  // ! create people selects:
  const renderPeopleOption = () => {
    tourPeople.replaceChildren(createFirstOption('Количество человек'));
    reservPeople.replaceChildren(createFirstOption('Количество человек'));

    datesName.forEach(select => {
      select.addEventListener('change', () => {
        datesName.forEach(dateSelect => {
          dateSelect.value = select.value;
        });

        tourPeople.replaceChildren(createFirstOption('Количество человек'));
        reservPeople.replaceChildren(createFirstOption('Количество человек'));

        const tour = loadToursData.find(tour => select.value === tour['date']);

        for (let i = tour['min-people']; i <= tour['max-people']; ++i) {
          tourPeople.append(createDateOption(i));
          reservPeople.append(createDateOption(i));
        }

        if (reservPeople.hasChildNodes()) {
          const elems = reservPeople.childNodes;
          for (let i = 0; i < elems.length; ++i) {
            elems[i].classList.add('reservation__option');
          }
        }
      });
    });

    peopleName.forEach(peopleSelect => {
      peopleSelect.addEventListener('change', () => {
        peopleName.forEach(reservPeopleSelect => {
          reservPeopleSelect.value = peopleSelect.value;
        });
      });
    });
  };
  renderPeopleOption();


  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ?
      2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };


  const showInfoTour = data => {
    const DateAndPeople = document.querySelector('.reservation__data');
    const price = document.querySelector('.reservation__price');
    DateAndPeople.textContent = '';
    price.textContent = '';

    reservPeople.addEventListener('change', () => {
      const countPeople = parseInt(reservPeople.value);
      if (isNaN(countPeople)) {
        DateAndPeople.textContent = '';
        price.textContent = '';
      } else {
        const tour = data.find(tour => reservationDate.value === tour['date']);
        DateAndPeople
            .textContent =
        `${tour['date']}, ${countPeople} ${declOfNum(countPeople, ['человек', 'человека', 'человек'])}`;

        price.textContent = new Intl.NumberFormat('ru', {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        }).format(tour['price'] * countPeople);
      }
    });

    reservationDate.addEventListener('focus', () => {
      DateAndPeople.textContent = '';
      price.textContent = '';
    });
  };
  showInfoTour(loadToursData);
};
