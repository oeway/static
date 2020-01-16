(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsConversions", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scaleWhenConverting=true;
this.weightedRgbConversions=false;
}, 1);

C$.$fields$=[['Z',['scaleWhenConverting','weightedRgbConversions']]]

Clazz.newMeth(C$, 'isScaleWhenConverting$', function () {
return this.scaleWhenConverting;
});

Clazz.newMeth(C$, 'isWeightedRgbConversions$', function () {
return this.weightedRgbConversions;
});

Clazz.newMeth(C$, 'setScaleWhenConverting$Z', function (scaleWhenConverting) {
this.scaleWhenConverting=scaleWhenConverting;
});

Clazz.newMeth(C$, 'setWeightedRgbConversions$Z', function (weightedRgbConversions) {
this.weightedRgbConversions=weightedRgbConversions;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsConversions',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Conversions..., weight = 11)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['scaleWhenConverting','boolean',null,['org.scijava.plugin.Parameter']],['label="Scale When Converting" ']],
  [['weightedRgbConversions','.',null,['org.scijava.plugin.Parameter']],['label="Weighted RGB Conversions" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
