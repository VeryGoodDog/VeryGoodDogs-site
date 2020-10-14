<!DOCTYPE html>
<html>
<head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
	<title>Breadth Photos!</title>
</head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/header.php'; ?>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/markdeep.php'; ?>
<div class="showcase wide">
<?php
$in = <<<BOD
# Breadth:
These photos are the Breadth portion of the AP program.
They are meant to showcase a diverse set of skills.<br>
All images open into new pages.
---
# Photos:
BOD;
echo Markdeep::create($in);
?>
	<div class="imageBoard">
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
</div>
</body>
</html>