(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFFaxDecompressor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFLSBCompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$Z.apply(this,["", 1, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
var bitsPerPixel=0;
for (var i=0; i < bitsPerSample.length; i++) {
bitsPerPixel+=bitsPerSample[i];
}
var bytesPerRow=((bitsPerPixel * width + 7)/8|0);
var compData=Clazz.array(Byte.TYPE, [bytesPerRow]);
var flipTable=$I$(1).flipTable;
for (var row=0; row < height; row++) {
System.arraycopy$O$I$O$I$I(b, off, compData, 0, bytesPerRow);
for (var j=0; j < bytesPerRow; j++) {
compData[j]=(flipTable[compData[j] & 255]|0);
}
this.stream.write$BA$I$I(compData, 0, bytesPerRow);
off+=scanlineStride;
}
return height * bytesPerRow;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
