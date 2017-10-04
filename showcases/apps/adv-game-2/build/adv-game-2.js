document.getElementById('commandLine').addEventListener('keyup',function (event) {
  if (event.key === 'Enter') {
    var message = document.getElementById('commandLine').value.trim();
    var args = message.split(/\s+/g);
    var command = args.shift().toLowerCase();
    document.getElementById('commandLine').value = '';
    try {
      if (!commands[command]) {
        if (data.waiting[command]) {
          data.waiting[command].func(data.waiting[command].args);
        }
        return;
      }
      let com = commands[command];
      controllers.getCommand(com,args);
    } catch (error) {
      console.error(error);
    }
  }
});
var data = {
  waiting: []
};var commands = {keyval: {config: {
  name: 'keyval',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},subCom: {add: {config: {
  name: 'add',
  dataName: 'keyval',
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
  name: 'del',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  delete data.keyval[args[0]];
  controllers.send(`deleted ${args[0]}`);
}},edit: {config: {
  name: 'edit',
  dataName: 'keyval',
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
  name: 'read',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (data.keyval[args[0]]) {
    controllers.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
  } else {
    controllers.send(`Could not find key for ${args[0]}`);
  }
}}}},start: {config: {
  name: 'start',
  dataName: 'start',
  requiresData: true,
  requiresArgs: false
},func: function (args) {
  controllers.send('aaa');
  controllers.wait('te', args, function (args) {
    controllers.send(args);
  });
}}};var controllers = {consoleClear: function () {
  document.getElementById('commandLine').value = '';
},getCommand: function (com,args) {
  if (com.config.requiresData && !data[com.config.dataName]) {
    data[com.config.dataName] = {};
  }
  if (com.func) {
    if (com.config.requiresArgs && (!args || !args[0])) return;
    com.func(args);
  } else if (com.subCom[args[0]]) {
    let arg = args[0];
    args.shift();
    controllers.getCommand(com.subCom[arg],args);
  }
},runCommand: function (path,args,com) {
  if(!com) com = commands;
  var p = path.shift();
  console.log(path);
  if (!path || !path[0]) {
    if (com[p].config.requiresData && !data[com[p].config.dataName]) {
      data[com[p].config.dataName] = {};
    }
    if(!args || !args[0]) args = null;
    if(com[p].func) com[p].func(args);
  } else {
    console.log(com[p].subCom);
    controllers.runCommand(path,args,com[p].subCom);
  }
},send: function (message) {
  if (typeof message === 'undefined') throw new Error('This requires an argument to send.');
  document.getElementById('output').prepend(`${message}\n`);
},wait: function (trigger, args, after) {
  var waitObj = {};
  waitObj.func = after;
  waitObj.args = args;
  data.waiting[trigger] = waitObj;
}}