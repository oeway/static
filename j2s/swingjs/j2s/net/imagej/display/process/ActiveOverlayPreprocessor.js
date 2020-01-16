(function(){var P$=Clazz.newPackage("net.imagej.display.process"),I$=[[0,'net.imagej.overlay.Overlay']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveOverlayPreprocessor", null, 'net.imagej.display.process.SingleInputPreprocessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService','overlayService','net.imagej.display.OverlayService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['duplicate$','getAlpha$','getFillColor$','getLineColor$','getLineEndArrowStyle$','getLineStartArrowStyle$','getLineStyle$','getLineWidth$','getRegionOfInterest$','move$DA','rebuild$','setAlpha$I','setFillColor$org_scijava_util_ColorRGB','setLineColor$org_scijava_util_ColorRGB','setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStyle$net_imagej_overlay_Overlay_LineStyle','setLineWidth$D','update$'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
if (this.imageDisplayService == null ) return null;
var display=this.imageDisplayService.getActiveImageDisplay$();
return display == null  ? null : this.overlayService.getActiveOverlay$net_imagej_display_ImageDisplay(display);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.process.ActiveOverlayPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['overlayService','net.imagej.display.OverlayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
