var $ = require('jquery');

function Character(config){
  config = config || {};
  $.extend(this, config);
};
Character.prototype.attack = function(){
  return name + ' attacks with ' + weapon;
};


function GoodGuy(config){
  Character.call(this, config);
};
GoodGuy.prototype = new Character();


function BadGuy(config){
  Character.call(this, config);
};

BadGuy.prototype = new Character();

module.exports = {
  'GoodGuy': GoodGuy,
  'BadGuy' : BadGuy
};
