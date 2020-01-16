(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxDecompressor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFRLECompressor", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$Z.apply(this,["CCITT RLE", 2, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encodeRLE$BA$I$I$I$BA', function (data, rowOffset, colOffset, rowLength, compData) {
this.initBitBuf$();
var outIndex=this.encode1D$BA$I$I$I$BA$I(data, rowOffset, colOffset, rowLength, compData, 0);
while (this.ndex > 0){
compData[outIndex++]=(((this.bits >>> 24)|0)|0);
this.bits<<=8;
this.ndex-=8;
}
if (this.inverseFill) {
var flipTable=$I$(1).flipTable;
for (var i=0; i < outIndex; i++) {
compData[i]=(flipTable[compData[i] & 255]|0);
}
}return outIndex;
});

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
if (bitsPerSample.length != 1 || bitsPerSample[0] != 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bits per sample must be 1 for RLE compression!"]);
}var maxBits=9 * (((width + 1)/2|0)) + 2;
var compData=Clazz.array(Byte.TYPE, [((maxBits + 7)/8|0)]);
var bytes=0;
var rowOffset=off;
for (var i=0; i < height; i++) {
var rowBytes=this.encodeRLE$BA$I$I$I$BA(b, rowOffset, 0, width, compData);
this.stream.write$BA$I$I(compData, 0, rowBytes);
rowOffset+=scanlineStride;
bytes+=rowBytes;
}
return bytes;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
