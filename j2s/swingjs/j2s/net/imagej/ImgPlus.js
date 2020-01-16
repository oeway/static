(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'java.util.HashMap','java.util.ArrayList','net.imagej.axis.LinearAxis','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.AxisType','net.imagej.axis.Axes','net.imagej.axis.CalibratedAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgPlus", null, 'net.imagej.interval.AbstractCalibratedRealInterval', ['net.imglib2.img.Img', 'net.imglib2.img.WrappedImg', 'net.imagej.ImgPlusMetadata']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.source="";
this.compositeChannelCount=1;
this.properties=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
}, 1);

C$.$fields$=[['I',['validBits','compositeChannelCount'],'S',['name','source'],'O',['img','net.imglib2.img.Img','channelMin','java.util.ArrayList','+channelMax','+colorTable','properties','java.util.Map']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img', function (img) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA.apply(this, [img, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S', function (img, name) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA.apply(this, [img, name, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA', function (img, name, axes) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA.apply(this, [img, name, axes, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata', function (img, metadata) {
C$.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata$Z.apply(this, [img, metadata, false]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata$Z', function (img, metadata, axesOnly) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_CalibratedAxisA.apply(this, [img, metadata.getName$(), C$.copyAxes$net_imagej_space_CalibratedSpace(metadata)]);
if (!axesOnly) {
this.validBits=metadata.getValidBits$();
this.compositeChannelCount=metadata.getCompositeChannelCount$();
var count=metadata.getColorTableCount$();
for (var i=0; i < count; i++) {
this.colorTable.add$TE(metadata.getColorTable$I(i));
}
}}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA', function (img, name, axisTypes, cal) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA$SA.apply(this, [img, name, axisTypes, cal, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA$SA', function (img, name, axisTypes, cal, units) {
C$.c$$net_imglib2_img_Img$S$net_imagej_axis_CalibratedAxisA.apply(this, [img, name, C$.createAxes$net_imglib2_img_Img$net_imagej_axis_AxisTypeA$DA$SA(img, axisTypes, cal, units)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_CalibratedAxisA', function (img, name, axes) {
;C$.superclazz.c$$net_imglib2_RealInterval$TAA.apply(this,[img, axes]);C$.$init$.apply(this);
this.img=img;
this.setName$S(name);
this.channelMin=Clazz.new_(1,{E:"Double"},$I$(2,1));
this.channelMax=Clazz.new_(1,{E:"Double"},$I$(2,1));
this.colorTable=Clazz.new_(1,{E:"net.imglib2.display.ColorTable"},$I$(2,1));
this.setSource$S("");
}, 1);

Clazz.newMeth(C$, 'getImg$', function () {
return this.img;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.img.randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.img.randomAccess$net_imglib2_Interval(interval);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.img.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.img.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.img.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.img.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.img.max$JA(max);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.img.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.img.dimensions$JA(dimensions);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.img.dimension$I(d);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.img.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.img.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.img.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.img.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.img.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.img.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.img.cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.img.localizingCursor$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.img.size$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.img.firstElement$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.img.iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.img.iterator$();
});

Clazz.newMeth(C$, 'factory$', function () {
return this.img.factory$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata,[this.img.copy$(), this]);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getValidBits$', function () {
return this.validBits;
});

Clazz.newMeth(C$, 'setValidBits$I', function (bits) {
this.validBits=bits;
});

Clazz.newMeth(C$, 'getChannelMinimum$I', function (c) {
if (c < 0 || c >= this.channelMin.size$() ) return NaN;
var d=this.channelMin.get$I(c);
return d == null  ? NaN : (d).valueOf();
});

Clazz.newMeth(C$, 'setChannelMinimum$I$D', function (c, min) {
if (c < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid channel: " + c]);
if (c >= this.channelMin.size$()) {
this.channelMin.ensureCapacity$I(c + 1);
for (var i=this.channelMin.size$(); i <= c; i++) this.channelMin.add$TE(null);

}this.channelMin.set$I$TE(c, new Double(min));
});

Clazz.newMeth(C$, 'getChannelMaximum$I', function (c) {
if (c < 0 || c >= this.channelMax.size$() ) return NaN;
var d=this.channelMax.get$I(c);
return d == null  ? NaN : (d).valueOf();
});

Clazz.newMeth(C$, 'setChannelMaximum$I$D', function (c, max) {
if (c < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid channel: " + c]);
if (c >= this.channelMax.size$()) {
this.channelMax.ensureCapacity$I(c + 1);
for (var i=this.channelMax.size$(); i <= c; i++) this.channelMax.add$TE(null);

}this.channelMax.set$I$TE(c, new Double(max));
});

Clazz.newMeth(C$, 'getCompositeChannelCount$', function () {
return this.compositeChannelCount;
});

Clazz.newMeth(C$, 'setCompositeChannelCount$I', function (value) {
this.compositeChannelCount=value;
});

Clazz.newMeth(C$, 'getColorTable$I', function (no) {
if (no >= this.colorTable.size$()) return null;
return this.colorTable.get$I(no);
});

Clazz.newMeth(C$, 'setColorTable$net_imglib2_display_ColorTable$I', function (cT, no) {
this.colorTable.set$I$TE(no, cT);
});

Clazz.newMeth(C$, 'initializeColorTables$I', function (count) {
this.colorTable.ensureCapacity$I(count);
this.colorTable.clear$();
for (var i=0; i < count; i++) {
this.colorTable.add$TE(null);
}
});

Clazz.newMeth(C$, 'getColorTableCount$', function () {
return this.colorTable.size$();
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$S', function (source) {
this.source=source;
});

Clazz.newMeth(C$, 'wrap$net_imglib2_img_Img', function (img) {
if (Clazz.instanceOf(img, "net.imagej.ImgPlus")) return img;
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_Img,[img]);
}, 1);

Clazz.newMeth(C$, 'wrap$net_imglib2_img_Img$net_imagej_ImgPlusMetadata', function (img, metadata) {
if (Clazz.instanceOf(img, "net.imagej.ImgPlus")) return img;
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata,[img, metadata]);
}, 1);

Clazz.newMeth(C$, 'createAxes$net_imglib2_img_Img$net_imagej_axis_AxisTypeA$DA$SA', function (img, axisTypes, cal, units) {
var numDims=img.numDimensions$();
var validTypes=C$.validateAxisTypes$I$net_imagej_axis_AxisTypeA(numDims, axisTypes);
if (numDims != validTypes.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Axis type count does not match dimensionality: " + validTypes.length + " != " + numDims ]);
}var validCal=C$.validateCalibration$I$DA(numDims, cal);
if (numDims != validCal.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Calibration count does not match dimensionality: " + validCal.length + " != " + numDims ]);
}var validUnits=C$.validateUnits$I$SA(numDims, units);
if (numDims != validUnits.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unit count does not match dimensionality: " + validUnits.length + " != " + numDims ]);
}var axes=Clazz.array($I$(3), [validTypes.length]);
for (var d=0; d < numDims; d++) {
axes[d]=Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[validTypes[d], validUnits[d], validCal[d]]);
}
return axes;
}, 1);

Clazz.newMeth(C$, 'validateAxisTypes$I$net_imagej_axis_AxisTypeA', function (numDims, types) {
if (types != null  && numDims == types.length ) return types;
var valid=Clazz.array($I$(5), [numDims]);
for (var i=0; i < valid.length; i++) {
if (types != null  && types.length > i ) valid[i]=types[i];
 else {
switch (i) {
case 0:
valid[i]=$I$(6).X;
break;
case 1:
valid[i]=$I$(6).Y;
break;
default:
valid[i]=$I$(6).unknown$();
}
}}
return valid;
}, 1);

Clazz.newMeth(C$, 'validateCalibration$I$DA', function (numDims, cal) {
if (cal != null  && numDims == cal.length ) return cal;
var valid=Clazz.array(Double.TYPE, [numDims]);
for (var i=0; i < valid.length; i++) {
if (cal != null  && cal.length > i ) valid[i]=cal[i];
 else valid[i]=1;
}
return valid;
}, 1);

Clazz.newMeth(C$, 'validateUnits$I$SA', function (numDims, units) {
if (units != null  && numDims == units.length ) return units;
var valid=Clazz.array(String, [numDims]);
for (var i=0; i < valid.length; i++) {
if (units != null  && units.length > i ) valid[i]=units[i];
}
return valid;
}, 1);

Clazz.newMeth(C$, 'copyAxes$net_imagej_space_CalibratedSpace', function (space) {
var axes=Clazz.array($I$(7), [space.numDimensions$()]);
for (var d=0; d < axes.length; d++) {
axes[d]=space.axis$I(d).copy$();
}
return axes;
}, 1);

Clazz.newMeth(C$, 'getProperties$', function () {
return this.properties;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
