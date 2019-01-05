function (args) {
  contr.send('aaa');
  if(!args) return;
  var arg = args.shift();
  contr.wait(arg, args, function (args) {
    contr.send(args);
  });
}