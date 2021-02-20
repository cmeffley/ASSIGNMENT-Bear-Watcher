const bears = [
  {
    name: 'Revel',
    picture: 'https://www.gannett-cdn.com/presto/2018/08/22/USAT/76151925-b45a-45b6-b62d-9fe0b3cc4c77-XXX_Trevor_Hughes_Yellowstone-Teton_August2018_2200.JPG?crop=5199,2960,x0,y1043&width=3200&height=1822&format=pjpg&auto=webp',
  },
  {
    name: 'Bubba',
    picture: 'https://static01.nyt.com/images/2020/09/30/multimedia/00xp-fat-bear-week3/00xp-fat-bear-week3-mobileMasterAt3x.jpg',
  },
  {
    name: 'Popscicle',
    picture: 'https://www.wildnatureimages.com/images/xl/180620-076-Brown-Bear_.jpg',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createBearCard2 = () => {
  let card = '';
  bears.forEach((element) => {
    card += `<div class="card mb-3" style="width: 18rem;" id="card1">
    <div class="card-body text-center">
    <h2 class="card-text">${element.name}</h2>
    <img class="card-img-top" src="${element.picture}" alt="Picture of a bear">
  </div>
  </div>`;
  });
  printToDom('#app2', card);
};

// const seeAllBears = () => {
//   const seeBears = bears.map(newBears);
// };

const buttonActions2 = () => {
  document.querySelector('#all-bears').addEventListener('click', createBearCard2);
};

export default buttonActions2;
