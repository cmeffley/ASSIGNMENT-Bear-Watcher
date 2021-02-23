import bears from './bears';
import createBearCard from '../river';

const formInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#addBear').value;
  const picture = document.querySelector('#bearPicture').value;

  const bearObj = {
    name,
    picture,
  };
  bears.push(bearObj);
  createBearCard(bears);
  document.querySelector('form').reset();
};

const buttonActions = () => {
  document.querySelector('#sort1').addEventListener('click', formInfo);
};

export default buttonActions;
