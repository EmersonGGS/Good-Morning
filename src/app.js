var UI = require('ui');
var Vector2 = require('vector2');

var compliments = ["Good lookin'.", "Beautiful.", "Lovely.", "Gorgeous.", "Marvelous.", "Stunning.", "Wonderful.",  "Looking dapper."];
var preCompliments = ["Good day, ", "Hello, ", "Hi, ", "Hey, ", "What's happening, ", "Woah! You're ", "Bonjour, ",  "Cheerio, "];
var complimentPicker = Math.floor(Math.random() * (compliments.length - 0)) + 0;
var chosenPreComp = preCompliments[complimentPicker];
var chosenComp = compliments[complimentPicker];

//create date variables
var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();

var dateOutput = curr_date + " . " + curr_month + " . " + curr_year;

var window = new UI.Window();

//compliments ouput
var complimenter = new UI.Text({
  position: new Vector2(0, 40),
  size: new Vector2(144, 40),
  text: chosenComp,
  font: 'gothic-28-bold',
  color: 'black',
  textAlign: 'center'
});

var preComplimenter = new UI.Text({
  position: new Vector2(0, 10),
  size: new Vector2(144, 40),
  text: chosenPreComp,
  font: 'gothic-24-bold',
  color: 'black',
  textAlign: 'center'
});
//Background - White for compliments
var whiteBG = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 90),
  backgroundColor: 'white'
});


var dateText = new UI.TimeText({
  position: new Vector2(0, 208),
  size: new Vector2(144, 40),
  text: dateOutput,
  font: 'gothic-18',
  color: 'white',
  textAlign: 'center'
});

var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 40),
  text: "%I %M",
  font: 'bitham-42-light',
  color: 'white',
  textAlign: 'center'
});

window.add(timeText);
window.add(dateText);
window.add(whiteBG);
window.add(preComplimenter);
window.add(complimenter);
window.show();

// Get new position
var timePos = timeText.position();
timePos.y += 72;

var datePos = dateText.position();
datePos.y -= 65;

//Start animation
timeText.animate('position', timePos, 1000);
dateText.animate('position', datePos, 1500);