(function(){var an="V=2.1.16";var ah=window,F=document,s=navigator,W=s.userAgent,ao=ah.screen,j=ah.location.href;var aD="https:"==ah.location.protocol?"https://s":"http://",ay="beacon.sina.com.cn";var N=aD+ay+"/a.gif?",z=aD+ay+"/g.gif?",R=aD+ay+"/f.gif?",ag=aD+ay+"/e.gif?",aB=aD+"beacon.sinauda.com"+"/i.gif?";var aA=F.referrer.toLowerCase();var aa="SINAGLOBAL",Y="FSINAGLOBAL",H="Apache",P="ULV",l="SUP",aE="UOR",E="_s_acc",X="_s_tentry",n=false,az=false,B=(document.domain=="sina.com.cn")?true:false;var o=0;var aG=false,A=false;var al="";var m=16777215,Z=0,C,K=0;var r="",b="",a="";var M=[],S=[],I=[];var u=0;var v=0;var p="";var am=false;var w=false;function O(){var e=document.createElement("iframe");e.src=aD+ay+"/data.html?"+new Date().getTime();e.id="sudaDataFrame";e.style.height="0px";e.style.width="1px";e.style.overflow="hidden";e.frameborder="0";e.scrolling="no";document.getElementsByTagName("head")[0].appendChild(e)}function k(){var e=document.createElement("iframe");e.src=aD+ay+"/ckctl.html";e.id="ckctlFrame";e.style.height="0px";e.style.width="1px";e.style.overflow="hidden";e.frameborder="0";e.scrolling="no";document.getElementsByTagName("head")[0].appendChild(e)}function q(){var e=document.createElement("script");e.src=aD+ay+"/h.js";document.getElementsByTagName("head")[0].appendChild(e)}function h(aH,i){var D=F.getElementsByName(aH);var e=(i>0)?i:0;return(D.length>e)?D[e].content:""}function aF(){var aJ=F.getElementsByName("sudameta");var aR=[];for(var aO=0;aO<aJ.length;aO++){var aK=aJ[aO].content;if(aK){if(aK.indexOf(";")!=-1){var D=aK.split(";");for(var aH=0;aH<D.length;aH++){var aP=aw(D[aH]);if(!aP){continue}aR.push(aP)}}else{aR.push(aK)}}}var aM=F.getElementsByTagName("meta");for(var aO=0,aI=aM.length;aO<aI;aO++){var aN=aM[aO];if(aN.name=="tags"){aR.push("content_tags:"+encodeURI(aN.content))}}var aL=t("vjuids");aR.push("vjuids:"+aL);var e="";var aQ=j.indexOf("#");if(aQ!=-1){e=escape(j.substr(aQ+1));aR.push("hashtag:"+e)}return aR}function V(aK,D,aI,aH){if(aK==""){return""}aH=(aH=="")?"=":aH;D+=aH;var aJ=aK.indexOf(D);if(aJ<0){return""}aJ+=D.length;var i=aK.indexOf(aI,aJ);if(i<aJ){i=aK.length}return aK.substring(aJ,i)}function t(e){if(undefined==e||""==e){return""}return V(F.cookie,e,";","")}function at(aI,e,i,aH){if(e!=null){if((undefined==aH)||(null==aH)){aH="sina.com.cn"}if((undefined==i)||(null==i)||(""==i)){F.cookie=aI+"="+e+";domain="+aH+";path=/"}else{var D=new Date();var aJ=D.getTime();aJ=aJ+86400000*i;D.setTime(aJ);aJ=D.getTime();F.cookie=aI+"="+e+";domain="+aH+";expires="+D.toUTCString()+";path=/"}}}function f(D){try{var i=document.getElementById("sudaDataFrame").contentWindow.storage;return i.get(D)}catch(aH){return false}}function ar(D,aH){try{var i=document.getElementById("sudaDataFrame").contentWindow.storage;i.set(D,aH);return true}catch(aI){return false}}function L(){var aJ=15;var D=window.SUDA.etag;if(!B){return"-"}if(u==0){O();q()}if(D&&D!=undefined){w=true}ls_gid=f(aa);if(ls_gid===false||w==false){return false}else{am=true}if(ls_gid&&ls_gid.length>aJ){at(aa,ls_gid,3650);n=true;return ls_gid}else{if(D&&D.length>aJ){at(aa,D,3650);az=true}var i=0,aI=500;var aH=setInterval((function(){var e=t(aa);if(w){e=D}i+=1;if(i>3){clearInterval(aH)}if(e.length>aJ){clearInterval(aH);ar(aa,e)}}),aI);return w?D:t(aa)}}function U(e,aH,D){var i=e;if(i==null){return false}aH=aH||"click";if((typeof D).toLowerCase()!="function"){return}if(i.attachEvent){i.attachEvent("on"+aH,D)}else{if(i.addEventListener){i.addEventListener(aH,D,false)}else{i["on"+aH]=D}}return true}function af(){if(window.event!=null){return window.event}else{if(window.event){return window.event}var D=arguments.callee.caller;var i;var aH=0;while(D!=null&&aH<40){i=D.arguments[0];if(i&&(i.constructor==Event||i.constructor==MouseEvent||i.constructor==KeyboardEvent)){return i}aH++;D=D.caller}return i}}function g(i){i=i||af();if(!i.target){i.target=i.srcElement;i.pageX=i.x;i.pageY=i.y}if(typeof i.layerX=="undefined"){i.layerX=i.offsetX}if(typeof i.layerY=="undefined"){i.layerY=i.offsetY}return i}function aw(aH){if(typeof aH!=="string"){throw"trim need a string as parameter"}var e=aH.length;var D=0;var i=/(\u3000|\s|\t|\u00A0)/;while(D<e){if(!i.test(aH.charAt(D))){break}D+=1}while(e>D){if(!i.test(aH.charAt(e-1))){break}e-=1}return aH.slice(D,e)}function c(e){return Object.prototype.toString.call(e)==="[object Array]"}function J(aH,aL){var aN=aw(aH).split("&");var aM={};var D=function(i){if(aL){try{return decodeURIComponent(i)}catch(aP){return i}}else{return i}};for(var aJ=0,aK=aN.length;aJ<aK;aJ++){if(aN[aJ]){var aI=aN[aJ].split("=");var e=aI[0];var aO=aI[1];if(aI.length<2){aO=e;e="$nullName"}if(!aM[e]){aM[e]=D(aO)}else{if(c(aM[e])!=true){aM[e]=[aM[e]]}aM[e].push(D(aO))}}}return aM}function ac(D,aI){for(var aH=0,e=D.length;aH<e;aH++){aI(D[aH],aH)}}function ak(i){var e=new RegExp("^http(?:s)?://([^/]+)","im");if(i.match(e)){return i.match(e)[1].toString()}else{return""}}function aj(aO){try{var aL="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";var aQ=function(e){var aR="",aS=0;for(;aS<e.length;aS++){aR+="%"+aH(e[aS])}return decodeURIComponent(aR)};var aH=function(e){var i="0"+e.toString(16);return i.length<=2?i:i.substr(1)};var aP=function(aY,aV,aR){if(typeof(aY)=="string"){aY=aY.split("")}var aX=function(a7,a9){for(var a8=0;a8<a7.length;a8++){if(a7[a8]==a9){return a8}}return -1};var aS=[];var a6,a4,a1="";var a5,a3,a0,aZ="";if(aY.length%4!=0){}var e=/[^A-Za-z0-9\+\/\=]/g;var a2=aL.split("");if(aV=="urlsafe"){e=/[^A-Za-z0-9\-_\=]/g;a2=D.split("")}var aU=0;if(aV=="binnary"){a2=[];for(aU=0;aU<=64;aU++){a2[aU]=aU+128}}if(aV!="binnary"&&e.exec(aY.join(""))){return aR=="array"?[]:""}aU=0;do{a5=aX(a2,aY[aU++]);a3=aX(a2,aY[aU++]);a0=aX(a2,aY[aU++]);aZ=aX(a2,aY[aU++]);a6=(a5<<2)|(a3>>4);a4=((a3&15)<<4)|(a0>>2);a1=((a0&3)<<6)|aZ;aS.push(a6);if(a0!=64&&a0!=-1){aS.push(a4)}if(aZ!=64&&aZ!=-1){aS.push(a1)}a6=a4=a1="";a5=a3=a0=aZ=""}while(aU<aY.length);if(aR=="array"){return aS}var aW="",aT=0;for(;aT<aS.lenth;aT++){aW+=String.fromCharCode(aS[aT])}return aW};var aI=[];var aN=aO.substr(0,3);var aK=aO.substr(3);switch(aN){case"v01":for(var aJ=0;aJ<aK.length;aJ+=2){aI.push(parseInt(aK.substr(aJ,2),16))}return decodeURIComponent(aQ(aP(aI,"binnary","array")));break;case"v02":aI=aP(aK,"urlsafe","array");return aQ(aP(aI,"binnary","array"));break;default:return decodeURIComponent(aO)}}catch(aM){return""}}var ap={screenSize:function(){return(m&8388608==8388608)?ao.width+"x"+ao.height:""},colorDepth:function(){return(m&4194304==4194304)?ao.colorDepth:""},appCode:function(){return(m&2097152==2097152)?s.appCodeName:""},appName:function(){return(m&1048576==1048576)?((s.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":s.appName):""},cpu:function(){return(m&524288==524288)?(s.cpuClass||s.oscpu):""},platform:function(){return(m&262144==262144)?(s.platform):""},jsVer:function(){if(m&131072!=131072){return""}var aI,e,aK,D=1,aH=0,i=(s.appName.indexOf("Microsoft Internet Explorer")>-1)?"MSIE":s.appName,aJ=s.appVersion;if("MSIE"==i){e="MSIE";aI=aJ.indexOf(e);if(aI>=0){aK=window.parseInt(aJ.substring(aI+5));if(3<=aK){D=1.1;if(4<=aK){D=1.3}}}}else{if(("Netscape"==i)||("Opera"==i)||("Mozilla"==i)){D=1.3;e="Netscape6";aI=aJ.indexOf(e);if(aI>=0){D=1.5}}}return D},network:function(){if(m&65536!=65536){return""}var i="";i=(s.connection&&s.connection.type)?s.connection.type:i;try{F.body.addBehavior("#default#clientCaps");i=F.body.connectionType}catch(D){i="unkown"}return i},language:function(){return(m&32768==32768)?(s.systemLanguage||s.language):""},timezone:function(){return(m&16384==16384)?(new Date().getTimezoneOffset()/60):""},flashVer:function(){if(m&8192!=8192){return""}var aK=s.plugins,aH,aL,aN;if(aK&&aK.length){for(var aJ in aK){aL=aK[aJ];if(aL.description==null){continue}if(aH!=null){break}aN=aL.description.toLowerCase();if(aN.indexOf("flash")!=-1){aH=aL.version?parseInt(aL.version):aN.match(/\d+/);continue}}}else{if(window.ActiveXObject){for(var aI=10;aI>=2;aI--){try{var D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+aI);if(D){aH=aI;break}}catch(aM){}}}else{if(W.indexOf("webtv/2.5")!=-1){aH=3}else{if(W.indexOf("webtv")!=-1){aH=2}}}}return aH},javaEnabled:function(){if(m&4096!=4096){return""}var D=s.plugins,i=s.javaEnabled(),aH,aI;if(i==true){return 1}if(D&&D.length){for(var e in D){aH=D[e];if(aH.description==null){continue}if(i!=null){break}aI=aH.description.toLowerCase();if(aI.indexOf("java plug-in")!=-1){i=parseInt(aH.version);continue}}}else{if(window.ActiveXObject){i=(new ActiveXObject("JavaWebStart.IsInstalled")!=null)}}return i?1:0}};var ad={pageId:function(i){var D=i||r,aK="-9999-0-0-1";if((undefined==D)||(""==D)){try{var aH=h("publishid");if(""!=aH){var aJ=aH.split(",");if(aJ.length>0){if(aJ.length>=3){aK="-9999-0-"+aJ[1]+"-"+aJ[2]}D=aJ[0]}}else{D="0"}}catch(aI){D="0"}D=D+aK}return D},sessionCount:function(){var e=t("_s_upa");if(e==""){e=0}return e},excuteCount:function(){return SUDA.sudaCount},referrer:function(){if(m&2048!=2048){return""}var e=/^[^\?&#]*.swf([\?#])?/;if((aA=="")||(aA.match(e))){var i=V(j,"ref","&","");if(i!=""){return escape(i)}}return escape(aA)},isHomepage:function(){if(m&1024!=1024){return""}var D="";try{F.body.addBehavior("#default#homePage");D=F.body.isHomePage(j)?"Y":"N"}catch(i){D="unkown"}return D},PGLS:function(){return(m&512==512)?h("stencil"):""},ZT:function(){if(m&256!=256){return""}var e=h("subjectid");e.replace(",",".");e.replace(";",",");return escape(e)},mediaType:function(){return(m&128==128)?h("mediaid"):""},domCount:function(){return(m&64==64)?F.getElementsByTagName("*").length:""},iframeCount:function(){return(m&32==32)?F.getElementsByTagName("iframe").length:""}};var av={visitorId:function(){var i=15;var e=t(aa);if(e.length>i&&u==0){return e}else{return}},fvisitorId:function(e){if(!e){var e=t(Y);return e}else{at(Y,e,3650)}},sessionId:function(){var e=t(H);if(""==e){var i=new Date();e=Math.random()*10000000000000+"."+i.getTime()}return e},flashCookie:function(e){if(e){}else{return p}},lastVisit:function(){var D=t(H);var aI=t(P);var aH=aI.split(":");var aJ="",i;if(aH.length>=6){if(D!=aH[4]){i=new Date();var e=new Date(window.parseInt(aH[0]));aH[1]=window.parseInt(aH[1])+1;if(i.getMonth()!=e.getMonth()){aH[2]=1}else{aH[2]=window.parseInt(aH[2])+1}if(((i.getTime()-e.getTime())/86400000)>=7){aH[3]=1}else{if(i.getDay()<e.getDay()){aH[3]=1}else{aH[3]=window.parseInt(aH[3])+1}}aJ=aH[0]+":"+aH[1]+":"+aH[2]+":"+aH[3];aH[5]=aH[0];aH[0]=i.getTime();at(P,aH[0]+":"+aH[1]+":"+aH[2]+":"+aH[3]+":"+D+":"+aH[5],360)}else{aJ=aH[5]+":"+aH[1]+":"+aH[2]+":"+aH[3]}}else{i=new Date();aJ=":1:1:1";at(P,i.getTime()+aJ+":"+D+":",360)}return aJ},userNick:function(){if(al!=""){return al}var D=unescape(t(l));if(D!=""){var i=V(D,"ag","&","");var e=V(D,"user","&","");var aH=V(D,"uid","&","");var aJ=V(D,"sex","&","");var aI=V(D,"dob","&","");al=i+":"+e+":"+aH+":"+aJ+":"+aI;return al}else{return""}},userOrigin:function(){if(m&4!=4){return""}var e=t(aE);var i=e.split(":");if(i.length>=2){return i[0]}else{return""}},advCount:function(){return(m&2==2)?t(E):""},setUOR:function(){var aL=t(aE),aP="",i="",aO="",aI="",aM=j.toLowerCase(),D=F.referrer.toLowerCase();var aQ=/[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;var aK=new Date();if(aM.match(aQ)){aO=aM.match(aQ)[0]}else{if(D.match(aQ)){aO=D.match(aQ)[0]}}if(aO!=""){aO=aO.substr(3)+":"+aK.getTime()}if(aL==""){if(t(P)==""){aP=ak(D);i=ak(aM)}at(aE,aP+","+i+","+aO,365)}else{var aJ=0,aN=aL.split(",");if(aN.length>=1){aP=aN[0]}if(aN.length>=2){i=aN[1]}if(aN.length>=3){aI=aN[2]}if(aO!=""){aJ=1}else{var aH=aI.split(":");if(aH.length>=2){var e=new Date(window.parseInt(aH[1]));if(e.getTime()<(aK.getTime()-86400000*30)){aJ=1}}}if(aJ){at(aE,aP+","+i+","+aO,365)}}},setAEC:function(e){if(""==e){return}var i=t(E);if(i.indexOf(e+",")<0){i=i+e+","}at(E,i,7)},ssoInfo:function(){var D=unescape(aj(t("sso_info")));if(D!=""){if(D.indexOf("uid=")!=-1){var i=V(D,"uid","&","");return escape("uid:"+i)}else{var e=V(D,"u","&","");return escape("u:"+unescape(e))}}else{return""}},subp:function(){return t("SUBP")}};var ai={"CI":function(){var e=["sz:"+ap.screenSize(),"dp:"+ap.colorDepth(),"ac:"+ap.appCode(),"an:"+ap.appName(),"cpu:"+ap.cpu(),"pf:"+ap.platform(),"jv:"+ap.jsVer(),"ct:"+ap.network(),"lg:"+ap.language(),"tz:"+ap.timezone(),"fv:"+ap.flashVer(),"ja:"+ap.javaEnabled()];return"CI="+e.join("|")},"PI":function(e){var i=["pid:"+ad.pageId(e),"st:"+ad.sessionCount(),"et:"+ad.excuteCount(),"ref:"+ad.referrer(),"hp:"+ad.isHomepage(),"PGLS:"+ad.PGLS(),"ZT:"+ad.ZT(),"MT:"+ad.mediaType(),"keys:","dom:"+ad.domCount(),"ifr:"+ad.iframeCount()];return"PI="+i.join("|")},"UI":function(){var e=["vid:"+av.visitorId(),"sid:"+av.sessionId(),"lv:"+av.lastVisit(),"un:"+av.userNick(),"uo:"+av.userOrigin(),"ae:"+av.advCount(),"lu:"+av.fvisitorId(),"si:"+av.ssoInfo(),"rs:"+(n?1:0),"dm:"+(B?1:0),"su:"+av.subp()];return"UI="+e.join("|")},"EX":function(i,e){if(m&1!=1){return""}i=(null!=i)?i||"":b;e=(null!=e)?e||"":a;return"EX=ex1:"+i+"|ex2:"+e},"MT":function(){return"MT="+aF().join("|")},"V":function(){return an},"R":function(){return"gUid_"+new Date().getTime()}};function ax(){var aK="-",aH=F.referrer.toLowerCase(),D=j.toLowerCase();if(""==t(X)){if(""!=aH){aK=ak(aH)}at(X,aK,"","weibo.com")}var aI=/weibo.com\/reg.php/;if(D.match(aI)){var aJ=V(unescape(D),"sharehost","&","");var i=V(unescape(D),"appkey","&","");if(""!=aJ){at(X,aJ,"","weibo.com")}at("appkey",i,"","weibo.com")}}function d(e,i){G(e,i)}function G(i,D){D=D||{};var e=new Image(),aH;if(D&&D.callback&&typeof D.callback=="function"){e.onload=function(){clearTimeout(aH);aH=null;D.callback(true)}}SUDA.img=e;e.src=i;aH=setTimeout(function(){if(D&&D.callback&&typeof D.callback=="function"){D.callback(false);e.onload=null}},D.timeout||2000)}function x(e,aH,D,aI){SUDA.sudaCount++;if(!av.visitorId()&&!L()){if(u<3){u++;setTimeout(x,500);return}}var i=N+[ai.V(),ai.CI(),ai.PI(e),ai.UI(),ai.MT(),ai.EX(aH,D),ai.R()].join("&");G(i,aI);if(window.location.host.search("auto.sina.com.cn")>=0){wrating_url="http://m.wrating.com/m.gif?a=&c=860010-2370010112&mcookie="+av.visitorId()+"&"+ai.R()+"=";G(wrating_url)}}function y(e,D,i){if(aG||A){return}if(SUDA.sudaCount!=0){return}x(e,D,i)}function ab(e,aH){if((""==e)||(undefined==e)){return}av.setAEC(e);if(0==aH){return}var D="AcTrack||"+t(aa)+"||"+t(H)+"||"+av.userNick()+"||"+e+"||";var i=ag+D+"&gUid_"+new Date().getTime();d(i)}function aq(aI,e,i,aJ){aJ=aJ||{};if(!i){i=""}else{i=escape(i)}var aH="UATrack||"+t(aa)+"||"+t(H)+"||"+av.userNick()+"||"+aI+"||"+e+"||"+ad.referrer()+"||"+i+"||"+(aJ.realUrl||"")+"||"+av.subp()+"||"+aJ.ext;var D=ag+aH+"&gUid_"+new Date().getTime();d(D,aJ)}function aC(aK){var i=g(aK);var aI=i.target;var aH="",aL="",D="";var aJ;if(aI!=null&&aI.getAttribute&&(!aI.getAttribute("suda-uatrack")&&!aI.getAttribute("suda-actrack")&&!aI.getAttribute("suda-data"))){while(aI!=null&&aI.getAttribute&&(!!aI.getAttribute("suda-uatrack")||!!aI.getAttribute("suda-actrack")||!!aI.getAttribute("suda-data"))==false){if(aI==F.body){return}aI=aI.parentNode}}if(aI==null||aI.getAttribute==null){return}aH=aI.getAttribute("suda-actrack")||"";aL=aI.getAttribute("suda-uatrack")||aI.getAttribute("suda-data")||"";sudaUrls=aI.getAttribute("suda-urls")||"";if(aL){aJ=J(aL);if(aI.tagName.toLowerCase()=="a"){D=aI.href}opts={};opts.ext=(aJ["ext"]||"");aJ["key"]&&SUDA.uaTrack&&SUDA.uaTrack(aJ["key"],aJ["value"]||aJ["key"],D,opts)}if(aH){aJ=J(aH);aJ["key"]&&SUDA.acTrack&&SUDA.acTrack(aJ["key"],aJ["value"]||aJ["key"])}}if(window.SUDA&&Object.prototype.toString.call(window.SUDA)==="[object Array]"){for(var Q=0,ae=SUDA.length;Q<ae;Q++){switch(SUDA[Q][0]){case"setGatherType":m=SUDA[Q][1];break;case"setGatherInfo":r=SUDA[Q][1]||r;b=SUDA[Q][2]||b;a=SUDA[Q][3]||a;break;case"setPerformance":Z=SUDA[Q][1];break;case"setPerformanceFilter":C=SUDA[Q][1];break;case"setPerformanceInterval":K=SUDA[Q][1]*1||0;K=isNaN(K)?0:K;break;case"setGatherMore":M.push(SUDA[Q].slice(1));break;case"acTrack":S.push(SUDA[Q].slice(1));break;case"uaTrack":I.push(SUDA[Q].slice(1));break}}}aG=(function(D,i){if(ah.top==ah){return false}else{try{if(F.body.clientHeight==0){return false}return((F.body.clientHeight>=D)&&(F.body.clientWidth>=i))?false:true}catch(aH){return true}}})(320,240);A=(function(){return false})();av.setUOR();var au=av.sessionId();window.SUDA=window.SUDA||[];SUDA.sudaCount=SUDA.sudaCount||0;SUDA.log=function(){x.apply(null,arguments)};SUDA.acTrack=function(){ab.apply(null,arguments)};SUDA.uaTrack=function(){aq.apply(null,arguments)};U(F.body,"click",aC);window.GB_SUDA=SUDA;GB_SUDA._S_pSt=function(){};GB_SUDA._S_acTrack=function(){ab.apply(null,arguments)};GB_SUDA._S_uaTrack=function(){aq.apply(null,arguments)};window._S_pSt=function(){};window._S_acTrack=function(){ab.apply(null,arguments)};window._S_uaTrack=function(){aq.apply(null,arguments)};window._S_PID_="";if(!window.SUDA.disableClickstream){y()}try{k()}catch(T){}})() ;