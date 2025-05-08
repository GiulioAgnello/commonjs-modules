const { fullName } = require("./names");

const { hobbyes } = require("./hobbies");

const init = () => {
  const people = {
    fullname: { fullName },
    hobbies: { hobbyes },
  };
  console.log(people);
};
init();
