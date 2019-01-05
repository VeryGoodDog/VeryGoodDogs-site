function () {
  var wait = commandLine.value;
  for (var trigger in data.waiting) {
    if (wait.includes(trigger)) {
      data.waiting[trigger].func(data.waiting[trigger].args);
      if (data.waiting[trigger].delOnFin) delete data.waiting[trigger];
    }
  }
}