var express = require('express');
var router = express.Router(); 
var models = require('../models'); 
var Hotel = models.Hotel; 
var Restaurant = models.Restaurant; 
var Activity = models.Activity; 
var Bluebird = require('bluebird'); 


router.get('/', function(req, res, next){

  Bluebird.all([
    Hotel.find({}), 
    Restaurant.find({}), 
    Activity.find({})
  ])
  .spread(function(h, r, a){
    res.render('index', {
      all_hotels: h, 
      all_restaurants: r, 
      all_activities: a
    })
  })
  .catch(next)

})

module.exports = router; 








