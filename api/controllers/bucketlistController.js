'use strict';

var Hero = require('../models/bucketlistModel'); 

var nextId = 0;

Hero.find({}, function(err, heroes) {
  if (err) {
    console.error("Failed to initialize maxId");
    return;
  }
  for (var i = 0; i < heroes.length; i++) {
    nextId = Math.max(nextId, heroes[i].id == null ? 0 : heroes[i].id + 1);
  }
});

exports.list_all_heroes = function(req, res) {
  var searchQuery = {};
  if (req.query && req.query.name) {
    searchQuery = {name: new RegExp(req.query.name,"i")}
  }
  Hero.find(searchQuery, function(err, heroes) {
    if (err)
      res.send(err);
    res.json(heroes);
//    res.json([{id:0, name: "Test1"}, {id: 1, name: "test2"}, {id: 2, name: "Jenkins Success?"}]);
  });
};


exports.create_a_hero = function(req, res) {
  var new_hero = new Hero(req.body);
  new_hero.id = nextId++;
  new_hero.save(function(err, hero) {
    if (err)
      res.send(err);
    res.json(hero);
  });
};


exports.read_a_hero = function(req, res) {
  Hero.find({id: req.params.heroId}, function(err, hero) {
    if (err)
      res.send(err);
    hero = hero.length == 1 ? hero[0] : null;
    res.json(hero);
  });
};


exports.update_a_hero = function(req, res) {
  Hero.findOneAndUpdate({id: req.body.id}, req.body, {new: true}, function(err, hero) {
    if (err)
      res.send(err);
    res.json(hero);
  });
};


exports.delete_a_hero = function(req, res) {
  Hero.remove({
    id: req.params.heroId
  }, function(err, hero) {
    if (err)
      res.send(err);
    res.json({ message: 'Heor successfully deleted' });
  });
};

