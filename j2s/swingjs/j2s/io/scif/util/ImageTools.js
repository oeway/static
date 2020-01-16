(function(){var P$=Clazz.newPackage("io.scif.util"),I$=[[0,'org.scijava.util.Bytes','io.scif.util.FormatTools','org.scijava.util.ArrayUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'make24Bits$O$I$I$Z$Z', function (pixels, w, h, interleaved, reverse) {
return C$.make24Bits$O$I$I$Z$Z$Double$Double(pixels, w, h, interleaved, reverse, null, null);
}, 1);

Clazz.newMeth(C$, 'make24Bits$O$I$I$Z$Z$Double$Double', function (pixels, w, h, interleaved, reverse, min, max) {
var pix=C$.make24Bits$O$I$I$Z$Double$Double(pixels, w, h, interleaved, min, max);
var rtn=Clazz.array(Byte.TYPE, [3, pix.length]);
for (var i=0; i < pix.length; i++) {
var r=($b$[0] = (((pix[i] >> 16) & 255)|0), $b$[0]);
rtn[1][i]=((((pix[i] >> 8) & 255)|0)|0);
var b=($b$[0] = ((pix[i] & 255)|0), $b$[0]);
rtn[0][i]=(reverse ? (b|0) : (r|0)|0);
rtn[2][i]=(reverse ? (r|0) : (b|0)|0);
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'make24Bits$O$I$I$Z', function (pixels, w, h, interleaved) {
return C$.make24Bits$O$I$I$Z$Double$Double(pixels, w, h, interleaved, null, null);
}, 1);

Clazz.newMeth(C$, 'make24Bits$O$I$I$Z$Double$Double', function (pixels, w, h, interleaved, min, max) {
var rtn=Clazz.array(Integer.TYPE, [w * h]);
var b=null;
if (min == null ) min= new Double(0);
var newRange=256.0;
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -1))) b=pixels;
 else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -1))) {
if (max == null ) max= new Double(65535);
var range=max.doubleValue$() - min.doubleValue$() + 1;
var mult=256.0 / range;
var s=pixels;
b=Clazz.array(Byte.TYPE, [s.length]);
for (var i=0; i < s.length; i++) {
b[i]=(((Math.abs(s[i] * mult) - min.doubleValue$())|0)|0);
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -1))) {
if (max == null ) max= new Double(4294967295);
var range=max.doubleValue$() - min.doubleValue$() + 1;
var mult=256.0 / range;
var s=pixels;
b=Clazz.array(Byte.TYPE, [s.length]);
for (var i=0; i < s.length; i++) {
b[i]=(((Math.abs(s[i] * mult) - min.doubleValue$())|0)|0);
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -1))) {
if (max == null ) max= new Double(3.4028235E38);
var range=max.doubleValue$() - min.doubleValue$() + 1;
var mult=256.0 / range;
var s=pixels;
b=Clazz.array(Byte.TYPE, [s.length]);
for (var i=0; i < s.length; i++) {
b[i]=(((s[i] * mult - min.doubleValue$())|0)|0);
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -1))) {
if (max == null ) max= new Double(1.7976931348623157E308);
var range=max.doubleValue$() - min.doubleValue$() + 1;
var mult=256.0 / range;
var s=pixels;
b=Clazz.array(Byte.TYPE, [s.length]);
for (var i=0; i < s.length; i++) {
b[i]=(((s[i] * mult - min.doubleValue$())|0)|0);
}
}var c=(b.length/rtn.length|0);
for (var i=0; i < rtn.length; i++) {
var a=Clazz.array(Byte.TYPE, [4]);
var maxC=Math.min(c, a.length);
for (var j=maxC - 1; j >= 0; j--) {
a[j]=(b[interleaved ? i * c + j : i + j * w * h ]|0);
}
if (c == 1) {
for (var j=1; j < a.length; j++) {
a[j]=(a[0]|0);
}
}var tmp=($b$[0] = a[0], $b$[0]);
a[0]=(a[2]|0);
a[2]=(tmp|0);
rtn[i]=$I$(1).toInt$BA$Z(a, true);
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'splitChannels$BA$JA$JA$I$Z$Z', function (array, pos, maxLengths, bytes, reverse, interleaved) {
var splitCount=1;
for (var l, $l = 0, $$l = maxLengths; $l<$$l.length&&((l=($$l[$l])),1);$l++) {
splitCount*=l;
}
return C$.splitChannels$BA$BA$JA$JA$I$Z$Z$J(array, null, pos, maxLengths, bytes, reverse, interleaved, (array.length/splitCount|0));
}, 1);

Clazz.newMeth(C$, 'splitChannels$BA$BA$JA$JA$I$Z$Z$J', function (array, rtn, pos, maxLengths, bytes, reverse, interleaved, planeLength) {
if (planeLength == array.length) {
if (rtn != null ) {
System.arraycopy$O$I$O$I$I(array, 0, rtn, 0, rtn.length);
}return array;
}if (rtn == null ) {
rtn=Clazz.array(Byte.TYPE, [((planeLength)|0)]);
}if (reverse) {
for (var i=0; i < pos.length; i++) {
pos[i]=maxLengths[i] - pos[i] - 1 ;
}
}var index=$I$(2).positionToRaster$JA$JA(maxLengths, pos);
if (!interleaved) {
System.arraycopy$O$I$O$I$I(array, ((planeLength * index)|0), rtn, 0, (planeLength|0));
} else {
var next=0;
for (var i=0; i < array.length; i+=bytes * $I$(3).safeMultiply32$JA(maxLengths)) {
for (var k=0; k < bytes; k++) {
if (next < rtn.length) rtn[next]=(array[((i + index * bytes + k)|0)]|0);
next++;
}
}
}return rtn;
}, 1);

Clazz.newMeth(C$, 'padImage$BA$Z$I$I$I$I', function (b, interleaved, c, oldWidth, width, height) {
var oldHeight=(b.length/(oldWidth * c)|0);
var padded=Clazz.array(Byte.TYPE, [height * width * c ]);
var wClip=((width - oldWidth)/2|0);
var hClip=((height - oldHeight)/2|0);
var h=height < oldHeight ? height : oldHeight;
if (interleaved) {
var len=oldWidth < width ? oldWidth : width;
if (h == oldHeight) {
for (var y=0; y < h * c; y++) {
var oldIndex=oldWidth * y;
var index=width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
} else {
for (var ch=0; ch < c; ch++) {
for (var y=0; y < h; y++) {
var oldIndex=oldWidth * ch * oldHeight  + oldWidth * y;
var index=width * ch * height  + width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}
}} else {
var len=oldWidth < width ? oldWidth * c : width * c;
for (var oy=0, y=0; oy < oldHeight; oy++, y++) {
var oldIndex=oldWidth * c * y ;
var index=width * c * (y + hClip)  + c * wClip;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}return padded;
}, 1);

Clazz.newMeth(C$, 'padImage$HA$Z$I$I$I$I', function (b, interleaved, c, oldWidth, width, height) {
var oldHeight=(b.length/(oldWidth * c)|0);
var padded=Clazz.array(Short.TYPE, [height * width * c ]);
var wClip=((width - oldWidth)/2|0);
var hClip=((height - oldHeight)/2|0);
var h=height < oldHeight ? height : oldHeight;
if (interleaved) {
var len=oldWidth < width ? oldWidth : width;
if (h == oldHeight) {
for (var y=0; y < h * c; y++) {
var oldIndex=oldWidth * y;
var index=width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
} else {
for (var ch=0; ch < c; ch++) {
for (var y=0; y < h; y++) {
var oldIndex=oldWidth * ch * oldHeight  + oldWidth * y;
var index=width * ch * height  + width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}
}} else {
var len=oldWidth < width ? oldWidth * c : width * c;
for (var oy=0, y=0; oy < oldHeight; oy++, y++) {
var oldIndex=oldWidth * c * y ;
var index=width * c * (y + hClip)  + c * wClip;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}return padded;
}, 1);

Clazz.newMeth(C$, 'padImage$IA$Z$I$I$I$I', function (b, interleaved, c, oldWidth, width, height) {
var oldHeight=(b.length/(oldWidth * c)|0);
var padded=Clazz.array(Integer.TYPE, [height * width * c ]);
var wClip=((width - oldWidth)/2|0);
var hClip=((height - oldHeight)/2|0);
var h=height < oldHeight ? height : oldHeight;
if (interleaved) {
var len=oldWidth < width ? oldWidth : width;
if (h == oldHeight) {
for (var y=0; y < h * c; y++) {
var oldIndex=oldWidth * y;
var index=width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
} else {
for (var ch=0; ch < c; ch++) {
for (var y=0; y < h; y++) {
var oldIndex=oldWidth * ch * oldHeight  + oldWidth * y;
var index=width * ch * height  + width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}
}} else {
var len=oldWidth < width ? oldWidth * c : width * c;
for (var oy=0, y=0; oy < oldHeight; oy++, y++) {
var oldIndex=oldWidth * c * y ;
var index=width * c * (y + hClip)  + c * wClip;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}return padded;
}, 1);

Clazz.newMeth(C$, 'padImage$FA$Z$I$I$I$I', function (b, interleaved, c, oldWidth, width, height) {
var oldHeight=(b.length/(oldWidth * c)|0);
var padded=Clazz.array(Float.TYPE, [height * width * c ]);
var wClip=((width - oldWidth)/2|0);
var hClip=((height - oldHeight)/2|0);
var h=height < oldHeight ? height : oldHeight;
if (interleaved) {
var len=oldWidth < width ? oldWidth : width;
if (h == oldHeight) {
for (var y=0; y < h * c; y++) {
var oldIndex=oldWidth * y;
var index=width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
} else {
for (var ch=0; ch < c; ch++) {
for (var y=0; y < h; y++) {
var oldIndex=oldWidth * ch * oldHeight  + oldWidth * y;
var index=width * ch * height  + width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}
}} else {
var len=oldWidth < width ? oldWidth * c : width * c;
for (var oy=0, y=0; oy < oldHeight; oy++, y++) {
var oldIndex=oldWidth * c * y ;
var index=width * c * (y + hClip)  + c * wClip;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}return padded;
}, 1);

Clazz.newMeth(C$, 'padImage$DA$Z$I$I$I$I', function (b, interleaved, c, oldWidth, width, height) {
var oldHeight=(b.length/(oldWidth * c)|0);
var padded=Clazz.array(Double.TYPE, [height * width * c ]);
var wClip=((width - oldWidth)/2|0);
var hClip=((height - oldHeight)/2|0);
var h=height < oldHeight ? height : oldHeight;
if (interleaved) {
var len=oldWidth < width ? oldWidth : width;
if (h == oldHeight) {
for (var y=0; y < h * c; y++) {
var oldIndex=oldWidth * y;
var index=width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
} else {
for (var ch=0; ch < c; ch++) {
for (var y=0; y < h; y++) {
var oldIndex=oldWidth * ch * oldHeight  + oldWidth * y;
var index=width * ch * height  + width * y;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}
}} else {
var len=oldWidth < width ? oldWidth * c : width * c;
for (var oy=0, y=0; oy < oldHeight; oy++, y++) {
var oldIndex=oldWidth * c * y ;
var index=width * c * (y + hClip)  + c * wClip;
System.arraycopy$O$I$O$I$I(b, oldIndex, padded, index, len);
}
}return padded;
}, 1);

Clazz.newMeth(C$, 'autoscale$BA$I$I$I$Z', function (b, min, max, bpp, little) {
if (bpp == 1) return b;
var out=Clazz.array(Byte.TYPE, [(b.length/bpp|0)]);
for (var i=0; i < b.length; i+=bpp) {
var s=$I$(1).toInt$BA$I$I$Z(b, i, bpp, little);
if (s >= max) s=255;
 else if (s <= min) s=0;
 else {
var diff=max - min;
var dist=((s - min)/diff|0);
s=(dist|0) * 256;
}out[(i/bpp|0)]=((s|0)|0);
}
return out;
}, 1);

Clazz.newMeth(C$, 'scanData$BA$I$Z', function (plane, bits, littleEndian) {
var max=0;
var min=2147483647;
if (bits <= 8) {
for (var planeVal, $planeVal = 0, $$planeVal = plane; $planeVal<$$planeVal.length&&((planeVal=($$planeVal[$planeVal])),1);$planeVal++) {
if (planeVal < min) min=planeVal;
if (planeVal > max) max=planeVal;
}
} else if (bits == 16) {
for (var j=0; j < plane.length; j+=2) {
var s=$I$(1).toShort$BA$I$I$Z(plane, j, 2, littleEndian);
if (s < min) min=s;
if (s > max) max=s;
}
} else if (bits == 32) {
for (var j=0; j < plane.length; j+=4) {
var s=$I$(1).toInt$BA$I$I$Z(plane, j, 4, littleEndian);
if (s < min) min=s;
if (s > max) max=s;
}
}var rtn=Clazz.array(Double, [2]);
rtn[0]= new Double(min);
rtn[1]= new Double(max);
return rtn;
}, 1);

Clazz.newMeth(C$, 'getSubimage$BA$BA$I$I$I$I$I$I$I$I$Z', function (src, dest, originalWidth, originalHeight, x, y, w, h, bpp, channels, interleaved) {
for (var yy=y; yy < y + h; yy++) {
for (var xx=x; xx < x + w; xx++) {
for (var cc=0; cc < channels; cc++) {
var oldNdx=-1;
var newNdx=-1;
if (interleaved) {
oldNdx=yy * originalWidth * bpp * channels  + xx * bpp * channels  + cc * bpp;
newNdx=(yy - y) * w * bpp * channels  + (xx - x) * bpp * channels  + cc * bpp;
} else {
oldNdx=bpp * (cc * originalWidth * originalHeight  + yy * originalWidth + xx);
newNdx=bpp * (cc * w * h  + (yy - y) * w + (xx - x));
}System.arraycopy$O$I$O$I$I(src, oldNdx, dest, newNdx, bpp);
}
}
}
return dest;
}, 1);

Clazz.newMeth(C$, 'indexedToRGB$BAA$BA', function (lut, b) {
var rtn=Clazz.array(Byte.TYPE, [lut.length, b.length]);
for (var i=0; i < b.length; i++) {
for (var j=0; j < lut.length; j++) {
rtn[j][i]=(lut[j][b[i] & 255]|0);
}
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'indexedToRGB$HAA$BA$Z', function (lut, b, le) {
var rtn=Clazz.array(Short.TYPE, [lut.length, (b.length/2|0)]);
for (var i=0; i < (b.length/2|0); i++) {
for (var j=0; j < lut.length; j++) {
var index=$I$(1).toInt$BA$I$I$Z(b, i * 2, 2, le);
rtn[j][i]=lut[j][index];
}
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'interpolate$HA$BA$IA$I$I$Z', function (s, buf, bayerPattern, width, height, littleEndian) {
if (width == 1 && height == 1 ) {
for (var i=0; i < buf.length; i++) {
buf[i]=((s[0]|0)|0);
}
return buf;
}var plane=width * height;
for (var row=0; row < height; row++) {
for (var col=0; col < width; col++) {
var evenCol=(col % 2) == 0;
var index=(row % 2) * 2 + (col % 2);
var needGreen=bayerPattern[index] != 1;
var needRed=bayerPattern[index] != 0;
var needBlue=bayerPattern[index] != 2;
if (needGreen) {
var sum=0;
var ncomps=0;
if (row > 0) {
sum+=s[plane + (row - 1) * width + col];
ncomps++;
}if (row < height - 1) {
sum+=s[plane + (row + 1) * width + col];
ncomps++;
}if (col > 0) {
sum+=s[plane + row * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[plane + row * width + col + 1];
ncomps++;
}var v=($s$[0] = ((sum/ncomps|0)), $s$[0]);
$I$(1).unpack$J$BA$I$I$Z(v, buf, row * width * 6  + col * 6 + 2, 2, littleEndian);
} else {
$I$(1).unpack$J$BA$I$I$Z(s[plane + row * width + col], buf, row * width * 6  + col * 6 + 2, 2, littleEndian);
}if (needRed) {
var sum=0;
var ncomps=0;
if (!needBlue) {
if (row > 0) {
if (col > 0) {
sum+=s[(row - 1) * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[(row - 1) * width + col + 1];
ncomps++;
}}if (row < height - 1) {
if (col > 0) {
sum+=s[(row + 1) * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[(row + 1) * width + col + 1];
ncomps++;
}}} else if ((evenCol && bayerPattern[index + 1] == 0 ) || (!evenCol && bayerPattern[index - 1] == 0 ) ) {
if (col > 0) {
sum+=s[row * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[row * width + col + 1];
ncomps++;
}} else {
if (row > 0) {
sum+=s[(row - 1) * width + col];
ncomps++;
}if (row < height - 1) {
sum+=s[(row + 1) * width + col];
ncomps++;
}}var v=($s$[0] = ((sum/ncomps|0)), $s$[0]);
$I$(1).unpack$J$BA$I$I$Z(v, buf, row * width * 6  + col * 6, 2, littleEndian);
} else {
$I$(1).unpack$J$BA$I$I$Z(s[row * width + col], buf, row * width * 6  + col * 6, 2, littleEndian);
}if (needBlue) {
var sum=0;
var ncomps=0;
if (!needRed) {
if (row > 0) {
if (col > 0) {
sum+=s[(2 * height + row - 1) * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[(2 * height + row - 1) * width + col + 1];
ncomps++;
}}if (row < height - 1) {
if (col > 0) {
sum+=s[(2 * height + row + 1) * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[(2 * height + row + 1) * width + col + 1];
ncomps++;
}}} else if ((evenCol && bayerPattern[index + 1] == 2 ) || (!evenCol && bayerPattern[index - 1] == 2 ) ) {
if (col > 0) {
sum+=s[(2 * height + row) * width + col - 1];
ncomps++;
}if (col < width - 1) {
sum+=s[(2 * height + row) * width + col + 1];
ncomps++;
}} else {
if (row > 0) {
sum+=s[(2 * height + row - 1) * width + col];
ncomps++;
}if (row < height - 1) {
sum+=s[(2 * height + row + 1) * width + col];
ncomps++;
}}var v=($s$[0] = ((sum/ncomps|0)), $s$[0]);
$I$(1).unpack$J$BA$I$I$Z(v, buf, row * width * 6  + col * 6 + 4, 2, littleEndian);
} else {
$I$(1).unpack$J$BA$I$I$Z(s[2 * plane + row * width + col], buf, row * width * 6  + col * 6 + 4, 2, littleEndian);
}}
}
return buf;
}, 1);

Clazz.newMeth(C$, 'bgrToRgb$BA$Z$I$I', function (buf, interleaved, bpp, c) {
if (c < 3) return;
if (interleaved) {
for (var i=0; i < buf.length; i+=bpp * c) {
for (var b=0; b < bpp; b++) {
var tmp=($b$[0] = buf[i + b], $b$[0]);
buf[i + b]=(buf[i + bpp * 2]|0);
buf[i + bpp * 2]=(tmp|0);
}
}
} else {
var channel=Clazz.array(Byte.TYPE, [(buf.length/(bpp * c)|0)]);
System.arraycopy$O$I$O$I$I(buf, 0, channel, 0, channel.length);
System.arraycopy$O$I$O$I$I(buf, channel.length * 2, buf, 0, channel.length);
System.arraycopy$O$I$O$I$I(channel, 0, buf, channel.length * 2, channel.length);
}}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
