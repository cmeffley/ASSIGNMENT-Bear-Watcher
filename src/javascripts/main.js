import bearForm from './bearForm';
import createBearCard from './river';
import bears from './data/bears';
import buttonActions from './data/formInfo';

import '../styles/main.scss';

const init = () => {
  bearForm();
  createBearCard(bears);
  buttonActions();
};

init();
