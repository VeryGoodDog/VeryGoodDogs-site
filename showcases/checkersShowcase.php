<div class="showcase">
  <div>
    <a class="link" href="/showcases/dev-stuff/checkers/index.php">
      <h3>
        Checkers!
      </h3>
    </a>
  </div>
  <div>
    <iframe src="/showcases/dev-stuff/checkers/checkers.php" id="checkersiframe"></iframe>
  </div>
  <div>
    <a class="link" href="https://github.com/VeryGoodDog/checkers">
      Checker's GitHub
    </a>
  </div>
</div>
<script>
function size(el,height,width) {
  $(el)
  .height(height)
  .width(width);
}

size('#checkersiframe',$('#checkersiframe').width(),'100%');
  $(window).resize(function (event) {
    size('#checkersiframe',$('#checkersiframe').width(),'100%');
  });
</script>
