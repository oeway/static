(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEG2000CodecOptions", null, 'io.scif.codec.CodecOptions');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codeBlockSize','int[]','numDecompositionLevels','Integer','+resolution']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_codec_CodecOptions', function (options) {
;C$.superclazz.c$$io_scif_codec_CodecOptions.apply(this,[options]);C$.$init$.apply(this);
if (Clazz.instanceOf(options, "io.scif.codec.JPEG2000CodecOptions")) {
var j2kOptions=options;
if (j2kOptions.codeBlockSize != null ) {
this.codeBlockSize=j2kOptions.codeBlockSize;
}this.numDecompositionLevels=j2kOptions.numDecompositionLevels;
this.resolution=j2kOptions.resolution;
}}, 1);

Clazz.newMeth(C$, 'getDefaultOptions$', function () {
var options=$I$(1).getDefaultOptions$();
return C$.getDefaultOptions$io_scif_codec_CodecOptions(options);
}, 1);

Clazz.newMeth(C$, 'getDefaultOptions$io_scif_codec_CodecOptions', function (options) {
var j2kOptions=Clazz.new_(C$.c$$io_scif_codec_CodecOptions,[options]);
j2kOptions.quality=j2kOptions.lossless ? 1.7976931348623157E308 : 10;
j2kOptions.codeBlockSize=Clazz.array(Integer.TYPE, -1, [64, 64]);
return j2kOptions;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
