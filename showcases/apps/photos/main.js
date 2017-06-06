$('#menu')
.menu()
.mousedown(function (event) {
  if (event.target.dataset.path) {
    console.log(event.target.dataset.path+'/'+event.target.dataset.filename);
    $('#photoPlaceholder')
    .removeClass('photoPlaceholder')
    .html('<img class="photo" src="'+event.target.dataset.path+'/'+event.target.dataset.filename+'"/>');
  }
  $('.photo')
  .mousedown(
    function (event) {
      console.log(event);
    }
  );
});