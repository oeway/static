(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.util.SCIFIOMetadataTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractTranslator", null, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.Translator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'translate$io_scif_Metadata$io_scif_Metadata', function (source, dest) {
this.translate$io_scif_Metadata$java_util_List$io_scif_Metadata(source, source.getAll$(), dest);
});

Clazz.newMeth(C$, 'translate$io_scif_Metadata$java_util_List$io_scif_Metadata', function (source, sourceImgMeta, dest) {
var trueSource=$I$(1).unwrapMetadata$io_scif_Metadata(source);
var typedSource=$I$(1).castMeta$io_scif_Metadata(trueSource);
var typedDest=$I$(1).castMeta$io_scif_Metadata(dest);
this.typedTranslate$TM$java_util_List$TN(typedSource, sourceImgMeta, typedDest);
});

Clazz.newMeth(C$, ['typedTranslate$TM$java_util_List$TN'], function (typedSource, sourceImgMeta, typedDest) {
typedDest.setSource$org_scijava_io_handle_DataHandle(typedSource.getSource$());
typedDest.setFiltered$Z(typedSource.isFiltered$());
typedDest.setDatasetName$S(typedSource.getDatasetName$());
for (var imageMeta, $imageMeta = sourceImgMeta.iterator$(); $imageMeta.hasNext$()&&((imageMeta=($imageMeta.next$())),1);) {
typedDest.add$io_scif_ImageMetadata(imageMeta.copy$());
}
this.translateFormatMetadata$TM$TN(typedSource, typedDest);
this.translateImageMetadata$java_util_List$TN(sourceImgMeta, typedDest);
typedDest.populateImageMetadata$();
});

Clazz.newMeth(C$, ['translateFormatMetadata$TM$TN'], function (source, dest) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
