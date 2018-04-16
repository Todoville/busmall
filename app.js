'use strict';
console.log('link workin bruvvvvvvv');

var buttonOne = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var buttonThree = document.getElementById('buttonThree');

buttonOne.addEventListener('click', function(e) {
  this.clicks++;

})

function MerchImage(name, url) {
  this.name = name,
  this.url = url,
  this.timesShown = 0,
  this.clicks = 0;
}

var allMerchImages = [
  new MerchImage('bag', 'img/bag.jpg'),
  new MerchImage('banana', 'img/banana.jpg'),
  new MerchImage('bathroom', 'img/bathroom.jpg'),
  new MerchImage('Boots', 'img/boots.jpg'),
  new MerchImage('Breakfast', 'img/bathroom.jpg'),
  new MerchImage('Bubblegum', 'img/bubblegum.jpg'),
  new MerchImage('chair', 'img/chair.jpg'),
  new MerchImage('Cthulu', 'img/cthulu.jpg'),
  new MerchImage('Dog Duck', 'img/dog-duck.jpg'),
  new MerchImage('Dragon', 'img/dragon.jpg'),
  new MerchImage('Pen', 'img/pen.jpg'),
  new MerchImage('Pet-Sweep', 'img/pet-sweep.jpg'),
  new MerchImage('Scissors', 'img/scissors.jpg'),
  new MerchImage('Shark', 'img/shark.jpg'),
  new MerchImage('Sweep', 'img/sweep.png'),
  new MerchImage('Tauntaun', 'img/tauntaun.jpg'),
  new MerchImage('Unicorn', 'img/unicorn.jpg'),
  new MerchImage('USB', 'img/usb.gif'),
  new MerchImage('WatervCan', 'img/water-can.jpg'),
  new MerchImage('Wine Glass', 'img/wine-glass.jpg')
];

var displayImageOne = MerchImage[0];
var displayImageTwo = MerchImage[1];
var displayImageThree = MerchImage[2];