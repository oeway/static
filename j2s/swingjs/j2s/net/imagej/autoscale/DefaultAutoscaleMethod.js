(function(){var P$=Clazz.newPackage("net.imagej.autoscale"),I$=[[0,'net.imagej.minmax.MinMaxMethod','net.imagej.autoscale.DataRange']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAutoscaleMethod", null, 'net.imagej.autoscale.AbstractAutoscaleMethod');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pluginService','org.scijava.plugin.PluginService']]]

Clazz.newMeth(C$, 'getRange$net_imglib2_IterableInterval', function (interval) {
var methods=this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(1),['checkInput$','getErrorMessage$','getMax$','getMin$','getNumThreads$','getProcessingTime$','initialize$net_imglib2_img_Img$TT$TT','initialize$net_imglib2_IterableInterval$TT$TT','initialize$net_imglib2_RandomAccessibleInterval$TT$TT','initialize$net_imglib2_img_Img','initialize$net_imglib2_IterableInterval','initialize$net_imglib2_RandomAccessibleInterval','process$','setNumThreads$','setNumThreads$I']));
var minmax=methods.get$I(0);
minmax.initialize$net_imglib2_IterableInterval(interval);
minmax.process$();
var min=minmax.getMin$().getRealDouble$();
var max=minmax.getMax$().getRealDouble$();
if (min == max ) {
var theType=interval.firstElement$();
min=theType.getMinValue$();
max=theType.getMaxValue$();
}return Clazz.new_($I$(2,1).c$$D$D,[min, max]);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.autoscale.DefaultAutoscaleMethod',null,['org.scijava.plugin.Plugin']],['type="net.imagej.autoscale.AutoscaleMethod.class" name="Default" ']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
