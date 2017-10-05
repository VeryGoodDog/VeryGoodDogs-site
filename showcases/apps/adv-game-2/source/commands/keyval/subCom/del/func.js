function (args) {
  delete data.keyval[args[0]];
  contr.send(`deleted ${args[0]}`);
}