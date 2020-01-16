(function(){var P$=Clazz.newPackage("net.imagej.sampler"),I$=[[0,'java.util.HashMap','net.imagej.space.SpaceUtils','net.imagej.axis.CalibratedAxis','java.util.ArrayList','java.util.Collections','net.imagej.axis.AxisType','net.imagej.sampler.AxisSubrange','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SamplingDefinition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['err'],'O',['display','net.imagej.display.ImageDisplay','axisSubranges','java.util.Map']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay', function (display) {
;C$.$init$.apply(this);
this.display=display;
this.axisSubranges=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"net.imagej.sampler.AxisSubrange"},$I$(1,1));
this.err=null;
}, 1);

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'getError$', function () {
return this.err;
});

Clazz.newMeth(C$, 'getInputAxes$', function () {
return $I$(2).getAxisTypes$net_imagej_space_TypedSpace(this.display);
});

Clazz.newMeth(C$, 'getInputCalibratedAxes$', function () {
var calibratedAxes=Clazz.array($I$(3), [this.display.numDimensions$()]);
this.display.axes$TAA(calibratedAxes);
return calibratedAxes;
});

Clazz.newMeth(C$, 'getInputRanges$', function () {
var axesDefs=Clazz.new_(1,{E:"java.util.List"},$I$(4,1));
for (var i=0; i < this.display.numDimensions$(); i++) {
var axisType=this.display.axis$I(i).type$();
var subrange=this.axisSubranges.get$O(axisType);
var axisValues=subrange.getIndices$();
axesDefs.add$TE(axisValues);
}
return $I$(5).unmodifiableList$java_util_List(axesDefs);
});

Clazz.newMeth(C$, 'getOutputAxes$', function () {
var inputAxes=this.getInputAxes$();
var inputRanges=this.getInputRanges$();
var dimCount=0;
for (var i=0; i < inputRanges.size$(); i++) {
if (inputRanges.get$I(i).size$() > 1) dimCount++;
}
var outputAxes=Clazz.array($I$(6), [dimCount]);
var d=0;
for (var i=0; i < inputRanges.size$(); i++) {
if (inputRanges.get$I(i).size$() > 1) outputAxes[d++]=inputAxes[i];
}
return outputAxes;
});

Clazz.newMeth(C$, 'getOutputCalibratedAxes$', function () {
var inputAxes=this.getInputCalibratedAxes$();
var inputRanges=this.getInputRanges$();
var dimCount=0;
for (var i=0; i < inputRanges.size$(); i++) {
if (inputRanges.get$I(i).size$() > 1) dimCount++;
}
var outputAxes=Clazz.array($I$(3), [dimCount]);
var d=0;
for (var i=0; i < inputRanges.size$(); i++) {
if (inputRanges.get$I(i).size$() > 1) outputAxes[d++]=inputAxes[i].copy$();
}
return outputAxes;
});

Clazz.newMeth(C$, 'getOutputDims$', function () {
var inputRanges=this.getInputRanges$();
var dimCount=0;
for (var i=0; i < inputRanges.size$(); i++) {
if (inputRanges.get$I(i).size$() > 1) dimCount++;
}
var outputDims=Clazz.array(Long.TYPE, [dimCount]);
var d=0;
for (var i=0; i < inputRanges.size$(); i++) {
var dimSize=inputRanges.get$I(i).size$();
if (dimSize > 1) outputDims[d++]=dimSize;
}
return outputDims;
});

Clazz.newMeth(C$, 'getOutputCalibration$net_imagej_axis_AxisTypeA', function (outputAxes) {
var cal=Clazz.array(Double.TYPE, [outputAxes.length]);
var a=0;
for (var i=0; i < outputAxes.length; i++) {
var axisIndex=this.display.dimensionIndex$net_imagej_axis_AxisType(outputAxes[i]);
if (axisIndex >= 0) cal[a++]=this.display.axis$I(axisIndex).averageScale$D$D(0, 1);
}
return cal;
});

Clazz.newMeth(C$, 'constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange', function (axis, subrange) {
if (subrange.getError$() != null ) {
this.err=subrange.getError$();
return false;
}var data=this.display.getActiveView$().getData$();
var axisIndex=data.dimensionIndex$net_imagej_axis_AxisType(axis);
if (axisIndex < 0) {
this.err="Undefined axis " + axis + " for display " + this.display.getName$() ;
return false;
}var indices=subrange.getIndices$();
var dimension=data.realMax$I(axisIndex) - data.realMin$I(axisIndex);
if ((indices.get$I(0)).valueOf() > dimension ) {
this.err="Axis range fully beyond dimensions of display " + this.display.getName$() + " for axis " + axis ;
return false;
}if ((indices.get$I(indices.size$() - 1)).valueOf() > dimension ) {
this.err="Axis range partially beyond dimensions of display " + this.display.getName$() + " for axis " + axis ;
return false;
}this.axisSubranges.put$TK$TV(axis, subrange);
return true;
});

Clazz.newMeth(C$, 'sampleUVPlane$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType$net_imagej_axis_AxisType', function (display, uAxis, vAxis) {
var definition=Clazz.new_(C$.c$$net_imagej_display_ImageDisplay,[display]);
var data=display.getActiveView$().getData$();
for (var i=0; i < data.numDimensions$(); i++) {
var axisType=data.axis$I(i).type$();
if ((axisType === uAxis ) || (axisType === vAxis ) ) {
var axisIndex=display.dimensionIndex$net_imagej_axis_AxisType(axisType);
var size=display.dimension$I(axisIndex);
var subrange=Clazz.new_($I$(7,1).c$$J$J,[0, size - 1]);
definition.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange(axisType, subrange);
} else {
var pos=display.getLongPosition$net_imagej_axis_AxisType(axisType);
var subrange=Clazz.new_($I$(7,1).c$$J,[pos]);
definition.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange(axisType, subrange);
}}
return definition;
}, 1);

Clazz.newMeth(C$, 'sampleXYPlane$net_imagej_display_ImageDisplay', function (display) {
return C$.sampleUVPlane$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType$net_imagej_axis_AxisType(display, $I$(8).X, $I$(8).Y);
}, 1);

Clazz.newMeth(C$, 'sampleCompositeUVPlane$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType$net_imagej_axis_AxisType', function (display, uAxis, vAxis) {
if ((uAxis === $I$(8).CHANNEL ) || (vAxis === $I$(8).CHANNEL ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["UV composite plane - cannot specify channels as one of the axes"]);
}var definition=Clazz.new_(C$.c$$net_imagej_display_ImageDisplay,[display]);
var data=display.getActiveView$().getData$();
for (var i=0; i < data.numDimensions$(); i++) {
var axisType=data.axis$I(i).type$();
if ((axisType === uAxis ) || (axisType === vAxis ) || (axisType === $I$(8).CHANNEL )  ) {
var axisIndex=display.dimensionIndex$net_imagej_axis_AxisType(axisType);
var size=display.dimension$I(axisIndex);
var subrange=Clazz.new_($I$(7,1).c$$J$J,[0, size - 1]);
definition.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange(axisType, subrange);
} else {
var pos=display.getLongPosition$net_imagej_axis_AxisType(axisType);
var subrange=Clazz.new_($I$(7,1).c$$J,[pos]);
definition.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange(axisType, subrange);
}}
return definition;
}, 1);

Clazz.newMeth(C$, 'sampleCompositeXYPlane$net_imagej_display_ImageDisplay', function (display) {
return C$.sampleCompositeUVPlane$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType$net_imagej_axis_AxisType(display, $I$(8).X, $I$(8).Y);
}, 1);

Clazz.newMeth(C$, 'sampleAllPlanes$net_imagej_display_ImageDisplay', function (display) {
var definition=Clazz.new_(C$.c$$net_imagej_display_ImageDisplay,[display]);
for (var i=0; i < display.numDimensions$(); i++) {
var axisType=display.axis$I(i).type$();
var size=display.dimension$I(i);
var subrange=Clazz.new_($I$(7,1).c$$J$J,[0, size - 1]);
definition.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange(axisType, subrange);
}
return definition;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
