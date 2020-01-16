(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'java.util.zip.Deflater']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFDeflater", null, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['predictor'],'O',['deflater','java.util.zip.Deflater']]]

Clazz.newMeth(C$, 'c$$S$I$javax_imageio_ImageWriteParam$I', function (compressionType, compressionTagValue, param, predictorValue) {
;C$.superclazz.c$$S$I$Z.apply(this,[compressionType, compressionTagValue, true]);C$.$init$.apply(this);
this.predictor=predictorValue;
var deflateLevel;
if (param != null  && param.getCompressionMode$() == 2 ) {
var quality=param.getCompressionQuality$();
deflateLevel=((1 + 8 * quality)|0);
} else {
deflateLevel=-1;
}this.deflater=Clazz.new_($I$(1,1).c$$I,[deflateLevel]);
}, 1);

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
var inputSize=height * scanlineStride;
var blocks=((inputSize + 32767)/32768|0);
var compData=Clazz.array(Byte.TYPE, [inputSize + 5 * blocks + 6]);
var numCompressedBytes=0;
if (this.predictor == 2) {
var samplesPerPixel=bitsPerSample.length;
var bitsPerPixel=0;
for (var i=0; i < samplesPerPixel; i++) {
bitsPerPixel+=bitsPerSample[i];
}
var bytesPerRow=((bitsPerPixel * width + 7)/8|0);
var rowBuf=Clazz.array(Byte.TYPE, [bytesPerRow]);
var maxRow=height - 1;
for (var i=0; i < height; i++) {
System.arraycopy$O$I$O$I$I(b, off, rowBuf, 0, bytesPerRow);
for (var j=bytesPerRow - 1; j >= samplesPerPixel; j--) {
rowBuf[j]=(rowBuf[j]-(rowBuf[j - samplesPerPixel])|0);
}
this.deflater.setInput$BA(rowBuf);
if (i == maxRow) {
this.deflater.finish$();
}var numBytes=0;
while ((numBytes=this.deflater.deflate$BA$I$I(compData, numCompressedBytes, compData.length - numCompressedBytes)) != 0){
numCompressedBytes+=numBytes;
}
off+=scanlineStride;
}
} else {
this.deflater.setInput$BA$I$I(b, off, height * scanlineStride);
this.deflater.finish$();
numCompressedBytes=this.deflater.deflate$BA(compData);
}this.deflater.reset$();
this.stream.write$BA$I$I(compData, 0, numCompressedBytes);
return numCompressedBytes;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
