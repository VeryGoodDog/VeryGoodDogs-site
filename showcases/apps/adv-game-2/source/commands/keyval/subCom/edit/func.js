function (args) {
  if (data.keyval[args[0]]) {
    let orig = data.keyval[args[0]];
    data.keyval[args[0]] = args[1]||null;
    contr.send(`Set ${args[0]} to ${data.keyval[args[0]]} from ${orig}`);
  } else {
    contr.send(`Could not find key for ${args[0]}`);
  }
}