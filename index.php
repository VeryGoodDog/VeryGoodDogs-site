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
  $conn = new mysqli('localhost','default','default','posts');
  if ($conn->connect_errno) {
    echo "failed to connect to database";
  }

  $posts = $conn->query("SELECT * FROM front");
  $postCount = $posts->num_rows;

  for ($i=$postCount-1; $i >= 0; $i--) {
    echo "$i ";
    $posts->data_seek($i);
    $p = $posts->fetch_assoc();
    echo $p["date"]."<br>";
    echo $p["title"]."<br>";
    echo $p["content"]."<br>";
  }

  $conn->close();
?>
</div>
</body>
</html>