(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QTRLECodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["QTRLE compression not supported."]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
var b=Clazz.array(Byte.TYPE, [(($in.length$() - $in.offset$())|0)]);
$in.read$BA(b);
return this.decompress$BA$io_scif_codec_CodecOptions(b, options);
});

Clazz.newMeth(C$, 'decompress$BA$io_scif_codec_CodecOptions', function (data, options) {
if (options == null ) options=$I$(1).getDefaultOptions$();
if (data == null  || data.length == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
var numLines=options.height;
if (data.length < 8) return options.previousImage;
var bpp=(options.bitsPerSample/8|0);
var line=options.width * bpp;
try {
var s=this.dataHandleService.create$TD(Clazz.new_($I$(2,1).c$$BA,[data]));
s.skipBytes$I(4);
var header=s.readShort$();
var off=0;
var start=0;
var output=Clazz.array(Byte.TYPE, [options.height * line]);
if ((header & 8) == 8) {
start=s.readShort$();
s.skipBytes$I(2);
numLines=s.readShort$();
s.skipBytes$I(2);
if (options.previousImage != null ) {
for (var i=0; i < start; i++) {
System.arraycopy$O$I$O$I$I(options.previousImage, off, output, off, line);
off+=line;
}
}if (options.previousImage != null ) {
off=line * (start + numLines);
for (var i=start + numLines; i < options.height; i++) {
System.arraycopy$O$I$O$I$I(options.previousImage, off, output, off, line);
off+=line;
}
}} else throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported header : " + header]);
var skip=0;
var rle=($b$[0] = 0, $b$[0]);
var rowPointer=start * line;
for (var i=0; i < numLines; i++) {
skip=s.readUnsignedByte$();
if (skip < 0) skip+=256;
if (options.previousImage != null ) {
try {
System.arraycopy$O$I$O$I$I(options.previousImage, rowPointer, output, rowPointer, (skip - 1) * bpp);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
} else {
throw e;
}
}
}off=rowPointer + ((skip - 1) * bpp);
while (true){
rle=($b$[0] = ((s.readUnsignedByte$() & 255)|0), $b$[0]);
if (rle == 0) {
skip=s.readUnsignedByte$();
if (options.previousImage != null ) {
try {
System.arraycopy$O$I$O$I$I(options.previousImage, off, output, off, (skip - 1) * bpp);
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
} else {
throw e;
}
}
}off+=(skip - 1) * bpp;
} else if (rle == -1) {
if (off < (rowPointer + line) && options.previousImage != null  ) {
System.arraycopy$O$I$O$I$I(options.previousImage, off, output, off, rowPointer + line - off);
}break;
} else if (rle < -1) {
for (var j=0; j < (-1 * rle); j++) {
if (off < output.length) {
System.arraycopy$O$I$O$I$I(data, (s.offset$()|0), output, off, bpp);
off+=bpp;
} else break;
}
s.skipBytes$I(bpp);
} else {
var len=rle * bpp;
if (output.length - off < len) len=output.length - off;
if (s.length$() - s.offset$() < len) {
len=((s.length$() - s.offset$())|0);
}if (len < 0) len=0;
if (off > output.length) off=output.length;
s.read$BA$I$I(output, off, len);
off+=len;
}if (s.offset$() >= s.length$()) return output;
}
rowPointer+=line;
}
return output;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.QTRLECodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
