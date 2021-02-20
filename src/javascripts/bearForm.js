// import bears from './river';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearForm = () => {
  const screen = `<div class="jumbotron">
  <h1 class="display-4">Welcome to Bear Watcher!</h1>
  <h2>How fat can they get?</h2>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <form id="form" class="text-center">
    <div class="mb-3">
    <label for="addNewBear" class="form-label">Add New Bear</label>
    <input type="text" class="form-control" id="addBear" placeholder="Name of Bear" required>
    <label for="basic-url" class="form-label">Add Picture</label>
    <input type="text" class="form-control" id="bearPicture" placeholder="Url" required>
    </div>
    <button type="submit" class="btn btn-primary" id="sort1">Submit</button>
    </form>
</div>`;
  printToDom('#app', screen);
};

const formInfo = (e) => {
  e.preventDefault();

  const newBears = [];
  const name = document.querySelector('#addBear').value;
  const picture = document.querySelector('#bearPicture').value;

  const bearObj = {
    name,
    picture,
  };
  newBears.push(bearObj);
  // eslint-disable-next-line no-use-before-define
  createBearCard(newBears);
  // document.querySelector('#form').reset();
};

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

const buttonActions = () => {
  document.querySelector('#sort1').addEventListener('click', formInfo);
  document.querySelector('#all-bears').addEventListener('click');
};

export { bearForm, buttonActions };
