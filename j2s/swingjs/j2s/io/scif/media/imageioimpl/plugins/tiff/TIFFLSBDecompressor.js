(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxDecompressor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFLSBDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.flipTable=$I$(1).flipTable;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['flipTable','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
this.stream.seek$J(this.offset);
var bytesPerRow=((this.srcWidth * bitsPerPixel + 7)/8|0);
if (bytesPerRow == scanlineStride) {
var numBytes=bytesPerRow * this.srcHeight;
this.stream.readFully$BA$I$I(b, dstOffset, numBytes);
var xMax=dstOffset + numBytes;
for (var x=dstOffset; x < xMax; x++) {
b[x]=(C$.flipTable[b[x] & 255]|0);
}
} else {
for (var y=0; y < this.srcHeight; y++) {
this.stream.readFully$BA$I$I(b, dstOffset, bytesPerRow);
var xMax=dstOffset + bytesPerRow;
for (var x=dstOffset; x < xMax; x++) {
b[x]=(C$.flipTable[b[x] & 255]|0);
}
dstOffset+=scanlineStride;
}
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
