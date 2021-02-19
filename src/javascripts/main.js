// import bearForm from './bearForm';

import '../styles/main.scss';

const printToDom = (divId, textToPrint) => {
  console.warn(divId);
  const selectedDiv = document.querySelector(divId);
  console.warn(selectedDiv);
  selectedDiv.innerHtml = textToPrint;
};

const bearForm = () => {
  const screen = `<div class="jumbotron">
  <h1 class="display-4">Welcome to Bear Watcher!</h1>
  <h2>How fat can they get?</h2>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <form class="text-center" id="form">
    <div class="mb-3">
    <label for="addNewBear" class="form-label">Add New Bear</label>
    <input type="text" class="form-control" id="addBear" required>
    <label for="addBearPicture" class="form-label">Add Picture</label>
    <input type="text" class="form-control" id="bearPicture" required>
    </div>
    <button type="submit" class="btn btn-primary" id="add1">Add Bear</button>
    </form>
</div>`;
  console.warn(screen);
  printToDom('body', screen);
};

const init = () => {
  bearForm();
};

init();
