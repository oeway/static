(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,['net.imagej.overlay.Overlay','.LineStyle'],'org.scijava.util.Colors',['net.imagej.overlay.Overlay','.ArrowStyle']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OverlaySettings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineWidth=1.0;
this.lineStyle=$I$(1).SOLID;
this.lineColor=$I$(2).YELLOW;
this.fillColor=$I$(2).LIME;
this.alpha=0;
this.startArrowStyle=$I$(3).NONE;
this.endArrowStyle=$I$(3).NONE;
}, 1);

C$.$fields$=[['D',['lineWidth'],'I',['alpha'],'O',['lineStyle','net.imagej.overlay.Overlay.LineStyle','lineColor','org.scijava.util.ColorRGB','+fillColor','startArrowStyle','net.imagej.overlay.Overlay.ArrowStyle','+endArrowStyle']]]

Clazz.newMeth(C$, 'getLineWidth$', function () {
return this.lineWidth;
});

Clazz.newMeth(C$, 'setLineWidth$D', function (width) {
this.lineWidth=width;
});

Clazz.newMeth(C$, 'getLineStyle$', function () {
return this.lineStyle;
});

Clazz.newMeth(C$, 'setLineStyle$net_imagej_overlay_Overlay_LineStyle', function (style) {
this.lineStyle=style;
});

Clazz.newMeth(C$, 'getLineColor$', function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setLineColor$org_scijava_util_ColorRGB', function (c) {
this.lineColor=c;
});

Clazz.newMeth(C$, 'getFillColor$', function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'setFillColor$org_scijava_util_ColorRGB', function (c) {
this.fillColor=c;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setAlpha$I', function (alpha) {
this.alpha=alpha;
});

Clazz.newMeth(C$, 'getStartArrowStyle$', function () {
return this.startArrowStyle;
});

Clazz.newMeth(C$, 'setStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
this.startArrowStyle=style;
});

Clazz.newMeth(C$, 'getEndArrowStyle$', function () {
return this.endArrowStyle;
});

Clazz.newMeth(C$, 'setEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
this.endArrowStyle=style;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
