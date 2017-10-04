function (message) {
  if (typeof message === 'undefined') throw new Error('This requires an argument to send.');
  document.getElementById('output').prepend(`${message}\n`);
}