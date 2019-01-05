<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>lmao</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <form action="index.php" method="post">
    <input type="name" name="username" required>
    <input type="password" name="password" required>
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>
  <?php
    if (!empty($_POST["submit"])) {
      //connect to db
      $conn = new mysqli("localhost",$_POST["username"],$_POST["password"],"posts");
      //check if its ok
      if ($conn->connect_error) {
        echo "$conn->connect_error";
        return;
      }
      echo "<form action=\"add/index.php\" method=\"post\">
        <button type=\"submit\" name=\"submit\" value=\"submit\">Add Post</button>
        <input type=\"name\" name=\"username\" value=\"{$_POST["username"]}\" required>
        <input type=\"password\" name=\"password\" value=\"{$_POST["password"]}\" required>
      </form>";
      echo "<form action=\"view/index.php\" method=\"post\">
        <button type=\"submit\" name=\"submit\" value=\"submit\">View Posts</button>
        <input type=\"name\" name=\"username\" value=\"{$_POST["username"]}\" required>
        <input type=\"password\" name=\"password\" value=\"{$_POST["password"]}\" required>
      </form>";
    }
  ?>
</body>
</html>