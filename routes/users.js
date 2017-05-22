var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req,res,next) {
  if(req.body)
  {
    console.log("Body : "+JSON.stringify(req.body));
      console.log(JSON.stringify(req.headers));
      res.send('data acknowledged');
  }

});

module.exports = router;
