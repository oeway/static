(function(){var P$=Clazz.newPackage("io.scif.img.cell.loaders"),p$1={},I$=[[0,'net.imglib2.FinalInterval','io.scif.img.Range','io.scif.util.FormatTools','net.imglib2.util.Intervals','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractArrayLoader", null, null, 'io.scif.img.cell.loaders.SCIFIOArrayLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
}, 1);

C$.$fields$=[['Z',['compatible'],'I',['index'],'O',['reader','io.scif.Reader','subRegion','io.scif.img.ImageRegion','imgUtilityService','io.scif.img.ImgUtilityService','tables','java.util.List','loadedTable','boolean[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_Reader$io_scif_img_ImageRegion', function (reader, subRegion) {
;C$.$init$.apply(this);
this.reader=reader;
this.subRegion=subRegion;
reader.getContext$().inject$O(this);
var inputType=this.imgUtilityService.makeType$I(reader.getMetadata$().get$I(0).getPixelType$());
this.compatible=this.outputClass$().isAssignableFrom$Class(inputType.getClass$());
}, 1);

Clazz.newMeth(C$, 'setIndex$I', function (index) {
this.index=index;
});

Clazz.newMeth(C$, 'loadTable$I$I', function (imageIndex, planeIndex) {
var ct=p$1.getTable$I$I.apply(this, [imageIndex, planeIndex]);
if (ct == null  && !p$1.loadedTable.apply(this, [])[imageIndex][planeIndex] ) {
var planeMin=Clazz.array(Long.TYPE, [this.reader.getMetadata$().get$I(imageIndex).getAxesPlanar$().size$()]);
var planeMax=Clazz.array(Long.TYPE, [planeMin.length]);
for (var i=0; i < planeMax.length; i++) planeMax[i]=1;

var bounds=Clazz.new_($I$(1,1).c$$JA$JA,[planeMin, planeMax]);
ct=this.reader.openPlane$I$J$net_imglib2_Interval(imageIndex, planeIndex, bounds).getColorTable$();
p$1.addTable$I$I$net_imglib2_display_ColorTable.apply(this, [imageIndex, planeIndex, ct]);
}return ct;
});

Clazz.newMeth(C$, 'loadArray$net_imglib2_Interval', function (bounds) {
{
var meta=this.reader.getMetadata$();
var entities=1;
var planarMin=Clazz.array(Long.TYPE, [meta.get$I(0).getAxesPlanar$().size$()]);
var planarMax=Clazz.array(Long.TYPE, [meta.get$I(0).getAxesPlanar$().size$()]);
var npRanges=Clazz.array($I$(2), [meta.get$I(0).getAxesNonPlanar$().size$()]);
var npIndices=Clazz.array(Long.TYPE, [npRanges.length]);
var axisIndex=0;
for (var axis, $axis = meta.get$I(0).getAxesPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var index=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
if (index < bounds.numDimensions$()) {
planarMin[axisIndex]=bounds.min$I(index);
planarMax[axisIndex]=bounds.max$I(index);
entities*=bounds.dimension$I(index);
}axisIndex++;
}
axisIndex=0;
for (var axis, $axis = meta.get$I(0).getAxesNonPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var index=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
npRanges[axisIndex]=Clazz.new_($I$(2,1).c$$Long$Long,[new Long(bounds.min$I(index)), new Long(bounds.max$I(index))]);
if (this.subRegion != null ) {
entities*=this.subRegion.getRange$net_imagej_axis_AxisType(axis.type$()).size$();
} else {
entities*=npRanges[axisIndex].size$();
}axisIndex++;
}
var data=null;
data=this.emptyArray$I(entities);
try {
var planarBounds=Clazz.new_($I$(1,1).c$$JA$JA,[planarMin, planarMax]);
p$1.read$TA$net_imglib2_Interval$io_scif_img_RangeA$JA.apply(this, [data, planarBounds, npRanges, npIndices]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could not open a plane for the given dimensions", e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could not open a plane for the given dimensions", e]);
}
} else {
throw e$$;
}
}
return data;
}});

Clazz.newMeth(C$, ['loadArray$net_imglib2_Interval$TA'], function (bounds, data) {
{
var meta=this.reader.getMetadata$();
var planarAxes=meta.get$I(0).getAxesPlanar$();
var nonPlanarAxes=meta.get$I(0).getAxesNonPlanar$();
var planarAxisCount=planarAxes.size$();
var nonPlanarAxisCount=nonPlanarAxes.size$();
var planarMin=Clazz.array(Long.TYPE, [planarAxisCount]);
var planarMax=Clazz.array(Long.TYPE, [planarAxisCount]);
var npRanges=Clazz.array($I$(2), [nonPlanarAxisCount]);
var npIndices=Clazz.array(Long.TYPE, [npRanges.length]);
var axisIndex=0;
for (var axis, $axis = planarAxes.iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var index=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
if (index < bounds.numDimensions$()) {
planarMin[axisIndex]=bounds.min$I(index);
planarMax[axisIndex]=bounds.max$I(index);
}axisIndex++;
}
axisIndex=0;
for (var axis, $axis = nonPlanarAxes.iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var index=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(axis.type$());
npRanges[axisIndex]=Clazz.new_($I$(2,1).c$$Long$Long,[new Long(bounds.min$I(index)), new Long(bounds.max$I(index))]);
axisIndex++;
}
try {
var planarBounds=Clazz.new_($I$(1,1).c$$JA$JA,[planarMin, planarMax]);
p$1.read$TA$net_imglib2_Interval$io_scif_img_RangeA$JA.apply(this, [data, planarBounds, npRanges, npIndices]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could not open a plane for the given dimensions", e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could not open a plane for the given dimensions", e]);
}
} else {
throw e$$;
}
}
}});

Clazz.newMeth(C$, ['read$TA$net_imglib2_Interval$io_scif_img_RangeA$JA'], function (data, bounds, npRanges, npIndices) {
p$1.read$TA$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$I.apply(this, [data, null, bounds, npRanges, npIndices, 0, 0]);
}, p$1);

Clazz.newMeth(C$, ['read$TA$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$I'], function (data, tmpPlane, bounds, npRanges, npIndices, depth, planeCount) {
if (depth < npRanges.length) {
var npPosition=npRanges.length - 1 - depth ;
for (var i=0; i < npRanges[npPosition].size$(); i++) {
npIndices[npPosition]=(npRanges[npPosition].get$I(i)).valueOf();
p$1.read$TA$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$I.apply(this, [data, tmpPlane, bounds, npRanges, npIndices, depth + 1, planeCount]);
planeCount++;
}
} else if (p$1.inSubregion$JA.apply(this, [npIndices])) {
var planeIndex=($I$(3).positionToRaster$I$io_scif_Reader$JA(0, this.reader, npIndices)|0);
p$1.validateBounds$JA$net_imglib2_Interval.apply(this, [p$1.getPlanarAxisLengths$io_scif_Metadata.apply(this, [this.reader.getMetadata$()]), bounds]);
if (tmpPlane == null ) {
tmpPlane=this.reader.openPlane$I$J$net_imglib2_Interval(this.index, planeIndex, bounds);
} else {
var expectedLength=$I$(4).numElements$net_imglib2_Dimensions(bounds);
if (tmpPlane.getBytes$().length != expectedLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected tmpPlane length " + expectedLength + " but was " + tmpPlane.getBytes$().length ]);
}tmpPlane=this.reader.openPlane$I$J$io_scif_Plane$net_imglib2_Interval(this.index, planeIndex, tmpPlane, bounds);
}this.convertBytes$TA$BA$I(data, tmpPlane.getBytes$(), planeCount);
if (!p$1.loadedTable.apply(this, [])[this.index][planeIndex]) {
p$1.addTable$I$I$net_imglib2_display_ColorTable.apply(this, [this.index, planeIndex, tmpPlane.getColorTable$()]);
}}}, p$1);

Clazz.newMeth(C$, 'validateBounds$JA$net_imglib2_Interval', function (lengths, bounds) {
if (lengths.length != bounds.numDimensions$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected bounds of dimensionality " + lengths.length + " but was " + bounds.numDimensions$() ]);
}for (var d=0; d < bounds.numDimensions$(); d++) {
if (bounds.min$I(d) < 0 || bounds.max$I(d) >= lengths[d] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bound #" + d + " of " + "[" + bounds.min$I(d) + ", " + bounds.max$I(d) + "] " + "is not contained in [0, " + lengths[d] + "]" ]);
}}
}, p$1);

Clazz.newMeth(C$, 'getPlanarAxisLengths$io_scif_Metadata', function (meta) {
var imgMeta=p$1.unwrap$io_scif_Metadata.apply(this, [meta]);
return imgMeta.getAxesLengthsPlanar$();
}, p$1);

Clazz.newMeth(C$, 'unwrap$io_scif_Metadata', function (meta) {
if (Clazz.instanceOf(meta, "io.scif.filters.MetadataWrapper")) return p$1.unwrap$io_scif_Metadata.apply(this, [(meta).unwrap$()]);
return meta.get$I(0);
}, p$1);

Clazz.newMeth(C$, 'loadedTable', function () {
if (this.loadedTable == null ) {
var m=this.reader.getMetadata$();
this.loadedTable=Clazz.array(Boolean.TYPE, [m.getImageCount$(), (m.get$I(0).getPlaneCount$()|0)]);
}return this.loadedTable;
}, p$1);

Clazz.newMeth(C$, 'tables', function () {
if (this.tables == null ) {
this.tables=Clazz.new_(1,{E:"java.util.List"},$I$(5,1));
}return this.tables;
}, p$1);

Clazz.newMeth(C$, 'getTable$I$I', function (imageIndex, planeIndex) {
var tables=p$1.tables.apply(this, []);
if (imageIndex >= tables.size$()) {
for (var i=tables.size$(); i <= imageIndex; i++) {
tables.add$TE(Clazz.new_(1,{E:"net.imglib2.display.ColorTable"},$I$(5,1)));
}
}var imageTable=tables.get$I(imageIndex);
return planeIndex >= imageTable.size$() ? null : imageTable.get$I(planeIndex);
}, p$1);

Clazz.newMeth(C$, 'addTable$I$I$net_imglib2_display_ColorTable', function (imageIndex, planeIndex, colorTable) {
var ct=p$1.getTable$I$I.apply(this, [imageIndex, planeIndex]);
if (ct == null ) {
var imageTable=this.tables.get$I(imageIndex);
if (imageTable.size$() <= planeIndex) {
for (var i=imageTable.size$(); i <= planeIndex; i++) {
imageTable.add$TE(null);
}
}var isLoaded=p$1.loadedTable.apply(this, []);
isLoaded[imageIndex][planeIndex]=true;
imageTable.set$I$TE(planeIndex, colorTable);
}}, p$1);

Clazz.newMeth(C$, 'inSubregion$JA', function (npIndices) {
var inSubregion=true;
if (this.subRegion != null ) {
var index=0;
for (var axis, $axis = this.reader.getMetadata$().get$I(0).getAxesNonPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
inSubregion=inSubregion && p$1.inRange$io_scif_img_Range$J.apply(this, [this.subRegion.getRange$net_imagej_axis_AxisType(axis.type$()), npIndices[index++]]) ;
}
}return inSubregion;
}, p$1);

Clazz.newMeth(C$, 'inRange$io_scif_img_Range$J', function (range, value) {
if (range == null ) return true;
return range.contains$O(new Long(value));
}, p$1);

Clazz.newMeth(C$, 'reader$', function () {
return this.reader;
});

Clazz.newMeth(C$, 'isCompatible$', function () {
return this.compatible;
});

Clazz.newMeth(C$, 'utils$', function () {
return this.imgUtilityService;
});
C$.$getAnn$ = function(){ return [
[['imgUtilityService','io.scif.img.ImgUtilityService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
