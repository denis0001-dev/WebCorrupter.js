"use strict";var a=this?.__awaiter||function(A,_,P,B){function E(C){return C instanceof P?C:new P(function(_a){_a(C)})}return new (P||(P=Promise))(function(D,_b){function _c(_A){try{_e(B.next(_A))}catch(e){_b(e)}}function _d(aA){try{_e(B[throw](aA))}catch(e){_b(e)}}function _e(aB){aB.done?D(aB.value):E(aB.value).then(_c,_d)}_e((B=B.apply(A,_||[])).next())})},b,d;(function(aC){function _B(aD){return new Promise(aE=>setTimeout(aE,aD))}aC.delay=_B})(b||(b={}));var c;(function(aF){function aG(aH,aI){return Math.round(Math.random()*(aI-aH)+aH)}aF.randomNumber=aG;function _C(){var aJ=0123456789ABCDEF;let aK=#;for(let i=0;i<6;i++)aK+=aJ[~~Math.random()*16];return aK}aF.randomColor=_C})(c||(c={}));(function(aL){var aM=c.randomNumber,aN=b.delay;let _D;(function(aO){var aP=c.randomColor;function aQ(){if(document.body.innerHTML.length>5000)return 100;if(document.body.innerHTML.length>10000)return 200;if(document.body.innerHTML.length>50000)return 300;if(document.body.innerHTML.length>100000)return 400;return 1000}function aR(){return a(this,void 0,void 0,function*(){yield aN(aM(100,3000));console.log(Messing up elements...);var aT=aM(10,aQ());console.log(Number of times: ,aT);for(let i=0;i<aT;i++){try{_E().appendChild(_E(!0))}catch(e){}yield aN(aM(100,500))}})}aO.messUpElements=aR;function aS(){return a(this,void 0,void 0,function*(){yield aN(aM(100,aQ()));console.log(Adding random text...);var aU=aM(10,aQ());console.log(Number of times: ,aU);for(let i=0;i<aU;i++){try{_E().textContent+=error}catch(e){}yield aN(aM(100,1000))}})}aO.addRandomText=aS;function F(){return a(this,void 0,void 0,function*(){yield aN(aM(100,3000));console.log(Adding random styles...);var aV=aM(10,aQ());console.log(aV);for(let i=0;i<aV;i++){try{var aW=_E(),aX=aM(0,2);switch(aX) {case 0:aW.style.color=aP();break;case 1:aW.style.backgroundColor=aP();break;case 2:aW.style.transform=`blur(${aM(1,100)}px)`;break}}catch(e){}yield aN(aM(100,1000))}})}aO.addRandomStyles=F;function G(){return a(this,void 0,void 0,function*(){document.head.classList.add(show)})}aO.showHead=G;function H(){return a(this,void 0,void 0,function*(){while (!0) {scrollTo({top:aM(0,innerHeight)});yield aN(aM(100,10000))}})}aO.randomScroll=H})(_D||(_D={}));function _E(aY=!1){let aZ;aY?aZ=document.querySelectorAll(body *):aZ=document.querySelectorAll(*);return aZ[aM(0,aZ.length-1)]}function f(){return a(this,void 0,void 0,function*(){yield g();h();_D.messUpElements();aM(0,1)==1&&_D.showHead();aM(0,1)==1&&_D.randomScroll();aM(0,1)==1&&_D.addRandomText();aM(0,1)==1&&_D.addRandomStyles()})}aL.start=f;function g(){return a(this,void 0,void 0,function*(){var bA=yield fetch(https://raw.githubusercontent.com/denis0001-dev/WebCorrupter.js/main/style.css),bB=document.createElement(style);bB.textContent=yield bA.text();document.head.appendChild(bB)})}function h(){return a(this,void 0,void 0,function*(){try{var cheatActivated=document.createElement(div);cheatActivated.id=cheat_activated;cheatActivated.textContent=Cheat Activated;var element=_E();element.appendChild(cheatActivated);console.log(Cheat activated);yield aN(aM(100,5000));element.removeChild(cheatActivated)}catch(e){console.warn(e)}})}})(d||(d={}));document.readyState===complete?d.start():document.addEventListener(DOMContentLoaded,d.start);
