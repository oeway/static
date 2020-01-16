(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PassthroughCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'decompress$BA$io_scif_codec_CodecOptions', function (data, options) {
return data;
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Not implemented."]);
});

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
return data;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.PassthroughCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
