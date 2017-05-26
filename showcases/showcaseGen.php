<?php
function returnPage($showcase) {
$file = file_get_contents($_SERVER['DOCUMENT_ROOT'].$showcase);
$json = json_decode($file);
$link = $json->link;
$title = $json->title;
$path = $json->path;
$id = $json->id;
echo '<div class="showcase">
  <link href="/showcases/showcase.css" rel="stylesheet">
  <div>
    <a class="link" href="/showcases/apps'.$link.'">
      <h3>'.$title.'</h3>
    </a>
  </div>
  <div>
    <iframe src="/showcases/apps'.$path.'" id="'.$id.'"></iframe>
  </div>
</div>
<script>
function size(el,height,width) {
  $(el)
  .height(height)
  .width(width);
}

size("#'.$id.'",$("#'.$id.'").width(),"100%");
  $(window).resize(function (event) {
    size("#'.$id.'",$("#'.$id.'").width(),"100%");
  });
</script>';
}
?>
