﻿myRQ = app.project.renderQueue;
numItems = app.project.renderQueue.numItems;
lastItemIndex = numItems;
myTargetItem = myRQ.item(lastItemIndex).outputModule(1).file;
alert(myTargetItem);
