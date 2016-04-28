import AwesomeUnderline from './awesome-underline';

const el = document.querySelector('#target');
const as = new AwesomeUnderline(el);

const elV = document.querySelector('#vertical');
const asV = new AwesomeUnderline(elV, {
  direction: 'vertical',
});
