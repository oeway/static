(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'io.scif.filters.ChannelFillerMetadata','io.scif.ByteArrayReader','io.scif.config.SCIFIOConfig','net.imglib2.FinalInterval','io.scif.ByteArrayPlane','org.scijava.util.Bytes','net.imglib2.util.Intervals','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelFiller", null, 'io.scif.filters.AbstractReaderFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastImageIndex=-1;
this.lastPlaneIndex=-1;
this.lastPlane=null;
this.lastPlaneBounds=null;
}, 1);

C$.$fields$=[['I',['lastImageIndex'],'L',['lastPlaneIndex'],'O',['lastPlane','io.scif.Plane','lastPlaneBounds','net.imglib2.Interval']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isCompatible$Class', function (c) {
return Clazz.getClass($I$(2)).isAssignableFrom$Class(c);
});

Clazz.newMeth(C$, 'openPlane$I$J', function (imageIndex, planeIndex) {
return this.openPlane$I$J$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, Clazz.new_($I$(3,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane', function (imageIndex, planeIndex, plane) {
return this.openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, Clazz.new_($I$(3,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, Clazz.new_($I$(3,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, Clazz.new_($I$(3,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, config) {
var bounds=this.planarBounds$I(imageIndex);
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, config) {
var bounds=this.planarBounds$I(imageIndex);
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, bounds, config) {
var plane=this.createPlane$io_scif_ImageMetadata$net_imglib2_Interval(this.getMetadata$().get$I(imageIndex), bounds);
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, bounds, config) {
if (this.getParentMeta$().get$I(imageIndex).isFalseColor$() || !this.getParentMeta$().get$I(imageIndex).isIndexed$() ) {
if (!p$1.haveCached$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds])) {
this.lastPlaneBounds=Clazz.new_($I$(4,1).c$$net_imglib2_Interval,[bounds]);
this.lastPlaneIndex=planeIndex;
this.lastImageIndex=imageIndex;
this.lastPlane=this.getParent$().openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
}return this.lastPlane;
}var lutLength=(this.getMetadata$()).getLutLength$();
if (!p$1.haveCached$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds])) {
p$1.updateLastPlaneInfo$I$I$net_imglib2_Interval.apply(this, [imageIndex, lutLength, bounds]);
this.lastPlane=this.getParent$().openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, this.lastPlaneBounds, config);
this.lastPlaneIndex=planeIndex;
this.lastImageIndex=imageIndex;
this.lastPlaneBounds=bounds;
}var imageMetadata=this.getMetadata$().get$I(imageIndex);
if (!Clazz.getClass($I$(5)).isAssignableFrom$Class(plane.getClass$())) {
plane=Clazz.new_($I$(5,1).c$$io_scif_ImageMetadata$net_imglib2_Interval,[imageMetadata, bounds]);
}var buf=plane.getBytes$();
var pt=0;
var bytesPerIndex=(this.getParentMeta$().get$I(imageIndex).getBitsPerPixel$()/8|0);
var lut=this.lastPlane.getColorTable$();
var index=this.lastPlane.getBytes$();
if (imageMetadata.getInterleavedAxisCount$() > 0) {
for (var i=0; i < (index.length/bytesPerIndex|0) && pt < buf.length ; i++) {
var iVal=$I$(6).toInt$BA$I$I$Z(index, i * bytesPerIndex, bytesPerIndex, imageMetadata.isLittleEndian$());
for (var j=0; j < lutLength; j++) {
buf[pt++]=((lut.get$I$I(j, iVal)|0)|0);
}
}
} else {
for (var j=0; j < lutLength; j++) {
for (var i=0; i < (index.length/bytesPerIndex|0) && pt < buf.length ; i++) {
var iVal=$I$(6).toInt$BA$I$I$Z(index, i * bytesPerIndex, bytesPerIndex, imageMetadata.isLittleEndian$());
buf[pt++]=((lut.get$I$I(j, iVal)|0)|0);
}
}
}plane.setColorTable$net_imglib2_display_ColorTable(null);
return plane;
});

Clazz.newMeth(C$, 'setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
try {
this.cleanUp$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPriority$', function () {
return 1.0;
});

Clazz.newMeth(C$, 'updateLastPlaneInfo$I$I$net_imglib2_Interval', function (imageIndex, lutLength, bounds) {
var min=$I$(7).minAsLongArray$net_imglib2_Interval(bounds);
var max=$I$(7).maxAsLongArray$net_imglib2_Interval(bounds);
var cIndex=this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(8).CHANNEL);
min[cIndex]=(min[cIndex]/lutLength|0);
max[cIndex]=(max[cIndex]/lutLength|0);
this.lastPlaneBounds=Clazz.new_($I$(4,1).c$$JA$JA,[min, max]);
}, p$1);

Clazz.newMeth(C$, 'haveCached$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
return planeIndex == this.lastPlaneIndex && imageIndex == this.lastImageIndex  && this.lastPlane != null   && this.lastPlaneBounds != null   && $I$(7).equals$net_imglib2_Interval$net_imglib2_Interval(bounds, this.lastPlaneBounds) ;
}, p$1);

Clazz.newMeth(C$, 'cleanUp$', function () {
C$.superclazz.prototype.cleanUp$.apply(this, []);
this.lastPlaneIndex=0;
this.lastImageIndex=0;
this.lastPlane=null;
this.lastPlaneBounds=null;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.ChannelFiller',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.Filter.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
