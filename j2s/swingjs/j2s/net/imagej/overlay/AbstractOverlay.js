(function(){var P$=Clazz.newPackage("net.imagej.overlay"),p$1={},I$=[[0,'net.imagej.overlay.OverlaySettings','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes','net.imagej.event.OverlayCreatedEvent','net.imagej.event.OverlayDeletedEvent','java.io.ByteArrayOutputStream','java.io.ObjectOutputStream','java.io.ByteArrayInputStream','java.io.ObjectInputStream','net.imagej.event.OverlayUpdatedEvent','net.imagej.event.OverlayRestructuredEvent',['net.imagej.overlay.Overlay','.LineStyle'],['net.imagej.overlay.Overlay','.ArrowStyle']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractOverlay", null, 'net.imagej.AbstractData', 'net.imagej.overlay.Overlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['lineWidth'],'I',['alpha'],'O',['overlayService','net.imagej.display.OverlayService','fillColor','org.scijava.util.ColorRGB','+lineColor','lineStyle','net.imagej.overlay.Overlay.LineStyle','startArrowStyle','net.imagej.overlay.Overlay.ArrowStyle','+endArrowStyle']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$net_imglib2_RealInterval', function (context, interval) {
;C$.superclazz.c$$org_scijava_Context$net_imglib2_RealInterval.apply(this,[context, interval]);C$.$init$.apply(this);
if (this.overlayService == null ) p$1.applySettings$net_imagej_overlay_OverlaySettings.apply(this, [Clazz.new_($I$(1,1))]);
 else p$1.applySettings$net_imagej_overlay_OverlaySettings.apply(this, [this.overlayService.getDefaultSettings$()]);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType$S$D,[$I$(3).X, null, 1]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType$S$D,[$I$(3).Y, null, 1]), 1);
}, 1);

Clazz.newMeth(C$, 'register$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(4,1).c$$net_imagej_overlay_Overlay,[this]));
});

Clazz.newMeth(C$, 'delete$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(5,1).c$$net_imagej_overlay_Overlay,[this]));
});

Clazz.newMeth(C$, 'getRegionOfInterest$', function () {
return null;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setAlpha$I', function (alpha) {
this.alpha=alpha;
});

Clazz.newMeth(C$, 'getFillColor$', function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'setFillColor$org_scijava_util_ColorRGB', function (fillColor) {
this.fillColor=fillColor;
});

Clazz.newMeth(C$, 'getLineColor$', function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setLineColor$org_scijava_util_ColorRGB', function (lineColor) {
this.lineColor=lineColor;
});

Clazz.newMeth(C$, 'getLineWidth$', function () {
return this.lineWidth;
});

Clazz.newMeth(C$, 'setLineWidth$D', function (lineWidth) {
this.lineWidth=lineWidth;
});

Clazz.newMeth(C$, 'getLineStyle$', function () {
return this.lineStyle;
});

Clazz.newMeth(C$, 'setLineStyle$net_imagej_overlay_Overlay_LineStyle', function (lineStyle) {
this.lineStyle=lineStyle;
});

Clazz.newMeth(C$, 'getLineStartArrowStyle$', function () {
return this.startArrowStyle;
});

Clazz.newMeth(C$, 'setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
this.startArrowStyle=style;
});

Clazz.newMeth(C$, 'getLineEndArrowStyle$', function () {
return this.endArrowStyle;
});

Clazz.newMeth(C$, 'setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
this.endArrowStyle=style;
});

Clazz.newMeth(C$, 'duplicate$', function () {
try {
var bytesOut=Clazz.new_($I$(6,1));
var objOutStream=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[bytesOut]);
objOutStream.writeObject$O(this);
objOutStream.flush$();
objOutStream.close$();
var bytesIn=Clazz.new_($I$(8,1).c$$BA,[bytesOut.toByteArray$()]);
var objInStream=Clazz.new_($I$(9,1).c$$java_io_InputStream,[bytesIn]);
var overlay=objInStream.readObject$();
objInStream.close$();
overlay.setContext$org_scijava_Context(this.getContext$());
return overlay;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'update$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(10,1).c$$net_imagej_overlay_Overlay,[this]));
});

Clazz.newMeth(C$, 'rebuild$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(11,1).c$$net_imagej_overlay_Overlay,[this]));
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.getRegionOfInterest$().realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var i=0; i < min.length; i++) min[i]=this.realMin$I(i);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
for (var i=0; i < min.numDimensions$(); i++) min.setPosition$D$I(this.realMin$I(i), i);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.getRegionOfInterest$().realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
for (var i=0; i < max.length; i++) max[i]=this.realMax$I(i);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
for (var i=0; i < max.numDimensions$(); i++) max.setPosition$D$I(this.realMax$I(i), i);

});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this.alpha);
out.writeObject$O(this.fillColor);
out.writeObject$O(this.lineColor);
out.writeDouble$D(this.lineWidth);
out.writeObject$O(this.lineStyle.toString());
out.writeObject$O(this.startArrowStyle.toString());
out.writeObject$O(this.endArrowStyle.toString());
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.alpha=$in.readInt$();
this.fillColor=$in.readObject$();
this.lineColor=$in.readObject$();
this.lineWidth=$in.readDouble$();
this.lineStyle=$I$(12).valueOf$S($in.readObject$());
this.startArrowStyle=$I$(13).valueOf$S($in.readObject$());
this.endArrowStyle=$I$(13).valueOf$S($in.readObject$());
});

Clazz.newMeth(C$, 'applySettings$net_imagej_overlay_OverlaySettings', function (settings) {
this.startArrowStyle=settings.getStartArrowStyle$();
this.endArrowStyle=settings.getEndArrowStyle$();
this.fillColor=settings.getFillColor$();
this.alpha=settings.getAlpha$();
this.lineColor=settings.getLineColor$();
this.lineWidth=settings.getLineWidth$();
this.lineStyle=settings.getLineStyle$();
}, p$1);
C$.$getAnn$ = function(){ return [
[['overlayService','net.imagej.display.OverlayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
