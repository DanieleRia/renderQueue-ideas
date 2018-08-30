var myRQ = app.project.renderQueue;
var numItems = app.project.renderQueue.numItems;
var lastItemIndex = numItems;
var myTargetItem = myRQ.item(lastItemIndex).outputModule(1).file;
var myTargetString = myTargetItem.toString();
var findThis = '/'var lastSeparator = myTargetString.lastIndexOf(findThis);
var myTargetAddress = myTargetString.substr (0, lastSeparator+1);
alert(myTargetAddress);
