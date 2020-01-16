(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'net.imagej.overlay.Overlay']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultOverlayView", null, 'net.imagej.display.AbstractDataView', 'net.imagej.display.OverlayView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCompatible$net_imagej_Data', function (data) {
return data != null  && Clazz.getClass($I$(1),['duplicate$','getAlpha$','getFillColor$','getLineColor$','getLineEndArrowStyle$','getLineStartArrowStyle$','getLineStyle$','getLineWidth$','getRegionOfInterest$','move$DA','rebuild$','setAlpha$I','setFillColor$org_scijava_util_ColorRGB','setLineColor$org_scijava_util_ColorRGB','setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle','setLineStyle$net_imagej_overlay_Overlay_LineStyle','setLineWidth$D','update$']).isAssignableFrom$Class(data.getClass$()) ;
});

Clazz.newMeth(C$, 'getData$', function () {
return C$.superclazz.prototype.getData$.apply(this, []);
});

Clazz.newMeth(C$, 'getPreferredWidth$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPreferredHeight$', function () {
return 0;
});

Clazz.newMeth(C$, 'update$', function () {
});

Clazz.newMeth(C$, 'rebuild$', function () {
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultOverlayView',null,['org.scijava.plugin.Plugin']],['type="net.imagej.display.DataView.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
