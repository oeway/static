(function(){var P$=Clazz.newPackage("io.scif.codec"),p$1={},I$=[[0,'java.io.BufferedInputStream','java.io.ByteArrayInputStream','org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LuraWaveCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['luraWaveService','io.scif.services.LuraWaveService']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["LuraWave compression not supported"]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
var buf=Clazz.array(Byte.TYPE, [($in.length$()|0)]);
$in.read$BA(buf);
return this.decompress$BA$io_scif_codec_CodecOptions(buf, options);
});

Clazz.newMeth(C$, 'decompress$BA$io_scif_codec_CodecOptions', function (buf, options) {
p$1.checkLuraWaveService.apply(this, []);
var stream=Clazz.new_($I$(1,1).c$$java_io_InputStream$I,[Clazz.new_($I$(2,1).c$$BA,[buf]), 4096]);
try {
this.luraWaveService.initialize$java_io_InputStream(stream);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.DependencyException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["No LuraWave license code was specified.\r\nPlease set one in the lurawave.license system property (e.g., with -Dlurawave.license=XXXX from the command line).", e]);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.services.ServiceException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Invalid license code: ", e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
var w=this.luraWaveService.getWidth$();
var h=this.luraWaveService.getHeight$();
var nbits=8 * ((options.maxBytes/(w * h)|0));
if (nbits == 8) {
var image8=Clazz.array(Byte.TYPE, [w * h]);
try {
this.luraWaveService.decodeToMemoryGray8$BA$I$I$I(image8, -1, 1024, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.services.ServiceException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Invalid license code: ", e]);
} else {
throw e;
}
}
return image8;
} else if (nbits == 16) {
var image16=Clazz.array(Short.TYPE, [w * h]);
try {
this.luraWaveService.decodeToMemoryGray16$HA$I$I$I$I$I$I$I$I$I$I(image16, 0, -1, 1024, 0, 1, w, 0, 0, w, h);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.services.ServiceException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Invalid license code: ", e]);
} else {
throw e;
}
}
var output=Clazz.array(Byte.TYPE, [w * h * 2 ]);
for (var i=0; i < image16.length; i++) {
$I$(3).unpack$J$BA$I$I$Z(image16[i], output, i * 2, 2, true);
}
return output;
}throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported bits per pixel: " + nbits]);
});

Clazz.newMeth(C$, 'checkLuraWaveService', function () {
if (this.luraWaveService != null ) return;
throw Clazz.new_(Clazz.load('io.scif.MissingLibraryException').c$$S,["The LuraWave decoding library, lwf_jsdk2.6.jar, is required to decode this file.\r\nPlease make sure it is present in your classpath."]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.LuraWaveCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['luraWaveService','io.scif.services.LuraWaveService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
