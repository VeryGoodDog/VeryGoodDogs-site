document.getElementById('enter').onclick =
function () {
  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var plainText = document.getElementById('plainText').value;
  plainText = plainText.replace(punctRE, '').replace(/\s+/g, '');
  plainText = plainText.toLowerCase();
  var cipherText = [];
  var cipher = [];
  var a = Number(document.getElementById('a').value);
  var b = Number(document.getElementById('b').value);
  console.clear();
  for (var i = 0, length = plainText.length; i < length; i++) {
    cipher[i] = ((a*(plainText.charCodeAt(i) - 97)) + b) % 26;
    cipherText[i] = String.fromCharCode(cipher[i] + 97);
    console.log(Number(plainText.charCodeAt(i)-97),plainText[i],cipher[i],cipherText[i]);
  }
  document.getElementById('out').value = cipherText;
};
