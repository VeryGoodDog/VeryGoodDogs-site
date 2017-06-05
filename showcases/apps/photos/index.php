<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
?>
  <?php
  function createMenu($dir,$level) {
    if(is_dir($dir)) {
      echo "<li><div>".pathinfo($dir)[basename]."</div><ul data-level=".$level.">";
      foreach(glob("$dir/*") as $path) {
        createMenu($path,$level+1);
      }
      echo "</ul></li>";
    } else {
      echo "<li><div data-path=".pathinfo($dir)[dirname].">".pathinfo($dir)[basename]."</div></li>";
    }
  }
  echo "<ul id=menu>";
  createMenu('Photos',1);
  echo "</ul>";
  ?>
  <script src="main.js"></script>
  <div id="photoPlaceholder"></div>
</body>
</html>