(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'net.imagej.display.DataView','net.imagej.display.ImageDisplay','net.imagej.display.DatasetView','net.imagej.display.OverlayView','net.imagej.overlay.Overlay']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImageDisplayService", null, 'org.scijava.service.AbstractService', 'net.imagej.display.ImageDisplayService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','pluginService','org.scijava.plugin.PluginService','displayService','org.scijava.display.DisplayService','scriptService','org.scijava.script.ScriptService']]]

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'getPluginService$', function () {
return this.pluginService;
});

Clazz.newMeth(C$, 'getDisplayService$', function () {
return this.displayService;
});

Clazz.newMeth(C$, 'createDataView$net_imagej_Data', function (data) {
for (var dataView, $dataView = this.getDataViews$().iterator$(); $dataView.hasNext$()&&((dataView=($dataView.next$())),1);) {
if (dataView.isCompatible$net_imagej_Data(data)) {
dataView.initialize$net_imagej_Data(data);
return dataView;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data view found for data: " + data]);
});

Clazz.newMeth(C$, 'getDataViews$', function () {
return this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(1),['dispose$','getData$','getPlanePosition$','getPreferredHeight$','getPreferredWidth$','initialize$net_imagej_Data','isCompatible$net_imagej_Data','isSelected$','rebuild$','setSelected$Z','update$']));
});

Clazz.newMeth(C$, 'getActiveImageDisplay$', function () {
return this.displayService.getActiveDisplay$Class(Clazz.getClass($I$(2),['getActiveAxis$','getActiveView$','getCanvas$','getPlaneExtents$','isVisible$net_imagej_display_DataView','setActiveAxis$net_imagej_axis_AxisType']));
});

Clazz.newMeth(C$, 'getActiveDataset$', function () {
return this.getActiveDataset$net_imagej_display_ImageDisplay(this.getActiveImageDisplay$());
});

Clazz.newMeth(C$, 'getActiveDatasetView$', function () {
return this.getActiveDatasetView$net_imagej_display_ImageDisplay(this.getActiveImageDisplay$());
});

Clazz.newMeth(C$, 'getActivePosition$', function () {
return this.getActivePosition$net_imagej_display_ImageDisplay(this.getActiveImageDisplay$());
});

Clazz.newMeth(C$, 'getActiveDataset$net_imagej_display_ImageDisplay', function (display) {
var activeDatasetView=this.getActiveDatasetView$net_imagej_display_ImageDisplay(display);
return activeDatasetView == null  ? null : activeDatasetView.getData$();
});

Clazz.newMeth(C$, 'getActiveDatasetView$net_imagej_display_ImageDisplay', function (display) {
if (display == null ) return null;
var activeView=display.getActiveView$();
if (Clazz.instanceOf(activeView, "net.imagej.display.DatasetView")) {
return activeView;
}return null;
});

Clazz.newMeth(C$, 'getActivePosition$net_imagej_display_ImageDisplay', function (display) {
if (display == null ) return null;
var activeDatasetView=this.getActiveDatasetView$net_imagej_display_ImageDisplay(display);
if (activeDatasetView == null ) return null;
return activeDatasetView.getPlanePosition$();
});

Clazz.newMeth(C$, 'getImageDisplays$', function () {
return this.displayService.getDisplaysOfType$Class(Clazz.getClass($I$(2),['getActiveAxis$','getActiveView$','getCanvas$','getPlaneExtents$','isVisible$net_imagej_display_DataView','setActiveAxis$net_imagej_axis_AxisType']));
});

Clazz.newMeth(C$, 'initialize$', function () {
this.scriptService.addAlias$Class(Clazz.getClass($I$(2),['getActiveAxis$','getActiveView$','getCanvas$','getPlaneExtents$','isVisible$net_imagej_display_DataView','setActiveAxis$net_imagej_axis_AxisType']));
this.scriptService.addAlias$Class(Clazz.getClass($I$(3),['autoscale$I','getChannelCount$','getChannelMax$I','getChannelMin$I','getColor$net_imagej_ChannelCollection','getColorMode$','getColorTables$','getCompositeDimIndex$','getData$','getProjector$','getScreenImage$','resetColorTables$Z','setChannelRange$I$D$D','setChannelRanges$D$D','setColorMode$net_imagej_display_ColorMode','setColorTable$net_imglib2_display_ColorTable$I','setComposite$Z','xyPlane$','xyPlane$net_imglib2_RandomAccessibleInterval']));
this.scriptService.addAlias$Class(Clazz.getClass($I$(1),['dispose$','getData$','getPlanePosition$','getPreferredHeight$','getPreferredWidth$','initialize$net_imagej_Data','isCompatible$net_imagej_Data','isSelected$','rebuild$','setSelected$Z','update$']));
this.scriptService.addAlias$Class(Clazz.getClass($I$(4),['getData$']));
this.scriptService.addAlias$Class(Clazz.getClass($I$(5),['duplicate$','getAlpha$','getFillColor$','getLineColor$','getLineEndArrowStyle$','getLineStartArrowStyle$','getLineStyle$','getLineWidth$','getRegionOfInterest$','move$DA','rebuild$','setAlpha$I','setFillColor$org_scijava_util_ColorRGB','setLineColor$org_scijava_util_ColorRGB','setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStyle$net_imagej_overlay_Overlay_LineStyle','setLineWidth$D','update$']));
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultImageDisplayService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
