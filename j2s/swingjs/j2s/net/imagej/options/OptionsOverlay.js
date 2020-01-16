(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[[0,'org.scijava.util.Colors',['net.imagej.overlay.Overlay','.LineStyle'],['net.imagej.overlay.Overlay','.ArrowStyle']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsOverlay", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineColor=$I$(1).YELLOW;
this.lineWidth=1;
this.lineStyle="Solid";
this.fillColor=$I$(1).YELLOW;
this.alpha=63;
this.startLineArrowStyle="None";
this.endLineArrowStyle="None";
}, 1);

C$.$fields$=[['D',['lineWidth'],'I',['alpha'],'S',['lineStyle','startLineArrowStyle','endLineArrowStyle'],'O',['overlayService','net.imagej.display.OverlayService','lineColor','org.scijava.util.ColorRGB','+fillColor']]]

Clazz.newMeth(C$, 'run$', function () {
if (this.overlayService != null ) {
this.updateSettings$net_imagej_overlay_OverlaySettings(this.overlayService.getDefaultSettings$());
}C$.superclazz.prototype.run$.apply(this, []);
});

Clazz.newMeth(C$, 'updateSettings$net_imagej_overlay_OverlaySettings', function (settings) {
settings.setLineColor$org_scijava_util_ColorRGB(this.getLineColor$());
settings.setLineWidth$D(this.getLineWidth$());
settings.setLineStyle$net_imagej_overlay_Overlay_LineStyle(this.getLineStyle$());
settings.setFillColor$org_scijava_util_ColorRGB(this.getFillColor$());
settings.setAlpha$I(this.getAlpha$());
settings.setStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle(this.getStartArrowStyle$());
settings.setEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle(this.getEndArrowStyle$());
});

Clazz.newMeth(C$, 'setLineColor$org_scijava_util_ColorRGB', function (color) {
this.lineColor=color;
});

Clazz.newMeth(C$, 'getLineColor$', function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'setLineWidth$D', function (width) {
if (width < 0.1 ) this.lineWidth=0.1;
 else this.lineWidth=width;
});

Clazz.newMeth(C$, 'getLineWidth$', function () {
if (this.lineWidth < 0.1 ) return 0.1;
return this.lineWidth;
});

Clazz.newMeth(C$, 'setLineStyle$net_imagej_overlay_Overlay_LineStyle', function (style) {
switch (style) {
case $I$(2).DASH:
this.lineStyle="Dash";
break;
case $I$(2).DOT:
this.lineStyle="Dot";
break;
case $I$(2).DOT_DASH:
this.lineStyle="Dot-dash";
break;
case $I$(2).SOLID:
this.lineStyle="Solid";
break;
default:
this.lineStyle="None";
break;
}
});

Clazz.newMeth(C$, 'getLineStyle$', function () {
if (this.lineStyle.equals$O("Dash")) return $I$(2).DASH;
if (this.lineStyle.equals$O("Dot")) return $I$(2).DOT;
if (this.lineStyle.equals$O("Dot-dash")) return $I$(2).DOT_DASH;
if (this.lineStyle.equals$O("Solid")) return $I$(2).SOLID;
return $I$(2).NONE;
});

Clazz.newMeth(C$, 'setFillColor$org_scijava_util_ColorRGB', function (color) {
this.fillColor=color;
});

Clazz.newMeth(C$, 'getFillColor$', function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'setAlpha$I', function (alpha) {
this.alpha=alpha;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
if (style === $I$(3).ARROW ) this.startLineArrowStyle="Arrow";
 else this.startLineArrowStyle="None";
});

Clazz.newMeth(C$, 'getStartArrowStyle$', function () {
if (this.startLineArrowStyle.equals$O("Arrow")) return $I$(3).ARROW;
return $I$(3).NONE;
});

Clazz.newMeth(C$, 'setEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle', function (style) {
if (style === $I$(3).ARROW ) this.endLineArrowStyle="Arrow";
 else this.endLineArrowStyle="None";
});

Clazz.newMeth(C$, 'getEndArrowStyle$', function () {
if (this.endLineArrowStyle.equals$O("Arrow")) return $I$(3).ARROW;
return $I$(3).NONE;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsOverlay',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Image, weight = 2.0, mnemonic = i)"  "@Menu(label = Overlay, mnemonic = o)"  "@Menu(label = Overlay Options...)"  } label="Default Overlay Settings" attrs={"@Attr(name = no-legacy)"  } ']],
  [['overlayService','net.imagej.display.OverlayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['lineColor','org.scijava.util.ColorRGB',null,['org.scijava.plugin.Parameter']],['label="Line color" ']],
  [['lineWidth','double',null,['org.scijava.plugin.Parameter']],['label="Line width" min="0.1" ']],
  [['lineStyle','String',null,['org.scijava.plugin.Parameter']],['label="Line style" choices={"Solid"  "Dash"  "Dot"  "Dot-dash"  "None"  } ']],
  [['fillColor','org.scijava.util.ColorRGB',null,['org.scijava.plugin.Parameter']],['label="Fill color" ']],
  [['alpha','int',null,['org.scijava.plugin.Parameter']],['label="Fill opacity" description="The opacity or alpha of the interior of the overlay (0=transparent, 255=opaque)" style="scroll bar" min="0" max="255" persistKey="alpha.1" ']],
  [['startLineArrowStyle','String',null,['org.scijava.plugin.Parameter']],['label="Line start arrow style" description="The arrow style at the starting point of a line or other path" choices={"None"  "Arrow"  } ']],
  [['endLineArrowStyle','.',null,['org.scijava.plugin.Parameter']],['label="Line end arrow style" description="The arrow style at the end point of a line or other path" choices={"None"  "Arrow"  } ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
