
chrome.commands.onCommand.addListener(function(command) 
{
  	duplicateCurrentTab();
});


function duplicateCurrentTab(str)
{
  //str1 = chrome.storage.local.get(/* String or Array */["lang"], function(items){
     //items = [ { "yourBody": "myBody" } ]
    // return items;
//});
  //console.log(str1);
	chrome.tabs.getSelected(null, function(tab)
	{
	    chrome.tabs.duplicate(tab.id);
      chrome.tabs.executeScript(null, {
         code: 'var config = ' + JSON.stringify(str)
     }, function() {
      chrome.tabs.executeScript(null, {file: "content_script.js"});
      });
	});

}


function handleButtonClick(str){
  console.log(str+" sdsdd");
   
   duplicateCurrentTab(str);
}

var views = chrome.extension.getViews({type: "popup"});
for (var i = 0; i < views.length; i++) 
  {
      views[i].document.getElementById('x').innerHTML="My Custom Value";
  }