(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFPackBitsDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'decode$BA$I$BA$I', function (srcData, srcOffset, dstData, dstOffset) {
var srcIndex=srcOffset;
var dstIndex=dstOffset;
var dstArraySize=dstData.length;
var srcArraySize=srcData.length;
try {
while (dstIndex < dstArraySize && srcIndex < srcArraySize ){
var b=($b$[0] = srcData[srcIndex++], $b$[0]);
if (b >= 0 && b <= 127 ) {
for (var i=0; i < b + 1; i++) {
dstData[dstIndex++]=(srcData[srcIndex++]|0);
}
} else if (b <= -1 && b >= -127 ) {
var repeat=($b$[0] = srcData[srcIndex++], $b$[0]);
for (var i=0; i < ((($b$[0]=-b,b=$b$[0],$b$[0])) + 1); i++) {
dstData[dstIndex++]=(repeat|0);
}
} else {
++srcIndex;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
if (Clazz.instanceOf(this.reader, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader")) {
(this.reader).forwardWarningMessage$S("ArrayIndexOutOfBoundsException ignored in TIFFPackBitsDecompressor.decode()");
}} else {
throw e;
}
}
return dstIndex - dstOffset;
});

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
this.stream.seek$J(this.offset);
var srcData=Clazz.array(Byte.TYPE, [this.byteCount]);
this.stream.readFully$BA(srcData);
var bytesPerRow=((this.srcWidth * bitsPerPixel + 7)/8|0);
var buf;
var bufOffset;
if (bytesPerRow == scanlineStride) {
buf=b;
bufOffset=dstOffset;
} else {
buf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
bufOffset=0;
}this.decode$BA$I$BA$I(srcData, 0, buf, bufOffset);
if (bytesPerRow != scanlineStride) {
if (false) {
System.out.println$S("bytesPerRow != scanlineStride");
}var off=0;
for (var y=0; y < this.srcHeight; y++) {
System.arraycopy$O$I$O$I$I(buf, off, b, dstOffset, bytesPerRow);
off+=bytesPerRow;
dstOffset+=scanlineStride;
}
}});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
