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
};