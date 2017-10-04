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
const data = {};