<link rel="stylesheet" href="/header.css">
<header class="header">
  <a href="/index.php">
    <img id="icon" src="/VGD logo.png">
  </a>
  <div id="headCont">
    <h1>
      <a href="/index.php">
        VeryGoodDog's
      </a>
    </h1>
    <h2>
      <a href="/index.php">
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
  size('#sizer',$('.header').height(),'100%');
  $(window).resize(function (event) {
    size('#sizer',$('.header').height(),'100%');
  });
</script>
<div id="links">
  <a class="link" href="/links/index.php">Links:</a>
  <a class="link" href="https://github.com/VeryGoodDog">My GitHub</a>
</div>
