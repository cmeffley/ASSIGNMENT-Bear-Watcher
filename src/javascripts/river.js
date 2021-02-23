import printToDom from './data/printToDom';

const createBearCard = (taco) => {
  let card = '';
  taco.forEach((element) => {
    card += `<div class="card mb-3" style="width: 18rem;" id="card1">
             <div class="card-body text-center">
             <h2 class="card-text">${element.name}</h2>
             <img class="card-img-top" src="${element.picture}" alt="Picture of a bear">
             </div>
             </div>`;
  });
  printToDom('#app2', card);
};

export default createBearCard;
