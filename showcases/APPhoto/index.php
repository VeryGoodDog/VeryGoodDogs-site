<!DOCTYPE html>
<html>
<head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
	<title>AP Photo ... Photos!</title>
</head>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/header.php'; ?>
<?php require $_SERVER['DOCUMENT_ROOT'].'/include/markdeep.php'; ?>
<div class="showcase">
<?php
$in = <<<BOD
# Info:
Here at [VeryGood.Dog](/index.php), I'm hosting my AP portfolio.
I took an AP photo class. This required me to have a website, which I clearly have.
It also required me host my breadth and concentration photos.<br>
I had a different site under a less memorable URL, but now I made this one.
This one is named after my late dog Bella, she was the orignal VeryGoodDog!<br>
My breadth is [here](breadth/index.php).<br>
My concentration is [here](concentration/index.php).
BOD;
echo Markdeep::create($in);
?>
  <hr>
<?php
$in = <<<BOD
# About Me:
I really like programming and art, but drawing is hard and kinda slow.<br>
So, I turned to photography.
I love film photography, I built a darkroom in my basement.
It works, barely.<br>
I also do digital photo, but most of my portfolio is film.
BOD;
echo Markdeep::create($in);
?>
</div>
</body>
</html>