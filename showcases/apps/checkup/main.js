var pass;

$(document).ready(function (event) {
  console.log(pass);
});

$('#passSubmit').submit(function (event) {
  pass = $('#password').val();
});
