module.exports = function () {
  const options = ['up', 'right', 'down', 'left'];
  const randoNum = Math.floor(Math.random() * 4);

  return options[randoNum];
}

