function (trigger, args, after, delOnFin) {
  var waitObj = {};
  waitObj.func = after;
  waitObj.args = args;
  waitObj.delOnFin = delOnFin ? false : true;
  data.waiting[trigger] = waitObj;
}