(function(){var P$=Clazz.newPackage("org.scijava.util");
/*c*/var C$=Clazz.newClass(P$, "Bytes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toShort$BA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=($s$[0] = 0, $s$[0]);
for (var i=0, ndx=off; i < len; i++, ndx++) {
total=($s$[0] = total|((bytes[ndx] < 0 ? 256 + bytes[ndx] : bytes[ndx]) << ((little ? i : len - i - 1 ) * 8)), $s$[0]);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toShort$BA$I$Z', function (bytes, off, little) {
return C$.toShort$BA$I$I$Z(bytes, off, 2, little);
}, 1);

Clazz.newMeth(C$, 'toShort$BA$Z', function (bytes, little) {
return C$.toShort$BA$I$I$Z(bytes, 0, 2, little);
}, 1);

Clazz.newMeth(C$, 'toShort$HA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=($s$[0] = 0, $s$[0]);
for (var i=0, ndx=off; i < len; i++, ndx++) {
total=($s$[0] = total|(bytes[ndx] << ((little ? i : len - i - 1 ) * 8)), $s$[0]);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toShort$HA$I$Z', function (bytes, off, little) {
return C$.toShort$HA$I$I$Z(bytes, off, 2, little);
}, 1);

Clazz.newMeth(C$, 'toShort$HA$Z', function (bytes, little) {
return C$.toShort$HA$I$I$Z(bytes, 0, 2, little);
}, 1);

Clazz.newMeth(C$, 'toInt$BA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=0;
for (var i=0, ndx=off; i < len; i++, ndx++) {
total|=(bytes[ndx] < 0 ? 256 + bytes[ndx] : bytes[ndx]) << ((little ? i : len - i - 1 ) * 8);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toInt$BA$I$Z', function (bytes, off, little) {
return C$.toInt$BA$I$I$Z(bytes, off, 4, little);
}, 1);

Clazz.newMeth(C$, 'toInt$BA$Z', function (bytes, little) {
return C$.toInt$BA$I$I$Z(bytes, 0, 4, little);
}, 1);

Clazz.newMeth(C$, 'toInt$HA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=0;
for (var i=0, ndx=off; i < len; i++, ndx++) {
total|=bytes[ndx] << ((little ? i : len - i - 1 ) * 8);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toInt$HA$I$Z', function (bytes, off, little) {
return C$.toInt$HA$I$I$Z(bytes, off, 4, little);
}, 1);

Clazz.newMeth(C$, 'toInt$HA$Z', function (bytes, little) {
return C$.toInt$HA$I$I$Z(bytes, 0, 4, little);
}, 1);

Clazz.newMeth(C$, 'toFloat$BA$I$I$Z', function (bytes, off, len, little) {
return Float.intBitsToFloat$I(C$.toInt$BA$I$I$Z(bytes, off, len, little));
}, 1);

Clazz.newMeth(C$, 'toFloat$BA$I$Z', function (bytes, off, little) {
return C$.toFloat$BA$I$I$Z(bytes, off, 4, little);
}, 1);

Clazz.newMeth(C$, 'toFloat$BA$Z', function (bytes, little) {
return C$.toFloat$BA$I$I$Z(bytes, 0, 4, little);
}, 1);

Clazz.newMeth(C$, 'toFloat$HA$I$I$Z', function (bytes, off, len, little) {
return Float.intBitsToFloat$I(C$.toInt$HA$I$I$Z(bytes, off, len, little));
}, 1);

Clazz.newMeth(C$, 'toFloat$HA$I$Z', function (bytes, off, little) {
return C$.toInt$HA$I$I$Z(bytes, off, 4, little);
}, 1);

Clazz.newMeth(C$, 'toFloat$HA$Z', function (bytes, little) {
return C$.toInt$HA$I$I$Z(bytes, 0, 4, little);
}, 1);

Clazz.newMeth(C$, 'toLong$BA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=0;
for (var i=0, ndx=off; i < len; i++, ndx++) {
total|=(bytes[ndx] < 0 ? 256 + bytes[ndx] : bytes[ndx]) << ((little ? i : len - i - 1 ) * 8);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toLong$BA$I$Z', function (bytes, off, little) {
return C$.toLong$BA$I$I$Z(bytes, off, 8, little);
}, 1);

Clazz.newMeth(C$, 'toLong$BA$Z', function (bytes, little) {
return C$.toLong$BA$I$I$Z(bytes, 0, 8, little);
}, 1);

Clazz.newMeth(C$, 'toLong$HA$I$I$Z', function (bytes, off, len, little) {
if (bytes.length - off < len) len=bytes.length - off;
var total=0;
for (var i=0, ndx=off; i < len; i++, ndx++) {
total|=(bytes[ndx]) << ((little ? i : len - i - 1 ) * 8);
}
return total;
}, 1);

Clazz.newMeth(C$, 'toLong$HA$I$Z', function (bytes, off, little) {
return C$.toLong$HA$I$I$Z(bytes, off, 8, little);
}, 1);

Clazz.newMeth(C$, 'toLong$HA$Z', function (bytes, little) {
return C$.toLong$HA$I$I$Z(bytes, 0, 8, little);
}, 1);

Clazz.newMeth(C$, 'toDouble$BA$I$I$Z', function (bytes, off, len, little) {
return Double.longBitsToDouble$J(C$.toLong$BA$I$I$Z(bytes, off, len, little));
}, 1);

Clazz.newMeth(C$, 'toDouble$BA$I$Z', function (bytes, off, little) {
return C$.toDouble$BA$I$I$Z(bytes, off, 8, little);
}, 1);

Clazz.newMeth(C$, 'toDouble$BA$Z', function (bytes, little) {
return C$.toDouble$BA$I$I$Z(bytes, 0, 8, little);
}, 1);

Clazz.newMeth(C$, 'toDouble$HA$I$I$Z', function (bytes, off, len, little) {
return Double.longBitsToDouble$J(C$.toLong$HA$I$I$Z(bytes, off, len, little));
}, 1);

Clazz.newMeth(C$, 'toDouble$HA$I$Z', function (bytes, off, little) {
return C$.toDouble$HA$I$I$Z(bytes, off, 8, little);
}, 1);

Clazz.newMeth(C$, 'toDouble$HA$Z', function (bytes, little) {
return C$.toDouble$HA$I$I$Z(bytes, 0, 8, little);
}, 1);

Clazz.newMeth(C$, 'fromShort$H$Z', function (value, little) {
var v=Clazz.array(Byte.TYPE, [2]);
C$.unpack$J$BA$I$I$Z(value, v, 0, 2, little);
return v;
}, 1);

Clazz.newMeth(C$, 'fromInt$I$Z', function (value, little) {
var v=Clazz.array(Byte.TYPE, [4]);
C$.unpack$J$BA$I$I$Z(value, v, 0, 4, little);
return v;
}, 1);

Clazz.newMeth(C$, 'fromFloat$F$Z', function (value, little) {
var v=Clazz.array(Byte.TYPE, [4]);
C$.unpack$J$BA$I$I$Z(Float.floatToIntBits$F(value), v, 0, 4, little);
return v;
}, 1);

Clazz.newMeth(C$, 'fromLong$J$Z', function (value, little) {
var v=Clazz.array(Byte.TYPE, [8]);
C$.unpack$J$BA$I$I$Z(value, v, 0, 8, little);
return v;
}, 1);

Clazz.newMeth(C$, 'fromDouble$D$Z', function (value, little) {
var v=Clazz.array(Byte.TYPE, [8]);
C$.unpack$J$BA$I$I$Z(Double.doubleToLongBits$D(value), v, 0, 8, little);
return v;
}, 1);

Clazz.newMeth(C$, 'fromShorts$HA$Z', function (values, little) {
var v=Clazz.array(Byte.TYPE, [values.length * 2]);
for (var i=0; i < values.length; i++) {
C$.unpack$J$BA$I$I$Z(values[i], v, i * 2, 2, little);
}
return v;
}, 1);

Clazz.newMeth(C$, 'fromInts$IA$Z', function (values, little) {
var v=Clazz.array(Byte.TYPE, [values.length * 4]);
for (var i=0; i < values.length; i++) {
C$.unpack$J$BA$I$I$Z(values[i], v, i * 4, 4, little);
}
return v;
}, 1);

Clazz.newMeth(C$, 'fromFloats$FA$Z', function (values, little) {
var v=Clazz.array(Byte.TYPE, [values.length * 4]);
for (var i=0; i < values.length; i++) {
C$.unpack$J$BA$I$I$Z(Float.floatToIntBits$F(values[i]), v, i * 4, 4, little);
}
return v;
}, 1);

Clazz.newMeth(C$, 'fromLongs$JA$Z', function (values, little) {
var v=Clazz.array(Byte.TYPE, [values.length * 8]);
for (var i=0; i < values.length; i++) {
C$.unpack$J$BA$I$I$Z(values[i], v, i * 8, 8, little);
}
return v;
}, 1);

Clazz.newMeth(C$, 'fromDoubles$DA$Z', function (values, little) {
var v=Clazz.array(Byte.TYPE, [values.length * 8]);
for (var i=0; i < values.length; i++) {
C$.unpack$J$BA$I$I$Z(Double.doubleToLongBits$D(values[i]), v, i * 8, 8, little);
}
return v;
}, 1);

Clazz.newMeth(C$, 'unpack$J$BA$I$I$Z', function (value, buf, ndx, nBytes, little) {
if (buf.length < ndx + nBytes) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid indices: buf.length=" + buf.length + ", ndx=" + ndx + ", nBytes=" + nBytes ]);
}if (little) {
for (var i=0; i < nBytes; i++) {
buf[ndx + i]=((((value >> (8 * i)) & 255)|0)|0);
}
} else {
for (var i=0; i < nBytes; i++) {
buf[ndx + i]=((((value >> (8 * (nBytes - i - 1 ))) & 255)|0)|0);
}
}}, 1);

Clazz.newMeth(C$, 'makeArray$BA$I$Z$Z', function (b, bpp, fp, little) {
if (bpp == 1) {
return b;
} else if (bpp == 2) {
var s=Clazz.array(Short.TYPE, [(b.length/2|0)]);
for (var i=0; i < s.length; i++) {
s[i]=C$.toShort$BA$I$I$Z(b, i * 2, 2, little);
}
return s;
} else if (bpp == 4 && fp ) {
var f=Clazz.array(Float.TYPE, [(b.length/4|0)]);
for (var i=0; i < f.length; i++) {
f[i]=C$.toFloat$BA$I$I$Z(b, i * 4, 4, little);
}
return f;
} else if (bpp == 4) {
var i=Clazz.array(Integer.TYPE, [(b.length/4|0)]);
for (var j=0; j < i.length; j++) {
i[j]=C$.toInt$BA$I$I$Z(b, j * 4, 4, little);
}
return i;
} else if (bpp == 8 && fp ) {
var d=Clazz.array(Double.TYPE, [(b.length/8|0)]);
for (var i=0; i < d.length; i++) {
d[i]=C$.toDouble$BA$I$I$Z(b, i * 8, 8, little);
}
return d;
} else if (bpp == 8) {
var l=Clazz.array(Long.TYPE, [(b.length/8|0)]);
for (var i=0; i < l.length; i++) {
l[i]=C$.toLong$BA$I$I$Z(b, i * 8, 8, little);
}
return l;
}return null;
}, 1);

Clazz.newMeth(C$, 'makeArray2D$BA$I$Z$Z$I', function (b, bpp, fp, little, height) {
if (b.length % (bpp * height) != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array length mismatch: b.length=" + b.length + "; bpp=" + bpp + "; height=" + height ]);
}var width=(b.length/(bpp * height)|0);
if (bpp == 1) {
var b2=Clazz.array(Byte.TYPE, [height, width]);
for (var y=0; y < height; y++) {
var index=width * y;
System.arraycopy$O$I$O$I$I(b, index, b2[y], 0, width);
}
return b2;
} else if (bpp == 2) {
var s=Clazz.array(Short.TYPE, [height, width]);
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var index=2 * (width * y + x);
s[y][x]=C$.toShort$BA$I$I$Z(b, index, 2, little);
}
}
return s;
} else if (bpp == 4 && fp ) {
var f=Clazz.array(Float.TYPE, [height, width]);
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var index=4 * (width * y + x);
f[y][x]=C$.toFloat$BA$I$I$Z(b, index, 4, little);
}
}
return f;
} else if (bpp == 4) {
var i=Clazz.array(Integer.TYPE, [height, width]);
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var index=4 * (width * y + x);
i[y][x]=C$.toInt$BA$I$I$Z(b, index, 4, little);
}
}
return i;
} else if (bpp == 8 && fp ) {
var d=Clazz.array(Double.TYPE, [height, width]);
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var index=8 * (width * y + x);
d[y][x]=C$.toDouble$BA$I$I$Z(b, index, 8, little);
}
}
return d;
} else if (bpp == 8) {
var l=Clazz.array(Long.TYPE, [height, width]);
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var index=8 * (width * y + x);
l[y][x]=C$.toLong$BA$I$I$Z(b, index, 8, little);
}
}
return l;
}return null;
}, 1);

Clazz.newMeth(C$, 'swap$H', function (x) {
return ($s$[0] = ((x << 8) | ((x >> 8) & 255)), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'swap$C', function (x) {
return String.fromCharCode(((x.$c() << 8) | ((x.$c() >> 8) & 255)));
}, 1);

Clazz.newMeth(C$, 'swap$I', function (x) {
return (C$.swap$H(($s$[0] = x, $s$[0])) << 16) | (C$.swap$H(($s$[0] = (x >> 16), $s$[0])) & 65535);
}, 1);

Clazz.newMeth(C$, 'swap$J', function (x) {
return (C$.swap$I((x|0)) << 32) | (C$.swap$I(((x >> 32)|0)) & 4294967295);
}, 1);

Clazz.newMeth(C$, 'swap$F', function (x) {
return Float.intBitsToFloat$I(C$.swap$I(Float.floatToIntBits$F(x)));
}, 1);

Clazz.newMeth(C$, 'swap$D', function (x) {
return Double.longBitsToDouble$J(C$.swap$J(Double.doubleToLongBits$D(x)));
}, 1);

Clazz.newMeth(C$, 'normalize$FA', function (data) {
var rtn=Clazz.array(Float.TYPE, [data.length]);
var min=3.4028235E38;
var max=1.4E-45;
for (var floatValue, $floatValue = 0, $$floatValue = data; $floatValue<$$floatValue.length&&((floatValue=($$floatValue[$floatValue])),1);$floatValue++) {
if (floatValue == Infinity  || floatValue == -Infinity  ) {
continue;
}if (floatValue < min ) min=floatValue;
if (floatValue > max ) max=floatValue;
}
for (var i=0; i < data.length; i++) {
if (data[i] == Infinity ) data[i]=max;
 else if (data[i] == -Infinity ) data[i]=min;
}
var range=max - min;
for (var i=0; i < rtn.length; i++) {
rtn[i]=(data[i] - min) / range;
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'normalize$DA', function (data) {
var rtn=Clazz.array(Double.TYPE, [data.length]);
var min=1.7976931348623157E308;
var max=4.9E-324;
for (var doubleValue, $doubleValue = 0, $$doubleValue = data; $doubleValue<$$doubleValue.length&&((doubleValue=($$doubleValue[$doubleValue])),1);$doubleValue++) {
if (doubleValue == Infinity  || doubleValue == -Infinity  ) {
continue;
}if (doubleValue < min ) min=doubleValue;
if (doubleValue > max ) max=doubleValue;
}
for (var i=0; i < data.length; i++) {
if (data[i] == Infinity ) data[i]=max;
 else if (data[i] == -Infinity ) data[i]=min;
}
var range=max - min;
for (var i=0; i < rtn.length; i++) {
rtn[i]=(data[i] - min) / range;
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'makeSigned$BA', function (b) {
for (var i=0; i < b.length; i++) {
b[i]=(((b[i] + 128)|0)|0);
}
return b;
}, 1);

Clazz.newMeth(C$, 'makeSigned$HA', function (s) {
for (var i=0; i < s.length; i++) {
s[i]=((s[i] + 32768)|0);
}
return s;
}, 1);

Clazz.newMeth(C$, 'makeSigned$IA', function (i) {
for (var j=0; j < i.length; j++) {
i[j]=((i[j] + 2147483648)|0);
}
return i;
}, 1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
