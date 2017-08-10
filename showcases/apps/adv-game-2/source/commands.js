const data = {};
const commands = {
  ping: {
    func: function (args) {
      if (args[0]) {
        controllers.send(args[0]);
      } else {
        controllers.send('no ping :(');
      }
    },
    config:{
      requiresData: false,
      requiresArgs: false
    }
  },
  pep: {
    func: function (args) {
      if (args[0]) {
        controllers.send(`Wowiw peps to ${args[0]}`);
      } else {
        controllers.send('no peps :(');
      }
    },
    config: {
      requiresData: false,
      requiresArgs: false
    }
  },
  keyval: {
    subCom: {
      add: {
        func: function (args) {
          if (typeof data.keyval[args[0]] != 'undefined') {
            controllers.send(`${args[0]} already taken.`)
          } else {
            let key = args[0]||'default'
            data.keyval[key] = args[1]||null;
            controllers.send(`generated object named: ${key} with a val of: ${data.keyval[key]}`);
          }
        },
        config: {
          requiresData: true,
          requiresArgs: true
        }
      },
      del: {
        func: function (args) {
          delete data.keyval[args[0]];
          controllers.send(`deleted ${args[0]}`);
        },
        config: {
          requiresData: true,
          requiresArgs: true
        }
      },
      read: {
        func: function (args) {
          if (data.keyval[args[0]]) {
            controllers.send(`Found value of ${data.keyval[args[0]]} for ${args[0]}`);
          } else {
            controllers.send(`Could not find key for ${args[0]}`);
          }
        },
        config: {
          requiresData: true,
          requiresArgs: true
        }
      },
      edit: {
        func: function (args) {
          if (data.keyval[args[0]]) {
            let orig = data.keyval[args[0]];
            data.keyval[args[0]] = args[1]||null;
            controllers.send(`Set ${args[0]} to ${data.keyval[args[0]]} from ${orig}`);
          } else {
            controllers.send(`Could not find key for ${args[0]}`);
          }
        },
        config: {
          requiresData: true,
          requiresArgs: true
        }
      }
    },
    config: {
      requiresData: true,
      requiresArgs: true
    },
    help: {
      usage: 'keyval <add|del|read|edit> <args...>'
    }
  },
  testSave: {
    subCom: {
      save: {
        func: function (args) {

        },
        config: {
          requiresData: true,
          requiresArgs: true
        }
      }
    }
  }
};