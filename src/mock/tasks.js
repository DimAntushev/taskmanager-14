const generateTask = () => {
  return {};
};

const generateTasks = (count) => {
  return new Array(count)
    .fill('')
    .map(() => {
      return generateTask();
    });
};

export {generateTasks};
