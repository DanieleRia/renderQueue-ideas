var om1 = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"];

for(var p in om1){
  alert(om1[p])
}
