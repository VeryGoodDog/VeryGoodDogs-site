<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Bork!');
?>
  <?php require $_SERVER['DOCUMENT_ROOT'].'/showcases/showcaseGen.php' ; ?>
  <?php returnPage('/showcases/adv-gameShowcase.json');?>
  <?php returnPage('/showcases/checkersShowcase.json');?>
</body>
</html>