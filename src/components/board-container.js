import AbstractComponent from './abstract-component';

const createBoardContainerTemplate = () => {
  return (
    '<section class="board container"></section>'
  );
};

export default class BoardContainer extends AbstractComponent {
  getTemplate() {
    return createBoardContainerTemplate();
  }
}
