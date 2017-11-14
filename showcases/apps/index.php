<!DOCTYPE html>
<html>
<head>
  <title>secrets</title>
</head>
<?php
foreach(glob("*/") as $path) {
  echo "<a href=\"$path\">$path</a><br>";
}
?>