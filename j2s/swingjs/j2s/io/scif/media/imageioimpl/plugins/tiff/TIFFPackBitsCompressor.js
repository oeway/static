(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFPackBitsCompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$Z.apply(this,["PackBits", 32773, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'packBits$BA$I$I$BA$I', function (input, inOffset, inCount, output, outOffset) {
var inMax=inOffset + inCount - 1;
var inMaxMinus1=inMax - 1;
while (inOffset <= inMax){
var run=1;
var replicate=($b$[0] = input[inOffset], $b$[0]);
while (run < 127 && inOffset < inMax  && input[inOffset] == input[inOffset + 1] ){
run++;
inOffset++;
}
if (run > 1) {
inOffset++;
output[outOffset++]=(((-(run - 1))|0)|0);
output[outOffset++]=(replicate|0);
}run=0;
var saveOffset=outOffset;
while (run < 128 && ((inOffset < inMax && input[inOffset] != input[inOffset + 1] ) || (inOffset < inMaxMinus1 && input[inOffset] != input[inOffset + 2] ) ) ){
run++;
output[++outOffset]=(input[inOffset++]|0);
}
if (run > 0) {
output[saveOffset]=(((run - 1)|0)|0);
outOffset++;
}if (inOffset == inMax) {
if (run > 0 && run < 128 ) {
($b$[0]=output[$k$=saveOffset],output[$k$]=(++$b$[0],$b$[0]));
output[outOffset++]=(input[inOffset++]|0);
} else {
output[outOffset++]=(0|0);
output[outOffset++]=(input[inOffset++]|0);
}}}
return outOffset;
}, 1);

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
var bitsPerPixel=0;
for (var i=0; i < bitsPerSample.length; i++) {
bitsPerPixel+=bitsPerSample[i];
}
var bytesPerRow=((bitsPerPixel * width + 7)/8|0);
var bufSize=(bytesPerRow + ((bytesPerRow + 127)/128|0));
var compData=Clazz.array(Byte.TYPE, [bufSize]);
var bytesWritten=0;
for (var i=0; i < height; i++) {
var bytes=C$.packBits$BA$I$I$BA$I(b, off, scanlineStride, compData, 0);
off+=scanlineStride;
bytesWritten+=bytes;
this.stream.write$BA$I$I(compData, 0, bytes);
}
return bytesWritten;
});
var $b$ = new Int8Array(1);
var $k$;
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
