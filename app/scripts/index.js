var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var goodTemplate = require('../templates/good-template.hbs');
var badTemplate = require('../templates/bad-template.hbs');

$(function(){

  var goodGuys = [
<<<<<<< f18891cb73f2b21d1cb8588279358118347fec42
    new models.GoodGuy({name: 'Dan', image: 'app/images/frontend-dan.png'}),
    new models.GoodGuy({name: 'Rob', image: 'app/images/frontend-rob.png'})
=======
    new models.GoodGuy({name: 'Dan', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Kara', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Kurt', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Rob', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Andy', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Kirby', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Christian', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'Matthew', image: '../app/images/head_kirby_videogame.png'}),
    new models.GoodGuy({name: 'David', image: '../app/images/head_kirby_videogame.png'})
>>>>>>> A: various js updates
  ];

  //console.log(goodGuys);
  var badGuys = [
<<<<<<< f18891cb73f2b21d1cb8588279358118347fec42
    new models.BadGuy({name: 'Emily', image: 'app/images/backend-emily.png'})
=======
    new models.BadGuy({name: 'Joel', image: 'https://unsplash.it/110/110'})
>>>>>>> A: various js updates
  ];

goodGuys.forEach(function(character, index, array){
  $('#characters').append('<option value="' + index + '">' + character.name + '</option>');
  //console.log(character);
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
  //console.log(goodContext);
  $charSelect.change(function(event){
    event.preventDefault();
    var $clickedChar = this.options[this.selectedIndex];
    console.log($clickedChar);
    //console.log($clickedChar.getAttribute('value'));

    goodGuys.forEach(function(displayedChar, index, array){
      if($clickedChar.getAttribute('value') === displayedChar){
        return $clickedChar;
      }
    $('.good-template').html(goodTemplate({name: displayedChar.name, image: displayedChar.image}));
    //console.log(displayedChar.name);
    //console.log(displayedChar.image);


    });


    if(this.selectedIndex === 0){
      $("#selectError").html('Please select a Coder to do battle with!');
    } else {
      $("#selectError").html('');
    }

    //$('.bad-template').html(badTemplate(badContext));

  });

});
