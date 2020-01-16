(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.Metadata','io.scif.DefaultImageMetadata']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTranslator", null, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(1),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(1),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
dest.createImageMetadata$I(source.size$());
for (var i=0; i < source.size$(); i++) {
var sourceMeta=source.get$I(i);
if (i >= dest.getImageCount$()) {
dest.add$io_scif_ImageMetadata(Clazz.new_($I$(2,1).c$$io_scif_ImageMetadata,[sourceMeta]));
} else {
dest.get$I(i).copy$io_scif_ImageMetadata(sourceMeta);
}}
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.DefaultTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-10000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
