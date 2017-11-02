<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Photos!');
?>
<div class="wide-showcase">
  <?php
  foreach (glob("featuredPhotos/*") as $path) {

    echo '<img class="photo" id="'.$path.'" src="'.$path.'"/>';
  }
  ?>
</div>
</body>
</html>