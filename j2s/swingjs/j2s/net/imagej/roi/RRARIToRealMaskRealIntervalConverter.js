(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'net.imglib2.roi.RealMaskRealInterval','net.imglib2.RealRandomAccessibleRealInterval','net.imglib2.roi.Masks']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RRARIToRealMaskRealIntervalConverter", null, 'net.imagej.roi.AbstractRRAToRealMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_RealMaskRealInterval','realMax$DA','realMax$net_imglib2_RealPositionable','realMin$DA','realMin$net_imglib2_RealPositionable','transform$net_imglib2_realtransform_AffineGet','xor$net_imglib2_roi_RealMaskRealInterval']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),[]);
});

Clazz.newMeth(C$, ['convert$net_imglib2_RealRandomAccessibleRealInterval','convert$TR'], function (src) {
return $I$(3).toRealMaskRealInterval$net_imglib2_RealRandomAccessibleRealInterval(src);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.RRARIToRealMaskRealIntervalConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
