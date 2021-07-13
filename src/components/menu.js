import AbstractComponent from './abstract-component';

const createMenuItemTemplate = (menuItem) => {
  return (
    `<input
      type="radio"
      name="control"
      id="control__new-task"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label control__label--new-task">${menuItem.name}</label>`
  );
};

const createMenuMarkup = (menuItems) => {
  return menuItems.map((menuItem) => {
    return createMenuItemTemplate(menuItem);
  }).join('');
};

const createMenuTemplate = (menuItems) => {
  return (
    `<section class="control__btn-wrap">
       ${createMenuMarkup(menuItems)}
    </section>`
  );
};

export default class MenuComponent extends AbstractComponent {
  constructor(menuItems) {
    super();

    this._menuItems = menuItems;
  }

  getTemplate() {
    return createMenuTemplate(this._menuItems);
  }
}
