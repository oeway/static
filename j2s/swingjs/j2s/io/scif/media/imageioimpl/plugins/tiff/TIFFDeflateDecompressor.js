(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'java.util.zip.Inflater','io.scif.media.imageioimpl.plugins.tiff.I18N']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFDeflateDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inflater=null;
}, 1);

C$.$fields$=[['I',['predictor'],'O',['inflater','java.util.zip.Inflater']]]

Clazz.newMeth(C$, 'c$$I', function (predictor) {
Clazz.super_(C$, this);
this.inflater=Clazz.new_($I$(1,1));
if (predictor != 1 && predictor != 2 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal value for Predictor in TIFF file"]);
}if (false) {
System.out.println$S("Using horizontal differencing predictor");
}this.predictor=predictor;
}, 1);

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
if (this.predictor == 2) {
var len=this.bitsPerSample.length;
for (var i=0; i < len; i++) {
if (this.bitsPerSample[i] != 8) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[this.bitsPerSample[i] + "-bit samples " + "are not supported for Horizontal " + "differencing Predictor" ]);
}}
}this.stream.seek$J(this.offset);
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
}this.inflater.setInput$BA(srcData);
try {
this.inflater.inflate$BA$I$I(buf, bufOffset, bytesPerRow * this.srcHeight);
} catch (dfe) {
if (Clazz.exceptionOf(dfe,"java.util.zip.DataFormatException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("TIFFDeflateDecompressor0"), dfe]);
} else {
throw dfe;
}
}
this.inflater.reset$();
if (this.predictor == 2) {
for (var j=0; j < this.srcHeight; j++) {
var count=bufOffset + this.samplesPerPixel * (j * this.srcWidth + 1);
for (var i=this.samplesPerPixel; i < this.srcWidth * this.samplesPerPixel; i++) {
buf[$k$=count]=(buf[$k$]+(buf[count - this.samplesPerPixel])|0);
count++;
}
}
}if (bytesPerRow != scanlineStride) {
if (false) {
System.out.println$S("bytesPerRow != scanlineStride");
}var off=0;
for (var y=0; y < this.srcHeight; y++) {
System.arraycopy$O$I$O$I$I(buf, off, b, dstOffset, bytesPerRow);
off+=bytesPerRow;
dstOffset+=scanlineStride;
}
}});
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
