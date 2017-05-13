<div class="showcase">
  <div>
    <a class="link" href="/showcases/dev-stuff/adv-game/index.php">
      <h3>
        Adventure!
      </h3>
    </a>
  </div>
  <div>
    <iframe src="/showcases/dev-stuff/adv-game/index.php" id="adv-gameiframe"></iframe>
  </div>
</div>
<script>
function size(el,height,width) {
  $(el)
  .height(height)
  .width(width);
}

size('#adv-gameiframe',$('#adv-gameiframe').width(),'100%');
  $(window).resize(function (event) {
    size('#adv-gameiframe',$('#adv-gameiframe').width(),'100%');
  });
</script>
