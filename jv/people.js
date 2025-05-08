const { fullName } = require("./names");

const { hobbyes } = require("./hobbies");

const init = () => {
  const fullname = fullName("giulio", "agnello");
  const hobbies = hobbyes("calcio", "motori", "green");
  const people = {
    fullname: fullname,
    hobbies: hobbies,
  };
  console.log(people);
};
init();
