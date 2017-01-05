var keywords = [ "abstract", "assert", "boolean","println",
                "break", "byte", "case", "catch", "char", "class", "const",
                "continue", "default", "do", "double", "else", "extends", "false",
                "final", "finally", "float", "for", "goto", "if", "implements",
                "import", "instanceof", "int", "interface", "long", "native",
                "new", "null", "package", "private", "protected", "public",
                "return", "short", "static", "strictfp", "super", "switch",
                "synchronized", "this", "throw", "throws", "transient", "true",
                "try", "void", "volatile", "while", "Integer","String"];
var list1 = [];
list1.push(config);
var languageChosen = 'code'
var len = document.getElementsByTagName('code').length ;
if(!(len)){
   languageChosen = 'pre';
   len = document.getElementsByTagName('pre').length ;
}
var request = new XMLHttpRequest();
if (request == null){
        alert("Unable to create request");
    }else{

        request.onreadystatechange = function()
            {
            if(request.readyState == 4)
            {
                LDResponse(request.responseText);
            }
        }

        request.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);
        request.send();
    }

function LDResponse(response)
{
  var json = JSON.parse(response);
  if(len>0){
    for (var i = 0;i<len;i++){
      var ele = document.getElementsByTagName(languageChosen)[i].innerText;
      var arr = ele.split(" ");
      var ele = "";
      for(var j =0;j<arr.length;j++){

        if(arr[j]){
        var temp = matching(arr[j],json);
        ele = ele+" "+temp;
       }
     }
     console.log(config);
     document.getElementsByTagName(languageChosen)[i].innerText = ele;
    }
  }
}
//P1:so what do u think about this???
//P2: I think it must be the best thing that you have done till date!!!
//P1: That means a lot...But could i ask you a favour?
//P2: yeah. Sure!! :)
//P1: Stop the shit what you have been doing till now :P

function matching(str,json){
   
   for(i=0;i<keywords.length; i++){
    var match = str.match(keywords[i]);

    if(match){
      //console.log(list1[0]);
      //var te = json.config[match[0]]];
      var te = json[list1[0]];
      te = te[match[0]]; 

      console.log(te)
      if(te==null || te == undefined)
        return str
      str1 = str.replace(keywords[i],te);
      return str1;
    }
   }
   return str;
}

