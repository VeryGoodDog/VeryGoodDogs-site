$('#commandLine').keyup(function(event) {
  if (event.key === 'Enter') {
    const message = $('#commandLine').val().trim();
    const args = message.split(/\s+/g);
    const command = args.shift().toLowerCase();
    config.consoleClear();
    console.log(`command: ${command}\nargs: ${args}`);
    try {
      commands[command].run(config,args);
    } catch (err) {
      console.error(err);
    }
  }
});

const commands = {
  ping: {
    run: function (config, args) {
      config.send(args[0]);
    }
  }
};

const config = {
  send: function (message) {
    if (message != undefined) {
      $('#output').prepend(`${message}\n`);
      return;
    }
  },
  consoleClear: function () {
    $('#commandLine').val('');
  }
};

