<!DOCTYPE html>
<html>
<head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
	<title>Breadth Photos!</title>
</head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/header.php'; ?>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/markdeep.php'; ?>
<div class="showcase--wide">
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