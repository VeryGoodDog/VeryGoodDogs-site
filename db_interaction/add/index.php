<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>add posts</title>
</head>
<body>
<?php
  echo "<form action=\"success.php\" method=\"post\">
    <input type=\"name\" name=\"username\" required value=\"{$_POST["username"]}\">
    <input type=\"password\" name=\"password\" required value=\"{$_POST["username"]}\">
    <input type=\"text\" name=\"title\" required>
    <input type=\"text\" name=\"content\">
    <button type=\"submit\" name=\"submit\" value=\"submit\">Submit</button>
  </form>";

  if (!empty($_POST["submit"])) {
    $conn = new mysqli("localhost",$_POST["username"],$_POST["password"],"posts");
    if ($conn->connect_error) {
      echo "$conn->connect_error";
      return;
    }
    if (!empty($_POST["title"])) {
      $conn->query("INSERT INTO front (date,title,content)
        VALUES (now(),\"{$_POST["title"]}\",\"{$_POST["content"]}\")");
    }
  }
?>
</body>
</html>