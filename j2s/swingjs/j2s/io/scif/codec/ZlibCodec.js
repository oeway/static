(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.zip.Deflater','io.scif.codec.ByteVector','java.util.zip.InflaterInputStream','org.scijava.io.handle.DataHandleInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ZlibCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
if (data == null  || data.length == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to compress"]);
var deflater=Clazz.new_($I$(1,1));
deflater.setInput$BA(data);
deflater.finish$();
var buf=Clazz.array(Byte.TYPE, [8192]);
var bytes=Clazz.new_($I$(2,1));
var r=0;
while ((r=deflater.deflate$BA$I$I(buf, 0, buf.length)) > 0){
bytes.add$BA$I$I(buf, 0, r);
}
return bytes.toByteArray$();
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
var i=Clazz.new_($I$(3,1).c$$java_io_InputStream,[Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(4,1).c$$org_scijava_io_handle_DataHandle,[$in])]);
var bytes=Clazz.new_($I$(2,1));
var buf=Clazz.array(Byte.TYPE, [8192]);
var r=0;
try {
while ((r=i.read$BA$I$I(buf, 0, buf.length)) > 0)bytes.add$BA$I$I(buf, 0, r);

} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
} else {
throw e;
}
}
return bytes.toByteArray$();
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.ZlibCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
