(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultCodecService", null, 'org.scijava.plugin.AbstractSingletonService', 'io.scif.codec.CodecService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$objectService','org.scijava.object.ObjectService']]]

Clazz.newMeth(C$, 'getCodec$Class', function (codecClass) {
return this.getInstance$Class(codecClass);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['compress$BA$io_scif_codec_CodecOptions','compress$BAA$io_scif_codec_CodecOptions','decompress$BA$io_scif_codec_CodecOptions','decompress$BAA$io_scif_codec_CodecOptions','decompress$BA','decompress$BAA','decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions']);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.DefaultCodecService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
