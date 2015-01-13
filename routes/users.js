var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var router = express.Router();

router.route('/')
  .get(function (request, response) {
   	response.status(200).json("get all users");
  })
  .post(parseUrlencoded, function (request, response) {
    response.status(200).json("insert this user")
  });

router.route('/:name')
  .all(function (request, response, next) {
  })
  .get(function (request, response) {   
  })
  .delete(function (request, response) {
  });

module.exports = router;

