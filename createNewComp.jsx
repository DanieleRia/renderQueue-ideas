var newCompName = "tempDelete";
var newCompWidth = 1920;
var newCompHeight = 1080;
var newCompPixelAspect = 1;
var newCompDuration = 1;
var newCompFrameRate = 25;

var myNewComp = app.project.items.addComp(newCompName, newCompWidth, newCompHeight, newCompPixelAspect, newCompDuration, newCompFrameRate);
var myRQitem = app.project.renderQueue.items.add(myNewComp);
