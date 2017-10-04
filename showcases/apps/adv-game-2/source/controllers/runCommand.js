function (path,args,com) {
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
}