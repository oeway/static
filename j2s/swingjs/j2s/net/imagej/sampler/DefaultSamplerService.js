(function(){var P$=Clazz.newPackage("net.imagej.sampler"),p$1={},I$=[[0,'net.imagej.sampler.SamplingDefinition','net.imagej.sampler.AxisSubrange','net.imagej.axis.Axes','net.imagej.sampler.SparsePositionIterator','net.imagej.sampler.DensePositionIterator','net.imglib2.util.Intervals','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultSamplerService", null, 'org.scijava.service.AbstractService', 'net.imagej.sampler.SamplerService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['displayService','org.scijava.display.DisplayService','datasetService','net.imagej.DatasetService','overlayService','net.imagej.display.OverlayService','imgDispService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'createSampledImage$net_imagej_sampler_SamplingDefinition', function (def) {
if (def.getError$() != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["SamplingDefinition error: " + def.getError$()]);
}var outputImage=p$1.createOutputImage$net_imagej_sampler_SamplingDefinition.apply(this, [def]);
p$1.copyData$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay.apply(this, [def, outputImage]);
return outputImage;
});

Clazz.newMeth(C$, 'duplicate$net_imagej_display_ImageDisplay', function (display) {
var copyDef=$I$(1).sampleAllPlanes$net_imagej_display_ImageDisplay(display);
return this.createSampledImage$net_imagej_sampler_SamplingDefinition(copyDef);
});

Clazz.newMeth(C$, 'duplicateSelectedPlane$net_imagej_display_ImageDisplay', function (display) {
var copyDef=$I$(1).sampleXYPlane$net_imagej_display_ImageDisplay(display);
var selection=this.overlayService.getSelectionBounds$net_imagej_display_ImageDisplay(display);
var minX=(selection.x|0);
var minY=(selection.y|0);
var maxX=((selection.x + selection.width)|0);
var maxY=((selection.y + selection.height)|0);
var xSubrange=Clazz.new_($I$(2,1).c$$J$J,[minX, maxX]);
var ySubrange=Clazz.new_($I$(2,1).c$$J$J,[minY, maxY]);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).X, xSubrange);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).Y, ySubrange);
return this.createSampledImage$net_imagej_sampler_SamplingDefinition(copyDef);
});

Clazz.newMeth(C$, 'duplicateSelectedCompositePlane$net_imagej_display_ImageDisplay', function (display) {
var copyDef=$I$(1).sampleCompositeXYPlane$net_imagej_display_ImageDisplay(display);
var selection=this.overlayService.getSelectionBounds$net_imagej_display_ImageDisplay(display);
var minX=(selection.x|0);
var minY=(selection.y|0);
var maxX=((selection.x + selection.width)|0);
var maxY=((selection.y + selection.height)|0);
var xSubrange=Clazz.new_($I$(2,1).c$$J$J,[minX, maxX]);
var ySubrange=Clazz.new_($I$(2,1).c$$J$J,[minY, maxY]);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).X, xSubrange);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).Y, ySubrange);
return this.createSampledImage$net_imagej_sampler_SamplingDefinition(copyDef);
});

Clazz.newMeth(C$, 'duplicateSelectedPlanes$net_imagej_display_ImageDisplay', function (display) {
var copyDef=$I$(1).sampleAllPlanes$net_imagej_display_ImageDisplay(display);
var selection=this.overlayService.getSelectionBounds$net_imagej_display_ImageDisplay(display);
var minX=(selection.x|0);
var minY=(selection.y|0);
var maxX=((selection.x + selection.width)|0);
var maxY=((selection.y + selection.height)|0);
var xSubrange=Clazz.new_($I$(2,1).c$$J$J,[minX, maxX]);
var ySubrange=Clazz.new_($I$(2,1).c$$J$J,[minY, maxY]);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).X, xSubrange);
copyDef.constrain$net_imagej_axis_AxisType$net_imagej_sampler_AxisSubrange($I$(3).Y, ySubrange);
return this.createSampledImage$net_imagej_sampler_SamplingDefinition(copyDef);
});

Clazz.newMeth(C$, 'createOutputImage$net_imagej_sampler_SamplingDefinition', function (def) {
var origDisp=def.getDisplay$();
var origDs=origDisp.getActiveView$().getData$();
var dims=def.getOutputDims$();
var name=origDisp.getName$();
var axes=def.getOutputAxes$();
var calibAxes=def.getOutputCalibratedAxes$();
var bitsPerPixel=origDs.getType$().getBitsPerPixel$();
var signed=origDs.isSigned$();
var floating=!origDs.isInteger$();
var output=this.datasetService.create$JA$S$net_imagej_axis_AxisTypeA$I$Z$Z(dims, name, axes, bitsPerPixel, signed, floating);
output.setAxes$net_imagej_axis_CalibratedAxisA(calibAxes);
var numPlanes=p$1.calcNumPlanes$JA$net_imagej_axis_AxisTypeA.apply(this, [dims, axes]);
if (numPlanes > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output image has more too many planes " + numPlanes + " (max = " + 2147483647 + ")" ]);
}output.getImgPlus$().initializeColorTables$I((numPlanes|0));
if (origDs.isRGBMerged$()) {
var chanAxis=output.dimensionIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
if (chanAxis >= 0) {
if (output.dimension$I(chanAxis) == 3) {
output.setRGBMerged$Z(true);
}}}return this.displayService.createDisplay$S$O(name, output);
}, p$1);

Clazz.newMeth(C$, 'copyData$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay', function (def, outputImage) {
var iter1=Clazz.new_($I$(4,1).c$$net_imagej_sampler_SamplingDefinition,[def]);
var iter2=Clazz.new_($I$(5,1).c$$net_imagej_sampler_SamplingDefinition,[def]);
var input=def.getDisplay$().getActiveView$().getData$();
var output=outputImage.getActiveView$().getData$();
var inputDims=$I$(6).dimensionsAsLongArray$net_imglib2_Dimensions(input);
var outputDims=$I$(6).dimensionsAsLongArray$net_imglib2_Dimensions(output);
var inputAccessor=input.getImgPlus$().randomAccess$();
var outputAccessor=output.getImgPlus$().randomAccess$();
while (iter1.hasNext$() && iter2.hasNext$() ){
var inputPos=iter1.next$();
var outputPos=iter2.next$();
inputAccessor.setPosition$JA(inputPos);
outputAccessor.setPosition$JA(outputPos);
var value=inputAccessor.get$().getRealDouble$();
outputAccessor.get$().setReal$D(value);
var inputPlaneNumber=p$1.planeNum$JA$JA.apply(this, [inputDims, inputPos]);
var lut=input.getColorTable$I(inputPlaneNumber);
var outputPlaneNumber=p$1.planeNum$JA$JA.apply(this, [outputDims, outputPos]);
output.setColorTable$net_imglib2_display_ColorTable$I(lut, outputPlaneNumber);
}
p$1.setCompositeChannelCount$net_imagej_Dataset$net_imagej_Dataset.apply(this, [input, output]);
p$1.updateDisplayColorTables$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay.apply(this, [def, outputImage]);
var outputImgPlus=output.getImgPlus$();
for (var channel=0; channel < outputImgPlus.getCompositeChannelCount$(); channel++) {
outputImgPlus.setChannelMinimum$I$D(channel, NaN);
outputImgPlus.setChannelMaximum$I$D(channel, NaN);
}
p$1.setDisplayRanges$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay.apply(this, [def, outputImage]);
}, p$1);

Clazz.newMeth(C$, 'planeNum$JA$JA', function (dims, pos) {
var plane=0;
var inc=1;
for (var i=2; i < dims.length; i++) {
plane+=pos[i] * inc;
inc*=dims[i];
}
return plane;
}, p$1);

Clazz.newMeth(C$, 'setCompositeChannelCount$net_imagej_Dataset$net_imagej_Dataset', function (input, output) {
if (input.getCompositeChannelCount$() == 1) return;
var index=output.dimensionIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
var numChannels=(index < 0) ? 1 : output.dimension$I(index);
output.setCompositeChannelCount$I((numChannels|0));
output.rebuild$();
}, p$1);

Clazz.newMeth(C$, 'updateDisplayColorTables$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay', function (def, output) {
var input=def.getDisplay$();
var inView=this.imgDispService.getActiveDatasetView$net_imagej_display_ImageDisplay(input);
var outView=this.imgDispService.getActiveDatasetView$net_imagej_display_ImageDisplay(output);
var inputColorTables=inView.getColorTables$();
var inputChanAxis=input.dimensionIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
var inputRanges=def.getInputRanges$();
for (var i=0; i < inputColorTables.size$(); i++) {
var outIndex=p$1.outputColorTableNumber$java_util_List$I$I.apply(this, [inputRanges, i, inputChanAxis]);
if (outIndex >= 0) {
outView.setColorTable$net_imglib2_display_ColorTable$I(inputColorTables.get$I(i), outIndex);
}}
}, p$1);

Clazz.newMeth(C$, 'outputColorTableNumber$java_util_List$I$I', function (inputRanges, inputChannel, inputChanAxis) {
if (inputChanAxis < 0) {
if (inputChannel == 0) return 0;
return -1;
}var channelRanges=inputRanges.get$I(inputChanAxis);
for (var pos=0; pos < channelRanges.size$(); pos++) {
if ((channelRanges.get$I(pos)).valueOf() === inputChannel ) return pos;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'attachOverlays$net_imagej_display_ImageDisplay$net_imagej_display_ImageDisplay$java_util_List', function (inputDisp, outputDisp, overlays) {
var bounds=this.overlayService.getSelectionBounds$net_imagej_display_ImageDisplay(inputDisp);
var toOrigin=Clazz.array(Double.TYPE, [2]);
toOrigin[0]=-bounds.x;
toOrigin[1]=-bounds.y;
var newOverlays=Clazz.new_(1,{E:"net.imagej.overlay.Overlay"},$I$(7,1));
for (var overlay, $overlay = overlays.iterator$(); $overlay.hasNext$()&&((overlay=($overlay.next$())),1);) {
if (p$1.overlayWithinBounds$net_imagej_overlay_Overlay$org_scijava_util_RealRect.apply(this, [overlay, bounds])) {
if (toOrigin[0] == 0  && toOrigin[1] == 0  ) {
newOverlays.add$TE(overlay);
} else {
var newOverlay=overlay.duplicate$();
newOverlay.move$DA(toOrigin);
newOverlays.add$TE(newOverlay);
}}}
this.overlayService.addOverlays$net_imagej_display_ImageDisplay$java_util_List(outputDisp, newOverlays);
}, p$1);

Clazz.newMeth(C$, 'overlayWithinBounds$net_imagej_overlay_Overlay$org_scijava_util_RealRect', function (overlay, bounds) {
if (overlay.realMin$I(0) < bounds.x ) return false;
if (overlay.realMin$I(1) < bounds.y ) return false;
if (overlay.realMax$I(0) > bounds.x + bounds.width ) return false;
if (overlay.realMax$I(1) > bounds.y + bounds.height ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'calcNumPlanes$JA$net_imagej_axis_AxisTypeA', function (dims, axes) {
var num=1;
for (var i=0; i < dims.length; i++) {
var type=axes[i];
if (type === $I$(3).X  || type === $I$(3).Y  ) continue;
num*=dims[i];
}
return num;
}, p$1);

Clazz.newMeth(C$, 'setDisplayRanges$net_imagej_sampler_SamplingDefinition$net_imagej_display_ImageDisplay', function (def, output) {
var input=def.getDisplay$();
var inView=this.imgDispService.getActiveDatasetView$net_imagej_display_ImageDisplay(input);
var outView=this.imgDispService.getActiveDatasetView$net_imagej_display_ImageDisplay(output);
var inputChanAxis=input.dimensionIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
var inputRanges=def.getInputRanges$();
for (var i=0; i < inView.getChannelCount$(); i++) {
var outIndex=p$1.outputColorTableNumber$java_util_List$I$I.apply(this, [inputRanges, i, inputChanAxis]);
if (outIndex >= 0) {
var min=inView.getChannelMin$I(i);
var max=inView.getChannelMax$I(i);
outView.setChannelRange$I$D$D(outIndex, min, max);
}}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.sampler.DefaultSamplerService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['datasetService','net.imagej.DatasetService',null,['org.scijava.plugin.Parameter']],['']],
  [['overlayService','net.imagej.display.OverlayService',null,['org.scijava.plugin.Parameter']],['']],
  [['imgDispService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
