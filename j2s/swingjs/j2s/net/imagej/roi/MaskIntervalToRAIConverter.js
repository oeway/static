(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'net.imglib2.RandomAccessibleInterval','net.imglib2.roi.MaskInterval','net.imglib2.roi.Masks']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MaskIntervalToRAIConverter", null, 'net.imagej.roi.AbstractMaskToRAConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1),[]);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_MaskInterval','xor$net_imglib2_roi_MaskInterval']);
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_MaskInterval','convert$TM'], function (src) {
return $I$(3).toRandomAccessibleInterval$net_imglib2_roi_MaskInterval(src);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.MaskIntervalToRAIConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
