(function(){var P$=Clazz.newPackage("net.imagej.display.process"),I$=[[0,'net.imagej.display.DataView']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveDataViewPreprocessor", null, 'net.imagej.display.process.SingleInputPreprocessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['dispose$','getData$','getPlanePosition$','getPreferredHeight$','getPreferredWidth$','initialize$net_imagej_Data','isCompatible$net_imagej_Data','isSelected$','rebuild$','setSelected$Z','update$'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
if (this.imageDisplayService == null ) return null;
var display=this.imageDisplayService.getActiveImageDisplay$();
return display == null  ? null : display.getActiveView$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.process.ActiveDataViewPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
