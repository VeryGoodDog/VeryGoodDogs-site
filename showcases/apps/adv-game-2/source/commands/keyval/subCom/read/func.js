function (args) {
  if (data.keyval[args[0]]) {
    controllers.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
  } else {
    controllers.send(`Could not find key for ${args[0]}`);
  }
}