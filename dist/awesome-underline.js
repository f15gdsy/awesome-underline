!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ASUnderline=e():t.ASUnderline=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r={items:"[data-as-item]",underline:"[data-as-underline]",triggerEvents:["mouseenter"],cancelEvents:["mouseleave"],direction:"horizontal",speed:.3},s=function(){function t(e,o){n(this,t),this.container=e,this.opts=i({},r,o),this.items=[],this.activeIndex=0,this.updateUnderline(),this.updateItems(),this["goto"](this.activeIndex)}return o(t,[{key:"updateOpts",value:function(t){this.optsn=i({},this.opts,t)}},{key:"updateItems",value:function(){for(var t=this,e=this.container.querySelectorAll(this.opts.items),n=function(n){var i=e[n];t.items.push(i),t.opts.triggerEvents.forEach(function(e){i.addEventListener(e,function(){t["goto"](n,!1)})}),t.opts.cancelEvents.forEach(function(e){i.addEventListener(e,function(){t["goto"](t.activeIndex,!1)})})},i=0;i<e.length;i++)n(i)}},{key:"updateUnderline",value:function(){console.log("here"),this.underline=this.container.querySelector(this.opts.underline);var t=this.underline.style;t.position="absolute";var e="horizontal"===this.opts.direction?"left":"top",n="horizontal"===this.opts.direction?"width":"height";t.transition=this.opts.speed+"s "+e+", "+this.opts.speed+"s "+n}},{key:"goto",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n=this.items[t],i=this.underline.style;if(e&&(this.activeIndex=t),"vertical"===this.opts.direction){var o=n.clientHeight,r=n.offsetTop;i.height=o+"px",i.top=r+"px"}else{var s=n.clientWidth,a=n.offsetLeft;i.width=s+"px",i.left=a+"px"}}}]),t}();e["default"]=s,t.exports=e["default"]}])});