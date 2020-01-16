(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions','java.io.ByteArrayOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PackbitsCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Packbits Compression not currently supported"]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if (options == null ) options=$I$(1).getDefaultOptions$();
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
var fp=$in.offset$();
var output=Clazz.new_($I$(2,1).c$$I,[1024]);
var nread=0;
while (output.size$() < options.maxBytes){
var n=($b$[0] = (($in.read$() & 255)|0), $b$[0]);
nread++;
if (n >= 0) {
var b=Clazz.array(Byte.TYPE, [n + 1]);
$in.read$BA(b);
nread+=n + 1;
output.write$BA(b);
b=null;
} else if (n != -128) {
var len=(($b$[0]=-n,n=$b$[0],$b$[0])) + 1;
var inp=($b$[0] = (($in.read$() & 255)|0), $b$[0]);
nread++;
for (var i=0; i < len; i++) output.write$I(inp);

}}
if (fp + nread < $in.length$()) $in.seek$J(fp + nread);
return output.toByteArray$();
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.PackbitsCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
