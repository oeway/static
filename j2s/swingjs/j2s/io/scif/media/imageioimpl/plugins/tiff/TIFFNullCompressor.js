(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFNullCompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

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
var numBytes=height * bytesPerRow;
if (bytesPerRow == scanlineStride) {
this.stream.write$BA$I$I(b, off, numBytes);
} else {
for (var row=0; row < height; row++) {
this.stream.write$BA$I$I(b, off, bytesPerRow);
off+=scanlineStride;
}
}return numBytes;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
