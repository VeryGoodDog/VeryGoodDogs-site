function (args) {
  if (typeof data.keyval[args[0]] != 'undefined') {
    controllers.send(`${args[0]} already taken.`)
  } else {
    let key = args[0]||'default'
    data.keyval[key] = args[1]||null;
    controllers.send(`generated object named: ${key} with a val of: ${data.keyval[key]}`);
  }
}