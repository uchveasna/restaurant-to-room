var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/create', vm);
})

router.post('/create', function(req, res, next) {
  var sthWrong = false;
  if (sthWrong) {
    var vm = {
      title: 'Create an account',
      input: req.body,
      error: 'Something went wrong'
    };
    delete vm.input.password;
    return res.render('users/create', vm);
  }
  delete vm.input.password;
  res.render('/orders');
})

module.exports = router;
