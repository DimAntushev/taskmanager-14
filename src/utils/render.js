const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, position = 'beforeend') => {
  switch(position) {
    case 'afterbegin':
      container.prepend(element.getElement());
      break;
    case 'beforeend':
      container.append(element.getElement());
      break;
    case 'afterend':
      container.after(element.getElement());
      break;
    case 'beforebegin':
      container.before(element.getElement());
      break;
  }
};

const replace = (newElement, oldElement) => {
  newElement.getElement().replaceWith(oldElement);
};

const remove = (element) => {
  element.getElement().remove();
};

export {
  createElement,
  render,
  replace,
  remove
};
