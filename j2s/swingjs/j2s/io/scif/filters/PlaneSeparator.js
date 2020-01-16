(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'io.scif.filters.PlaneSeparatorMetadata','io.scif.util.FormatTools','io.scif.config.SCIFIOConfig','java.util.Arrays','io.scif.ByteArrayPlane','io.scif.util.MemoryTools','net.imagej.axis.Axes','net.imglib2.util.Intervals','org.scijava.util.ArrayUtils','net.imglib2.FinalInterval','io.scif.util.ImageTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PlaneSeparator", null, 'io.scif.filters.AbstractReaderFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastPlane=null;
this.lastPlaneIndex=-1;
this.lastImageIndex=-1;
this.lastPlaneMin=null;
this.lastPlaneMax=null;
}, 1);

C$.$fields$=[['I',['lastImageIndex'],'L',['lastPlaneIndex'],'O',['lastPlane','io.scif.Plane','lastPlaneMin','long[]','+lastPlaneMax']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'separate$net_imagej_axis_AxisTypeA', function (types) {
if (this.metaCheck$()) {
(this.getMetadata$()).separate$net_imagej_axis_AxisTypeA(types);
}});

Clazz.newMeth(C$, 'getOriginalIndex$I$J', function (imageIndex, planeIndex) {
var planeCount=this.getPlaneCount$I(imageIndex);
var originalCount=this.getParent$().getPlaneCount$I(imageIndex);
if (planeCount == originalCount) return planeIndex;
var coords=$I$(2).rasterToPosition$I$J$io_scif_Reader(imageIndex, planeIndex, this);
var offset=0;
if (Clazz.getClass($I$(1)).isAssignableFrom$Class(this.getMetadata$().getClass$())) {
offset=(this.getMetadata$()).offset$();
}var originalCoords=Clazz.array(Long.TYPE, [coords.length - offset]);
var lengths=Clazz.array(Long.TYPE, [coords.length - offset]);
for (var i=0; i < originalCoords.length; i++) {
originalCoords[i]=coords[i + offset];
lengths[i]=this.getMetadata$().get$I(imageIndex).getAxesLengthsNonPlanar$()[i + offset];
}
return $I$(2).positionToRaster$JA$JA(lengths, originalCoords);
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location', function (source) {
this.cleanUp$();
C$.superclazz.prototype.setSource$org_scijava_io_location_Location.apply(this, [source]);
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle', function (source) {
this.cleanUp$();
C$.superclazz.prototype.setSource$org_scijava_io_handle_DataHandle.apply(this, [source]);
});

Clazz.newMeth(C$, 'getPlaneCount$I', function (imageIndex) {
return this.getMetadata$().get$I(imageIndex).getPlaneCount$();
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
$I$(2).checkPlaneNumber$io_scif_Metadata$I$J(this.getMetadata$(), imageIndex, planeIndex);
var meta=this.getMetadata$();
var parentMeta=this.getParentMeta$();
var source=this.getOriginalIndex$I$J(imageIndex, planeIndex);
var splitOffset=this.metaCheck$() ? (meta).offset$() : 0;
var interleaved=parentMeta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
{
if (!parentMeta.get$I(imageIndex).isIndexed$()) {
var completePosition=$I$(2).rasterToPosition$I$J$io_scif_Metadata(imageIndex, planeIndex, meta);
var separatedPosition=$I$(4).copyOf$JA$I(completePosition, splitOffset);
var separatedLengths=$I$(4).copyOf$JA$I(meta.get$I(imageIndex).getAxesLengthsNonPlanar$(), splitOffset);
var bpp=$I$(2).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
if (!Clazz.getClass($I$(5)).isAssignableFrom$Class(plane.getClass$())) {
plane=Clazz.new_($I$(5,1).c$$io_scif_ImageMetadata$net_imglib2_Interval,[meta.get$I(imageIndex), bounds]);
}if (!p$1.haveCached$J$I$net_imglib2_Interval.apply(this, [source, imageIndex, bounds])) {
var strips=1;
var availableMemory=($I$(6).totalAvailableMemory$()/16|0);
var planeSize=meta.get$I(imageIndex).getPlaneSize$();
var h=bounds.dimension$I(meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(7).Y));
if (availableMemory < planeSize || planeSize > 2147483647 ) {
strips=(Math.sqrt(h)|0);
}var dims=$I$(8).dimensionsAsLongArray$net_imglib2_Dimensions(bounds);
var stripHeight=(h/strips|0);
var lastStripHeight=stripHeight + (h - (stripHeight * strips));
var strip=strips == 1 ? plane.getBytes$() : Clazz.array(Byte.TYPE, [((stripHeight * $I$(9).safeMultiply32$JA($I$(4).copyOf$JA$I(dims, dims.length - 1)) * bpp )|0)]);
p$1.updateLastPlaneInfo$J$I$I$net_imglib2_Interval.apply(this, [source, imageIndex, splitOffset, bounds]);
var parentYIndex=parentMeta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(7).Y);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(7).Y);
for (var i=0; i < strips; i++) {
this.lastPlaneMin[parentYIndex]=bounds.min$I(yIndex) + (i * stripHeight);
this.lastPlaneMax[parentYIndex]=this.lastPlaneMin[parentYIndex] + (i == strips - 1 ? lastStripHeight : stripHeight) - 1;
this.lastPlane=this.getParent$().openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, (source|0), Clazz.new_($I$(10,1).c$$JA$JA,[this.lastPlaneMin, this.lastPlaneMax]), config);
plane.setColorTable$net_imglib2_display_ColorTable(this.lastPlane.getColorTable$());
if (strips != 1 && lastStripHeight != stripHeight  && i == strips - 1 ) {
strip=Clazz.array(Byte.TYPE, [((lastStripHeight * $I$(9).safeMultiply32$JA($I$(4).copyOf$JA$I(dims, dims.length - 1)) * bpp )|0)]);
}$I$(11).splitChannels$BA$BA$JA$JA$I$Z$Z$J(this.lastPlane.getBytes$(), strip, separatedPosition, separatedLengths, bpp, false, interleaved, strips == 1 ? bpp * $I$(9).safeMultiply32$JA(dims) : strip.length);
if (strips != 1) {
System.arraycopy$O$I$O$I$I(strip, 0, plane.getBytes$(), ((i * stripHeight * $I$(9).safeMultiply32$JA($I$(4).copyOf$JA$I(dims, dims.length - 1)) )|0) * bpp, strip.length);
}}
} else {
$I$(11).splitChannels$BA$BA$JA$JA$I$Z$Z$J(this.lastPlane.getBytes$(), plane.getBytes$(), separatedPosition, separatedLengths, bpp, false, interleaved, bpp * $I$(9).safeMultiply32$JA([$I$(8).numElements$net_imglib2_Dimensions(bounds)]));
}return plane;
}if (!p$1.haveCached$J$I$net_imglib2_Interval.apply(this, [source, imageIndex, bounds])) {
p$1.updateLastPlaneInfo$J$I$I$net_imglib2_Interval.apply(this, [source, imageIndex, splitOffset, bounds]);
this.lastPlane=this.getParent$().openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, Clazz.new_($I$(10,1).c$$JA$JA,[this.lastPlaneMin, this.lastPlaneMax]), config);
}}return this.lastPlane;
});

Clazz.newMeth(C$, 'getPriority$', function () {
return 2.0;
});

Clazz.newMeth(C$, 'updateLastPlaneInfo$J$I$I$net_imglib2_Interval', function (source, imageIndex, splitOffset, bounds) {
var meta=this.getMetadata$();
var parentMeta=this.getParentMeta$();
this.lastPlaneIndex=source;
this.lastImageIndex=imageIndex;
this.lastPlaneMin=Clazz.array(Long.TYPE, [bounds.numDimensions$() + splitOffset]);
this.lastPlaneMax=Clazz.array(Long.TYPE, [bounds.numDimensions$() + splitOffset]);
for (var axis, $axis = parentMeta.get$I(imageIndex).getAxesPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var parentIndex=parentMeta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
var currentIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
if (currentIndex >= 0 && currentIndex < meta.get$I(imageIndex).getPlanarAxisCount$() ) {
this.lastPlaneMin[parentIndex]=bounds.min$I(currentIndex);
this.lastPlaneMax[parentIndex]=bounds.max$I(currentIndex);
} else if (parentMeta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType(axis.type$()) < parentMeta.get$I(imageIndex).getPlanarAxisCount$()) {
this.lastPlaneMin[parentIndex]=0;
this.lastPlaneMax[parentIndex]=parentMeta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType(axis.type$()) - 1;
}}
}, p$1);

Clazz.newMeth(C$, 'haveCached$J$I$net_imglib2_Interval', function (source, imageIndex, bounds) {
if (source != this.lastPlaneIndex || imageIndex != this.lastImageIndex  || this.lastPlane == null   || this.lastPlaneMin == null   || this.lastPlaneMax == null  ) {
return false;
}for (var d=0; d < bounds.numDimensions$(); d++) {
if (bounds.min$I(d) != this.lastPlaneMin[d]) return false;
if (bounds.max$I(d) != this.lastPlaneMax[d]) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'cleanUp$', function () {
C$.superclazz.prototype.cleanUp$.apply(this, []);
this.lastPlane=null;
this.lastPlaneIndex=-1;
this.lastImageIndex=-1;
this.lastPlaneMin=null;
this.lastPlaneMax=null;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.PlaneSeparator',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.Filter.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
