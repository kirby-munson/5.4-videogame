var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs');

$(function(){

  var goodGuys = [
    new models.GoodGuy({name: 'Dan', weapon: 'backbone', image: '../app/images/frontend-dan.png'}),
    new models.GoodGuy({name: 'Kara', weapon: 'scope', image: '../app/images/frontend-kara.png'}),
    new models.GoodGuy({name: 'Kurt',  weapon: 'iterators', image: '../app/images/frontend-kurt.png'}),
    new models.GoodGuy({name: 'Rob', weapon: 'functions', image: '../app/images/frontend-rob.png'}),
    new models.GoodGuy({name: 'Andy', weapon: 'variables', image: '../app/images/frontend-andy.png'}),
    new models.GoodGuy({name: 'Kirby', weapon: 'constructors', image: '../app/images/frontend-kirby.png'}),
    new models.GoodGuy({name: 'Christian', weapon: 'syntax', image: '../app/images/frontend-christian.png'}),
    new models.GoodGuy({name: 'Matthew', weapon: 'handlebars', image: '../app/images/frontend-matt.png'}),
    new models.GoodGuy({name: 'David', weapon:'css', image: '../app/images/frontend-david.png'})
  ];

  //console.log(goodGuys);
  var badGuys = [
    new models.BadGuy({name: 'Joel', weapon: 'full stack', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Emily', weapon: 'egg', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Bill', weapon: 'django', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Hope', weapon: 'flask', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Rayn', weapon: 'pandas', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Davis', weapon: 'pickle', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'John', weapon: 'BeautifulSoup', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Eileen', weapon: 'itertools', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Chuck', weapon: 'primary key', image: '../app/images/backend-emily.png'}),
  ];


console.log(enemyNumber);
goodGuys.forEach(function(character, index, array){
  $('#characters').append('<option value="' + index + '">' + character.name + '</option>');
});


  // var goodContext = {'goodGuys': goodGuys};
  // var badContext = {'badGuys': badGuys};
  var enemyNumber;
  var $charSelect = $('#characters');
  //console.log(goodContext);
  $charSelect.change(function(event){
    event.preventDefault();
    enemyNumber = (Math.floor(Math.random()*9));
    var $clickedChar = this.options[this.selectedIndex];
    // console.log($clickedChar);
    // console.log($clickedChar.getAttribute('value'));

    var myFighter;

    goodGuys.forEach(function(displayedChar, index, array){
      if($clickedChar.getAttribute('value') == index){
        myFighter = displayedChar;
      }
    });
    $('.good-template').html(goodTemplate({name: myFighter.name, weapon: myFighter.weapon, image: myFighter.image}));

    if(this.selectedIndex == ""){
      $("#selectError").html('Please select a Coder to do battle with!');
      $('.good-template').html(goodTemplate());
    } else {
      $("#selectError").html('');
    }


    var myOpponent;
    badGuys.forEach(function(displayedCharBad, index, array){
      if(enemyNumber == index){
        console.log(enemyNumber);
        console.log(displayedCharBad.name);
        myOpponent = displayedCharBad;
      }
    });
    $('.bad-template').html(badTemplate({name: myOpponent.name, weapon: myOpponent.weapon, image: myOpponent.image}));
  });

});
