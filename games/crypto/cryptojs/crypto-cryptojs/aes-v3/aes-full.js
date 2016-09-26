var Aes={};Aes.cipher=function(e,a){var d=4;var h=a.length/d-1;var g=[[],[],[],[]];for(var f=0;f<4*d;f++){g[f%4][Math.floor(f/4)]=e[f]}g=Aes.addRoundKey(g,a,0,d);for(var c=1;c<h;c++){g=Aes.subBytes(g,d);g=Aes.shiftRows(g,d);g=Aes.mixColumns(g,d);g=Aes.addRoundKey(g,a,c,d)}g=Aes.subBytes(g,d);g=Aes.shiftRows(g,d);g=Aes.addRoundKey(g,a,h,d);var b=new Array(4*d);for(var f=0;f<4*d;f++){b[f]=g[f%4][Math.floor(f/4)]}return b};Aes.keyExpansion=function(f){var d=4;var b=f.length/4;var g=b+6;var e=new Array(d*(g+1));var h=new Array(4);for(var c=0;c<b;c++){var a=[f[4*c],f[4*c+1],f[4*c+2],f[4*c+3]];e[c]=a}for(var c=b;c<(d*(g+1));c++){e[c]=new Array(4);for(var j=0;j<4;j++){h[j]=e[c-1][j]}if(c%b==0){h=Aes.subWord(Aes.rotWord(h));for(var j=0;j<4;j++){h[j]^=Aes.rCon[c/b][j]}}else{if(b>6&&c%b==4){h=Aes.subWord(h)}}for(var j=0;j<4;j++){e[c][j]=e[c-b][j]^h[j]}}return e};Aes.subBytes=function(b,a){for(var d=0;d<4;d++){for(var e=0;e<a;e++){b[d][e]=Aes.sBox[b[d][e]]}}return b};Aes.shiftRows=function(d,a){var b=new Array(4);for(var e=1;e<4;e++){for(var f=0;f<4;f++){b[f]=d[e][(f+e)%a]}for(var f=0;f<4;f++){d[e][f]=b[f]}}return d};Aes.mixColumns=function(h,f){for(var j=0;j<4;j++){var e=new Array(4);var d=new Array(4);for(var g=0;g<4;g++){e[g]=h[g][j];d[g]=h[g][j]&128?h[g][j]<<1^283:h[g][j]<<1}h[0][j]=d[0]^e[1]^d[1]^e[2]^e[3];h[1][j]=e[0]^d[1]^e[2]^d[2]^e[3];h[2][j]=e[0]^e[1]^d[2]^e[3]^d[3];h[3][j]=e[0]^d[0]^e[1]^e[2]^d[3]}return h};Aes.addRoundKey=function(f,a,d,b){for(var e=0;e<4;e++){for(var g=0;g<b;g++){f[e][g]^=a[d*4+g][e]}}return f};Aes.subWord=function(a){for(var b=0;b<4;b++){a[b]=Aes.sBox[a[b]]}return a};Aes.rotWord=function(a){var c=a[0];for(var b=0;b<3;b++){a[b]=a[b+1]}a[3]=c;return a};Aes.sBox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];Aes.rCon=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];Aes.Ctr={};Aes.Ctr.encrypt=function(j,a,u){var k=16;if(!(u==128||u==192||u==256)){return""}j=Utf8.encode(j);a=Utf8.encode(a);var l=u/8;var f=new Array(l);for(var s=0;s<l;s++){f[s]=isNaN(a.charCodeAt(s))?0:a.charCodeAt(s)}var z=Aes.cipher(f,Aes.keyExpansion(f));z=z.concat(z.slice(0,l-16));var e=new Array(k);var t=(new Date()).getTime();var g=t%1000;var d=Math.floor(t/1000);var p=Math.floor(Math.random()*65535);for(var s=0;s<2;s++){e[s]=(g>>>s*8)&255}for(var s=0;s<2;s++){e[s+2]=(p>>>s*8)&255}for(var s=0;s<4;s++){e[s+4]=(d>>>s*8)&255}var n="";for(var s=0;s<8;s++){n+=String.fromCharCode(e[s])}var w=Aes.keyExpansion(z);var r=Math.ceil(j.length/k);var m=new Array(r);for(var x=0;x<r;x++){for(var v=0;v<4;v++){e[15-v]=(x>>>v*8)&255}for(var v=0;v<4;v++){e[15-v-4]=(x/4294967296>>>v*8)}var h=Aes.cipher(e,w);var q=x<r-1?k:(j.length-1)%k+1;var o=new Array(q);for(var s=0;s<q;s++){o[s]=h[s]^j.charCodeAt(x*k+s);o[s]=String.fromCharCode(o[s])}m[x]=o.join("")}var y=n+m.join("");y=Base64.encode(y);return y};Aes.Ctr.decrypt=function(t,e,p){var m=16;if(!(p==128||p==192||p==256)){return""}t=Base64.decode(t);e=Utf8.encode(e);var n=p/8;var j=new Array(n);for(var o=0;o<n;o++){j[o]=isNaN(e.charCodeAt(o))?0:e.charCodeAt(o)}var u=Aes.cipher(j,Aes.keyExpansion(j));u=u.concat(u.slice(0,n-16));var f=new Array(8);ctrTxt=t.slice(0,8);for(var o=0;o<8;o++){f[o]=ctrTxt.charCodeAt(o)}var r=Aes.keyExpansion(u);var g=Math.ceil((t.length-8)/m);var h=new Array(g);for(var s=0;s<g;s++){h[s]=t.slice(8+s*m,8+s*m+m)}t=h;var a=new Array(t.length);for(var s=0;s<g;s++){for(var q=0;q<4;q++){f[15-q]=((s)>>>q*8)&255}for(var q=0;q<4;q++){f[15-q-4]=(((s+1)/4294967296-1)>>>q*8)&255}var l=Aes.cipher(f,r);var d=new Array(t[s].length);for(var o=0;o<t[s].length;o++){d[o]=l[o]^t[s].charCodeAt(o);d[o]=String.fromCharCode(d[o])}a[s]=d.join("")}var k=a.join("");k=Utf8.decode(k);return k};var Base64={};Base64.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";Base64.encode=function(n,p){p=(typeof p=="undefined")?false:p;var g,b,a,r,o,k,j,h,i=[],f="",m,q,l;var d=Base64.code;q=p?n.encodeUTF8():n;m=q.length%3;if(m>0){while(m++<3){f+="=";q+="\0"}}for(m=0;m<q.length;m+=3){g=q.charCodeAt(m);b=q.charCodeAt(m+1);a=q.charCodeAt(m+2);r=g<<16|b<<8|a;o=r>>18&63;k=r>>12&63;j=r>>6&63;h=r&63;i[m/3]=d.charAt(o)+d.charAt(k)+d.charAt(j)+d.charAt(h)}l=i.join("");l=l.slice(0,l.length-f.length)+f;return l};Base64.decode=function(n,e){e=(typeof e=="undefined")?false:e;var g,b,a,o,k,i,h,q,j=[],p,m;var f=Base64.code;m=e?n.decodeUTF8():n;for(var l=0;l<m.length;l+=4){o=f.indexOf(m.charAt(l));k=f.indexOf(m.charAt(l+1));i=f.indexOf(m.charAt(l+2));h=f.indexOf(m.charAt(l+3));q=o<<18|k<<12|i<<6|h;g=q>>>16&255;b=q>>>8&255;a=q&255;j[l/4]=String.fromCharCode(g,b,a);if(h==64){j[l/4]=String.fromCharCode(g,b)}if(i==64){j[l/4]=String.fromCharCode(g)}}p=j.join("");return e?p.decodeUTF8():p};var Utf8={};Utf8.encode=function(a){var b=a.replace(/[\u0080-\u07ff]/g,function(e){var d=e.charCodeAt(0);return String.fromCharCode(192|d>>6,128|d&63)});b=b.replace(/[\u0800-\uffff]/g,function(e){var d=e.charCodeAt(0);return String.fromCharCode(224|d>>12,128|d>>6&63,128|d&63)});return b};Utf8.decode=function(b){var a=b.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var d=((e.charCodeAt(0)&15)<<12)|((e.charCodeAt(1)&63)<<6)|(e.charCodeAt(2)&63);return String.fromCharCode(d)});a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var d=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63;return String.fromCharCode(d)});return a};