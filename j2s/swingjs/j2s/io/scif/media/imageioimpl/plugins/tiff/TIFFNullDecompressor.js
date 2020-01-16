(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFNullDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isReadActiveOnly=false;
}, 1);

C$.$fields$=[['Z',['isReadActiveOnly'],'I',['originalSrcMinX','originalSrcMinY','originalSrcWidth','originalSrcHeight']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'beginDecoding$', function () {
var bitsPerPixel=0;
for (var i=0; i < this.bitsPerSample.length; i++) {
bitsPerPixel+=this.bitsPerSample[i];
}
if ((this.activeSrcMinX != this.srcMinX || this.activeSrcMinY != this.srcMinY  || this.activeSrcWidth != this.srcWidth  || this.activeSrcHeight != this.srcHeight ) && ((this.activeSrcMinX - this.srcMinX) * bitsPerPixel) % 8 == 0 ) {
this.isReadActiveOnly=true;
this.originalSrcMinX=this.srcMinX;
this.originalSrcMinY=this.srcMinY;
this.originalSrcWidth=this.srcWidth;
this.originalSrcHeight=this.srcHeight;
this.srcMinX=this.activeSrcMinX;
this.srcMinY=this.activeSrcMinY;
this.srcWidth=this.activeSrcWidth;
this.srcHeight=this.activeSrcHeight;
} else {
this.isReadActiveOnly=false;
}if (false) {
if (this.isReadActiveOnly) {
System.out.println$S("Reading active region.");
System.out.println$S("source region: " + Clazz.new_($I$(1,1).c$$I$I$I$I,[this.originalSrcMinX, this.originalSrcMinY, this.originalSrcWidth, this.originalSrcHeight]));
System.out.println$S("active region: " + Clazz.new_($I$(1,1).c$$I$I$I$I,[this.activeSrcMinX, this.activeSrcMinY, this.activeSrcWidth, this.activeSrcHeight]));
} else {
System.out.println$S("Reading entire region.");
System.out.println$S("source region: " + Clazz.new_($I$(1,1).c$$I$I$I$I,[this.srcMinX, this.srcMinY, this.srcWidth, this.srcHeight]));
}System.out.println$S("destination region: " + Clazz.new_($I$(1,1).c$$I$I$I$I,[this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight]));
}C$.superclazz.prototype.beginDecoding$.apply(this, []);
});

Clazz.newMeth(C$, 'decode$', function () {
C$.superclazz.prototype.decode$.apply(this, []);
if (this.isReadActiveOnly) {
this.srcMinX=this.originalSrcMinX;
this.srcMinY=this.originalSrcMinY;
this.srcWidth=this.originalSrcWidth;
this.srcHeight=this.originalSrcHeight;
this.isReadActiveOnly=false;
}});

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
if (this.isReadActiveOnly) {
var activeBytesPerRow=((this.activeSrcWidth * bitsPerPixel + 7)/8|0);
var totalBytesPerRow=((this.originalSrcWidth * bitsPerPixel + 7)/8|0);
var bytesToSkipPerRow=totalBytesPerRow - activeBytesPerRow;
this.stream.seek$J(this.offset + (this.activeSrcMinY - this.originalSrcMinY) * totalBytesPerRow + (((this.activeSrcMinX - this.originalSrcMinX) * bitsPerPixel)/8|0));
var lastRow=this.activeSrcHeight - 1;
for (var y=0; y < this.activeSrcHeight; y++) {
this.stream.read$BA$I$I(b, dstOffset, activeBytesPerRow);
dstOffset+=scanlineStride;
if (y != lastRow) {
this.stream.skipBytes$I(bytesToSkipPerRow);
}}
} else {
this.stream.seek$J(this.offset);
var bytesPerRow=((this.srcWidth * bitsPerPixel + 7)/8|0);
if (bytesPerRow == scanlineStride) {
this.stream.read$BA$I$I(b, dstOffset, bytesPerRow * this.srcHeight);
} else {
for (var y=0; y < this.srcHeight; y++) {
this.stream.read$BA$I$I(b, dstOffset, bytesPerRow);
dstOffset+=scanlineStride;
}
}}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
