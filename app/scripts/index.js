console.log("Hello World!");

var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var template = require('../template/puppy-template.hbs');

$(function(){

  var favoritePuppy

var puppies = [
  new models.GoodGuy({name: 'Spiderman'});
  new models.Goodguy({name: 'Batman'});
];

_.each(puppies, function(puppy){
  var html = template(puppy);
  $('js-puppies').append(html);



$('js-cute-puppy').on('click', function(event){
  event.preventDefault();

  var $puppyImage = $(this);
  var puppyName = $puppyImage.data('name');
  favoritePuppy_.filter(puppies, {'name': puppyName});

  alert('My name is' + favoritePuppy.name + 'and i have a' favoritePuppy.speak());

}








});
