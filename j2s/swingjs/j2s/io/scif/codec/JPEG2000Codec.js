(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.JPEG2000CodecOptions','java.io.ByteArrayOutputStream','java.awt.image.DataBufferByte','io.scif.gui.AWTImageTools','org.scijava.util.Bytes','java.awt.image.DataBufferUShort','io.scif.gui.UnsignedIntBuffer','java.io.ByteArrayInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEG2000Codec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['jaiIIOService','io.scif.services.JAIIIOService']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
if (data == null  || data.length == 0 ) return data;
var j2kOptions;
if (Clazz.instanceOf(options, "io.scif.codec.JPEG2000CodecOptions")) {
j2kOptions=options;
} else {
j2kOptions=$I$(1).getDefaultOptions$io_scif_codec_CodecOptions(options);
}var out=Clazz.new_($I$(2,1));
var img=null;
var next=0;
var plane=j2kOptions.width * j2kOptions.height;
if (j2kOptions.bitsPerSample == 8) {
var b=Clazz.array(Byte.TYPE, [j2kOptions.channels, plane]);
if (j2kOptions.interleaved) {
for (var q=0; q < plane; q++) {
for (var c=0; c < j2kOptions.channels; c++) {
b[c][q]=(data[next++]|0);
}
}
} else {
for (var c=0; c < j2kOptions.channels; c++) {
System.arraycopy$O$I$O$I$I(data, c * plane, b[c], 0, plane);
}
}var buffer=Clazz.new_($I$(3,1).c$$BAA$I,[b, plane]);
img=$I$(4).constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer$java_awt_image_ColorModel(b.length, 0, j2kOptions.width, j2kOptions.height, false, true, buffer, j2kOptions.colorModel);
} else if (j2kOptions.bitsPerSample == 16) {
var s=Clazz.array(Short.TYPE, [j2kOptions.channels, plane]);
if (j2kOptions.interleaved) {
for (var q=0; q < plane; q++) {
for (var c=0; c < j2kOptions.channels; c++) {
s[c][q]=$I$(5).toShort$BA$I$I$Z(data, next, 2, j2kOptions.littleEndian);
next+=2;
}
}
} else {
for (var c=0; c < j2kOptions.channels; c++) {
for (var q=0; q < plane; q++) {
s[c][q]=$I$(5).toShort$BA$I$I$Z(data, next, 2, j2kOptions.littleEndian);
next+=2;
}
}
}var buffer=Clazz.new_($I$(6,1).c$$HAA$I,[s, plane]);
img=$I$(4).constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer$java_awt_image_ColorModel(s.length, 1, j2kOptions.width, j2kOptions.height, false, true, buffer, j2kOptions.colorModel);
} else if (j2kOptions.bitsPerSample == 32) {
var s=Clazz.array(Integer.TYPE, [j2kOptions.channels, plane]);
if (j2kOptions.interleaved) {
for (var q=0; q < plane; q++) {
for (var c=0; c < j2kOptions.channels; c++) {
s[c][q]=$I$(5).toInt$BA$I$I$Z(data, next, 4, j2kOptions.littleEndian);
next+=4;
}
}
} else {
for (var c=0; c < j2kOptions.channels; c++) {
for (var q=0; q < plane; q++) {
s[c][q]=$I$(5).toInt$BA$I$I$Z(data, next, 4, j2kOptions.littleEndian);
next+=4;
}
}
}var buffer=Clazz.new_($I$(7,1).c$$IAA$I,[s, plane]);
img=$I$(4).constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer$java_awt_image_ColorModel(s.length, 3, j2kOptions.width, j2kOptions.height, false, true, buffer, j2kOptions.colorModel);
}try {
this.jaiIIOService.writeImage$java_io_OutputStream$java_awt_image_BufferedImage$io_scif_codec_JPEG2000CodecOptions(out, img, j2kOptions);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Could not compress JPEG-2000 data.", e]);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.services.ServiceException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Could not compress JPEG-2000 data.", e]);
}
} else {
throw e$$;
}
}
return out.toByteArray$();
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
}if (options == null  || !(Clazz.instanceOf(options, "io.scif.codec.JPEG2000CodecOptions")) ) {
options=$I$(1).getDefaultOptions$io_scif_codec_CodecOptions(options);
}var buf=null;
var fp=$in.offset$();
if (options.maxBytes == 0) {
buf=Clazz.array(Byte.TYPE, [(($in.length$() - fp)|0)]);
} else {
buf=Clazz.array(Byte.TYPE, [((options.maxBytes - fp)|0)]);
}$in.read$BA(buf);
return this.decompress$BA$io_scif_codec_CodecOptions(buf, options);
});

Clazz.newMeth(C$, 'decompress$BA$io_scif_codec_CodecOptions', function (buf, options) {
if (options == null  || !(Clazz.instanceOf(options, "io.scif.codec.JPEG2000CodecOptions")) ) {
options=$I$(1).getDefaultOptions$io_scif_codec_CodecOptions(options);
} else {
options=Clazz.new_($I$(1,1).c$$io_scif_codec_CodecOptions,[options]);
}var single=null;
var b=null;
var bpp=(options.bitsPerSample/8|0);
try {
var bis=Clazz.new_($I$(8,1).c$$BA,[buf]);
b=this.jaiIIOService.readRaster$java_io_InputStream$io_scif_codec_JPEG2000CodecOptions(bis, options);
single=$I$(4).getPixelBytes$java_awt_image_WritableRaster$Z(b, options.littleEndian);
bpp=(single[0].length/(b.getWidth$() * b.getHeight$())|0);
bis.close$();
b=null;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Could not decompress JPEG2000 image. Please make sure that jai_imageio.jar is installed.", e]);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.services.ServiceException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Could not decompress JPEG2000 image. Please make sure that jai_imageio.jar is installed.", e]);
}
} else {
throw e$$;
}
}
if (single.length == 1) return single[0];
var rtn=Clazz.array(Byte.TYPE, [single.length * single[0].length]);
if (options.interleaved) {
var next=0;
for (var i=0; i < (single[0].length/bpp|0); i++) {
for (var j=0; j < single.length; j++) {
for (var bb=0; bb < bpp; bb++) {
rtn[next++]=(single[j][i * bpp + bb]|0);
}
}
}
} else {
for (var i=0; i < single.length; i++) {
System.arraycopy$O$I$O$I$I(single[i], 0, rtn, i * single[0].length, single[i].length);
}
}single=null;
return rtn;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.JPEG2000Codec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['jaiIIOService','io.scif.services.JAIIIOService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
