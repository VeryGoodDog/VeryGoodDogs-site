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
      for ($i=0; $i < sizeof($links); $i++) {
        echo "<li>";
        $title = $links[$i]->title;
        if ($links[$i]->link != NULL) {
          $link = $links[$i]->link;
          echo "<a href= '/$link'>$title</a>";
        } else {
          echo "$title";
        }
        if ($links[$i]->children != NULL) {
          echo "<ul>";
          parseLinks($links[$i]->children);
          echo "</ul>";
        }
        unset($title,$link,$children);
        echo "</li>";
      }
    }
  ?>
</body>
