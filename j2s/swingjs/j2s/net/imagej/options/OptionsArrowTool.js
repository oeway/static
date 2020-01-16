(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[[0,'org.scijava.util.Colors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsArrowTool", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.arrowWidth=2;
this.arrowSize=10;
this.arrowColor=$I$(1).BLACK;
this.arrowStyle="Filled";
this.arrowOutline=false;
this.arrowDoubleHeaded=false;
}, 1);

C$.$fields$=[['Z',['arrowOutline','arrowDoubleHeaded'],'I',['arrowWidth','arrowSize'],'S',['arrowStyle'],'O',['arrowColor','org.scijava.util.ColorRGB']]]

Clazz.newMeth(C$, 'getArrowWidth$', function () {
return this.arrowWidth;
});

Clazz.newMeth(C$, 'getArrowSize$', function () {
return this.arrowSize;
});

Clazz.newMeth(C$, 'getArrowColor$', function () {
return this.arrowColor;
});

Clazz.newMeth(C$, 'getArrowStyle$', function () {
return this.arrowStyle;
});

Clazz.newMeth(C$, 'isArrowOutline$', function () {
return this.arrowOutline;
});

Clazz.newMeth(C$, 'isArrowDoubleHeaded$', function () {
return this.arrowDoubleHeaded;
});

Clazz.newMeth(C$, 'setArrowWidth$I', function (arrowWidth) {
this.arrowWidth=arrowWidth;
});

Clazz.newMeth(C$, 'setArrowSize$I', function (arrowSize) {
this.arrowSize=arrowSize;
});

Clazz.newMeth(C$, 'setArrowColor$org_scijava_util_ColorRGB', function (arrowColor) {
this.arrowColor=arrowColor;
});

Clazz.newMeth(C$, 'setArrowStyle$S', function (arrowStyle) {
this.arrowStyle=arrowStyle;
});

Clazz.newMeth(C$, 'setArrowOutline$Z', function (arrowOutline) {
this.arrowOutline=arrowOutline;
});

Clazz.newMeth(C$, 'setArrowDoubleHeaded$Z', function (arrowDoubleHeaded) {
this.arrowDoubleHeaded=arrowDoubleHeaded;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsArrowTool',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Arrow Tool..., weight = 6)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['arrowWidth','int',null,['org.scijava.plugin.Parameter']],['label="Width" min="1" max="50" ']],
  [['arrowSize','.',null,['org.scijava.plugin.Parameter']],['label="Size" min="0" max="30" ']],
  [['arrowColor','org.scijava.util.ColorRGB',null,['org.scijava.plugin.Parameter']],['label="Color" ']],
  [['arrowStyle','String',null,['org.scijava.plugin.Parameter']],['label="Style" choices={"Filled"  "Notched"  "Open"  "Headless"  } ']],
  [['arrowOutline','boolean',null,['org.scijava.plugin.Parameter']],['label="Outline" ']],
  [['arrowDoubleHeaded','.',null,['org.scijava.plugin.Parameter']],['label="Double headed" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
