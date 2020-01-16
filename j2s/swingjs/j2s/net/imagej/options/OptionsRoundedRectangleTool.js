(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[[0,'org.scijava.util.Colors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsRoundedRectangleTool", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.strokeWidth=2;
this.cornerDiameter=20;
this.strokeColor=$I$(1).BLACK;
this.fillColor=$I$(1).WHITE;
this.alpha=0;
}, 1);

C$.$fields$=[['I',['strokeWidth','cornerDiameter','alpha'],'O',['strokeColor','org.scijava.util.ColorRGB','+fillColor']]]

Clazz.newMeth(C$, 'getStrokeWidth$', function () {
return this.strokeWidth;
});

Clazz.newMeth(C$, 'getCornerDiameter$', function () {
return this.cornerDiameter;
});

Clazz.newMeth(C$, 'getStrokeColor$', function () {
return this.strokeColor;
});

Clazz.newMeth(C$, 'getFillColor$', function () {
return this.fillColor;
});

Clazz.newMeth(C$, 'getFillOpacity$', function () {
return this.alpha;
});

Clazz.newMeth(C$, 'setStrokeWidth$I', function (strokeWidth) {
this.strokeWidth=strokeWidth;
});

Clazz.newMeth(C$, 'setCornerDiameter$I', function (cornerDiameter) {
this.cornerDiameter=cornerDiameter;
});

Clazz.newMeth(C$, 'setStrokeColor$org_scijava_util_ColorRGB', function (strokeColor) {
this.strokeColor=strokeColor;
});

Clazz.newMeth(C$, 'setFillColor$org_scijava_util_ColorRGB', function (fillColor) {
this.fillColor=fillColor;
});

Clazz.newMeth(C$, 'setFillOpacity$I', function (alpha) {
this.alpha=alpha;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsRoundedRectangleTool',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Rounded Rect Tool..., weight = 5)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['strokeWidth','int',null,['org.scijava.plugin.Parameter']],['label="Stroke Width" min="1" max="25" ']],
  [['cornerDiameter','.',null,['org.scijava.plugin.Parameter']],['label="Corner Diameter" min="0" max="200" ']],
  [['strokeColor','org.scijava.util.ColorRGB',null,['org.scijava.plugin.Parameter']],['label="Stroke Color" ']],
  [['fillColor','.',null,['org.scijava.plugin.Parameter']],['label="Fill Color" ']],
  [['alpha','int',null,['org.scijava.plugin.Parameter']],['label="Fill Opacity" description="The opacity or alpha of the interior of the rounded rectangle (0=transparent, 255=opaque)" style="scroll bar" min="0" max="255" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
