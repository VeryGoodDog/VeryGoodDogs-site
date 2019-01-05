function (trigger, args, after, delOnFin) {
  var waitObj = {};
  waitObj.func = after;
  waitObj.args = args;
  waitObj.delOnFin = delOnFin ? false : true;
  waitObj.enter = trigger.endsWith('\n') ? true : false;
  data.waiting[trigger] = waitObj;
}