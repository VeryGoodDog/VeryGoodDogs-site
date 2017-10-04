function (args) {
  delete data.keyval[args[0]];
  controllers.send(`deleted ${args[0]}`);
}