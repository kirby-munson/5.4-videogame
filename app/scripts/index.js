console.log("Hello World!");

var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs')

$(function(){



var goodGuys = [
  new models.GoodGuy({name: 'Dan', image: 'http://unsplash.it/100/100'});
  new models.Goodguy({name: 'Batman'});

];

_.each(goodGuys, function(goodGuy){
  var html = goodTemplate(goodGuy);
  $('js-puppies').append(html);



$('js-cute-puppy').on('click', function(event){
  event.preventDefault();

  var $puppyImage = $(this);
  var puppyName = $puppyImage.data('name');
  favoritePuppy_.filter(puppies, {'name': puppyName});

  alert('My name is' + favoritePuppy.name + 'and i have a' favoritePuppy.speak());

}

  var $charSelect = $('select option')

  $charSelect.click(function(){
    event.preventDefault();
    var $clickedChar = $(this);

    $('.good-template').html(goodTemplate);
    $('.bad-template').html(badTemplate);
    $('.active').removeClass('active');
    $clickedLink.addClass('active');






});
