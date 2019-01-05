<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>done</title>
</head>
<body>
<?php
if (!empty($_POST["submit"])) {
  $conn = new mysqli("localhost",$_POST["username"],$_POST["password"],"posts");
  if ($conn->connect_error) {
    echo "$conn->connect_error";
    return;
  }
  $conn->query("INSERT INTO front (date,title,content)
    VALUES (now(),\"{$_POST["title"]}\",\"{$_POST["content"]}\")");
  echo "{$_POST["content"]}";
}
?>
</body>
</html>