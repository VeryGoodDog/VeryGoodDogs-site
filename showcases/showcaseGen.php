<?php
function returnPage ($showcase)
{
  $file = file_get_contents($_SERVER['DOCUMENT_ROOT'].$showcase);
  $json = json_decode($file);
  $link = $json->link;
  $title = $json->title;
  $pageContents = $json->content;
  parseContents($pageContents);
}

function parseContents ($contents)
{
  foreach ($contents as $key => $val) {
    addElement($val);
  }
}

function addElement ($element)
{
  foreach ($element as $key => $val) {
    $tag = $element->$key;
    echo "$tag";
  }
}

?>
