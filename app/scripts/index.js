var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs');

$(function(){

  var goodGuys = [
    new models.GoodGuy({name: 'Dan', image: 'http://unsplash.it/100/100'}),
    new models.GoodGuy({name: 'Faith', image: 'http://unsplash.it/100/100'})
  ];


  var badGuys = [
    new models.BadGuy({name: 'Joel', image: 'http://unsplash.it/110/110'})
  ];

goodGuys.forEach(function(character, index, array){
  $('#characters').append('<option value="' + index + '">' + character.name + '</option>');
});
// _.each(goodGuys, function(goodGuy){
//   var html = goodTemplate(goodGuy);
//   $('js-puppies').append(html);
//}


// $('js-cute-puppy').on('click', function(event){
//   event.preventDefault();
//
//   var $puppyImage = $(this);
//   var puppyName = $puppyImage.data('name');
//   favoritePuppy_.filter(puppies, {'name': puppyName});
//
//   alert('My name is' + favoritePuppy.name + 'and i have a' favoritePuppy.speak());
//
// }
  var goodContext = {'goodGuys': goodGuys};
  var badContext = {'badGuys': badGuys};
  var $charSelect = $('#characters');

  $charSelect.change(function(){
    event.preventDefault();
    var $clickedChar = $(this);
    console.log(this.name);
    $('.good-template').html(goodTemplate(goodContext));
    $('.bad-template').html(badTemplate(badContext));
  });
});
