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
};