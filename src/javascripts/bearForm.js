import printToDom from './data/printToDom';

const bearForm = () => {
  const screen = `<div class="jumbotron">
                    <h1 class="display-4">Welcome to Bear Watcher!</h1>
                    <h2>How fat can they get?</h2>
                    <p class="lead">Every year bears gather at the Brooks River in Katmai National Park to prepare for hibernation.</p>
                    <hr class="my-4">
                    <p>Add your favorite bear that you've spotted at the river. Post their name and picture so we can keep track of how big they get!</p>
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

export default bearForm;
