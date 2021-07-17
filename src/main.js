import {menuItems} from './const';
import {render} from './utils/render';

import MenuComponent from './components/menu';
import FiltersComponent from './components/filters';
import BoardContainerComponent from './components/board-container';
import SortComponent from './components/sort';
import BoardTasksContainerComponent from './components/board-tasks-container';
import TaskComponent from './components/task';

const mainBlock = document.querySelector('.main');
const mainControlBlock = mainBlock.querySelector('.main__control');

const menuComponent = new MenuComponent(menuItems);
const filtersComponent = new FiltersComponent();
const boardContainerComponent = new BoardContainerComponent();
const sortComponent = new SortComponent();
const boardTasksContainerComponent = new BoardTasksContainerComponent();
const taskComponent = new TaskComponent();

render(mainControlBlock, menuComponent);
render(mainBlock, filtersComponent);

render(mainBlock, boardContainerComponent);
render(boardContainerComponent.getElement(), sortComponent);
render(boardContainerComponent.getElement(), boardTasksContainerComponent);
render(boardTasksContainerComponent.getElement(), taskComponent);
render(boardContainerComponent.getElement(), boardTasksContainerComponent);
