(function(){var P$=Clazz.newPackage("io.scif.filters"),I$=[[0,'io.scif.Reader','io.scif.config.SCIFIOConfig','net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractReaderFilter", null, 'io.scif.filters.AbstractFilter', 'io.scif.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wrappedMeta=null;
}, 1);

C$.$fields$=[['O',['wrappedMeta','io.scif.Metadata','metaClass','Class','pluginService','org.scijava.plugin.PluginService']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Class.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (metaClass) {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig'])]);C$.$init$.apply(this);
this.metaClass=metaClass;
}, 1);

Clazz.newMeth(C$, 'setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var filterSource=this.getMetadata$() == null  ? null : this.getMetadata$().getSourceLocation$();
if (filterSource == null  || !filterSource.equals$O(source) ) {
var meta=this.getParent$().getMetadata$();
if (Clazz.instanceOf(this.wrappedMeta, "io.scif.filters.MetadataWrapper")) {
(this.wrappedMeta).wrap$io_scif_Metadata(meta);
} else {
this.wrappedMeta=meta;
}}});

Clazz.newMeth(C$, 'openPlaneHelper$', function () {
});

Clazz.newMeth(C$, 'readPlaneHelper$', function () {
});

Clazz.newMeth(C$, 'getParentMeta$', function () {
return this.getParent$().getMetadata$();
});

Clazz.newMeth(C$, 'target$', function () {
return Clazz.getClass($I$(1),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig']);
});

Clazz.newMeth(C$, 'setParent$O', function (parent) {
C$.superclazz.prototype.setParent$O.apply(this, [parent]);
var r=parent;
if (this.metaClass != null ) {
var wrapper=null;
try {
this.wrappedMeta=wrapper=this.metaClass.newInstance$();
this.getContext$().inject$O(wrapper);
wrapper.wrap$io_scif_Metadata(r.getMetadata$());
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
this.log$().error$O$Throwable("Failed to create MetadataWrapper of type: " + this.metaClass, e);
} else {
throw e;
}
}
} else {
this.wrappedMeta=r.getMetadata$();
}try {
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(r.getCurrentLocation$(), Clazz.new_($I$(2,1)));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log$().error$O$Throwable("Failed to create MetadataWrapper of type: " + this.metaClass, exc);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'isCompatible$Class', function (c) {
return Clazz.getClass($I$(1),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig']).isAssignableFrom$Class(c);
});

Clazz.newMeth(C$, 'openPlane$I$J', function (imageIndex, planeIndex) {
return this.openPlane$I$J$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane', function (imageIndex, planeIndex, plane) {
return this.openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, config) {
this.openPlaneHelper$();
return this.getParent$().openPlane$I$J$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, bounds, config) {
this.openPlaneHelper$();
return this.getParent$().openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, config) {
this.openPlaneHelper$();
return this.getParent$().openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, bounds, config) {
this.openPlaneHelper$();
return this.getParent$().openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'fileGroupOption$org_scijava_io_location_Location', function (id) {
return this.getParent$().fileGroupOption$org_scijava_io_location_Location(id);
});

Clazz.newMeth(C$, 'getCurrentLocation$', function () {
return this.getParent$().getCurrentLocation$();
});

Clazz.newMeth(C$, 'getDomains$', function () {
return this.getParent$().getDomains$();
});

Clazz.newMeth(C$, 'getHandle$', function () {
return this.getParent$().getHandle$();
});

Clazz.newMeth(C$, 'getOptimalTileWidth$I', function (imageIndex) {
return this.getParent$().getOptimalTileWidth$I(imageIndex);
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
return this.getParent$().getOptimalTileHeight$I(imageIndex);
});

Clazz.newMeth(C$, 'setMetadata$io_scif_Metadata', function (meta) {
this.getParent$().setMetadata$io_scif_Metadata(meta);
if (Clazz.instanceOf(this.wrappedMeta, "io.scif.filters.MetadataWrapper")) (this.wrappedMeta).wrap$io_scif_Metadata(meta);
 else this.wrappedMeta=meta;
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.wrappedMeta;
});

Clazz.newMeth(C$, 'setNormalized$Z', function (normalize) {
this.getParent$().setNormalized$Z(normalize);
});

Clazz.newMeth(C$, 'isNormalized$', function () {
return this.getParent$().isNormalized$();
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return this.getParent$().hasCompanionFiles$();
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location', function (loc) {
this.getParent$().setSource$org_scijava_io_location_Location(loc);
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle', function (handle) {
this.getParent$().setSource$org_scijava_io_handle_DataHandle(handle);
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(handle.get$(), Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
this.getParent$().setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, config);
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, config);
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (handle, config) {
this.getParent$().setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(handle, config);
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(handle.get$(), config);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
this.getParent$().close$Z(fileOnly);
if (this.wrappedMeta != null ) {
this.wrappedMeta.close$Z(fileOnly);
this.wrappedMeta=null;
}if (!fileOnly) this.cleanUp$();
});

Clazz.newMeth(C$, 'close$', function () {
this.close$Z(false);
});

Clazz.newMeth(C$, 'readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane', function (s, imageIndex, bounds, plane) {
this.readPlaneHelper$();
return this.getParent$().readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane(s, imageIndex, bounds, plane);
});

Clazz.newMeth(C$, 'readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane', function (s, imageIndex, bounds, scanlinePad, plane) {
this.readPlaneHelper$();
return this.getParent$().readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane(s, imageIndex, bounds, scanlinePad, plane);
});

Clazz.newMeth(C$, 'getPlaneCount$I', function (imageIndex) {
return this.getParent$().getPlaneCount$I(imageIndex);
});

Clazz.newMeth(C$, 'getImageCount$', function () {
return this.getParent$().getImageCount$();
});

Clazz.newMeth(C$, 'createPlane$net_imglib2_Interval', function (bounds) {
return this.getParent$().createPlane$net_imglib2_Interval(bounds);
});

Clazz.newMeth(C$, 'createPlane$io_scif_ImageMetadata$net_imglib2_Interval', function (meta, bounds) {
return this.getParent$().createPlane$io_scif_ImageMetadata$net_imglib2_Interval(meta, bounds);
});

Clazz.newMeth(C$, 'castToTypedPlane$io_scif_Plane', function (plane) {
return this.getParent$().castToTypedPlane$io_scif_Plane(plane);
});

Clazz.newMeth(C$, 'isSingleFile$org_scijava_io_location_Location', function (id) {
return this.getParent$().isSingleFile$org_scijava_io_location_Location(id);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.getParent$().getFormat$();
});

Clazz.newMeth(C$, 'getFormatName$', function () {
return this.getParent$().getFormatName$();
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.getParent$().getContext$();
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (ctx) {
this.getParent$().setContext$org_scijava_Context(ctx);
});

Clazz.newMeth(C$, 'metaCheck$', function () {
var meta=this.getMetadata$();
return this.metaClass.isAssignableFrom$Class(meta.getClass$());
});

Clazz.newMeth(C$, 'cleanUp$', function () {
});

Clazz.newMeth(C$, 'planarBounds$I', function (imageIndex) {
var bounds=Clazz.new_($I$(3,1).c$$JA,[this.getMetadata$().get$I(imageIndex).getAxesLengthsPlanar$()]);
return bounds;
});
C$.$getAnn$ = function(){ return [
[['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
