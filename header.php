<link rel="stylesheet" href="/header.css">
<header class="header">
  <a href="http://vgd.42seventeen.net/">
    <img id="icon" src="/VGD logo.png">
  </a>
  <div id="headcont">
    <h1>
      <a href="http://vgd.42seventeen.net/">
        VeryGoodDog's
      </a>
    </h1>
    <h2>
      <a href="http://vgd.42seventeen.net/">
        Online Portfolio
      </a>
    </h2>
  </div>
</header>
<div id="sizer"></div>
<script>
function size(el,height,width) {
  $(el)
  .height(height)
  .width(width);
}
  size('#sizer',$('#header').height(),'100%');
  $(window).resize(function (event) {
    size('#sizer',$('#header').height(),'100%');
  });
</script>
