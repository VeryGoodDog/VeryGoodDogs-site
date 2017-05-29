<!DOCTYPE html>
<head>
  <title>Links!</title>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/head.php'; ?>
</head>
<body>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/header.php'; ?>
  <?php
    $file = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/links/links.json');
    $json = json_decode($file);
    echo "<div class='showcase'><ul id='mainNav'>";
    for ($i=0; $i < sizeof($json->links); $i++) {
      parseLink($json->links[$i]);
    }
    echo "</ul></div>";
    function parseLink($links) {
      echo "<li>";
      $title = $links->title;
      if ($links->link != NULL) {
        $link = $links->link;
        echo "<a href= '/$link'>$title</a>";
      } else {
        echo "$title";
      }
      if ($links->children != NULL) {
        echo "<ul>";
        for ($childrenI=0; $childrenI < sizeof($links->children); $childrenI++) {
          parseLink($links->children[$childrenI]);
        }
        echo "</ul>";
      }
      unset($title,$link,$children);
      echo "</li>";
    }
  ?>
</body>
