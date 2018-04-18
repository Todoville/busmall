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
MerchImage.lastDisplayed = [];
MerchImage.totalVotes = 0;
MerchImage.section = document.getElementById('section');

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
  new MerchImage('Breakfast', 'img/breakfast.jpg'),
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

MerchImage.uniqueImageSet = function () {
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

MerchImage.displayImages = function () {
  var nestedArray = MerchImage.uniqueImageSet();

  allMerchImages[nestedArray[0]].timesShown++;
  allMerchImages[nestedArray[1]].timesShown++;
  allMerchImages[nestedArray[2]].timesShown++;

  MerchImage.imgPlaceholderOne.src = allMerchImages[nestedArray[0]].url;
  MerchImage.imgPlaceholderOne.alt = allMerchImages[nestedArray[0]].name;
  MerchImage.imgPlaceholderTwo.src = allMerchImages[nestedArray[1]].url;
  MerchImage.imgPlaceholderTwo.alt = allMerchImages[nestedArray[1]].name;
  MerchImage.imgPlaceholderThree.src = allMerchImages[nestedArray[2]].url;
  MerchImage.imgPlaceholderThree.alt = allMerchImages[nestedArray[2]].name;
};


MerchImage.handleClick = function(event) {
  MerchImage.totalVotes++;
  if(MerchImage.totalVotes >24) {
    MerchImage.section.removeEventListener('click', MerchImage.handleClick);
  }
  console.log(event.target.alt);
  for(var i in allMerchImages) {
    if(event.target.alt === allMerchImages[i].name) {
      allMerchImages[i].votes++;
    }
  }
  MerchImage.uniqueImageSet();
  MerchImage.displayImages();
};

MerchImage.section.addEventListener('click', MerchImage.handleClick);

MerchImage.uniqueImageSet();
MerchImage.displayImages();
MerchImage.handleClick();