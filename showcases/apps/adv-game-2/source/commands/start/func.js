function (args) {
  contr.send('aaa');
  contr.wait('te\n', args, function (args) {
    contr.send(args);
  });
}