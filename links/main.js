init();
$(window).resize(function (event) {
  init();
});

function init() {
    size('#sizer',$('#header').height(),'100%');
}
