(function(){var P$=Clazz.newPackage("net.imagej.display.process"),I$=[[0,'net.imagej.display.DatasetView']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveDatasetViewPreprocessor", null, 'net.imagej.display.process.SingleInputPreprocessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['autoscale$I','getChannelCount$','getChannelMax$I','getChannelMin$I','getColor$net_imagej_ChannelCollection','getColorMode$','getColorTables$','getCompositeDimIndex$','getData$','getProjector$','getScreenImage$','resetColorTables$Z','setChannelRange$I$D$D','setChannelRanges$D$D','setColorMode$net_imagej_display_ColorMode','setColorTable$net_imglib2_display_ColorTable$I','setComposite$Z','xyPlane$','xyPlane$net_imglib2_RandomAccessibleInterval'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
if (this.imageDisplayService == null ) return null;
return this.imageDisplayService.getActiveDatasetView$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.process.ActiveDatasetViewPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
