$('#commandLine').keyup(function(event) {
  if (event.key === 'Enter') {
    const message = $('#commandLine').val().trim();
    const args = message.split(/\s+/g);
    const command = args.shift().toLowerCase();
    controllers.consoleClear();
    try {
      if (!commands[command]) return;
      let com = commands[command];
      controllers.getCommand(com,args);
    } catch (error) {
      console.error(error);
    }
  }
});

const controllers = {
  send: function (message) {
    if (typeof message === 'undefined') throw new Error('This requires an argument to send.');
    $('#output').prepend(`${message}\n`);
  },
  consoleClear: function () {
    $('#commandLine').val('');
  },
  getCommand: function (com,args) {
    console.log('command: ', com, 'args: ', args);
    if (com.config.requiresData && !data[com]) {
      data[com] = {};
      console.log(`generated data for: ${com}`);
    }
    if (com.func) {
      console.log('func');
      if (com.config.requiresArgs && (!args || !args[0])) return controllers.send('that command requires arguments.');
      com.func(args);
    } else if (com.subCom[args[0]]) {
      console.log('command');
      let arg = args[0];
      args.shift();
      controllers.getCommand(com.subCom[arg],args);
    } else {
      console.log('no command found.');
    }
  }
};
const data = {}; const commands = {keyval: {config: {
  requiresData: true,
  requiresArgs: true
},subCom: {add: {config: {
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (typeof data.keyval[args[0]] != 'undefined') {
    controllers.send(`${args[0]} already taken.`)
  } else {
    let key = args[0]||'default'
    data.keyval[key] = args[1]||null;
    controllers.send(`generated object named: ${key} with a val of: ${data.keyval[key]}`);
  }
}},del: {config: {
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  delete data.keyval[args[0]];
  controllers.send(`deleted ${args[0]}`);
}},edit: {config: {
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (data.keyval[args[0]]) {
    let orig = data.keyval[args[0]];
    data.keyval[args[0]] = args[1]||null;
    controllers.send(`Set ${args[0]} to ${data.keyval[args[0]]} from ${orig}`);
  } else {
    controllers.send(`Could not find key for ${args[0]}`);
  }
}},read: {config: {
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (data.keyval[args[0]]) {
    controllers.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
  } else {
    controllers.send(`Could not find key for ${args[0]}`);
  }
}}}},pep: {config: {
  requiresData: false,
  requiresArgs: false
},func: function (args) {
  if (args[0]) {
    controllers.send(`Wowiw peps to ${args[0]}`);
  } else {
    controllers.send('no peps :(');
  }
}},ping: {config: {
  requiresData: false,
  requiresArgs: false
},func: function (args) {
  if (args[0]) {
    controllers.send(args[0]);
  } else {
    controllers.send('no ping :(');
  }
}}}