(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'io.scif.filters.DimensionSwapperMetadata','java.util.ArrayList','io.scif.config.SCIFIOConfig','io.scif.util.FormatTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DimensionSwapper", null, 'io.scif.filters.AbstractReaderFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inputOrder','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'swapDimensions$I$net_imagej_axis_AxisTypeA', function (imageIndex, newOrder) {
if (newOrder == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["order is null"]);
var oldOrder=this.getDimensionOrder$I(imageIndex);
if (newOrder.length != oldOrder.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newOrder is unexpected length: " + newOrder.length + "; expected: " + oldOrder.size$() ]);
}for (var axisType, $axisType = 0, $$axisType = newOrder; $axisType<$$axisType.length&&((axisType=($$axisType[$axisType])),1);$axisType++) {
if (!oldOrder.contains$O(axisType)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newOrder specifies different axes"]);
}
if (this.metaCheck$() && !((this.getMetadata$()).getOutputOrder$() == null ) ) {
(this.getMetadata$()).getOutputOrder$()[imageIndex]=this.getInputOrder$I(imageIndex);
}this.getMetadata$().get$I(imageIndex).setAxisTypes$net_imagej_axis_AxisTypeA(newOrder);
});

Clazz.newMeth(C$, 'setOutputOrder$I$java_util_List', function (imageIndex, outputOrder) {
if (this.metaCheck$() && !((this.getMetadata$()).getOutputOrder$() == null ) ) {
(this.getMetadata$()).getOutputOrder$()[imageIndex]=outputOrder;
}});

Clazz.newMeth(C$, 'getInputOrder$I', function (imageIndex) {
if (this.inputOrder == null ) this.inputOrder=Clazz.new_(1,{E:"net.imagej.axis.AxisType"},$I$(2,1));
var axes=this.getMetadata$().get$I(imageIndex).getAxes$();
for (var i=0; i < axes.size$(); i++) {
this.inputOrder.set$I$TE(i, axes.get$I(i).type$());
}
return this.inputOrder;
});

Clazz.newMeth(C$, 'getDimensionOrder$I', function (imageIndex) {
var outOrder=null;
if (this.metaCheck$()) {
outOrder=(this.getMetadata$()).getOutputOrder$()[imageIndex];
}if (outOrder != null ) return outOrder;
return this.getInputOrder$I(imageIndex);
});

Clazz.newMeth(C$, 'setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var oldFile=this.getCurrentLocation$();
if (!source.equals$O(oldFile) || this.metaCheck$() && ((this.getMetadata$()).getOutputOrder$() == null  || (this.getMetadata$()).getOutputOrder$().length != this.getImageCount$() )  ) {
var axisTypeList=Clazz.array($I$(2), [this.getImageCount$()]);
(this.getMetadata$()).setOutputOrder$java_util_ListA(axisTypeList);
if (this.metaCheck$()) (this.getMetadata$()).wrap$io_scif_Metadata(this.getParent$().getMetadata$());
}});

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
return C$.superclazz.prototype.openPlane$I$J$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, p$1.reorder$I$J.apply(this, [imageIndex, planeIndex]), config]);
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, bounds, config) {
return C$.superclazz.prototype.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, p$1.reorder$I$J.apply(this, [imageIndex, planeIndex]), bounds, config]);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, config) {
return C$.superclazz.prototype.openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, p$1.reorder$I$J.apply(this, [imageIndex, planeIndex]), plane, config]);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, bounds, config) {
return C$.superclazz.prototype.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig.apply(this, [imageIndex, p$1.reorder$I$J.apply(this, [imageIndex, planeIndex]), plane, bounds, config]);
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return C$.superclazz.prototype.getMetadata$.apply(this, []);
});

Clazz.newMeth(C$, 'getPriority$', function () {
return 4.0;
});

Clazz.newMeth(C$, 'reorder$I$J', function (imageIndex, planeIndex) {
if (!this.metaCheck$()) return planeIndex;
var originalPosition=$I$(4).rasterToPosition$JA$J(this.getMetadata$().get$I(imageIndex).getAxesLengthsNonPlanar$(), planeIndex);
var swappedOrder=this.getDimensionOrder$I(imageIndex);
var swappedPosition=Clazz.array(Long.TYPE, [originalPosition.length]);
var lengths=Clazz.array(Long.TYPE, [originalPosition.length]);
for (var i=0; i < originalPosition.length; i++) {
var offset=this.getMetadata$().get$I(imageIndex).getPlanarAxisCount$();
var type=swappedOrder.get$I(i + offset);
lengths[i]=this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType(type);
swappedPosition[i]=originalPosition[this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType(type) - offset];
}
return ($I$(4).positionToRaster$JA$JA(lengths, swappedPosition)|0);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.DimensionSwapper',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.Filter.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
