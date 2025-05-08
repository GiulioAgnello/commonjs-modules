const { firstName, lastName } = require("./names");

const init = () => {
  const people = {
    fullName: { firstName, lastName },
  };
  console.log(people);
};

init();
