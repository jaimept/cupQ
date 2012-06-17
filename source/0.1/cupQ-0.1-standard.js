/* cupQ: cupQuery -v0.1- MIT License (MIT)-Uncompressed - Samir Dash, 2012 mobilewish@gmail.com http://samirshomepage.wordpress.com */var _=function($Q,$target,$nodeIndex){var _debug=window["_globalDebugCupQFlag"];var _isClassName=false;var _isIdName=false;var _isTagName=false;var _isGetParent=false;var _isGetChildren=false;var _isGetCurrent=false;var _nodeList=new Array();var _childIndexInParentList=new Array();var _attributeList=new Array();var _styleList=new Array();var _innerTextList=new Array();var _innerHTMLList=new Array();var _currentNodeIndex=0;var _node;var _targetList=new Array();var _bodyFilesArr=Array();var _headFilesArr=new Array();var cupQ={_debug:true,$Q:"",$nodeIndex:"",$target:"",_isClassName:false,_isIdName:false,_isTagName:false,_isGetParent:false,_isGetChildren:false,_isGetCurrent:false,_nodeList:[],_childIndexInParentList:[],_attributeList:[],_styleList:[],_innerTextList:[],_innerHTMLList:[],_currentNodeIndex:0,_node:"",_targetList:[],_bodyFilesArr:[],_headFilesArr:[],init:function(){return _nodeList;},importAtHead:function(filesArray){_headFilesArr=filesArray;},importAtBody:function(filesArray){_bodyFilesArr=filesArray;},importFiles:function(filesArray){var h=document.getElementsByTagName("head")[0];for(var i=0;i<filesArray.length;i++){if(_headFilesArr[i].indexOf(".js")>-1){var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",filesArray[i]);s.setAttribute("charset","utf-8");h.appendChild(s);}else{var s=document.createElement("style");s.setAttribute("type","text/css");s.setAttribute("src",filesArray[i]);s.setAttribute("charset","utf-8");h.appendChild(s);}}},internalimport:function(){var h=document.getElementsByTagName("head")[0];var b=document.getElementsByTagName("body")[0];for(var i=0;i<_headFilesArr.length;i++){if(_headFilesArr[i].indexOf(".js")>-1){var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",_headFilesArr[i]);s.setAttribute("charset","utf-8");h.appendChild(s);}else{var s=document.createElement("style");s.setAttribute("type","text/css");s.setAttribute("src",_headFilesArr[i]);s.setAttribute("charset","utf-8");h.appendChild(s);}}for(var i=0;i<_bodyFilesArr.length;i++){if(_bodyFilesArr[i].indexOf(".js")>-1){var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",_bodyFilesArr[i]);s.setAttribute("charset","utf-8");b.appendChild(s);}else{var s=document.createElement("style");s.setAttribute("type","text/css");s.setAttribute("src",_bodyFilesArr[i]);s.setAttribute("charset","utf-8");b.appendChild(s);}}},htmlAppend:function(val,index){_innerHTMLList=[];for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerHTML=_nodeList[i].innerHTML+val;_innerHTMLList[i]=_nodeList[i].innerHTML;}else{if(i==index){_nodeList[index].innerHTML=_nodeList[i].innerHTML+val;_innerHTMLList[i]=_nodeList[index].innerHTML;}else{}}}return _innerHTMLList;},htmlPrepend:function(val,index){_innerHTMLList=[];for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerHTML=val+_nodeList[i].innerHTML;_innerHTMLList[i]=_nodeList[i].innerHTML;}else{if(i==index){_nodeList[index].innerHTML=val+_nodeList[i].innerHTML;_innerHTMLList[i]=_nodeList[index].innerHTML;}else{}}}return _innerHTMLList;},html:function(val,index){_innerHTMLList=[];if(val==undefined){for(var i=0;i<_nodeList.length;i++){_innerHTMLList[i]=_nodeList[i].innerHTML;}}else{for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerHTML=val;_innerHTMLList[i]=val;}else{if(i==index){_nodeList[index].innerHTML=val;_innerHTMLList[i]=val;}else{}}}}return _innerHTMLList;},textAppend:function(val,index){_innerTextList=[];for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerText=_nodeList[i].innerText+val;_innerTextList[i]=_nodeList[i].innerText;}else{if(i==index){_nodeList[index].innerText=_nodeList[i].innerText+val;_innerTextList[i]=_nodeList[index].innerText;}else{}}}return _innerTextList;},textPrepend:function(val,index){_innerTextList=[];for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerText=val+_nodeList[i].innerText;_innerTextList[i]=_nodeList[i].innerText;}else{if(i==index){_nodeList[index].innerText=val+_nodeList[i].innerText;_innerTextList[i]=_nodeList[index].innerText;}else{}}}return _innerTextList;},text:function(val,index){_innerTextList=[];if(val==undefined){for(var i=0;i<_nodeList.length;i++){_innerTextList[i]=_nodeList[i].innerText;}}else{for(var i=0;i<_nodeList.length;i++){if(index==undefined){_nodeList[i].innerText=val;_innerTextList[i]=val;}else{if(i==index){_nodeList[index].innerText=val;_innerTextList[i]=val;}else{}}}}return _innerTextList;},style:function(index,prop){for(var i=0;i<_nodeList.length;i++){if(index==undefined){if(prop!=undefined){_styleList[i]=_nodeList[i].style[prop];}else{_styleList[i]=_nodeList[i].style;}}else{if(i==index){if(prop!=undefined){_styleList[index]=_nodeList[index].style[prop];}else{_styleList[index]=_nodeList[index].style;}}else{}}}return _styleList;},childIndexInParent:function(index){_childIndexInParentList=[];if(index==undefined){for(var i=0;i<_nodeList.length;i++){var parentNode=_nodeList[i].parentNode;var parentNodeList=parentNode.children;for(var j=0;parentNodeList.length;j++){if(parentNodeList[j]==(_nodeList[i])){_childIndexInParentList.push(j);break;}}}}else{var parentNode=_nodeList[index].parentNode;var parentNodeList=parentNode.children;for(var j=0;parentNodeList.length;j++){if(parentNodeList[j]==(_nodeList[index])){_childIndexInParentList.push(j);break;}}}return _childIndexInParentList;},remove:function(index){if(index==undefined){for(var i=0;i<_nodeList.length;i++){var parentNode=_nodeList[i].parentNode;if(parentNode!=undefined){parentNode.removeChild(_nodeList[i]);_nodeList.splice(i);}}}else{var parentNode=_nodeList[index].parentNode;if(parentNode!=undefined){parentNode.removeChild(_nodeList[index]);_nodeList.splice(index);}}return _nodeList;},attribute:function(name,index,val){_attributeList=[];if(name!=undefined){if(index==-1||isNaN(index)==true||index==""){for(var i=0;i<_nodeList.length;i++){if(val==undefined||val==""){_attributeList[i]=_nodeList[i].getAttribute(name);}else{_nodeList[i].setAttribute(name,val);_attributeList[i]=_nodeList[i].getAttribute(name);}}}else{if(val==undefined||val==""){_attributeList.push(_nodeList[index].getAttribute(name));}else{_nodeList[index].setAttribute(name,val);_attributeList.push(_nodeList[index].getAttribute(name));}}}return _attributeList;},hostObject:{init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"unknown";this.OS=this.searchString(this.dataOS)||"an unknown OS";this.navigator=navigator;this.navigatorVendor=navigator.vendor;this.userAgent=navigator.userAgent;},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1){return data[i].identity;}}else{if(dataProp){return data[i].identity;}}}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1){return;}return parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]},onDocumentReady:function(){},onWindowLoad:function(){},getUniqueArray:function(arr){var matchArr=new Array();for(var i=0;i<arr.length;i++){var isMatched=false;for(var j=0;j<matchArr.length;j++){if(arr[i]==matchArr[j]){isMatched=true;break;}}if(isMatched==false){matchArr.push(arr[i]);}else{}}return matchArr;},trace:function(msg){_debug=window["_globalDebugCupQFlag"];if(_debug==true){console.log(msg);}},debug:function(param){window["_globalDebugCupQFlag"]=param;if(param==true){_debug=true;}else{_debug=false;}},};cupQ.hostObject.init();cupQ.trace("cupQ: browser: "+cupQ.hostObject.browser+"version: "+cupQ.hostObject.version+" OS: "+cupQ.hostObject.OS+"");cupQ.trace("cupQ: .......................................................... ");cupQ.trace("cupQ: $Q="+$Q+";  $target="+$target+"; $nodeIndex="+$nodeIndex+"; ");if($Q!=undefined){if($target==undefined||$target==""){_targetList.push(document);}else{if(typeof($target)=="object"&&$target.length>0){_targetList=$target;}else{if(typeof($target)=="object"&&$target=="[object HTMLDocument]"){_targetList.push($target);}else{if(typeof($target)=="object"&&$target=="[object HTMLBodyElement]"){_targetList.push($target);}else{if(typeof($target)=="object"&&$target.toString().indexOf("HTML")>-1&&$target.toString().indexOf("Element")>-1){_targetList.push($target);}else{if(typeof($target)=="object"&&$target=="[object NodeList]"){_targetList=$target;}}}}}}if($Q.indexOf("+")==0){_isGetChildren=true;}else{if($Q.indexOf("-")==0){_isGetParent=true;}else{_isGetCurrent=true;}}if($Q.indexOf(" ")>-1||($Q.indexOf("[")>-1&&$Q.indexOf("]")>-1)){var lastNode=document;var selectorsArr=$Q.split(" ");_nodeList=new Array();for(var i=0;i<_targetList.length;i++){var temp_nodeList=new Array();$target=_targetList[i];lastNode=$target;for(var m=0;m<selectorsArr.length;m++){var s=selectorsArr[m];var tArr=getTagNIndex(s);if(tArr[0].toString().toLowerCase()!="document"){if(s.indexOf(".")>-1&&s.indexOf("[")>-1){lastNode=lastNode.getElementsByClassName(tArr[0])[Number(tArr[1])];}else{if(s.indexOf(".")>-1){temp_nodeList=lastNode.getElementsByClassName(tArr[0]);for(var z=0;z<temp_nodeList.length;z++){_nodeList.push(temp_nodeList[z]);}break;}else{if(s.indexOf("#")>-1){lastNode=lastNode.getElementsById(tArr[0]);}else{if(s.indexOf("[")>-1){lastNode=lastNode.getElementsByTagName(tArr[0])[Number(tArr[1])];}else{temp_nodeList=lastNode.getElementsByTagName(tArr[0]);for(var z=0;z<temp_nodeList.length;z++){_nodeList.push(temp_nodeList[z]);}break;}}}}}}if(temp_nodeList.length<=0){_nodeList.push(lastNode);}}}else{if($Q.indexOf(".")==0||$Q.indexOf(".")==1){_isClassName=true;_nodeList=new Array();for(var i=0;i<_targetList.length;i++){$target=_targetList[i];$Q=$Q.split(".")[1];var _temp_nodeList=$target.getElementsByClassName($Q);if(_temp_nodeList.length>0){for(var j=0;j<_temp_nodeList.length;j++){_nodeList.push(_temp_nodeList[j]);}}if($nodeIndex!=undefined){if(typeof($nodeIndex)=="object"&&($nodeIndex.length)>=0&&(typeof($nodeIndex)).toLowerCase().indexOf("node")<0){var temp_indexArr=new Array();temp_indexArr=$nodeIndex;var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if(typeof($nodeIndex)=="function"){var temp_indexArr=new Array();temp_indexArr=$nodeIndex();var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if($nodeIndex==-1){_currentNodeIndex=_nodeList.length-1;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==false){_currentNodeIndex=$nodeIndex;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==true){var temp_nodeList=new Array();if($nodeIndex.toLowerCase()=="odd"){for(var k=0;k<_nodeList.length;k++){if(k%2!=0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.toLowerCase()=="even"){for(var k=0;k<_nodeList.length;k++){if(k%2==0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("==")>-1){var t=Number($nodeIndex.split("==")[1]);var s=_nodeList[t];if(s!=undefined){temp_nodeList.push(s);}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">=")>-1){var t=Number($nodeIndex.split(">=")[1]);for(var k=0;k<_nodeList.length;k++){if(k>=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<=")>-1){var t=Number($nodeIndex.split("<=")[1]);for(var k=0;k<_nodeList.length;k++){if(k<=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<")>-1){var t=Number($nodeIndex.split("<")[1]);for(var k=0;k<_nodeList.length;k++){if(k<t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">")>-1){var t=Number($nodeIndex.split(">")[1]);for(var k=0;k<_nodeList.length;k++){if(k>t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}}}}}}}}}}}}}else{_nodeList=_nodeList;}}}else{if($Q.indexOf("#")==0||$Q.indexOf("#")==1){_isIdName=true;_nodeList=new Array();$Q=$Q.split("#")[1];for(var i=0;i<_targetList.length;i++){$target=_targetList[i];var _temp_nodeList=[$target.getElementById($Q)];if(_temp_nodeList.length>0){for(var j=0;j<_temp_nodeList.length;j++){_nodeList.push(_temp_nodeList[j]);}}if($nodeIndex!=undefined){if(typeof($nodeIndex)=="object"&&($nodeIndex.length)>=0&&(typeof($nodeIndex)).toLowerCase().indexOf("node")<0){var temp_indexArr=new Array();temp_indexArr=$nodeIndex;var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if(typeof($nodeIndex)=="function"){var temp_indexArr=new Array();temp_indexArr=$nodeIndex();var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if($nodeIndex==-1){_currentNodeIndex=_nodeList.length-1;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==false){_currentNodeIndex=$nodeIndex;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==true){var temp_nodeList=new Array();if($nodeIndex.toLowerCase()=="odd"){for(var k=0;k<_nodeList.length;k++){if(k%2!=0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.toLowerCase()=="even"){for(var k=0;k<_nodeList.length;k++){if(k%2==0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("==")>-1){var t=Number($nodeIndex.split("==")[1]);var s=_nodeList[t];if(s!=undefined){temp_nodeList.push(s);}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">=")>-1){var t=Number($nodeIndex.split(">=")[1]);for(var k=0;k<_nodeList.length;k++){if(k>=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<=")>-1){var t=Number($nodeIndex.split("<=")[1]);for(var k=0;k<_nodeList.length;k++){if(k<=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<")>-1){var t=Number($nodeIndex.split("<")[1]);for(var k=0;k<_nodeList.length;k++){if(k<t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">")>-1){var t=Number($nodeIndex.split(">")[1]);for(var k=0;k<_nodeList.length;k++){if(k>t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}}}}}}}}}}}}}else{_nodeList=_nodeList;}}}else{_isTagName=true;_nodeList=new Array();if($Q.indexOf("+")>-1){$Q=$Q.split("+")[1];}else{if($Q.indexOf("-")>-1){$Q=$Q.split("-")[1];}}for(var i=0;i<_targetList.length;i++){$target=_targetList[i];var _temp_nodeList=$target.getElementsByTagName($Q);if(_temp_nodeList.length>0){for(var j=0;j<_temp_nodeList.length;j++){_nodeList.push(_temp_nodeList[j]);}}if($nodeIndex!=undefined){if(typeof($nodeIndex)=="object"&&($nodeIndex.length)>=0&&(typeof($nodeIndex)).toLowerCase().indexOf("node")<0){var temp_indexArr=new Array();temp_indexArr=$nodeIndex;var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if(typeof($nodeIndex)=="function"){var temp_indexArr=new Array();temp_indexArr=$nodeIndex();var temp_nodeList=new Array();for(var k=0;k<temp_indexArr.length;k++){var t=_nodeList[temp_indexArr[k]];if(t!=undefined){temp_nodeList.push(t);}}_nodeList=temp_nodeList;}else{if($nodeIndex==-1){_currentNodeIndex=_nodeList.length-1;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==false){_currentNodeIndex=$nodeIndex;_node=_nodeList[_currentNodeIndex];_nodeList=new Array();_nodeList.push(_node);}else{if(isNaN($nodeIndex)==true){var temp_nodeList=new Array();if($nodeIndex.toLowerCase()=="odd"){for(var k=0;k<_nodeList.length;k++){if(k%2!=0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.toLowerCase()=="even"){for(var k=0;k<_nodeList.length;k++){if(k%2==0){temp_nodeList.push(_nodeList[k]);}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("==")>-1){var t=Number($nodeIndex.split("==")[1]);var s=_nodeList[t];if(s!=undefined){temp_nodeList.push(s);}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">=")>-1){var t=Number($nodeIndex.split(">=")[1]);for(var k=0;k<_nodeList.length;k++){if(k>=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<=")>-1){var t=Number($nodeIndex.split("<=")[1]);for(var k=0;k<_nodeList.length;k++){if(k<=t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf("<")>-1){var t=Number($nodeIndex.split("<")[1]);for(var k=0;k<_nodeList.length;k++){if(k<t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}else{if($nodeIndex.indexOf(">")>-1){var t=Number($nodeIndex.split(">")[1]);for(var k=0;k<_nodeList.length;k++){if(k>t){var s=_nodeList[k];if(s!=undefined){temp_nodeList.push(s);}}}_nodeList=temp_nodeList;}}}}}}}}}}}}}else{_nodeList=_nodeList;}}}}}if(_isGetChildren==true){var temp_nodeList=new Array();for(var i=0;i<_nodeList.length;i++){var s=_nodeList[i].childNodes;if(s[0]!=undefined&&s.length>0){for(var j=0;j<s.length;j++){temp_nodeList.push(s[j]);}}}_nodeList=temp_nodeList;}else{if(_isGetParent==true){var temp_nodeList=new Array();for(var i=0;i<_nodeList.length;i++){var s=_nodeList[i].parentNode;if(s!=undefined){temp_nodeList.push(s);}}_nodeList=cupQ.getUniqueArray(temp_nodeList);}else{_isGetCurrent=true;}}}cupQ._debug=_debug;cupQ.$Q=$Q;cupQ.$target=$target;cupQ.$nodeIndex=$nodeIndex;cupQ._isClassName=_isClassName;cupQ._isIdName=_isIdName;cupQ._isTagName=_isTagName;cupQ._isGetParent=_isGetParent;cupQ._isGetChildren=_isGetChildren;cupQ._isGetCurrent=_isGetCurrent;cupQ._nodeList=_nodeList;cupQ._childIndexInParentList=_childIndexInParentList;cupQ._attributeList=_attributeList;cupQ._styleList=_styleList;cupQ._innerTextList=_innerTextList;cupQ._innerHTMLList=_innerHTMLList;cupQ._currentNodeIndex=_currentNodeIndex;cupQ._node=_node;cupQ._targetList=_targetList;cupQ._bodyFilesArr=_bodyFilesArr;cupQ._headFilesArr=_headFilesArr;var IVdocumentReadyCheck=window.setInterval("onCheck()",1);window.onCheck=function(){if(document.getElementsByTagName("body").length>0){window.clearInterval(IVdocumentReadyCheck);cupQ.trace("cupQ: onDocumentReady() called.");cupQ.internalimport();cupQ.onDocumentReady();window.onCheck=function(){};}};window.addEventListener("load",function(){cupQ.onWindowLoad();cupQ.trace("cupQ: onWindowLoad() called.");},false);function getTagNIndex(str){var outputArr=new Array();if((str.indexOf(".")>-1||str.indexOf("#")>-1)&&(str.indexOf("+")>-1||str.indexOf("-")>-1)&&str.indexOf("[")>-1&&str.indexOf("]")>-1){outputArr[0]=(str.substr(2,str.indexOf("[")));outputArr[1]=(str.substr(str.indexOf("[")+1,((str.length-2)-str.indexOf("["))));}if((str.indexOf(".")>-1||str.indexOf("#")>-1)&&str.indexOf("[")>-1&&str.indexOf("]")>-1){outputArr[0]=(str.substr(1,str.indexOf("[")-1));outputArr[1]=(str.substr(str.indexOf("[")+1,((str.length-2)-str.indexOf("["))));}else{if(str.indexOf("[")>-1&&str.indexOf("]")>-1&&(str.indexOf("+")>-1||str.indexOf("-")>-1)){outputArr[0]=(str.substr(1,str.indexOf("[")-1));outputArr[1]=(str.substr(str.indexOf("[")+1,((str.length-2)-str.indexOf("["))));}else{if(str.indexOf("[")>-1&&str.indexOf("]")>-1){outputArr[0]=(str.substr(0,str.indexOf("[")));outputArr[1]=(str.substr(str.indexOf("[")+1,((str.length-2)-str.indexOf("["))));}}}return outputArr;}return cupQ;};