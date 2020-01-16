(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsWandTool", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mode="Legacy";
this.tolerance=0;
}, 1);

C$.$fields$=[['D',['tolerance'],'S',['mode']]]

Clazz.newMeth(C$, 'getMode$', function () {
return this.mode;
});

Clazz.newMeth(C$, 'getTolerance$', function () {
return this.tolerance;
});

Clazz.newMeth(C$, 'setMode$S', function (mode) {
this.mode=mode;
});

Clazz.newMeth(C$, 'setTolerance$D', function (tolerance) {
this.tolerance=tolerance;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsWandTool',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Wand Tool..., weight = 8)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['mode','String',null,['org.scijava.plugin.Parameter']],['label="Mode" choices={"Legacy"  "4-connected"  "8-connected"  } ']],
  [['tolerance','double',null,['org.scijava.plugin.Parameter']],['label="Tolerance" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
