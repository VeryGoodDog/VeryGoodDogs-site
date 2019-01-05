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
  All images open into new pages.
	They have some info next to them.
  <hr>
  <h3>Photos:</h3>
  <?php
  foreach(glob("photos/*") as $path) {
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