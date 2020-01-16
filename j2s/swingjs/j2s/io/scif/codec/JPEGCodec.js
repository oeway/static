(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions','java.io.ByteArrayOutputStream','io.scif.gui.AWTImageTools','javax.imageio.ImageIO','java.io.BufferedInputStream','org.scijava.io.handle.DataHandleInputStream','io.scif.codec.LosslessJPEGCodec','org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEGCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
if (data == null  || data.length == 0 ) return data;
if (options == null ) options=$I$(1).getDefaultOptions$();
if (options.bitsPerSample > 8) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["> 8 bit data cannot be compressed with JPEG."]);
}var out=Clazz.new_($I$(2,1));
var img=$I$(3).makeImage$BA$I$I$I$Z$I$Z$Z$Z(data, options.width, options.height, options.channels, options.interleaved, (options.bitsPerSample/8|0), false, options.littleEndian, options.signed);
try {
$I$(4).write$java_awt_image_RenderedImage$S$java_io_OutputStream(img, "jpeg", out);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Could not write JPEG data", e]);
} else {
throw e;
}
}
return out.toByteArray$();
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
var b;
var offset=$in.offset$();
try {
try {
while ($in.read$() != -1 || $in.read$() != -40 ){
}
$in.seek$J($in.offset$() - 2);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
$in.seek$J(offset);
} else {
throw e;
}
}
b=$I$(4).read$java_io_InputStream(Clazz.new_($I$(5,1).c$$java_io_InputStream$I,[Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(6,1).c$$org_scijava_io_handle_DataHandle,[$in]), 8192]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
$in.seek$J(offset);
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(7)));
return codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions($in, options);
} else {
throw exc;
}
}
if (options == null ) options=$I$(1).getDefaultOptions$();
var buf=$I$(3).getPixelBytes$java_awt_image_BufferedImage$Z(b, options.littleEndian);
if (options.ycbcr && buf.length == 3 ) {
var nBytes=(buf[0].length/(b.getWidth$() * b.getHeight$())|0);
var mask=((Math.pow(2, nBytes * 8) - 1)|0);
for (var i=0; i < buf[0].length; i+=nBytes) {
var y=$I$(8).toInt$BA$I$I$Z(buf[0], i, nBytes, options.littleEndian);
var cb=$I$(8).toInt$BA$I$I$Z(buf[1], i, nBytes, options.littleEndian);
var cr=$I$(8).toInt$BA$I$I$Z(buf[2], i, nBytes, options.littleEndian);
cb=Math.max(0, cb - 128);
cr=Math.max(0, cr - 128);
var red=((y + 1.402 * cr)|0) & mask;
var green=((y - 0.34414 * cb - 0.71414 * cr)|0) & mask;
var blue=((y + 1.772 * cb)|0) & mask;
$I$(8).unpack$J$BA$I$I$Z(red, buf[0], i, nBytes, options.littleEndian);
$I$(8).unpack$J$BA$I$I$Z(green, buf[1], i, nBytes, options.littleEndian);
$I$(8).unpack$J$BA$I$I$Z(blue, buf[2], i, nBytes, options.littleEndian);
}
}var rtn=Clazz.array(Byte.TYPE, [buf.length * buf[0].length]);
if (buf.length == 1) rtn=buf[0];
 else {
if (options.interleaved) {
var next=0;
for (var i=0; i < buf[0].length; i++) {
for (var j=0; j < buf.length; j++) {
rtn[next++]=(buf[j][i]|0);
}
}
} else {
for (var i=0; i < buf.length; i++) {
System.arraycopy$O$I$O$I$I(buf[i], 0, rtn, i * buf[0].length, buf[i].length);
}
}}return rtn;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.JPEGCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
