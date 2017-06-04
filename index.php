<!DOCTYPE html>
<head>
  <title>Bork!</title>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/head/head.php'; ?>
  <?php require $_SERVER['DOCUMENT_ROOT'].'/showcases/showcaseGen.php'; ?>
</head>
<body>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/header/header.php'; ?>
  <?php returnPage('/showcases/adv-gameShowcase.json') ?>
  <?php returnPage('/showcases/checkersShowcase.json');?>
</body>
