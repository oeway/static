(function(){var P$=Clazz.newPackage("io.scif.filters"),I$=[[0,'io.scif.filters.MasterFilterHelper','io.scif.Reader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReaderFilter", null, 'io.scif.filters.AbstractReaderFilter', 'io.scif.filters.MasterFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['fHelper','io.scif.filters.MasterFilterHelper']]]

Clazz.newMeth(C$, 'c$$io_scif_Reader', function (r) {
Clazz.super_(C$, this);
this.fHelper=Clazz.new_(1,{T:"io.scif.Reader"},$I$(1,1).c$$TT$Class,[r, Clazz.getClass($I$(2),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig'])]);
}, 1);

Clazz.newMeth(C$, 'enable$Class', function (filterClass) {
return this.fHelper.enable$Class(filterClass);
});

Clazz.newMeth(C$, 'disable$Class', function (filterClass) {
return this.fHelper.disable$Class(filterClass);
});

Clazz.newMeth(C$, 'getFilterClasses$', function () {
return this.fHelper.getFilterClasses$();
});

Clazz.newMeth(C$, 'setParent$O', function (parent) {
this.fHelper.setParent$O(parent);
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.fHelper.getParent$();
});

Clazz.newMeth(C$, 'getTail$', function () {
return this.fHelper.getTail$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.fHelper.reset$();
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.fHelper.getParent$().getMetadata$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
