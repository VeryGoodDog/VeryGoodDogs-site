function (message) {
  if (message == '') return;
  var out = document.getElementById('output');
  switch (typeof message) {
    case 'object':
      message = JSON.stringify(message).replace(/"+/g,' ');
      out.prepend(`${message}\n`);
      break;
    case 'string':
      out.prepend(`${message}\n`);
      break;
    default:
      console.log('unknown message type');
  }
}