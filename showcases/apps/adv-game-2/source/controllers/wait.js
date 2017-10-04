function (trigger, args, after) {
  var waitObj = {};
  waitObj.func = after;
  waitObj.args = args;
  data.waiting[trigger] = waitObj;
}