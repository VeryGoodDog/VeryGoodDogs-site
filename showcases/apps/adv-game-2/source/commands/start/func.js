function (args) {
  controllers.send('aaa');
  controllers.wait('te', args, function (args) {
    controllers.send(args);
  });
}