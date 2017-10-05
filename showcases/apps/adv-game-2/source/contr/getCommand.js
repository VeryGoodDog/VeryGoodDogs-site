function (com,args) {
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
}