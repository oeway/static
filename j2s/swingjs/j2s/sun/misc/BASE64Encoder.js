(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BASE64Encoder", null, 'sun.misc.CharacterEncoder');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pem_array=Clazz.array(Character.TYPE, -1, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['pem_array','char[]']]]

Clazz.newMeth(C$, 'bytesPerAtom$', function () {
return (3);
});

Clazz.newMeth(C$, 'bytesPerLine$', function () {
return (57);
});

Clazz.newMeth(C$, 'encodeAtom$java_io_OutputStream$BA$I$I', function (outStream, data, offset, len) {
var a;
var b;
var c;
if (len == 1) {
a=($b$[0] = data[offset], $b$[0]);
b=($b$[0] = 0, $b$[0]);
c=($b$[0] = 0, $b$[0]);
outStream.write$I(C$.pem_array[(a >>> 2) & 63].$c());
outStream.write$I(C$.pem_array[((a << 4) & 48) + ((b >>> 4) & 15)].$c());
outStream.write$I("=".$c());
outStream.write$I("=".$c());
} else if (len == 2) {
a=($b$[0] = data[offset], $b$[0]);
b=($b$[0] = data[offset + 1], $b$[0]);
c=($b$[0] = 0, $b$[0]);
outStream.write$I(C$.pem_array[(a >>> 2) & 63].$c());
outStream.write$I(C$.pem_array[((a << 4) & 48) + ((b >>> 4) & 15)].$c());
outStream.write$I(C$.pem_array[((b << 2) & 60) + ((c >>> 6) & 3)].$c());
outStream.write$I("=".$c());
} else {
a=($b$[0] = data[offset], $b$[0]);
b=($b$[0] = data[offset + 1], $b$[0]);
c=($b$[0] = data[offset + 2], $b$[0]);
outStream.write$I(C$.pem_array[(a >>> 2) & 63].$c());
outStream.write$I(C$.pem_array[((a << 4) & 48) + ((b >>> 4) & 15)].$c());
outStream.write$I(C$.pem_array[((b << 2) & 60) + ((c >>> 6) & 3)].$c());
outStream.write$I(C$.pem_array[c & 63].$c());
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
