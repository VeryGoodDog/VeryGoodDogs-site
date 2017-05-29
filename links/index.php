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
    for ($i=0; $i < sizeof($json->links); $i++) {
      parseLink($json->links[$i]);
    }
    function parseLink($links) {
      $title = $links->title;
      if ($links->link != NULL) {
        $link = $links->link;
      }
      if ($links->children != NULL) {
        for ($childrenI=0; $childrenI < sizeof($links->children); $childrenI++) {
          parseLink($links->children[$childrenI]);
        }
      }
      echo $title.$link;
      unset($title,$link,$children);
    }
  ?>
</body>
