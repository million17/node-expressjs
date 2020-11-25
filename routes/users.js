var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sess = req.session;
  console.log('sess', sess);
  res.send('respond with a resource');
});

module.exports = router;
