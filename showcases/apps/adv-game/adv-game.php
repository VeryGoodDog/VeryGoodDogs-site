<!DOCTYPE html>
<html>
<head>
  <title>Adventure!</title>
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
  <script src="vars.js"></script>
  <script src="helper.js"></script>
  <script src="commandContr.js"></script>
  <script src="commands.js"></script>
  <script src="adv.js"></script>
</body>
</html>
