(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','java.util.HashSet','org.scijava.io.location.Location','io.scif.MetadataLevel','io.scif.LocationInfo','io.scif.util.SCIFIOMetadataTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractParser", null, 'io.scif.AbstractGroupable', 'io.scif.TypedParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['metadata','<M extends io.scif.TypedMetadata>','handles','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'parse$org_scijava_io_location_Location', function (fileName) {
return this.parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(fileName, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'parse$org_scijava_io_handle_DataHandle', function (stream) {
return this.parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(stream, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['parse$org_scijava_io_location_Location$io_scif_Metadata','parsenull'], function (loc, meta) {
return this.parse$org_scijava_io_location_Location$io_scif_Metadata$io_scif_config_SCIFIOConfig(loc, meta, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$io_scif_Metadata','parsenull'], function (handle, meta) {
return this.parse$org_scijava_io_handle_DataHandle$io_scif_Metadata$io_scif_config_SCIFIOConfig(handle, meta, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$, 'getSource$', function () {
var m=this.getMetadata$();
if (m == null ) return null;
return m.getSource$();
});

Clazz.newMeth(C$, 'getSourceLocation$', function () {
return this.getMetadata$() == null  ? null : this.getMetadata$().getSourceLocation$();
});

Clazz.newMeth(C$, 'updateSource$org_scijava_io_location_Location', function (source) {
this.metadata.setSourceLocation$org_scijava_io_location_Location(source);
this.metadata.setSource$org_scijava_io_handle_DataHandle(this.handles.readBuffer$org_scijava_io_location_Location(source));
});

Clazz.newMeth(C$, 'getUsedFiles$', function () {
return this.getUsedLocations$Z(false);
});

Clazz.newMeth(C$, 'getUsedLocations$Z', function (noPixels) {
var files=Clazz.new_(1,{E:"org.scijava.io.location.Location"},$I$(2,1));
for (var i=0; i < this.metadata.getImageCount$(); i++) {
var s=this.getImageUsedFiles$I$Z(i, noPixels);
if (s != null ) {
for (var file, $file = 0, $$file = s; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
files.add$TE(file);
}
}}
return files.toArray$TTA(Clazz.array($I$(3), [files.size$()]));
});

Clazz.newMeth(C$, 'getImageUsedFiles$I', function (imageIndex) {
return this.getImageUsedFiles$I$Z(imageIndex, false);
});

Clazz.newMeth(C$, 'getImageUsedFiles$I$Z', function (imageIndex, noPixels) {
return noPixels ? null : Clazz.array($I$(3), -1, [this.getMetadata$().getSourceLocation$()]);
});

Clazz.newMeth(C$, 'getAdvancedUsedLocations$Z', function (noPixels) {
var files=this.getUsedLocations$Z(noPixels);
if (files == null ) return null;
return p$1.getLocationInfo$org_scijava_io_location_LocationA.apply(this, [files]);
});

Clazz.newMeth(C$, 'getAdvancedImageUsedLocations$I$Z', function (imageIndex, noPixels) {
var files=this.getImageUsedFiles$I$Z(imageIndex, noPixels);
if (files == null ) return null;
return p$1.getLocationInfo$org_scijava_io_location_LocationA.apply(this, [files]);
});

Clazz.newMeth(C$, 'getSupportedMetadataLevels$', function () {
var supportedLevels=Clazz.new_(1,{E:"io.scif.MetadataLevel"},$I$(2,1));
supportedLevels.add$TE($I$(4).ALL);
supportedLevels.add$TE($I$(4).NO_OVERLAYS);
supportedLevels.add$TE($I$(4).MINIMUM);
return supportedLevels;
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$TM'], function (handle, meta) {
return this.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig(handle, meta, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['parse$org_scijava_io_location_Location$TM$io_scif_config_SCIFIOConfig'], function (loc, meta, config) {
var handle=this.getSource$();
if (handle != null ) {
if (handle.get$().equals$O(loc)) {
handle.seek$J(0);
} else {
this.close$();
handle.close$();
handle=null;
}}meta.setFiltered$Z(config.parserIsFiltered$());
if (meta.getContext$() == null ) meta.setContext$org_scijava_Context(this.getContext$());
meta.setDatasetName$S(loc.getName$());
this.metadata=meta;
meta.setSourceLocation$org_scijava_io_location_Location(loc);
if (handle == null ) {
handle=this.handles.readBuffer$org_scijava_io_location_Location(loc);
if (handle == null ) {
meta.populateImageMetadata$();
return meta;
}}return this.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig(handle, meta, config);
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
var $in=this.getSource$();
if ($in == null  || !$in.get$().equals$O(handle.get$()) ) {
p$1.init$org_scijava_io_handle_DataHandle.apply(this, [handle]);
if (config.parserIsSaveOriginalMetadata$()) {
}}meta.setFiltered$Z(config.parserIsFiltered$());
if (meta.getContext$() == null ) meta.setContext$org_scijava_Context(this.getContext$());
meta.setDatasetName$S(handle.get$().getName$());
meta.setSource$org_scijava_io_handle_DataHandle(handle);
meta.setSourceLocation$org_scijava_io_location_Location(handle.get$());
this.metadata=meta;
this.typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig(handle, meta, config);
meta.populateImageMetadata$();
return meta;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (this.metadata != null ) this.metadata.close$Z(fileOnly);
});

Clazz.newMeth(C$, 'init$org_scijava_io_handle_DataHandle', function (handle) {
if (this.getMetadata$() != null ) {
var usedFiles=this.getUsedFiles$();
for (var fileName, $fileName = 0, $$fileName = usedFiles; $fileName<$$fileName.length&&((fileName=($$fileName[$fileName])),1);$fileName++) {
if (handle.get$().equals$O(fileName)) return;
}
}this.close$();
}, p$1);

Clazz.newMeth(C$, 'getLocationInfo$org_scijava_io_location_LocationA', function (locations) {
var infos=Clazz.array($I$(5), [locations.length]);
for (var i=0; i < infos.length; i++) {
infos[i]=Clazz.new_($I$(5,1));
infos[i].locationName=locations[i].getName$();
infos[i].reader=this.getFormat$().getReaderClass$();
infos[i].usedToInitialize=locations[i].equals$O(this.getSourceLocation$());
}
return infos;
}, p$1);

Clazz.newMeth(C$, ['parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','parsenull'], function (loc, config) {
var meta=this.getFormat$().createMetadata$();
return this.parse$org_scijava_io_location_Location$TM$io_scif_config_SCIFIOConfig(loc, meta, config);
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','parsenull'], function (stream, config) {
var meta=this.getFormat$().createMetadata$();
return this.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig(stream, meta, config);
});

Clazz.newMeth(C$, ['parse$org_scijava_io_location_Location$io_scif_Metadata$io_scif_config_SCIFIOConfig','parsenull'], function (loc, meta, config) {
return this.parse$org_scijava_io_location_Location$TM$io_scif_config_SCIFIOConfig(loc, $I$(6).castMeta$io_scif_Metadata(meta), config);
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$io_scif_Metadata$io_scif_config_SCIFIOConfig','parsenull'], function (handle, meta, config) {
return this.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig(handle, $I$(6).castMeta$io_scif_Metadata(meta), config);
});

Clazz.newMeth(C$, 'setMetaData$io_scif_Metadata', function (meta) {
this.metadata=$I$(6).castMeta$io_scif_Metadata(meta);
});
C$.$getAnn$ = function(){ return [
[['handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
