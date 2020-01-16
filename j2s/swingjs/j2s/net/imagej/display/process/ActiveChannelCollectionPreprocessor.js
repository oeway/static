(function(){var P$=Clazz.newPackage("net.imagej.display.process"),I$=[[0,'net.imagej.ChannelCollection','net.imagej.options.OptionsChannels']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveChannelCollectionPreprocessor", null, 'net.imagej.display.process.SingleInputPreprocessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService','optionsService','org.scijava.options.OptionsService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
if (this.imageDisplayService == null  || this.optionsService == null  ) return null;
var optionsChannels=this.optionsService.getOptions$Class(Clazz.getClass($I$(2)));
return optionsChannels == null  ? null : optionsChannels.getFgValues$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.process.ActiveChannelCollectionPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
