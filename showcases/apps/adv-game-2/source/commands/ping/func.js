function (args) {
  if (args[0]) {
    controllers.send(args[0]);
  } else {
    controllers.send('no ping :(');
  }
}