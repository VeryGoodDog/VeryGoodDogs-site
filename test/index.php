<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Test!');
  require $_SERVER['DOCUMENT_ROOT'].'/include/markdeep.php';
  echo Markdeep::create(__DIR__.'/index.md');
?>
</body>
</html>