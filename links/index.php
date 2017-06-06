<!DOCTYPE html>
<?php
  require $_SERVER['DOCUMENT_ROOT'].'/include/includeHead.php';
  includeHead('Bork!');
?>
  <?php
    $file = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/links/links.json');
    $json = json_decode($file);
    echo "<div class='showcase'><ul id='mainNav'>";
    parseLinks($json->links);
    echo "</ul></div>";
    function parseLinks($links) {
      foreach ($links as $links) {
        echo "<li>";
        $title = $links->title;
        if (!(is_null($links->link))) {
          $link = $links->link;
          echo "<a href= '/$link'>$title</a>";
        } else {
          echo "$title";
        }
        if (!(is_null($links->children))) {
          $children = $links->children;
          echo "<ul>";
          parseLinks($children);
          echo "</ul>";
        }
        unset($title,$link,$children);
        echo "</li>";
      }
    }
  ?>
</body>
