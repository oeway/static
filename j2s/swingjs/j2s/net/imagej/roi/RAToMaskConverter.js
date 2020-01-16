(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'net.imglib2.roi.Mask','net.imglib2.RandomAccessible','net.imglib2.roi.Masks']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RAToMaskConverter", null, 'net.imagej.roi.AbstractRAToMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_transform_Transform','xor$java_util_function_Predicate']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),['randomAccess$','randomAccess$net_imglib2_Interval']);
});

Clazz.newMeth(C$, ['convert$net_imglib2_RandomAccessible','convert$TR'], function (src) {
return $I$(3).toMask$net_imglib2_RandomAccessible(src);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.RAToMaskConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
