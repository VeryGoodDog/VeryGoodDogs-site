$('#menu')
.menu()
.mousedown(function (event) {
  if (event.target.dataset.path) {
    console.log(event.target.dataset.path+'/'+event.target.dataset.filename);
    $('#photoPlaceholder')
    .html('<img class="photo" src="'+event.target.dataset.path+'/'+event.target.dataset.filename+'"/>');
  }
});