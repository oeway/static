(function(){var P$=Clazz.newPackage("net.imagej.display"),p$1={},p$2={},I$=[[0,'net.imagej.overlay.Overlay','java.util.ArrayList','net.imagej.display.ImageDisplay','org.scijava.util.RealRect','net.imagej.overlay.OverlaySettings','net.imagej.options.OptionsOverlay',['net.imagej.display.DefaultOverlayService','.OverlayOutliner'],['net.imagej.display.DefaultOverlayService','.OverlayFiller'],'net.imagej.display.OverlayInfoList','net.imagej.DrawingTool','net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultOverlayService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'net.imagej.display.OverlayService');
C$.$classes$=[['Drawer',10],['OverlayOutliner',10],['OverlayFiller',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['objectService','org.scijava.object.ObjectService','displayService','org.scijava.display.DisplayService','imageDisplayService','net.imagej.display.ImageDisplayService','optionsService','org.scijava.options.OptionsService','renderingService','net.imagej.render.RenderingService','defaultSettings','net.imagej.overlay.OverlaySettings','overlayInfo','net.imagej.display.OverlayInfoList']]]

Clazz.newMeth(C$, 'getObjectService$', function () {
return this.objectService;
});

Clazz.newMeth(C$, 'getOverlays$', function () {
return this.objectService.getObjects$Class(Clazz.getClass($I$(1),['duplicate$','getAlpha$','getFillColor$','getLineColor$','getLineEndArrowStyle$','getLineStartArrowStyle$','getLineStyle$','getLineWidth$','getRegionOfInterest$','move$DA','rebuild$','setAlpha$I','setFillColor$org_scijava_util_ColorRGB','setLineColor$org_scijava_util_ColorRGB','setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStyle$net_imagej_overlay_Overlay_LineStyle','setLineWidth$D','update$']));
});

Clazz.newMeth(C$, 'getOverlays$net_imagej_display_ImageDisplay$Z', function (display, selectedOnly) {
var overlays=Clazz.new_(1,{E:"net.imagej.overlay.Overlay"},$I$(2,1));
for (var view, $view = display.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (selectedOnly && !view.isSelected$() ) {
continue;
}var data=view.getData$();
if (!(Clazz.instanceOf(data, "net.imagej.overlay.Overlay"))) continue;
var overlay=data;
overlays.add$TE(overlay);
}
return overlays;
});

Clazz.newMeth(C$, 'getOverlays$net_imagej_display_ImageDisplay', function (display) {
return this.getOverlays$net_imagej_display_ImageDisplay$Z(display, false);
});

Clazz.newMeth(C$, 'addOverlays$net_imagej_display_ImageDisplay$java_util_List', function (display, overlays) {
for (var overlay, $overlay = overlays.iterator$(); $overlay.hasNext$()&&((overlay=($overlay.next$())),1);) {
display.display$O(overlay);
}
});

Clazz.newMeth(C$, 'removeOverlay$net_imagej_display_ImageDisplay$net_imagej_overlay_Overlay', function (display, overlay) {
var overlayViews=Clazz.new_(1,{E:"net.imagej.display.DataView"},$I$(2,1));
var views=display;
for (var view, $view = views.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var data=view.getData$();
if (data === overlay ) overlayViews.add$TE(view);
}
for (var view, $view = overlayViews.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
display.remove$O(view);
view.dispose$();
}
display.update$();
});

Clazz.newMeth(C$, 'removeOverlay$net_imagej_overlay_Overlay', function (overlay) {
var imgDisps=this.objectService.getObjects$Class(Clazz.getClass($I$(3),['getActiveAxis$','getActiveView$','getCanvas$','getPlaneExtents$','isVisible$net_imagej_display_DataView','setActiveAxis$net_imagej_axis_AxisType']));
for (var disp, $disp = imgDisps.iterator$(); $disp.hasNext$()&&((disp=($disp.next$())),1);) this.removeOverlay$net_imagej_display_ImageDisplay$net_imagej_overlay_Overlay(disp, overlay);

});

Clazz.newMeth(C$, 'getSelectionBounds$net_imagej_display_ImageDisplay', function (display) {
var xMin=Infinity;
var xMax=-Infinity;
var yMin=Infinity;
var yMax=-Infinity;
for (var view, $view = display.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (!view.isSelected$()) continue;
var data=view.getData$();
var min0=data.realMin$I(0);
var max0=data.realMax$I(0);
var min1=data.realMin$I(1);
var max1=data.realMax$I(1);
if (min0 < xMin ) xMin=min0;
if (max0 > xMax ) xMax=max0;
if (min1 < yMin ) yMin=min1;
if (max1 > yMax ) yMax=max1;
}
var totalMinX=display.realMin$I(0);
var totalMaxX=display.realMax$I(0);
var totalMinY=display.realMin$I(1);
var totalMaxY=display.realMax$I(1);
if (xMin < totalMinX  || xMin > totalMaxX  ) xMin=totalMinX;
if (xMax < totalMinX  || xMax > totalMaxX  ) xMax=totalMaxX;
if (yMin < totalMinY  || yMin > totalMaxY  ) yMin=totalMinY;
if (yMax < totalMinY  || yMax > totalMaxY  ) yMax=totalMaxY;
if (xMin > xMax ) {
var temp=xMin;
xMin=xMax;
xMax=temp;
}if (yMin > yMax ) {
var temp=yMin;
yMin=yMax;
yMax=temp;
}return Clazz.new_($I$(4,1).c$$D$D$D$D,[xMin, yMin, xMax - xMin, yMax - yMin]);
});

Clazz.newMeth(C$, 'getDefaultSettings$', function () {
if (this.defaultSettings == null ) {
this.defaultSettings=Clazz.new_($I$(5,1));
var overlayOptions=this.optionsService.getOptions$Class(Clazz.getClass($I$(6)));
overlayOptions.updateSettings$net_imagej_overlay_OverlaySettings(this.defaultSettings);
}return this.defaultSettings;
});

Clazz.newMeth(C$, 'drawOverlay$net_imagej_overlay_Overlay$net_imagej_display_ImageDisplay$net_imagej_ChannelCollection', function (o, display, channels) {
p$2.draw$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection$net_imagej_display_DefaultOverlayService_Drawer.apply(this, [o, this.imageDisplayService.getActiveDataset$net_imagej_display_ImageDisplay(display), this.imageDisplayService.getActivePosition$net_imagej_display_ImageDisplay(display), channels, Clazz.new_($I$(7,1))]);
});

Clazz.newMeth(C$, 'drawOverlay$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection', function (o, ds, position, channels) {
p$2.draw$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection$net_imagej_display_DefaultOverlayService_Drawer.apply(this, [o, ds, position, channels, Clazz.new_($I$(7,1))]);
});

Clazz.newMeth(C$, 'fillOverlay$net_imagej_overlay_Overlay$net_imagej_display_ImageDisplay$net_imagej_ChannelCollection', function (o, display, channels) {
p$2.draw$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection$net_imagej_display_DefaultOverlayService_Drawer.apply(this, [o, this.imageDisplayService.getActiveDataset$net_imagej_display_ImageDisplay(display), this.imageDisplayService.getActivePosition$net_imagej_display_ImageDisplay(display), channels, Clazz.new_($I$(8,1))]);
});

Clazz.newMeth(C$, 'fillOverlay$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection', function (o, ds, position, channels) {
p$2.draw$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection$net_imagej_display_DefaultOverlayService_Drawer.apply(this, [o, ds, position, channels, Clazz.new_($I$(8,1))]);
});

Clazz.newMeth(C$, 'getFirstDisplay$net_imagej_overlay_Overlay', function (o) {
var displays=this.displayService.getDisplays$();
for (var display, $display = displays.iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
if (Clazz.instanceOf(display, "net.imagej.display.ImageDisplay")) {
var displayOverlays=this.getOverlays$net_imagej_display_ImageDisplay(display);
if (displayOverlays.contains$O(o)) return display;
}}
return null;
});

Clazz.newMeth(C$, 'getDisplays$net_imagej_overlay_Overlay', function (o) {
var containers=Clazz.new_(1,{E:"net.imagej.display.ImageDisplay"},$I$(2,1));
var displays=this.displayService.getDisplays$();
for (var display, $display = displays.iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
if (!(Clazz.instanceOf(display, "net.imagej.display.ImageDisplay"))) continue;
var imageDisplay=display;
for (var view, $view = imageDisplay.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var data=view.getData$();
if (!(Clazz.instanceOf(data, "net.imagej.overlay.Overlay"))) continue;
var overlay=data;
if (overlay === o ) containers.add$TE(imageDisplay);
}
}
return containers;
});

Clazz.newMeth(C$, 'getActiveOverlay$net_imagej_display_ImageDisplay', function (disp) {
for (var view, $view = disp.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (view.isSelected$() && Clazz.instanceOf(view, "net.imagej.display.OverlayView") ) {
return (view).getData$();
}}
return null;
});

Clazz.newMeth(C$, 'getOverlayInfo$', function () {
if (this.overlayInfo == null ) {
this.overlayInfo=Clazz.new_($I$(9,1));
}return this.overlayInfo;
});

Clazz.newMeth(C$, 'divideCompositeOverlay$net_imagej_overlay_CompositeOverlay', function (overlay) {
var subcomponents=overlay.getSubcomponents$();
var owners=this.getDisplays$net_imagej_overlay_Overlay(overlay);
for (var owner, $owner = owners.iterator$(); $owner.hasNext$()&&((owner=($owner.next$())),1);) {
var changes=false;
var displayOverlays=this.getOverlays$net_imagej_display_ImageDisplay(owner);
for (var subcomponent, $subcomponent = subcomponents.iterator$(); $subcomponent.hasNext$()&&((subcomponent=($subcomponent.next$())),1);) {
if (!displayOverlays.contains$O(subcomponent)) {
owner.display$O(subcomponent);
changes=true;
}}
if (changes) owner.update$();
}
this.removeOverlay$net_imagej_overlay_Overlay(overlay);
});

Clazz.newMeth(C$, 'draw$net_imagej_overlay_Overlay$net_imagej_Dataset$net_imagej_Position$net_imagej_ChannelCollection$net_imagej_display_DefaultOverlayService_Drawer', function (o, ds, position, channels, drawer) {
if (ds == null ) return;
var tool=Clazz.new_($I$(10,1).c$$net_imagej_Dataset$net_imagej_render_RenderingService,[ds, this.renderingService]);
var pp=Clazz.array(Long.TYPE, [position.numDimensions$()]);
position.localize$JA(pp);
var fullPos=Clazz.array(Long.TYPE, [pp.length + 2]);
for (var i=2; i < fullPos.length; i++) fullPos[i]=pp[i - 2];

tool.setPosition$JA(fullPos);
tool.setChannels$net_imagej_ChannelCollection(channels);
drawer.draw$(o, tool);
ds.update$();
}, p$2);

Clazz.newMeth(C$, 'iterableInterval$net_imglib2_RealRandomAccessibleRealInterval', function (realInterval) {
var raster=$I$(11).raster$net_imglib2_RealRandomAccessible(realInterval);
var interval=$I$(11).interval$net_imglib2_RandomAccessible$JA$JA(raster, C$.findMin$net_imglib2_RealInterval(realInterval), C$.findMax$net_imglib2_RealInterval(realInterval));
return $I$(11).iterable$net_imglib2_RandomAccessibleInterval(interval);
}, 1);

Clazz.newMeth(C$, 'findMin$net_imglib2_RealInterval', function (realInterval) {
var boundMin=Clazz.array(Long.TYPE, [realInterval.numDimensions$()]);
for (var i=0; i < boundMin.length; i++) {
boundMin[i]=(Math.floor(realInterval.realMin$I(i))|0);
}
return boundMin;
}, 1);

Clazz.newMeth(C$, 'findMax$net_imglib2_RealInterval', function (realInterval) {
var boundMax=Clazz.array(Long.TYPE, [realInterval.numDimensions$()]);
for (var i=0; i < boundMax.length; i++) {
boundMax[i]=(Math.ceil(realInterval.realMax$I(i))|0);
}
return boundMax;
}, 1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultOverlayService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['']],
  [['renderingService','net.imagej.render.RenderingService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DefaultOverlayService, "Drawer", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultOverlayService, "OverlayOutliner", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imagej.display.DefaultOverlayService','net.imagej.display.DefaultOverlayService.Drawer']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['draw$net_imagej_overlay_Overlay$net_imagej_DrawingTool','draw$'], function (o, tool) {
var region=o.getRegionOfInterest$();
var ii=P$.DefaultOverlayService.iterableInterval$net_imglib2_RealRandomAccessibleRealInterval(region);
var max=Clazz.array(Long.TYPE, [region.numDimensions$()]);
ii.max$JA(max);
var cursor=ii.localizingCursor$();
var accessor=region.realRandomAccess$();
var pos=Clazz.array(Long.TYPE, [region.numDimensions$()]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$JA(pos);
accessor.setPosition$JA(pos);
if (accessor.get$().get$() && p$1.isBorderPixel$net_imglib2_RealRandomAccess$JA$J$J.apply(this, [accessor, pos, max[0], max[1]]) ) {
tool.drawPixel$J$J(pos[0], pos[1]);
}}
});

Clazz.newMeth(C$, 'isBorderPixel$net_imglib2_RealRandomAccess$JA$J$J', function (accessor, pos, maxX, maxY) {
if (pos[0] == 0) return true;
if (pos[0] == maxX) return true;
if (pos[1] == 0) return true;
if (pos[1] == maxY) return true;
accessor.setPosition$J$I(pos[0] - 1, 0);
if (!accessor.get$().get$()) return true;
accessor.setPosition$J$I(pos[0] + 1, 0);
if (!accessor.get$().get$()) return true;
accessor.setPosition$J$I(pos[0], 0);
accessor.setPosition$J$I(pos[1] - 1, 1);
if (!accessor.get$().get$()) return true;
accessor.setPosition$J$I(pos[1] + 1, 1);
if (!accessor.get$().get$()) return true;
return false;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultOverlayService, "OverlayFiller", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imagej.display.DefaultOverlayService','net.imagej.display.DefaultOverlayService.Drawer']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['draw$net_imagej_overlay_Overlay$net_imagej_DrawingTool','draw$'], function (o, tool) {
var region=o.getRegionOfInterest$();
var cursor=P$.DefaultOverlayService.iterableInterval$net_imglib2_RealRandomAccessibleRealInterval(region).localizingCursor$();
var pos=Clazz.array(Long.TYPE, [region.numDimensions$()]);
while (cursor.hasNext$()){
cursor.fwd$();
cursor.localize$JA(pos);
if (cursor.get$().get$()) tool.drawPixel$J$J(pos[0], pos[1]);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
