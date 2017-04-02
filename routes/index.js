var express = require('express');
var router = express.Router();

// router.get('/',function(req, res, next){
//     res.render('index.html');
// });

router.get('/*', function (req, res, next) {
       if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
       return next({ status: 404, message: 'Not Found' });
       } else {
          return res.render('index.html');
       }
});

module.exports = router;