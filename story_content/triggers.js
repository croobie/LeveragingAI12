function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ppifo48pJv":
        Script1();
        break;
      case "6NN922bSVN3":
        Script2();
        break;
      case "6exeFW1MA7G":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6oJF0Dzow8e');
const duration = 750;
const easing = 'ease-out';
const id = '6QC4Y1F7axI';
const pulseAmount = 0.07;
const delay = 12370;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6hFllxuajEf');
const duration = 750;
const easing = 'ease-out';
const id = '5VkoTdxeqOG';
const pulseAmount = 0.07;
const delay = 13250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5nwZt21UTRr');
const duration = 750;
const easing = 'ease-out';
const id = '5x6zedwztJx';
const pulseAmount = 0.07;
const delay = 14500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
