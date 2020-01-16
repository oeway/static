(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MSRLECodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["MSRLE compression not supported."]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if (options == null ) options=$I$(1).getDefaultOptions$();
var code=0;
var extra=($s$[0] = 0, $s$[0]);
var stream=0;
var pixelPt=0;
var rowPt=(options.height - 1) * options.width;
var frameSize=options.height * options.width;
if (options.previousImage == null ) {
options.previousImage=Clazz.array(Byte.TYPE, [frameSize]);
}while (rowPt >= 0 && $in.offset$() < $in.length$()  && pixelPt < options.previousImage.length ){
stream=$in.read$() & 255;
code=stream;
if (code == 0) {
stream=$in.read$() & 255;
if (stream == 0) {
rowPt-=options.width;
pixelPt=0;
} else if (stream == 1) return options.previousImage;
 else if (stream == 2) {
stream=$in.read$() & 255;
pixelPt+=stream;
stream=$in.read$() & 255;
rowPt-=stream * options.width;
} else {
if ((rowPt + pixelPt + stream  > frameSize) || (rowPt < 0) ) {
return options.previousImage;
}code=stream;
extra=($s$[0] = (stream & 1), $s$[0]);
if (stream + code + extra  > $in.length$()) return options.previousImage;
while (code-- > 0){
stream=$in.read$();
options.previousImage[rowPt + pixelPt]=((stream|0)|0);
pixelPt++;
}
if (extra != 0) $in.skipBytes$I(1);
}} else {
if ((rowPt + pixelPt + stream  > frameSize) || (rowPt < 0) ) {
return options.previousImage;
}stream=$in.read$();
while (code-- > 0){
options.previousImage[rowPt + pixelPt]=((stream|0)|0);
pixelPt++;
}
}}
return options.previousImage;
});
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.MSRLECodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
