'use strict';
//

var buttonOne = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var buttonThree = document.getElementById('buttonThree');

//pics in html
MerchImage.imgPlaceholderOne = document.getElementById('firstImage');
MerchImage.imgPlaceholderTwo = document.getElementById('secondImage');
MerchImage.imgPlaceholderThree = document.getElementById('thirdImage');

//global variables for functions
MerchImage.currentlyDisplayed = [];
MerchImage.lastDisplayed = [];
MerchImage.totalVotes = 0;

function MerchImage(name, url) {
  this.name = name,
  this.url = url,
  this.timesShown = 0,
  this.clicks = 0;
  this.percentShown = 0;
}

var allMerchImages = [
  new MerchImage('Bag', 'img/bag.jpg'),
  new MerchImage('Banana', 'img/banana.jpg'),
  new MerchImage('Bathroom', 'img/bathroom.jpg'),
  new MerchImage('Boots', 'img/boots.jpg'),
  new MerchImage('Breakfast', 'img/bathroom.jpg'),
  new MerchImage('Bubblegum', 'img/bubblegum.jpg'),
  new MerchImage('chair', 'img/chair.jpg'),
  new MerchImage('Cthulhu', 'img/cthulhu.jpg'),
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

MerchImage.prototype.percentCalc = function () {
  var ratio = (this.click / this.timesShown);
  this.percentShown = Math.round(ratio * 100);

};

MerchImage.newImageSet = function () {
  var uniqueImgArr = [];

  while(uniqueImgArr.length < 3) {
    var randomImg = Math.floor(Math.random() * allMerchImages.length);
    if(!MerchImage.lastDisplayed.includes(randomImg) && !uniqueImgArr.includes(randomImg)) {
      uniqueImgArr.push(randomImg);
    } else {
      console.log('this array aint big enuff for the two of us');
    }
  }
  MerchImage.lastDisplayed = uniqueImgArr;
  return uniqueImgArr;
};

//the second image
// MerchImage.imgPlaceholderOne.src = randomImg.url;
// MerchImage.imgPlaceholderOne.alt = randomImg.name;


buttonOne.addEventListener('click', function(e) {
  MerchImage.totalVotes++;
  MerchImage.newImageSet();


});
buttonTwo.addEventListener('click', function(e) {
  MerchImage.totalVotes++;
  MerchImage.newImageSet();


});
buttonThree.addEventListener('click', function(e) {
  MerchImage.totalVotes++;
  MerchImage.newImageSet();

});

if(allMerchImages.totalVotes === 2) {
  buttonOne.removeEventListener('click', function (e) {});
  buttonTwo.removeEventListener('click', function (e) {});
  buttonThree.removeEventListener('click', function(e) {});
}

MerchImage.newImageSet();