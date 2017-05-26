document.getElementById('enter').onclick =
function () {
  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var plainText = document.getElementById('plainText').value;
  plainText = plainText.replace(punctRE, '').replace(/\s+/g, '');
  plainText = plainText.toLowerCase();
  var cipherText = [];
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);
  console.clear();
  for (var i = 0, length = plainText.length; i < length; i++) {
    cipherText[i] = ((a*(plainText.charCodeAt(i) - 97)) + b) % 26;
    console.log(Number(plainText.charCodeAt(i)-97),cipherText[i],plainText[i]);
  }
  document.getElementById('out').value = cipherText;
};
