//var settings = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING );
var outputModuleInfo =  app.project.renderQueue.item(19).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"]["File Name"];
//var settingsJASON = settings.toSource();
alert(outputModuleInfo)
