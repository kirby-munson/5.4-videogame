var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs');

$(function(){

  var goodGuys = [
    new models.GoodGuy({name: 'Dan', weapon: 'Backbone', image: '../app/images/frontend-dan.png'}),
    new models.GoodGuy({name: 'Kara', weapon: 'Scope', image: '../app/images/frontend-kara.png'}),
    new models.GoodGuy({name: 'Kurt',  weapon: 'Iterators', image: '../app/images/frontend-kurt.png'}),
    new models.GoodGuy({name: 'Rob', weapon: 'Functions', image: '../app/images/frontend-rob.png'}),
    new models.GoodGuy({name: 'Andy', weapon: 'Variables', image: '../app/images/frontend-andy.png'}),
    new models.GoodGuy({name: 'Kirby', weapon: 'Constructors', image: '../app/images/frontend-kirby.png'}),
    new models.GoodGuy({name: 'Christian', weapon: 'Syntax', image: '../app/images/frontend-christian.png'}),
    new models.GoodGuy({name: 'Matthew', weapon: 'Handlebars', image: '../app/images/frontend-matt.png'}),
    new models.GoodGuy({name: 'David', weapon:'CSS', image: '../app/images/frontend-david.png'})
  ];

  //console.log(goodGuys);
  var badGuys = [
    new models.BadGuy({name: 'Joel', weapon: 'Full Stack', image: '../app/images/backend-joel.png'}),
    new models.BadGuy({name: 'Emily', weapon: 'Egg', image: '../app/images/backend-emily.png'}),
    new models.BadGuy({name: 'Bill', weapon: 'Django', image: '../app/images/backend-bill.png'}),
    new models.BadGuy({name: 'Hope', weapon: 'Flask', image: '../app/images/backend-hope.png'}),
    new models.BadGuy({name: 'Rayn', weapon: 'Pandas', image: '../app/images/backend-rayn.png'}),
    new models.BadGuy({name: 'Davis', weapon: 'Pickle', image: '../app/images/backend-davis.png'}),
    new models.BadGuy({name: 'John', weapon: 'BeautifulSoup', image: '../app/images/backend-john.png'}),
    new models.BadGuy({name: 'Eileen', weapon: 'Itertools', image: '../app/images/backend-eileen.png'}),
    new models.BadGuy({name: 'Chuck', weapon: 'Primary key', image: '../app/images/backend-chuck.png'}),
  ];


goodGuys.forEach(function(character, index, array){
  $('#characters').append('<option value="' + index + '">' + character.name + '</option>');
});

  var winner;
  var myOpponent;
  var myFighter;
  var enemyNumber;
  var $charSelect = $('#characters');
  //console.log(goodContext);
  $charSelect.change(function(event){
    event.preventDefault();
    enemyNumber = (Math.floor(Math.random()*9));
    var $clickedChar = this.options[this.selectedIndex];
    // console.log($clickedChar);
    // console.log($clickedChar.getAttribute('value'));


    goodGuys.forEach(function(displayedChar, index, array){
      if($clickedChar.getAttribute('value') == index){
        myFighter = displayedChar;
      }
    });
    $('.good-template').html(goodTemplate({name: myFighter.name, weapon: myFighter.weapon, image: myFighter.image}));



    badGuys.forEach(function(displayedCharBad, index, array){
      if(enemyNumber == index){
        //console.log(enemyNumber);
        //console.log(displayedCharBad);
        myOpponent = displayedCharBad;

      }
    });
    $('.bad-template').html(badTemplate({name: myOpponent.name, weapon: myOpponent.weapon, image: myOpponent.image}));

    if(this.selectedIndex == ""){
      $("#selectError").html('Please select a Coder to do battle with!');
      $('.good-template').hide();
      $('.bad-template').hide();
      // $('.good-template').html(goodTemplate());
      // $('.bad-template').html(badTemplate());
    } else {
      $('.good-template').css('display', 'inline-block');
      $('.bad-template').css('display', 'inline-block');
      $("#selectError").html('');
    }


    $('.attack-button').on('click', function(event){
      event.preventDefault();
      if(myOpponent) {
        $(this).prop('disabled', true);
      }
      //console.log(healthBad);
      //console.log(healthGood);
      //playAudio1();
      decreaseBadGuyHealth();
      setTimeout(decreaseGoodGuyHealth, 700);
      setTimeout(whoWon, 1900);
    });



    console.log(myFighter);
    console.log(myOpponent);
    function whoWon(){
      if(healthBad.width() == 0){
        winner = myFighter;
        $('.winner-good').removeClass('hidden');
        $('.winner-bad').addClass('hidden');$('.winner-bad').addClass('hidden');
        $('.winner-good').addClass('middle');
        $('.wrapper').removeClass('background');
        $('.winner-bad').addClass('white');
        $('.bad-template').hide();
        $('.attack-button').hide();
        $('.title-box').addClass('hidden');
        $('.side-bar').hide();
        $('.smack-talk').html('My ' + winner.weapon + ' style is much stronger than your ' + myOpponent.weapon + ' style');
        }
      if(healthGood.width() == 0){
        winner = myOpponent;
        $('.winner-bad').removeClass('hidden');
        $('.winner-good').addClass('hidden');
        $('.winner-bad').addClass('middle');
        $('.wrapper').removeClass('background');
        $('.winner-bad').addClass('white');
        $('.title-box').addClass('hidden');
        $('.good-template').hide();
        $('.attack-button').hide();
        $('.side-bar').hide();
        $('.smack-talk').html('My ' + winner.weapon + ' style is much stronger than your ' + myFighter.weapon + ' style');
        }
        //console.log(winner);
    };

    $('.play-again').on('click', function(){
      $('.side-bar').show();
    });


  });
  var healthBad;
  function decreaseBadGuyHealth(){
    healthBad = $('#health-bad');
    var goodDamage = (Math.floor(Math.random()*(25 - 5) + 5));
    if(healthBad.width() > 0){
      var reducedHealthBad = healthBad.width() - goodDamage;
      healthBad.width(Math.max(reducedHealthBad, 0));
      playAudio1();
    }
  };

  var healthGood;
  function decreaseGoodGuyHealth(){
    healthGood = $('#health-good');
    var badDamage = (Math.floor(Math.random()*(25 - 5) + 5));
    if(healthGood.width() > 0){
      var reducedHealthGood = healthGood.width() - badDamage;
      healthGood.width(Math.max(reducedHealthGood, 0));
      $('.attack-button').prop('disabled', false);
      playAudio2();
    }
  };
  function playAudio1(){
    $('audio').attr({src: 'images/Laser Blasts-SoundBible.com-108608437.wav'});
  };
  function playAudio2(){
    $('audio').attr({src: 'images/End_Fx-Mike_Devils-724852498.wav'});
  };
});
