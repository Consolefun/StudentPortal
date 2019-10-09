var express = require('express');
var router = express.Router();
var Student = require('../models/student.js');
var Course = require('../models/Courses.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

// /* GET ALL STUDENT */
// router.get('/', function (req, res, next) {
//   Student.find(function (err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });

/* GET SINGLE STUDENT BY ID */
router.get('/:id', function (req, res, next) {
  Student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE STUDENT */
router.post('/', function (req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE STUDENT */
router.put('/:id', function(req, res, next){
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
/* DELETE STUDENT */
router.delete('/:id', function(req, res, next){
  Student.findByIdAndDelete(req.params.id, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
});

// /* GET ALL Courses */
router.get('/', function (req, res, next) {
  Course.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
// Get a single course by id
router.get('/:id', function (req, res, next) {
  Course.findById(req.params.id, function (err, post) {
    if(err) return next(err);
    res.json(post);
  })
});
module.exports = router;
