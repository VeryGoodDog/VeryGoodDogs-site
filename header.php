<div id="header" style="margin: 0px; position: fixed; width: 100%; outline: black solid 2px; background-color: #d39023;">
  <div style="min-height:80px; width:100%; padding:0;">
    <a href="http://vgd.42seventeen.net/">
      <img src="/VGD logo.png" style="float:left; margin-right:1em; width: 80px; height: 80px;">
    </a>
    <div style="width:50%; min-width:10em; white-space:nowrap; margin:0;" >
      <p style="margin: 0">
        <a style="text-decoration: none; color: black; outline: none;" href="http://vgd.42seventeen.net/">
          VeryGoodDog's
        </a>
      </p>
      <p style="margin: 0">
        <a style="text-decoration: none; color: black; outline: none;" href="http://vgd.42seventeen.net/">
          Online Portfolio
        </a>
      </p>
    </div>
  </div>
</div>
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
