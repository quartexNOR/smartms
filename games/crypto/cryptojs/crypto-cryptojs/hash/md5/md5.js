(typeof Crypto=="undefined"||!Crypto.util)&&function(){var a=window.Crypto={},b=a.util={rotl:function(d,e){return d<<e|d>>>32-e},rotr:function(d,e){return d<<32-e|d>>>e},endian:function(d){if(d.constructor==Number){return b.rotl(d,8)&16711935|b.rotl(d,24)&4278255360}for(var e=0;e<d.length;e++){d[e]=b.endian(d[e])}return d},randomBytes:function(d){for(var e=[];d>0;d--){e.push(Math.floor(Math.random()*256))}return e},bytesToWords:function(f){for(var j=[],e=0,d=0;e<f.length;e++,d+=8){j[d>>>5]|=f[e]<<24-d%32}return j},wordsToBytes:function(e){for(var f=[],d=0;d<e.length*32;d+=8){f.push(e[d>>>5]>>>24-d%32&255)}return f},bytesToHex:function(e){for(var f=[],d=0;d<e.length;d++){f.push((e[d]>>>4).toString(16)),f.push((e[d]&15).toString(16))}return f.join("")},hexToBytes:function(e){for(var f=[],d=0;d<e.length;d+=2){f.push(parseInt(e.substr(d,2),16))}return f},bytesToBase64:function(j){if(typeof btoa=="function"){return btoa(c.bytesToString(j))}for(var k=[],f=0;f<j.length;f+=3){for(var e=j[f]<<16|j[f+1]<<8|j[f+2],d=0;d<4;d++){f*8+d*6<=j.length*8?k.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6*(3-d)&63)):k.push("=")}}return k.join("")},base64ToBytes:function(f){if(typeof atob=="function"){return c.stringToBytes(atob(f))}for(var f=f.replace(/[^A-Z0-9+\/]/ig,""),j=[],e=0,d=0;e<f.length;d=++e%4){d!=0&&j.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(f.charAt(e-1))&Math.pow(2,-2*d+8)-1)<<d*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(f.charAt(e))>>>6-d*2)}return j}},a=a.charenc={};a.UTF8={stringToBytes:function(d){return c.stringToBytes(unescape(encodeURIComponent(d)))},bytesToString:function(d){return decodeURIComponent(escape(c.bytesToString(d)))}};var c=a.Binary={stringToBytes:function(e){for(var f=[],d=0;d<e.length;d++){f.push(e.charCodeAt(d)&255)}return f},bytesToString:function(e){for(var f=[],d=0;d<e.length;d++){f.push(String.fromCharCode(e[d]))}return f.join("")}}}();(function(){var a=Crypto,e=a.util,f=a.charenc,c=f.UTF8,d=f.Binary,b=a.MD5=function(i,g){var j=e.wordsToBytes(b._md5(i));return g&&g.asBytes?j:g&&g.asString?d.bytesToString(j):e.bytesToHex(j)};b._md5=function(B){B.constructor==String&&(B=c.stringToBytes(B));for(var A=e.bytesToWords(B),v=B.length*8,B=1732584193,y=-271733879,x=-1732584194,z=271733878,w=0;w<A.length;w++){A[w]=(A[w]<<8|A[w]>>>24)&16711935|(A[w]<<24|A[w]>>>8)&4278255360}A[v>>>5]|=128<<v%32;A[(v+64>>>9<<4)+14]=v;for(var v=b._ff,u=b._gg,t=b._hh,s=b._ii,w=0;w<A.length;w+=16){var r=B,o=y,i=x,h=z,B=v(B,y,x,z,A[w+0],7,-680876936),z=v(z,B,y,x,A[w+1],12,-389564586),x=v(x,z,B,y,A[w+2],17,606105819),y=v(y,x,z,B,A[w+3],22,-1044525330),B=v(B,y,x,z,A[w+4],7,-176418897),z=v(z,B,y,x,A[w+5],12,1200080426),x=v(x,z,B,y,A[w+6],17,-1473231341),y=v(y,x,z,B,A[w+7],22,-45705983),B=v(B,y,x,z,A[w+8],7,1770035416),z=v(z,B,y,x,A[w+9],12,-1958414417),x=v(x,z,B,y,A[w+10],17,-42063),y=v(y,x,z,B,A[w+11],22,-1990404162),B=v(B,y,x,z,A[w+12],7,1804603682),z=v(z,B,y,x,A[w+13],12,-40341101),x=v(x,z,B,y,A[w+14],17,-1502002290),y=v(y,x,z,B,A[w+15],22,1236535329),B=u(B,y,x,z,A[w+1],5,-165796510),z=u(z,B,y,x,A[w+6],9,-1069501632),x=u(x,z,B,y,A[w+11],14,643717713),y=u(y,x,z,B,A[w+0],20,-373897302),B=u(B,y,x,z,A[w+5],5,-701558691),z=u(z,B,y,x,A[w+10],9,38016083),x=u(x,z,B,y,A[w+15],14,-660478335),y=u(y,x,z,B,A[w+4],20,-405537848),B=u(B,y,x,z,A[w+9],5,568446438),z=u(z,B,y,x,A[w+14],9,-1019803690),x=u(x,z,B,y,A[w+3],14,-187363961),y=u(y,x,z,B,A[w+8],20,1163531501),B=u(B,y,x,z,A[w+13],5,-1444681467),z=u(z,B,y,x,A[w+2],9,-51403784),x=u(x,z,B,y,A[w+7],14,1735328473),y=u(y,x,z,B,A[w+12],20,-1926607734),B=t(B,y,x,z,A[w+5],4,-378558),z=t(z,B,y,x,A[w+8],11,-2022574463),x=t(x,z,B,y,A[w+11],16,1839030562),y=t(y,x,z,B,A[w+14],23,-35309556),B=t(B,y,x,z,A[w+1],4,-1530992060),z=t(z,B,y,x,A[w+4],11,1272893353),x=t(x,z,B,y,A[w+7],16,-155497632),y=t(y,x,z,B,A[w+10],23,-1094730640),B=t(B,y,x,z,A[w+13],4,681279174),z=t(z,B,y,x,A[w+0],11,-358537222),x=t(x,z,B,y,A[w+3],16,-722521979),y=t(y,x,z,B,A[w+6],23,76029189),B=t(B,y,x,z,A[w+9],4,-640364487),z=t(z,B,y,x,A[w+12],11,-421815835),x=t(x,z,B,y,A[w+15],16,530742520),y=t(y,x,z,B,A[w+2],23,-995338651),B=s(B,y,x,z,A[w+0],6,-198630844),z=s(z,B,y,x,A[w+7],10,1126891415),x=s(x,z,B,y,A[w+14],15,-1416354905),y=s(y,x,z,B,A[w+5],21,-57434055),B=s(B,y,x,z,A[w+12],6,1700485571),z=s(z,B,y,x,A[w+3],10,-1894986606),x=s(x,z,B,y,A[w+10],15,-1051523),y=s(y,x,z,B,A[w+1],21,-2054922799),B=s(B,y,x,z,A[w+8],6,1873313359),z=s(z,B,y,x,A[w+15],10,-30611744),x=s(x,z,B,y,A[w+6],15,-1560198380),y=s(y,x,z,B,A[w+13],21,1309151649),B=s(B,y,x,z,A[w+4],6,-145523070),z=s(z,B,y,x,A[w+11],10,-1120210379),x=s(x,z,B,y,A[w+2],15,718787259),y=s(y,x,z,B,A[w+9],21,-343485551),B=B+r>>>0,y=y+o>>>0,x=x+i>>>0,z=z+h>>>0}return e.endian([B,y,x,z])};b._ff=function(i,h,j,m,l,n,k){i=i+(h&j|~h&m)+(l>>>0)+k;return(i<<n|i>>>32-n)+h};b._gg=function(i,h,j,m,l,n,k){i=i+(h&m|j&~m)+(l>>>0)+k;return(i<<n|i>>>32-n)+h};b._hh=function(i,h,j,m,l,n,k){i=i+(h^j^m)+(l>>>0)+k;return(i<<n|i>>>32-n)+h};b._ii=function(i,h,j,m,l,n,k){i=i+(j^(h|~m))+(l>>>0)+k;return(i<<n|i>>>32-n)+h};b._blocksize=16;b._digestsize=16})();