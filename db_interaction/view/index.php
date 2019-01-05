<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>lmao</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <?php
    echo "
    <form action=\"index.php\" method=\"post\">
      <input type=\"name\" name=\"username\" required value=\"{$_POST["username"]}\">
      <input type=\"password\" name=\"password\" required value=\"{$_POST["password"]}\">
      <button type=\"submit\" name=\"submit\" value=\"submit\">Submit</button>
    </form>";
    if (!empty($_POST["submit"])) {
      //connect to db
      $conn = new mysqli("localhost",$_POST["username"],$_POST["password"],"posts");
      //check if its ok
      if ($conn->connect_error) {
        echo "$conn->connect_error";
        return;
      }
      //get all the pages that have tables
      $pages = $conn->query("SHOW TABLES FROM posts");
      //loop through them to make tables
      for ($i = 0; $i < $pages->num_rows; $i++) {
        //seek the page data
        $pages->data_seek($i);
        //get the name for making queries
        $p = $pages->fetch_assoc()["Tables_in_posts"];
        echo "$p";
        //get columns
        $columns = $conn->query("SHOW COLUMNS FROM {$p}");

        //start a table
        echo "<table>";
        echo "<tr>";
        for ($rn = 0; $rn < $columns->num_rows; $rn++) {
          $columns->data_seek($rn);
          $columnName = $columns->fetch_assoc()["Field"];
          echo "<th>$columnName</th>";
        }
        echo "</tr>";

        $allRows = $conn->query("SELECT * FROM {$p}");
        for ($rn=0; $rn < $allRows->num_rows; $rn++) {
          $allRows->data_seek($rn);
          $rowVal = $allRows->fetch_assoc();
          echo "<tr>";
          foreach ($rowVal as $k => $v) {
            echo "<td>$v</td>";
          }
          echo "</tr>";
        }
        echo "</table>";
      }
    }
  ?>
</body>
</html>