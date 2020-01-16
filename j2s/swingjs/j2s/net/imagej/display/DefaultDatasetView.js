(function(){var P$=Clazz.newPackage("net.imagej.display"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Collections','net.imagej.display.ColorTables','net.imagej.axis.Axes','net.imagej.display.ColorMode','net.imglib2.util.Binning','org.scijava.util.ColorRGB','net.imglib2.view.Views','net.imagej.Dataset','net.imagej.display.event.DataViewUpdatedEvent','net.imglib2.display.screenimage.awt.ARGBScreenImage','net.imglib2.converter.RealLUTConverter','net.imglib2.img.cell.AbstractCellImg','net.imagej.display.SourceOptimizedCompositeXYProjector','net.imglib2.display.projector.composite.CompositeXYProjector','net.imagej.display.event.LUTsChangedEvent','net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDatasetView", null, 'net.imagej.display.AbstractDataView', 'net.imagej.display.DatasetView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.converters=Clazz.new_(1,{E:"net.imglib2.converter.RealLUTConverter"},$I$(1,1));
}, 1);

C$.$fields$=[['I',['channelDimIndex'],'O',['autoscaleService','net.imagej.autoscale.AutoscaleService','threadService','org.scijava.thread.ThreadService','$eventService','org.scijava.event.EventService','defaultLUTs','java.util.ArrayList','screenImage','net.imglib2.display.screenimage.awt.ARGBScreenImage','projector','net.imglib2.display.projector.composite.CompositeXYProjector','converters','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getChannelCount$', function () {
if (this.channelDimIndex < 0) return 1;
return (this.getData$().dimension$I(this.channelDimIndex)|0);
});

Clazz.newMeth(C$, 'getScreenImage$', function () {
return this.screenImage;
});

Clazz.newMeth(C$, 'getCompositeDimIndex$', function () {
return this.channelDimIndex;
});

Clazz.newMeth(C$, 'getProjector$', function () {
return this.projector;
});

Clazz.newMeth(C$, 'getChannelMin$I', function (c) {
if (!p$1.isInitialized.apply(this, [])) return NaN;
return this.converters.get$I(c).getMin$();
});

Clazz.newMeth(C$, 'getChannelMax$I', function (c) {
if (!p$1.isInitialized.apply(this, [])) return NaN;
return this.converters.get$I(c).getMax$();
});

Clazz.newMeth(C$, 'setChannelRange$I$D$D', function (c, min, max) {
if (!p$1.isInitialized.apply(this, [])) return;
this.converters.get$I(c).setMin$D(min);
this.converters.get$I(c).setMax$D(max);
});

Clazz.newMeth(C$, 'setChannelRanges$D$D', function (min, max) {
for (var c=0; c < this.converters.size$(); c++) {
this.setChannelRange$I$D$D(c, min, max);
}
});

Clazz.newMeth(C$, 'autoscale$I', function (c) {
var data=this.getData$();
var min=data.getChannelMinimum$I(c);
var max=data.getChannelMaximum$I(c);
if (Double.isNaN$D(min) || Double.isNaN$D(max) ) {
var interval=p$1.channelData$net_imagej_Dataset$I.apply(this, [data, c]);
interval=this.xyPlane$net_imglib2_RandomAccessibleInterval(interval);
var result=this.autoscaleService.getDefaultRandomAccessRange$net_imglib2_RandomAccessibleInterval(interval);
min=result.getMin$();
max=result.getMax$();
data.setChannelMinimum$I$D(c, min);
data.setChannelMaximum$I$D(c, max);
}this.setChannelRange$I$D$D(c, min, max);
});

Clazz.newMeth(C$, 'setComposite$Z', function (composite) {
if (!p$1.isInitialized.apply(this, [])) return;
this.projector.setComposite$Z(composite);
});

Clazz.newMeth(C$, 'getColorTables$', function () {
return $I$(2).unmodifiableList$java_util_List(this.defaultLUTs);
});

Clazz.newMeth(C$, 'setColorTable$net_imglib2_display_ColorTable$I', function (colorTable, channel) {
this.defaultLUTs.set$I$TE(channel, colorTable);
p$1.updateLUTs.apply(this, []);
});

Clazz.newMeth(C$, 'resetColorTables$Z', function (grayscale) {
var channelCount=this.getChannelCount$();
this.defaultLUTs.clear$();
this.defaultLUTs.ensureCapacity$I(channelCount);
if (grayscale) {
for (var i=0; i < channelCount; i++) {
this.defaultLUTs.add$TE($I$(3).GRAYS);
}
} else {
var imgPlus=this.getData$().getImgPlus$();
for (var c=0; c < channelCount; c++) {
var ct=null;
if (imgPlus != null ) {
var planeIndex=1;
for (var i=2; i < imgPlus.dimensionIndex$net_imagej_axis_AxisType($I$(4).CHANNEL); i++) {
planeIndex*=imgPlus.dimension$I(i);
}
planeIndex=planeIndex + c - 1;
if (planeIndex < imgPlus.getColorTableCount$()) ct=imgPlus.getColorTable$I(planeIndex);
}if (ct == null ) ct=channelCount == 1 ? $I$(3).GRAYS : $I$(3).getDefaultColorTable$I(c);
this.defaultLUTs.add$TE(ct);
}
}p$1.updateLUTs.apply(this, []);
});

Clazz.newMeth(C$, 'getColorMode$', function () {
var composite=this.projector.isComposite$();
if (composite) {
return $I$(5).COMPOSITE;
}var colorTables=this.getColorTables$();
for (var colorTable, $colorTable = colorTables.iterator$(); $colorTable.hasNext$()&&((colorTable=($colorTable.next$())),1);) {
if (colorTable !== $I$(3).GRAYS ) {
return $I$(5).COLOR;
}}
return $I$(5).GRAYSCALE;
});

Clazz.newMeth(C$, 'setColorMode$net_imagej_display_ColorMode', function (colorMode) {
if (!p$1.isInitialized.apply(this, [])) return;
this.resetColorTables$Z(colorMode === $I$(5).GRAYSCALE );
this.projector.setComposite$Z(colorMode === $I$(5).COMPOSITE );
this.projector.map$();
});

Clazz.newMeth(C$, 'getColor$net_imagej_ChannelCollection', function (channels) {
if (!p$1.isInitialized.apply(this, [])) return null;
var r;
var g;
var b;
var channelCount=this.getChannelCount$();
var mode=this.getColorMode$();
if (mode === $I$(5).COMPOSITE ) {
var rSum=0;
var gSum=0;
var bSum=0;
for (var c=0; c < channelCount; c++) {
var value=channels.getChannelValue$J(c);
var converter=this.converters.get$I(c);
var min=converter.getMin$();
var max=converter.getMax$();
var grayValue=$I$(6).valueToBin$I$D$D$D(256, min, max, value);
var colorTable=converter.getLUT$();
rSum += colorTable.getResampled$I$I$I(0, 256, grayValue);
gSum += colorTable.getResampled$I$I$I(1, 256, grayValue);
bSum += colorTable.getResampled$I$I$I(2, 256, grayValue);
}
r=(rSum > 255 ) ? 255 : (Math.round(rSum)|0);
g=(gSum > 255 ) ? 255 : (Math.round(gSum)|0);
b=(bSum > 255 ) ? 255 : (Math.round(bSum)|0);
} else {
var currChannel=this.getLongPosition$net_imagej_axis_AxisType($I$(4).CHANNEL);
var value=channels.getChannelValue$J(currChannel);
var converter=this.converters.get$I((currChannel|0));
var min=converter.getMin$();
var max=converter.getMax$();
var grayValue=$I$(6).valueToBin$I$D$D$D(256, min, max, value);
if (mode === $I$(5).COLOR ) {
var colorTable=converter.getLUT$();
r=colorTable.getResampled$I$I$I(0, 256, grayValue);
g=colorTable.getResampled$I$I$I(1, 256, grayValue);
b=colorTable.getResampled$I$I$I(2, 256, grayValue);
} else {
r=grayValue;
g=grayValue;
b=grayValue;
}}return Clazz.new_($I$(7,1).c$$I$I$I,[r, g, b]);
});

Clazz.newMeth(C$, 'xyPlane$', function () {
return this.xyPlane$net_imglib2_RandomAccessibleInterval(this.getData$().getImgPlus$());
});

Clazz.newMeth(C$, 'xyPlane$net_imglib2_RandomAccessibleInterval', function (inputInterval) {
var interval=inputInterval;
var min=Clazz.array(Long.TYPE, [interval.numDimensions$()]);
var max=Clazz.array(Long.TYPE, [interval.numDimensions$()]);
interval.dimensions$JA(max);
for (var i=0; i < 2; i++) max[i]--;

for (var i=2; i < interval.numDimensions$(); i++) {
min[i]=max[i]=this.getLongPosition$I(i);
}
interval=$I$(8).interval$net_imglib2_RandomAccessible$JA$JA(interval, min, max);
return interval;
});

Clazz.newMeth(C$, 'isCompatible$net_imagej_Data', function (data) {
return data != null  && Clazz.getClass($I$(9),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']).isAssignableFrom$Class(data.getClass$()) ;
});

Clazz.newMeth(C$, 'getData$', function () {
return C$.superclazz.prototype.getData$.apply(this, []);
});

Clazz.newMeth(C$, 'getPreferredWidth$', function () {
return this.getScreenImage$().image$().getWidth$java_awt_image_ImageObserver(null);
});

Clazz.newMeth(C$, 'getPreferredHeight$', function () {
return this.getScreenImage$().image$().getHeight$java_awt_image_ImageObserver(null);
});

Clazz.newMeth(C$, 'update$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(10,1).c$$net_imagej_display_DataView,[this]));
});

Clazz.newMeth(C$, 'rebuild$', function () {
p$1.uninitializeView.apply(this, []);
this.channelDimIndex=p$1.getChannelDimIndex.apply(this, []);
var img=this.getData$().getImgPlus$();
if (this.defaultLUTs == null  || this.defaultLUTs.size$() != this.getChannelCount$() ) {
this.defaultLUTs=Clazz.new_(1,{E:"net.imglib2.display.ColorTable"},$I$(1,1));
this.resetColorTables$Z(false);
}var width=(img.dimension$I(0)|0);
var height=(img.dimension$I(1)|0);
this.screenImage=Clazz.new_($I$(11,1).c$$I$I,[width, height]);
p$1.initializeView$Z.apply(this, [p$1.isComposite.apply(this, [])]);
p$1.updateLUTs.apply(this, []);
this.projector.map$();
});

Clazz.newMeth(C$, 'getLongPosition$net_imagej_axis_AxisType', function (axis) {
if (!p$1.isInitialized.apply(this, [])) return 0;
if (axis.isXY$()) return 0;
var dim=this.getData$().dimensionIndex$net_imagej_axis_AxisType(axis);
if (dim < 0) return 0;
if (dim >= this.projector.numDimensions$()) return 0;
return this.projector.getLongPosition$I(dim);
});

Clazz.newMeth(C$, 'setPosition$J$net_imagej_axis_AxisType', function (position, axis) {
if (!p$1.isInitialized.apply(this, [])) return;
if (axis.isXY$()) return;
var dim=this.getData$().dimensionIndex$net_imagej_axis_AxisType(axis);
if (dim < 0) return;
var currentValue=this.projector.getLongPosition$I(dim);
if (position == currentValue) {
return;
}this.projector.setPosition$J$I(position, dim);
if (dim != this.channelDimIndex) {
p$1.updateLUTs.apply(this, []);
}this.projector.map$();
C$.superclazz.prototype.setPosition$J$net_imagej_axis_AxisType.apply(this, [position, axis]);
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DatasetTypeChangedEvent', function (event) {
if (this.getData$() === event.getObject$() ) {
this.threadService.run$Runnable(((P$.DefaultDatasetView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultDatasetView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.b$['org.scijava.AbstractContextual'].getContext$.apply(this.b$['org.scijava.AbstractContextual'], []));
{
this.b$['net.imagej.display.DefaultDatasetView'].rebuild$.apply(this.b$['net.imagej.display.DefaultDatasetView'], []);
}});
})()
), Clazz.new_(P$.DefaultDatasetView$1.$init$, [this, null])));
}});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DatasetRGBChangedEvent', function (event) {
if (this.getData$() === event.getObject$() ) {
this.threadService.run$Runnable(((P$.DefaultDatasetView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultDatasetView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.b$['org.scijava.AbstractContextual'].getContext$.apply(this.b$['org.scijava.AbstractContextual'], []));
{
this.b$['net.imagej.display.DefaultDatasetView'].rebuild$.apply(this.b$['net.imagej.display.DefaultDatasetView'], []);
}});
})()
), Clazz.new_(P$.DefaultDatasetView$2.$init$, [this, null])));
}});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DatasetUpdatedEvent', function (event) {
if (Clazz.instanceOf(event, "net.imagej.event.DatasetTypeChangedEvent")) {
return;
}if (Clazz.instanceOf(event, "net.imagej.event.DatasetRGBChangedEvent")) {
return;
}if (this.getData$() === event.getObject$() ) {
if (event.isMetaDataOnly$()) return;
this.projector.map$();
}});

Clazz.newMeth(C$, 'getChannelDimIndex', function () {
return this.getData$().dimensionIndex$net_imagej_axis_AxisType($I$(4).CHANNEL);
}, p$1);

Clazz.newMeth(C$, 'isComposite', function () {
return this.getData$().getCompositeChannelCount$() > 1 || this.getData$().isRGBMerged$() ;
}, p$1);

Clazz.newMeth(C$, 'isInitialized', function () {
return this.projector != null ;
}, p$1);

Clazz.newMeth(C$, 'uninitializeView', function () {
this.converters.clear$();
this.projector=null;
}, p$1);

Clazz.newMeth(C$, 'initializeView$Z', function (composite) {
this.converters.clear$();
var channelCount=this.getChannelCount$();
for (var c=0; c < channelCount; c++) {
this.autoscale$I(c);
var converter=Clazz.new_($I$(12,1).c$$D$D$net_imglib2_display_ColorTable,[this.getData$().getImgPlus$().getChannelMinimum$I(c), this.getData$().getImgPlus$().getChannelMaximum$I(c), null]);
this.converters.add$TE(converter);
}
var img=this.getData$().getImgPlus$();
if (Clazz.getClass($I$(13)).isAssignableFrom$Class(img.getImg$().getClass$())) {
this.projector=Clazz.new_($I$(14,1).c$$TS$TT$java_util_ArrayList$I,[this.getData$().getImgPlus$(), this.screenImage, this.converters, this.channelDimIndex]);
} else {
this.projector=Clazz.new_($I$(15,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$java_util_ArrayList$I,[this.getData$().getImgPlus$(), this.screenImage, this.converters, this.channelDimIndex]);
}this.projector.setComposite$Z(composite);
}, p$1);

Clazz.newMeth(C$, 'updateLUTs', function () {
if (!p$1.isInitialized.apply(this, [])) return;
var channelCount=this.getChannelCount$();
for (var c=0; c < channelCount; c++) {
var lut=p$1.getCurrentLUT$I.apply(this, [c]);
this.converters.get$I(c).setLUT$net_imglib2_display_ColorTable(lut);
}
var context=this.getContext$();
if (context == null ) return;
if (this.$eventService == null ) return;
this.$eventService.publishLater$TE(Clazz.new_($I$(16,1).c$$net_imagej_display_DataView,[this]));
}, p$1);

Clazz.newMeth(C$, 'getCurrentLUT$I', function (cPos) {
var pos=this.getPlanePosition$();
if (this.channelDimIndex >= 0) {
pos.setPosition$I$I(cPos, this.channelDimIndex - 2);
}var no=(pos.getIndex$()|0);
var lut=this.getData$().getColorTable$I(no);
if (lut != null ) {
return lut;
}return this.defaultLUTs.get$I(cPos);
}, p$1);

Clazz.newMeth(C$, 'channelData$net_imagej_Dataset$I', function (d, c) {
var imgPlus=d.getImgPlus$();
var chIndex=imgPlus.dimensionIndex$net_imagej_axis_AxisType($I$(4).CHANNEL);
if (chIndex < 0) {
return imgPlus;
}var mn=Clazz.array(Long.TYPE, [d.numDimensions$()]);
var mx=$I$(17).dimensionsAsLongArray$net_imglib2_Dimensions(d);
for (var i=0; i < mx.length; i++) {
mx[i]--;
}
mn[chIndex]=c;
mx[chIndex]=c;
return $I$(8).interval$net_imglib2_RandomAccessible$JA$JA(imgPlus, mn, mx);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultDatasetView',null,['org.scijava.plugin.Plugin']],['type="net.imagej.display.DataView.class" ']],
  [['autoscaleService','net.imagej.autoscale.AutoscaleService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['$eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['M:onEvent','void','onEvent$net_imagej_event_DatasetTypeChangedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DatasetRGBChangedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DatasetUpdatedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
