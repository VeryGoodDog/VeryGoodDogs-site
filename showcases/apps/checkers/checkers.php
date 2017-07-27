<head>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/include/head/head.php'; ?>
</head>
<body>
<link rel="stylesheet" href="main.css">
<div id="gameWrapper">
  <div id="checkersHeader">
    <div id="playerCont">
      <div class="playerMessage" id="playerTag">
        The player is:
      </div>
      <div class="playerMessage" id="playerBoard">
      </div>
    </div>
    <div id="restartButton">Restart</div>
  </div>
  <div id="boardWrapper">
    <div id="board">
    <div class="c 1">
      <div class="r red" data-row="1" data-column="1">
      </div>
      <div class="r white" data-row="2" data-column="1">
      </div>
      <div class="r red" data-row="3" data-column="1">
      </div>
      <div class="r white" data-row="4" data-column="1">
      </div>
      <div class="r red" data-row="5" data-column="1">
      </div>
      <div class="r white" data-row="6" data-column="1">
      </div>
      <div class="r red" data-row="7" data-column="1">
      </div>
      <div class="r white" data-row="8" data-column="1">
      </div>
    </div>
    <div class="c 2">
      <div class="r white" data-row="1" data-column="2">
      </div>
      <div class="r red" data-row="2" data-column="2">
      </div>
      <div class="r white" data-row="3" data-column="2">
      </div>
      <div class="r red" data-row="4" data-column="2">
      </div>
      <div class="r white" data-row="5" data-column="2">
      </div>
      <div class="r red" data-row="6" data-column="2">
      </div>
      <div class="r white" data-row="7" data-column="2">
      </div>
      <div class="r red" data-row="8" data-column="2">
      </div>
    </div>
    <div class="c 3">
      <div class="r red" data-row="1" data-column="3">
      </div>
      <div class="r white" data-row="2" data-column="3">
      </div>
      <div class="r red" data-row="3" data-column="3">
      </div>
      <div class="r white" data-row="4" data-column="3">
      </div>
      <div class="r red" data-row="5" data-column="3">
      </div>
      <div class="r white" data-row="6" data-column="3">
      </div>
      <div class="r red" data-row="7" data-column="3">
      </div>
      <div class="r white" data-row="8" data-column="3">
      </div>
    </div>
    <div class="c 4">
      <div class="r white" data-row="1" data-column="4">
      </div>
      <div class="r red" data-row="2" data-column="4">
      </div>
      <div class="r white" data-row="3" data-column="4">
      </div>
      <div class="r red" data-row="4" data-column="4">
      </div>
      <div class="r white" data-row="5" data-column="4">
      </div>
      <div class="r red" data-row="6" data-column="4">
      </div>
      <div class="r white" data-row="7" data-column="4">
      </div>
      <div class="r red" data-row="8" data-column="4">
      </div>
    </div>
    <div class="c 5">
      <div class="r red" data-row="1" data-column="5">
      </div>
      <div class="r white" data-row="2" data-column="5">
      </div>
      <div class="r red" data-row="3" data-column="5">
      </div>
      <div class="r white" data-row="4" data-column="5">
      </div>
      <div class="r red" data-row="5" data-column="5">
      </div>
      <div class="r white" data-row="6" data-column="5">
      </div>
      <div class="r red" data-row="7" data-column="5">
      </div>
      <div class="r white" data-row="8" data-column="5">
      </div>
    </div>
    <div class="c 6">
      <div class="r white" data-row="1" data-column="6">
      </div>
      <div class="r red" data-row="2" data-column="6">
      </div>
      <div class="r white" data-row="3" data-column="6">
      </div>
      <div class="r red" data-row="4" data-column="6">
      </div>
      <div class="r white" data-row="5" data-column="6">
      </div>
      <div class="r red" data-row="6" data-column="6">
      </div>
      <div class="r white" data-row="7" data-column="6">
      </div>
      <div class="r red" data-row="8" data-column="6">
      </div>
    </div>
    <div class="c 7">
      <div class="r red" data-row="1" data-column="7">
      </div>
      <div class="r white" data-row="2" data-column="7">
      </div>
      <div class="r red" data-row="3" data-column="7">
      </div>
      <div class="r white" data-row="4" data-column="7">
      </div>
      <div class="r red" data-row="5" data-column="7">
      </div>
      <div class="r white" data-row="6" data-column="7">
      </div>
      <div class="r red" data-row="7" data-column="7">
      </div>
      <div class="r white" data-row="8" data-column="7">
      </div>
    </div>
    <div class="c 8">
      <div class="r white" data-row="1" data-column="8">
      </div>
      <div class="r red" data-row="2" data-column="8">
      </div>
      <div class="r white" data-row="3" data-column="8">
      </div>
      <div class="r red" data-row="4" data-column="8">
      </div>
      <div class="r white" data-row="5" data-column="8">
      </div>
      <div class="r red" data-row="6" data-column="8">
      </div>
      <div class="r white" data-row="7" data-column="8">
      </div>
      <div class="r red" data-row="8" data-column="8">
      </div>
    </div>
  </div>
  </div>
  <div id="bottomSpacer">
  </div>
</div>
<script src="checkers.js"></script>
</body>
