const selects = document.querySelectorAll('select');
const allForms = document.querySelectorAll('form');

const dates = document.getElementsByName('dates');
const people = document.getElementsByName('people');

const loadData = async () => {
  const db = await fetch('./db.json');
  const data = await db.json();
  return data;
};

console.log('loadData', await loadData());
