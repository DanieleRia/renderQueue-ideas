var myRQ = app.project.renderQueue;
var numItems = app.project.renderQueue.numItems;
var lastItemIndex = numItems;
var myTargeOutputModule = myRQ.item(lastItemIndex).outputModule(1);
var myTargetAddress = myTargetOutputModule.getSettings(GetSettingsFormat.STRING)["Output File Info"]["Base Path"];

alert(myTargetAddress);
