(function(){var P$=Clazz.newPackage("net.imagej.command"),p$1={},I$=[[0,'net.imagej.display.DatasetView','net.imagej.Dataset']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InteractiveImageCommand", null, 'org.scijava.command.InteractiveCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'c$$SA', function (listenerNames) {
;C$.superclazz.c$$SA.apply(this,[listenerNames]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateInput$org_scijava_module_ModuleItem', function (item) {
var viewItem=p$1.asView$org_scijava_module_ModuleItem.apply(this, [item]);
var datasetItem=p$1.asDataset$org_scijava_module_ModuleItem.apply(this, [item]);
if (viewItem != null ) p$1.updateView$org_scijava_module_ModuleItem.apply(this, [viewItem]);
 else if (datasetItem != null ) p$1.updateDataset$org_scijava_module_ModuleItem.apply(this, [datasetItem]);
 else C$.superclazz.prototype.updateInput$org_scijava_module_ModuleItem.apply(this, [item]);
});

Clazz.newMeth(C$, 'asView$org_scijava_module_ModuleItem', function (item) {
return this.asType$org_scijava_module_ModuleItem$Class(item, Clazz.getClass($I$(1),['autoscale$I','getChannelCount$','getChannelMax$I','getChannelMin$I','getColor$net_imagej_ChannelCollection','getColorMode$','getColorTables$','getCompositeDimIndex$','getData$','getProjector$','getScreenImage$','resetColorTables$Z','setChannelRange$I$D$D','setChannelRanges$D$D','setColorMode$net_imagej_display_ColorMode','setColorTable$net_imglib2_display_ColorTable$I','setComposite$Z','xyPlane$','xyPlane$net_imglib2_RandomAccessibleInterval']));
}, p$1);

Clazz.newMeth(C$, 'asDataset$org_scijava_module_ModuleItem', function (item) {
return this.asType$org_scijava_module_ModuleItem$Class(item, Clazz.getClass($I$(2),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']));
}, p$1);

Clazz.newMeth(C$, 'updateView$org_scijava_module_ModuleItem', function (item) {
this.update$org_scijava_module_ModuleItem$TT(item, this.imageDisplayService.getActiveDatasetView$());
}, p$1);

Clazz.newMeth(C$, 'updateDataset$org_scijava_module_ModuleItem', function (item) {
this.update$org_scijava_module_ModuleItem$TT(item, this.imageDisplayService.getActiveDataset$());
}, p$1);
C$.$getAnn$ = function(){ return [
[['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
