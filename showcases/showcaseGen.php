<?php
$fileToOpen = 'adv-gameShowcase.json';
$file = fopen($fileToOpen,'r');
$json = json_decode(fread($file,filesize($fileToOpen)));
$path = $_SERVER['DOCUMENT_ROOT'].$json->path;
echo $path;
$target = fread(fopen($path,'r'),filesize($path));
echo $target;
?>
