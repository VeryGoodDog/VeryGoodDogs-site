var commandLine = document.getElementById('commandLine');
commandLine.addEventListener('keyup',function (event) {
  var wait = commandLine.value;
  for (var trigger in data.waiting) {
    if (wait.includes(trigger)) {
      data.waiting[trigger].func(data.waiting[trigger].args);
      if (data.waiting[trigger].delOnFin) delete data.waiting[trigger];
    }
  }
  if (event.key === 'Enter') {
    var message = commandLine.value.trim().replace(/\n+/g,' ');
    commandLine.value = '';
    data.pastCommands.unshift(message);
    var args = message.split(/\s+/g);
    var command = args.shift().toLowerCase();
    try {
      if (!commands[command]) return;
      var com = commands[command];
      console.log(com);
      contr.getCommand(com,args);
    } catch (error) {
      console.error(error);
    }
    return;
  }
});
commandLine.addEventListener('keydown',function (event) {
  if (event.key === 'ArrowUp') {
    data.currentCommand = commandLine.value.trim().replace(/\n+/g,' ');
    var pc = data.pastCommands;
    data.pci++;
    data.pci = data.pci >= pc.length - 1 ? pc.length - 1 : data.pci;
    commandLine.value = pc[data.pci] ? pc[data.pci] : '';
  }
  if (event.key === 'ArrowDown') {
    var pc = data.pastCommands;
    data.pci--;
    data.pci = data.pci < 0 ? 0 : data.pci;
    commandLine.value = pc[data.pci] ? pc[data.pci] : '';
  }
});
var data = {
  waiting: [],
  pastCommands: [],
  currentCommand: '',
  pci: 0
};var commands = {keyval: {config: {
  name: 'keyval',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: false
},func: function (args) {
  contr.send('use add, del, edit, or read to access the keyval storage');
},subCom: {add: {config: {
  name: 'add',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (typeof data.keyval[args[0]] != 'undefined') {
    contr.send(`${args[0]} already taken.`)
  } else {
    let key = args[0]||'default'
    data.keyval[key] = args[1]||null;
    contr.send(`generated object named: ${key} with a val of: ${data.keyval[key]}`);
  }
}},del: {config: {
  name: 'del',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  delete data.keyval[args[0]];
  contr.send(`deleted ${args[0]}`);
}},edit: {config: {
  name: 'edit',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (data.keyval[args[0]]) {
    let orig = data.keyval[args[0]];
    data.keyval[args[0]] = args[1]||null;
    contr.send(`Set ${args[0]} to ${data.keyval[args[0]]} from ${orig}`);
  } else {
    contr.send(`Could not find key for ${args[0]}`);
  }
}},read: {config: {
  name: 'read',
  dataName: 'keyval',
  requiresData: true,
  requiresArgs: true
},func: function (args) {
  if (data.keyval[args[0]]) {
    contr.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
  } else {
    contr.send(`Could not find key for ${args[0]}`);
  }
}}}},start: {config: {
  name: 'start',
  dataName: 'start',
  requiresData: true,
  requiresArgs: false
},func: function (args) {
  contr.send('aaa');
  contr.wait('te\n', args, function (args) {
    contr.send(args);
  });
}}};var contr = {consoleClear: function () {
  document.getElementById('commandLine').value = '';
},getCommand: function (com,args) {
  if (com.config.requiresData && !data[com.config.dataName]) {
    data[com.config.dataName] = {};
  }
  if (com.func && !(com.subCom ? com.subCom[args[0]] : false)) {
    if(!args || !args[0]) args = null;
    if (com.config.requiresArgs && !args) return;
    com.func(args);
  } else if (com.subCom[args[0]]) {
    var arg = args.shift();
    contr.getCommand(com.subCom[arg],args);
  }
},runCommand: function (path,args,com) {
  if(!com) com = commands;
  var p = path.shift();
  if (!path || !path[0]) {
    if (com[p].config.requiresData && !data[com[p].config.dataName]) {
      data[com[p].config.dataName] = {};
    }
    if(!args || !args[0]) args = null;
    if(com[p].func) com[p].func(args);
  } else {
    contr.runCommand(path,args,com[p].subCom);
  }
},send: function (message) {
  if (message != '') document.getElementById('output').prepend(`${message}\n`);
},wait: function (trigger, args, after, delOnFin) {
  var waitObj = {};
  waitObj.func = after;
  waitObj.args = args;
  waitObj.delOnFin = delOnFin ? false : true;
  data.waiting[trigger] = waitObj;
}}