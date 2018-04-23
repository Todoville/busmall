'use strict';
//

//pics in html
MerchImage.imgPlaceholderOne = document.getElementById('firstImage');
MerchImage.imgPlaceholderTwo = document.getElementById('secondImage');
MerchImage.imgPlaceholderThree = document.getElementById('thirdImage');


//global variables for functions
MerchImage.lastDisplayed = [];
MerchImage.totalVotes = 0;
MerchImage.section = document.getElementById('section');
MerchImage.chartVotes = [];
MerchImage.chartNames = [];
MerchImage.thanksHeader = document.getElementById('inputThanks');
MerchImage.parsedArr = JSON.parse(localStorage.getItem('results'));


function MerchImage(name, url) {
  this.name = name,
  this.url = url,
  this.timesShown = 0,
  this.votes = 0;
  this.percentPicked= 0;
}

var allMerchImages = MerchImage.parsedArr || [
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

var percentCalc = function () {
  for (var i = 0; i < allMerchImages.length; i++) {
    var ratio = (allMerchImages[i].votes / allMerchImages[i].timesShown);
    allMerchImages[i].percentPicked = Math.round(ratio * 100);
  }
  console.log(allMerchImages);
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
    MerchImage.imgPlaceholderOne.style.display = 'none';
    MerchImage.imgPlaceholderTwo.style.display = 'none';
    MerchImage.imgPlaceholderThree.style.display = 'none';
    var urDone = document.createTextNode('Thank you for your input! Refresh the page to add more data.');
    MerchImage.thanksHeader.appendChild(urDone);
    MerchImage.stringifiedArr = JSON.stringify(allMerchImages);
    localStorage.setItem('results', MerchImage.stringifiedArr);
    percentCalc();
    MerchImage.voteTotals();
    MerchImage.renderChart();
  }
  console.log(event.target.alt);
  for(var i in allMerchImages) {
    if(event.target.alt === allMerchImages[i].name) {
      allMerchImages[i].votes++;
    }
  }
  MerchImage.displayImages();
};

MerchImage.voteTotals = function () {
  for(var i in allMerchImages) {
    console.log(allMerchImages[i].name);
    MerchImage.chartNames[i] = allMerchImages[i].name;
    MerchImage.chartVotes[i] = allMerchImages[i].votes;


  }
};
MerchImage.renderChart = function () {
  var ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: MerchImage.chartNames,
      datasets: [{
        label: 'Total Votes Per Item',
        data: MerchImage.chartVotes,
        backgroundColor: 'Grey',
        hoverBackgroundColor: 'Black',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            min: 0,
            max: 30,
            stepSize: 3
          }
        }]
      },
      title: {
        display: true,
        text: 'Results',
      }
    }
  });
};

MerchImage.section.addEventListener ('click', MerchImage.handleClick);

MerchImage.displayImages();