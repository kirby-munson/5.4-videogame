var $ = require('jquery');


function Character(characterTraits){
  config = config || {};
  $.extend(this, config);

}
Character.prototype.attack = function(){
  return name + ' attacks with ' + weapon;
}


function GoodGuy(config){
  Character.call(this, config);

  console.log();
}
GoodGuy.prototype = new Character();
Goodguy.prototype.speak = function(){
  return 'tiny bark';
}

var Dan = new GoodGuy()
var Kara = new GoodGuy()
var Kurt = new GoodGuy()
var Rob = new GoodGuy()
var Andy = new GoodGuy()
var Kirby = new GoodGuy()
var Christian = new GoodGuy()
var Matthew = new GoodGuy()
var David = new GoodGuy()

function BadGuy(config){
  Character.call(this, config);
}

BadGuy.prototype = new Character();
BadGuy.prototype.speak = function(){
  return 'purrrrrrrrrr';
}

var Joel = new BadGuy()
var Hope = new BadGuy()
var Rayn = new BadGuy()
var Emily = new BadGuy()
var Bill = new BadGuy()
var Chuck= new BadGuy()
var Eileen = new BadGuy()
var Davis = new BadGuy()
var John = new BadGuy()

module.export = {
  'GoodGuy': GoodGuy,
  'BadGuy' : BadGuy
}
