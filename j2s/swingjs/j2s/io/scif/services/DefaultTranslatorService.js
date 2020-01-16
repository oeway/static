(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'io.scif.util.SCIFIOMetadataTools','io.scif.Metadata','io.scif.Translator','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTranslatorService", null, 'org.scijava.plugin.AbstractSingletonService', 'io.scif.services.TranslatorService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceToDestMap','java.util.Map']]]

Clazz.newMeth(C$, 'findTranslator$io_scif_Metadata$io_scif_Metadata$Z', function (source, dest, exact) {
var trueSource=$I$(1).unwrapMetadata$io_scif_Metadata(source);
return this.findTranslator$Class$Class$Z(trueSource.getClass$(), dest.getClass$(), exact);
});

Clazz.newMeth(C$, 'findTranslator$Class$Class$Z', function (source, dest, exact) {
var t=p$1.lookup$Class$Class.apply(this, [source, dest]);
if (!exact) {
t=p$1.lookup$io_scif_Translator$Class$Class.apply(this, [t, Clazz.getClass($I$(2),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']), dest]);
t=p$1.lookup$io_scif_Translator$Class$Class.apply(this, [t, source, Clazz.getClass($I$(2),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location'])]);
t=p$1.lookup$io_scif_Translator$Class$Class.apply(this, [t, Clazz.getClass($I$(2),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']), Clazz.getClass($I$(2),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location'])]);
}return t;
});

Clazz.newMeth(C$, 'translate$io_scif_Metadata$io_scif_Metadata$Z', function (source, dest, exact) {
var t=this.findTranslator$io_scif_Metadata$io_scif_Metadata$Z(source, dest, exact);
if (t == null ) return false;
t.translate$io_scif_Metadata$io_scif_Metadata(source, dest);
return true;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(3),['dest$','source$','translate$io_scif_Metadata$io_scif_Metadata','translate$io_scif_Metadata$java_util_List$io_scif_Metadata']);
});

Clazz.newMeth(C$, 'lookup$Class$Class', function (source, dest) {
if (this.sourceToDestMap == null ) {
{
if (this.sourceToDestMap == null ) {
p$1.createTranslatorMap.apply(this, []);
}}}var destMap=this.sourceToDestMap.get$O(source);
if (destMap != null ) {
return destMap.get$O(dest);
}return null;
}, p$1);

Clazz.newMeth(C$, 'lookup$io_scif_Translator$Class$Class', function (t, source, dest) {
if (t == null ) {
for (var i=0; i < this.getInstances$().size$() && t == null  ; i++) {
var translator=this.getInstances$().get$I(i);
if (translator.source$().isAssignableFrom$Class(source) && translator.dest$().isAssignableFrom$Class(dest) ) {
t=translator;
}}
}return t;
}, p$1);

Clazz.newMeth(C$, 'createTranslatorMap', function () {
this.sourceToDestMap=Clazz.new_(1,{K:"Class",V:"java.util.Map"},$I$(4,1));
for (var translator, $translator = this.getInstances$().iterator$(); $translator.hasNext$()&&((translator=($translator.next$())),1);) {
p$1.addToMap$Class$Class$java_util_Map$io_scif_Translator.apply(this, [translator.source$(), translator.dest$(), this.sourceToDestMap, translator]);
}
}, p$1);

Clazz.newMeth(C$, 'addToMap$Class$Class$java_util_Map$io_scif_Translator', function (key1, key2, map, translator) {
var innerMap=map.get$O(key1);
if (innerMap == null ) {
innerMap=Clazz.new_(1,{K:"Class",V:"io.scif.Translator"},$I$(4,1));
map.put$TK$TV(key1, innerMap);
}innerMap.put$TK$TV(key2, translator);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.DefaultTranslatorService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
