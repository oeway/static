(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.common.LZWCompressor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFLZWCompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['predictor']]]

Clazz.newMeth(C$, 'c$$I', function (predictorValue) {
;C$.superclazz.c$$S$I$Z.apply(this,["LZW", 5, true]);C$.$init$.apply(this);
this.predictor=predictorValue;
}, 1);

Clazz.newMeth(C$, 'setStream$javax_imageio_stream_ImageOutputStream', function (stream) {
C$.superclazz.prototype.setStream$javax_imageio_stream_ImageOutputStream.apply(this, [stream]);
});

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
var lzwCompressor=Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageOutputStream$I$Z,[this.stream, 8, true]);
var samplesPerPixel=bitsPerSample.length;
var bitsPerPixel=0;
for (var i=0; i < samplesPerPixel; i++) {
bitsPerPixel+=bitsPerSample[i];
}
var bytesPerRow=((bitsPerPixel * width + 7)/8|0);
var initialStreamPosition=this.stream.getStreamPosition$();
var usePredictor=this.predictor == 2;
if (bytesPerRow == scanlineStride && !usePredictor ) {
lzwCompressor.compress$BA$I$I(b, off, bytesPerRow * height);
} else {
var rowBuf=usePredictor ? Clazz.array(Byte.TYPE, [bytesPerRow]) : null;
for (var i=0; i < height; i++) {
if (usePredictor) {
System.arraycopy$O$I$O$I$I(b, off, rowBuf, 0, bytesPerRow);
for (var j=bytesPerRow - 1; j >= samplesPerPixel; j--) {
rowBuf[j]=(rowBuf[j]-(rowBuf[j - samplesPerPixel])|0);
}
lzwCompressor.compress$BA$I$I(rowBuf, 0, bytesPerRow);
} else {
lzwCompressor.compress$BA$I$I(b, off, bytesPerRow);
}off+=scanlineStride;
}
}lzwCompressor.flush$();
var bytesWritten=((this.stream.getStreamPosition$() - initialStreamPosition)|0);
return bytesWritten;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
