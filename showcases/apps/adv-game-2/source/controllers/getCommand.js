function (com,args) {
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
}