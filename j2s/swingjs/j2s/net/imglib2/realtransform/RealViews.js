(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.RealTransformRealRandomAccessible','net.imglib2.realtransform.InverseRealTransform','net.imglib2.realtransform.RealTransformRandomAccessible','net.imglib2.realtransform.AffineRealRandomAccessible','net.imglib2.realtransform.AffineRandomAccessible','net.imglib2.realtransform.StackingRealRandomAccessible','net.imglib2.realtransform.RealViewsSimplifyUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealViews");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'transformReal$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_InvertibleRealTransform', function (source, transformFromSource) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.InverseRealTransform"},$I$(1,1).c$$net_imglib2_RealRandomAccessible$TR,[source, Clazz.new_($I$(2,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[transformFromSource])]);
}, 1);

Clazz.newMeth(C$, 'transform$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_InvertibleRealTransform', function (source, transformFromSource) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.InverseRealTransform"},$I$(3,1).c$$net_imglib2_RealRandomAccessible$TR,[source, Clazz.new_($I$(2,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[transformFromSource])]);
}, 1);

Clazz.newMeth(C$, 'affineReal$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_AffineGet', function (source, transformFromSource) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.AffineGet"},$I$(4,1).c$$net_imglib2_RealRandomAccessible$TR,[source, transformFromSource.inverse$()]);
}, 1);

Clazz.newMeth(C$, 'affine$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_AffineGet', function (source, transformFromSource) {
return Clazz.new_(1,{T:"Object",R:"net.imglib2.realtransform.AffineGet"},$I$(5,1).c$$net_imglib2_RealRandomAccessible$TR,[source, transformFromSource.inverse$()]);
}, 1);

Clazz.newMeth(C$, 'addDimension$net_imglib2_RealRandomAccessible', function (source) {
return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_RealRandomAccessible$I,[source, 1]);
}, 1);

Clazz.newMeth(C$, 'simplify$net_imglib2_RealRandomAccessible', function (source) {
return $I$(7).simplify$net_imglib2_RealRandomAccessible(source);
}, 1);

Clazz.newMeth(C$, 'simplifyReal$net_imglib2_RealRandomAccessible', function (source) {
return $I$(7).simplifyReal$net_imglib2_RealRandomAccessible(source);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
