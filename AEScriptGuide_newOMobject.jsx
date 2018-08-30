
// Example:
// Get current value of render setting's "Proxy Use"
// Key and value strings are English.

var rqItem1_proxyUse = app.project.renderQueue.item(1).getSetting("Proxy Use");

// Get string version of same setting, add "-str" at the end of key string

var rqItem1_proxyUse_str = app.project.renderQueue.item(1).getSetting("Proxy Use-str");

// Set value of "Proxy Use" to "Use All Proxies"

app.project.renderQueue.item(1).setSetting("Proxy Use", "Use All Proxies");

// You can use numbers, too.
// The next line does the same as the previous // Example.

app.project.renderQueue.item(1).setSetting("Proxy Use", 1);

// Example:

// Get object containing string version of all current render setting
// values of render queue item 1.
// To get the values in the number format, use GetSettingsFormat.NUMBER
// as an argument.

var rqItem1_all_str = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING );

// Convert to JSON format so that it is human-readable.

var rqItem1_all_str_json = rqItem1_all_str.toSource();

// Get an object that contains string version of settable render setting
// values of render queue item 1.
// To get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var rqItem1_settable_str = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set render queue item 2 with values that you got from render
//queue item 1.

app.project.renderQueue.item(2).setSettings( rqItem1_settable_str );

// Set render queue item 3 with values you create.

var my_renderSettings = {
"Color Depth":"32 bits per channel",
"Quality":"Best",
"Effects":"All On",
"Time Span Duration":"1.0",
"Time Span Start":"2.0"
};
app.project.renderQueue.item(2).setSettings( my_renderSettings );

// Get object that contains all possible values of all render settings of
// render queue item 1 and convert to JSON format.

var rqItem1_spec_str = app.project.renderQueue.item(1).getSettings(GetSettingsFormat.SPEC);
var rqItem1_spec_str_json = rqItem1_spec_str.toSource();

// Get object that contains the string version of all current output module setting
// values of output module item 1 from render queue item 1.
// To get the values in the number format, use GetSettingsFormat.NUMBER as an argument.

var omItem1_all_str= app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING );

// Convert to JSON format so that it is human-readable.

var omItem1_all_str_json = omItem1_all_str.toSource();

// Get object that contains string version of settable output module setting values
// of output module item 1 from render queue item 1.
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set output module item 1 of render queue item 2 with values that you get from
// output module 1 of render queue item 1

app.project.renderQueue.item(2).outputModule(1).setSettings( omItem1_settable_str );

// Set output module item 1 of render queue item 3 with values that you create.

var crop_data = {
"Crop":true,
"Crop Bottom":0,
"Crop Left":0,
"Crop Right":8,
"Crop Top":10
};

app.project.renderQueue.item(1).outputModule(3).setSettings( crop_data );

// Currently, the format setting in the output module is not settable, but it
// is readable. The next line will tell you the current format of output module
// item 1 from render queue item 1.

var current_format = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING).Format;

// This line will tell you the output module file info.

var current_omFileTempalte = app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING)["Output File Info"]["File Template"];

// Note: there is a bug that causes OutputModule object to be invalidated after the
// output module setting is modified.
// So, you need to retrieve OMitem after you modify it.

// Example:

// This is the new way to change the output file path of output module 1 of
// render queue item 1.
// In this // Example, output file is routed to the user directory.

var om1 = app.project.renderQueue.item(1).outputModule(1);
var file_name = File.decode( om1.file.name ); // Name contains special character, space?
var new_path = "~/new_output";
var new_dir = new Folder( new_path );
new_path = new_dir.fsName;

var new_data = {
"Output File Info":
{
"Base Path":new_path,
"Subfolder Path":"draft",
"File Name":file_name
}
};

om1.setSettings( new_data );
}

// Example:

// This is the new way to change the output file path of output module 1 of
// render queue item 1.
// In this // Example, the output file is routed to the user directory,
// but this time using the full path.

var om1 = app.project.renderQueue.item(1).outputModule(1);

var file_name = File.decode( om1.file.name ); // Name contains special character, such as space?
var new_path = "/Users/myAccount/new_output";
var separator = "/";
if ($.os.indexOf("Mac") == -1)
{
new_path = "C:\\Users\\myAccount\\new_output";
separator = "\\";
}

var new_data = {
"Output File Info":
{
"Full Flat Path":new_path + separator + file_name
}
};

om1.setSettings( new_data );
