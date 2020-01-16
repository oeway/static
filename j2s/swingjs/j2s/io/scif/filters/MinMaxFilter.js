(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','net.imglib2.FinalInterval','io.scif.util.FormatTools','net.imglib2.util.Intervals','org.scijava.util.Bytes','java.util.ArrayList','java.util.HashMap','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MinMaxFilter", null, 'io.scif.filters.AbstractReaderFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['planarAxisMin','java.util.List','+planarAxisMax','planeMins','double[][]','+planeMaxs','minMaxDone','int[]']]]

Clazz.newMeth(C$, 'getAxisGlobalMinimum$I$net_imagej_axis_AxisType$I', function (imageIndex, type, index) {
return p$1.getAxisGlobalValue$I$net_imagej_axis_AxisType$I$java_util_List.apply(this, [imageIndex, type, index, this.planarAxisMin]);
});

Clazz.newMeth(C$, 'getAxisGlobalMaximum$I$net_imagej_axis_AxisType$I', function (imageIndex, type, index) {
return p$1.getAxisGlobalValue$I$net_imagej_axis_AxisType$I$java_util_List.apply(this, [imageIndex, type, index, this.planarAxisMax]);
});

Clazz.newMeth(C$, 'getAxisKnownMinimum$I$net_imagej_axis_AxisType$I', function (imageIndex, type, index) {
return p$1.getAxisKnownValue$I$net_imagej_axis_AxisType$I$java_util_List.apply(this, [imageIndex, type, index, this.planarAxisMin]);
});

Clazz.newMeth(C$, 'getAxisKnownMaximum$I$net_imagej_axis_AxisType$I', function (imageIndex, type, index) {
return p$1.getAxisKnownValue$I$net_imagej_axis_AxisType$I$java_util_List.apply(this, [imageIndex, type, index, this.planarAxisMax]);
});

Clazz.newMeth(C$, 'getPlaneMinimum$I$J', function (imageIndex, planeIndex) {
return p$1.getPlaneValue$I$J$DAA.apply(this, [imageIndex, planeIndex, this.planeMins]);
});

Clazz.newMeth(C$, 'getPlaneMaximum$I$J', function (imageIndex, planeIndex) {
return p$1.getPlaneValue$I$J$DAA.apply(this, [imageIndex, planeIndex, this.planeMaxs]);
});

Clazz.newMeth(C$, 'isMinMaxPopulated$I', function (imageIndex) {
return this.minMaxDone != null  && this.minMaxDone[imageIndex] == this.getImageCount$() ;
});

Clazz.newMeth(C$, 'getPlaneCount$I', function (imageIndex) {
return this.getMetadata$().get$I(imageIndex).getPlaneCount$();
});

Clazz.newMeth(C$, 'openPlane$I$J', function (imageIndex, planeIndex) {
return this.openPlane$I$J$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane', function (imageIndex, planeIndex, plane) {
return this.openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, config) {
var bounds=Clazz.new_($I$(2,1).c$$JA,[this.getMetadata$().get$I(imageIndex).getAxesLengthsPlanar$()]);
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, config) {
var bounds=Clazz.new_($I$(2,1).c$$JA,[this.getMetadata$().get$I(imageIndex).getAxesLengthsPlanar$()]);
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, bounds, config) {
var plane=this.createPlane$net_imglib2_Interval(bounds);
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, bounds, config) {
C$.superclazz.prototype.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, planeIndex, plane, bounds, config]);
var bytesPerPixel=$I$(3).getBytesPerPixel$I(this.getMetadata$().get$I(imageIndex).getPixelType$());
var len=((bytesPerPixel * $I$(4).numElements$net_imglib2_Dimensions(bounds))|0);
p$1.updateMinMax$I$J$BA$I.apply(this, [imageIndex, planeIndex, plane.getBytes$(), len]);
return plane;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.planarAxisMin=null;
this.planarAxisMax=null;
this.planeMins=null;
this.planeMaxs=null;
this.minMaxDone=null;
}});

Clazz.newMeth(C$, 'getNativeDataType$', function () {
return Clazz.array(Byte.TYPE, -1);
});

Clazz.newMeth(C$, 'updateMinMax$I$J$BA$I', function (imageIndex, planeIndex, buf, len) {
if (buf == null ) return;
p$1.initMinMax.apply(this, []);
var m=this.getMetadata$();
var iMeta=m.get$I(imageIndex);
var pixelType=iMeta.getPixelType$();
var bpp=$I$(3).getBytesPerPixel$I(pixelType);
var planeSize=iMeta.getPlaneSize$();
if (len == planeSize && !Double.isNaN$D(this.planeMins[imageIndex][(planeIndex|0)]) ) return;
var little=iMeta.isLittleEndian$();
var pixels=(len/bpp|0);
this.planeMins[imageIndex][(planeIndex|0)]=Infinity;
this.planeMaxs[imageIndex][(planeIndex|0)]=-Infinity;
var signed=$I$(3).isSigned$I(pixelType);
var threshold=(Math.pow(2, bpp * 8 - 1)|0);
for (var i=0; i < pixels; i++) {
var idx=bpp * i;
var bits=$I$(5).toLong$BA$I$I$Z(buf, idx, bpp, little);
if (signed) {
if (bits >= threshold) bits-=2 * threshold;
}var v=bits;
if (pixelType == 6) {
v=Float.intBitsToFloat$I((bits|0));
} else if (pixelType == 7) {
v=Double.longBitsToDouble$J(bits);
}var planarPositions=$I$(3).rasterToPosition$JA$J(iMeta.getAxesLengthsPlanar$(), i);
for (var axis=0; axis < planarPositions.length; axis++) {
var type=iMeta.getAxis$I(axis).type$();
var planarMin=this.planarAxisMin.get$I(imageIndex).get$O(type);
if (planarMin[(planarPositions[axis]|0)] > v ) {
planarMin[(planarPositions[axis]|0)]=v;
}var planarMax=this.planarAxisMax.get$I(imageIndex).get$O(type);
if (planarMax[(planarPositions[axis]|0)] < v ) {
planarMax[(planarPositions[axis]|0)]=v;
}}
if (v > this.planeMaxs[imageIndex][(planeIndex|0)] ) {
this.planeMaxs[imageIndex][(planeIndex|0)]=v;
}if (v < this.planeMins[imageIndex][(planeIndex|0)] ) {
this.planeMins[imageIndex][(planeIndex|0)]=v;
}}
this.minMaxDone[imageIndex]=Math.max(this.minMaxDone[imageIndex], (planeIndex|0) + 1);
}, p$1);

Clazz.newMeth(C$, 'initMinMax', function () {
var m=this.getMetadata$();
var imageCount=m.getImageCount$();
if (this.planarAxisMin == null ) {
this.planarAxisMin=Clazz.new_(1,{E:"java.util.Map"},$I$(6,1));
for (var i=0; i < imageCount; i++) {
var minMap=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"double[]"},$I$(7,1));
var iMeta=m.get$I(i);
for (var axis, $axis = iMeta.getAxesPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var values=Clazz.array(Double.TYPE, [(iMeta.getAxisLength$net_imagej_axis_AxisType(axis.type$())|0)]);
$I$(8).fill$DA$D(values, Infinity);
minMap.put$TK$TV(axis.type$(), values);
}
this.planarAxisMin.add$TE(minMap);
}
}if (this.planarAxisMax == null ) {
this.planarAxisMax=Clazz.new_(1,{E:"java.util.Map"},$I$(6,1));
for (var i=0; i < imageCount; i++) {
var maxMap=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"double[]"},$I$(7,1));
var iMeta=m.get$I(i);
for (var axis, $axis = iMeta.getAxesPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var values=Clazz.array(Double.TYPE, [(iMeta.getAxisLength$net_imagej_axis_AxisType(axis.type$())|0)]);
$I$(8).fill$DA$D(values, -Infinity);
maxMap.put$TK$TV(axis.type$(), values);
}
this.planarAxisMax.add$TE(maxMap);
}
}if (this.planeMins == null ) {
this.planeMins=Clazz.array(Double.TYPE, [imageCount, null]);
for (var i=0; i < imageCount; i++) {
this.planeMins[i]=Clazz.array(Double.TYPE, [(this.getPlaneCount$I(i)|0)]);
$I$(8).fill$DA$D(this.planeMins[i], NaN);
}
}if (this.planeMaxs == null ) {
this.planeMaxs=Clazz.array(Double.TYPE, [imageCount, null]);
for (var i=0; i < imageCount; i++) {
this.planeMaxs[i]=Clazz.array(Double.TYPE, [(this.getPlaneCount$I(i)|0)]);
$I$(8).fill$DA$D(this.planeMaxs[i], NaN);
}
}if (this.minMaxDone == null ) this.minMaxDone=Clazz.array(Integer.TYPE, [imageCount]);
}, p$1);

Clazz.newMeth(C$, 'getAxisGlobalValue$I$net_imagej_axis_AxisType$I$java_util_List', function (imageIndex, type, index, planarAxisValues) {
if (index < 0 || index >= this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType(type) ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid " + type.getLabel$() + " index: " + index ]);
}if (this.minMaxDone == null  || this.minMaxDone[imageIndex] < this.getPlaneCount$I(imageIndex) ) {
return null;
}return p$1.getAxisValue$DA$I.apply(this, [planarAxisValues.get$I(imageIndex).get$O(type), index]);
}, p$1);

Clazz.newMeth(C$, 'getAxisKnownValue$I$net_imagej_axis_AxisType$I$java_util_List', function (imageIndex, type, index, planarAxisValues) {
return planarAxisValues == null  ? null : p$1.getAxisValue$DA$I.apply(this, [planarAxisValues.get$I(imageIndex).get$O(type), index]);
}, p$1);

Clazz.newMeth(C$, 'getAxisValue$DA$I', function (values, index) {
return values == null  ? null :  new Double(values[index]);
}, p$1);

Clazz.newMeth(C$, 'getPlaneValue$I$J$DAA', function (imageIndex, planeIndex, planeValues) {
if (planeValues == null ) return null;
if (Double.isNaN$D(planeValues[imageIndex][(planeIndex|0)])) return null;
return new Double(planeValues[imageIndex][(planeIndex|0)]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.MinMaxFilter',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.Filter.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
