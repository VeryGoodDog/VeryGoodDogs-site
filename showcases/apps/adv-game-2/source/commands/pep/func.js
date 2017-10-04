function (args) {
  if (args[0]) {
    controllers.send(`Wowiw peps to ${args[0]}`);
  } else {
    controllers.send('no peps :(');
  }
}