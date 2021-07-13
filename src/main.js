import {render} from './utils/render';

import MenuComponent from './components/menu.js';

const menuItems = [
  {
    name: '+ ADD NEW TASKS',
  },
  {
    name: 'STATISTICS',
  },
];

const mainBlock = document.querySelector('.main');
const mainControlBlock = mainBlock.querySelector('.main__control');

const menuComponent = new MenuComponent(menuItems);

render(mainControlBlock, menuComponent, `beforeend`);
