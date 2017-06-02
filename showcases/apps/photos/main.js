$('#menu').menu();
$('[data-level="4"]').mousedown(function (event) {
  console.log(event.target.dataset.path,event.target.lastChild.data);
  var path = event.target.dataset.path;
  var file = event.target.lastChild.data;
  $('#photoPlaceholder').html('<img class="photo" src="'+path+'/'+file+'"/>')
});