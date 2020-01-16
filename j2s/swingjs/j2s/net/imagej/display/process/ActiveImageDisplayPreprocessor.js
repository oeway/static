(function(){var P$=Clazz.newPackage("net.imagej.display.process"),I$=[[0,'net.imagej.display.ImageDisplay']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveImageDisplayPreprocessor", null, 'net.imagej.display.process.SingleInputPreprocessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['getActiveAxis$','getActiveView$','getCanvas$','getPlaneExtents$','isVisible$net_imagej_display_DataView','setActiveAxis$net_imagej_axis_AxisType'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
if (this.imageDisplayService == null ) return null;
return this.imageDisplayService.getActiveImageDisplay$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.process.ActiveImageDisplayPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
