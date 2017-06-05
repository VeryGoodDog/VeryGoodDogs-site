<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Photos!');
?>
  <div class="showcase">
    <div id="photoPlaceholder">
      Please select a photo!
    </div>
    <?php
    function createMenu($dir,$level) {
      if(is_dir($dir)) {
        echo "<li><div>".pathinfo($dir)[basename]."</div><ul data-level=".$level.">";
        foreach(glob("$dir/*") as $path) {
          createMenu($path,$level+1);
        }
        echo "</ul></li>";
      } else {
        echo "<li><div data-path=".pathinfo($dir)[dirname]." data-filename=".pathinfo($dir)[basename].">".pathinfo($dir)[basename]."</div></li>";
      }
    }
    echo "<ul id=menu data-level='0'>";
    createMenu('Photos',1);
    echo "</ul>";
    ?>
  </div>
  <script src="main.js"></script>
</body>
</html>