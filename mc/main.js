window.onload = function (event) {
  var SC_i = document.getElementById('SC_i');
  var SC_is_s = document.getElementById('SC_is_s');
  var SC_is_i = document.getElementById('SC_is_i');
  var SC_s = document.getElementById('SC_s');
  var SC_c = document.getElementById('SC_c');
  var SC_sb = document.getElementById('SC_sb');
  SC_i.addEventListener('input', function (event) {
    update(SC_i.valueAsNumber);
  });
  SC_is_s.addEventListener('input', function (event) {
    update(SC_is_s.valueAsNumber * 64 + SC_is_i.valueAsNumber);
  });
  SC_is_i.addEventListener('input', function (event) {
    update(SC_is_s.valueAsNumber * 64 + SC_is_i.valueAsNumber);
  });
  SC_s.addEventListener('input', function (event) {
    update(SC_s.valueAsNumber * 64);
  });
  SC_c.addEventListener('input', function (event) {
    update(SC_c.valueAsNumber * 1728);
  });
  SC_sb.addEventListener('input', function (event) {
    update(SC_sb.valueAsNumber * 46656);
  });
}

function update(value) {
  SC_i.value = value;
  SC_is_s.value = Math.floor(value / 64);
  SC_is_i.value = value % 64;
  SC_s.value = value / 64;
  SC_c.value = value / 1728;
  SC_sb.value = value / 46656;
}