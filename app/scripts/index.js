var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs');

$(function(){

  var goodGuys = [
    new models.GoodGuy({name: 'Dan', image: '../app/images/frontend-dan.png'}),
    new models.GoodGuy({name: 'Rob', image: '../app/images/frontend-rob.png'}),
    new models.GoodGuy({name: 'Kara', image: '../app/images/frontend-kara.png'}),
    new models.GoodGuy({name: 'Kurt', image: '../app/images/frontend-kurt.png'}),
    new models.GoodGuy({name: 'Andy', image: '../app/images/frontend-andy.png'}),
    new models.GoodGuy({name: 'Kirby', image: '../app/images/frontend-kirby.png'}),
    new models.GoodGuy({name: 'Christian', image: '../app/images/frontend-christian.png'}),
    new models.GoodGuy({name: 'Matthew', image: '../app/images/frontend-matthew.png'}),
    new models.GoodGuy({name: 'David', image: '../app/images/frontend-david.png'})
  ];

  //console.log(goodGuys);
  var badGuys = [
    new models.BadGuy({name: 'Joel', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Emily', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Bill', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Hope', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Rayn', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Davis', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'John', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Eileen', weapon: 'python', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Chuck', weapon: 'python', image: '../app/images/backend-emily.png'}),
  ];

goodGuys.forEach(function(character, index, array){
  $('#characters').append('<option value="' + index + '">' + character.name + '</option>');
});

  var goodContext = {'goodGuys': goodGuys};
  var badContext = {'badGuys': badGuys};
  var $charSelect = $('#characters');
  //console.log(goodContext);
  $charSelect.change(function(event){
    event.preventDefault();
    var $clickedChar = this.options[this.selectedIndex];
    console.log($clickedChar);
    //console.log($clickedChar.getAttribute('value'));

    goodGuys.forEach(function(displayedChar, index, array){
      if($clickedChar.getAttribute('value') == index){
        console.log(displayedChar);
        $('.good-template').html(goodTemplate({name: displayedChar.name, image: displayedChar.image}));
      }


    });


    if(this.selectedIndex === 0){
      $("#selectError").html('Please select a Coder to do battle with!');
    } else {
      $("#selectError").html('');
    }


  });

});
