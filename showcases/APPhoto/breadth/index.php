<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Breadth Photos!');
?>
<div class="wide-showcase">
  <h1>Breadth</h1>
  These photos are the Breadth portion of the AP program.
  They are meant to showcase a diverse set of skills.<br>
  They do not have any light boxes, <i>yet</i>! That means you have to like, uh, figure it
  <hr>
  <h3>Photos:</h3>
  <?php
  foreach(glob("photos/*") as $path) { echo "<img src=\"$path\" class=\"photo\">"; }
  ?>
</div>
</body>
</html>