<!DOCTYPE html>
<html>
<head>
  <title>Adventure: Redux!</title>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
</head>
<body>
  <div id="gameWrapper" class="fullHeight">
    <div id="commandLineDiv">
      <textarea id="commandLine" placeholder="Command"></textarea>
    </div>
    <div id="outputDiv">
      <textarea id="output" readonly="true"></textarea>
    </div>
  </div>
  <script src="build/adv-game-2-min.js"></script>
</body>
</html>