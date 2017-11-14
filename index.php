<!DOCTYPE html>
<html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Bork!');
?>
<div class="showcase">
  <h1>
    VeryGoodDog's Front Page
  </h1>
  <hr>
<?php
$posts = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/posts.json');
$posts = json_decode($posts);
for ($postNum=0; $postNum < sizeof($posts); $postNum++) {
  $post = $posts[$postNum];
  echo "<h3>$post->title</h3>";
  echo "<p>$post->content</p>";
  if ($postNum != sizeof($posts) - 1) {
    echo "<hr>";
  }
}
?>
</div>
</body>
</html>