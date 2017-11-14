<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Photos!');
?>
<div class="wide-showcase">
  <h1>Featured Photos!</h1>
  These photos aren't needed for any school projects <b>but</b>
  they are nice looking, I think.
  I might make a way to send me comments for all photo pages.
  <hr>
  <h3>Photos:</h3>
  <?php
  foreach (glob("featuredPhotos/*") as $path) {
    echo "
      <a target=\"_blank\" href=\"$path\">
        <img src=\"$path\" class=\"photo\">
      </a>
    ";
  }
  ?>
</div>
</body>
</html>