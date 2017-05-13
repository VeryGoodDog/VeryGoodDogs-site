<!DOCTYPE html>
<html>
<head>
  <title>Adventure!</title>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/head.php'; ?>
</head>
<body>
  <div>
    <div class="commandLineDiv">
      <textarea id="commandLine" placeholder="Command"></textarea>
    </div>
    <div class="outputDiv">
      <textarea id="output" readonly="true"></textarea>
    </div>
  </div>
  <script src="jquery/jquery-3.1.1.js"></script>
  <script src="jquery/jquery-ui.js"></script>
  <script src="commandContr.js"></script>
  <script src="helper.js"></script>
  <script src="commands.js"></script>
  <script src="adv.js"></script>
  <script src="vars.js"></script>
</body>
</html>
