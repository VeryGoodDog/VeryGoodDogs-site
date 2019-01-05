<head>
  <?php include_once $_SERVER['DOCUMENT_ROOT'].'/head/head.php'; ?>
</head>
<body>
  <form>
    Plain Text:<input type="text" id="plainText"></input>
    A:<input type="text" id="a"></input>
    B:<input type="text" id="b"></input>
    Submit:<input type="button" id="enter"></input>
  </form>
  Cipher Text:<textarea readonly="true" id="out"></textarea>
  <script src="main.js"></script>
</body>
