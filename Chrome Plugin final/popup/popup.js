(function (){
    'use strict';
    var backgroungpage = chrome.extension.getBackgroundPage();
    document.querySelector('button').addEventListener('click', function () {
    	var answer=document.getElementById("mySelect");
        var selectedText = answer.options[answer.selectedIndex].text;
        backgroungpage.handleButtonClick(selectedText); 
    });
}());