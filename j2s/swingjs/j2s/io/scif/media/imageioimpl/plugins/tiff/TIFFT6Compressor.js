(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFFaxDecompressor','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageio.plugins.tiff.TIFFField']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFT6Compressor", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$Z.apply(this,["CCITT T.6", 4, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encodeT6$BA$I$I$I$I$BA', function (data, lineStride, colOffset, width, height, compData) {
var refData=null;
var refAddr=0;
var lineAddr=0;
var outIndex=0;
this.initBitBuf$();
while (height-- != 0){
var a0=colOffset;
var last=a0 + width;
var testbit=((data[lineAddr + (a0 >>> 3)] & 255) >>> (7 - (a0 & 7))) & 1;
var a1=testbit != 0 ? a0 : this.nextState$BA$I$I$I(data, lineAddr, a0, last);
testbit=refData == null  ? 0 : ((refData[refAddr + (a0 >>> 3)] & 255) >>> (7 - (a0 & 7))) & 1;
var b1=testbit != 0 ? a0 : this.nextState$BA$I$I$I(refData, refAddr, a0, last);
var color=0;
while (true){
var b2=this.nextState$BA$I$I$I(refData, refAddr, b1, last);
if (b2 < a1) {
outIndex+=this.add2DBits$BA$I$IAA$I(compData, outIndex, $I$(1).pass, 0);
a0=b2;
} else {
var tmp=b1 - a1 + 3;
if ((tmp <= 6) && (tmp >= 0) ) {
outIndex+=this.add2DBits$BA$I$IAA$I(compData, outIndex, $I$(1).vert, tmp);
a0=a1;
} else {
var a2=this.nextState$BA$I$I$I(data, lineAddr, a1, last);
outIndex+=this.add2DBits$BA$I$IAA$I(compData, outIndex, $I$(1).horz, 0);
outIndex+=this.add1DBits$BA$I$I$I(compData, outIndex, a1 - a0, color);
outIndex+=this.add1DBits$BA$I$I$I(compData, outIndex, a2 - a1, color ^ 1);
a0=a2;
}}if (a0 >= last) {
break;
}color=((data[lineAddr + (a0 >>> 3)] & 255) >>> (7 - (a0 & 7))) & 1;
a1=this.nextState$BA$I$I$I(data, lineAddr, a0, last);
b1=this.nextState$BA$I$I$I(refData, refAddr, a0, last);
testbit=refData == null  ? 0 : ((refData[refAddr + (b1 >>> 3)] & 255) >>> (7 - (b1 & 7))) & 1;
if (testbit == color) {
b1=this.nextState$BA$I$I$I(refData, refAddr, b1, last);
}}
refData=data;
refAddr=lineAddr;
lineAddr+=lineStride;
}
outIndex+=this.addEOFB$BA$I(compData, outIndex);
if (this.inverseFill) {
for (var i=0; i < outIndex; i++) {
compData[i]=($I$(2).flipTable[compData[i] & 255]|0);
}
}return outIndex;
});

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
if (bitsPerSample.length != 1 || bitsPerSample[0] != 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bits per sample must be 1 for T6 compression!"]);
}if (Clazz.instanceOf(this.metadata, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
var tim=this.metadata;
var options=Clazz.array(Long.TYPE, [1]);
options[0]=0;
var base=$I$(3).getInstance$();
var T6Options=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(293), 4, 1, options]);
tim.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(T6Options);
}var maxBits=9 * (((width + 1)/2|0)) + 2;
var bufSize=((maxBits + 7)/8|0);
bufSize=height * (bufSize + 2) + 12;
var compData=Clazz.array(Byte.TYPE, [bufSize]);
var bytes=this.encodeT6$BA$I$I$I$I$BA(b, scanlineStride, 8 * off, width, height, compData);
this.stream.write$BA$I$I(compData, 0, bytes);
return bytes;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
