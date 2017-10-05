function (args) {
  if (data.keyval[args[0]]) {
    contr.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
  } else {
    contr.send(`Could not find key for ${args[0]}`);
  }
}