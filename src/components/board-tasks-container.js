import AbstractComponent from './abstract-component';

const createBoardTasksContainerTemplate = () => {
  return (
    '<div class="board__tasks"><a></a></div>'
  );
};

export default class BoardTasksContainerComponent extends AbstractComponent {
  getTemplate() {
    return createBoardTasksContainerTemplate();
  }
}
