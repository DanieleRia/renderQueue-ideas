var myRQ = app.project.renderQueue;
var numItems = app.project.renderQueue.numItems;
var lastItemIndex = numItems;
var myTargeOutputModule = myRQ.item(lastItemIndex).outputModule(1);
//var MyFile = myTargeOutputModule.file;
var myTargetAddress = myTargeOutputModule.getSettings(GetSettingsFormat.STRING)["Output File Info"]["Base Path"];
var myTargetFolder = Folder(myTargetAddress)

var myDialog = myTargetFolder.selectDlg();

/* var newCompName = "tempDelete";
var newCompWidth = 1920;
var newCompHeight = 1080;
var newCompPixelAspect = 1;
var newCompDuration = 0.03;
var newCompFrameRate = 25;

var myNewComp = app.project.items.addComp(newCompName, newCompWidth, newCompHeight, newCompPixelAspect, newCompDuration, newCompFrameRate);
var myRQitem = app.project.renderQueue.items.add(myNewComp);
var myOM1 = myRQitem.outputModule(1);
var myFileName = File.decode( myOM1.file.name );
var mySeparator = "/";
var newAddress = { "Output File Info": { "Full Flat Path": myTargetAddress + mySeparator + myFileName  } };//

myOM1.setSettings( newAddress ); */

//myRQ.render();

//myNewComp.remove();
