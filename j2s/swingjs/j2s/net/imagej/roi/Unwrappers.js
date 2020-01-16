(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'net.imglib2.roi.Mask','net.imglib2.roi.mask.integer.MaskAsRandomAccessible','net.imglib2.roi.MaskInterval','net.imglib2.roi.mask.integer.MaskIntervalAsRandomAccessibleInterval','net.imagej.roi.MaskConversionUtil','net.imglib2.RandomAccessible','net.imglib2.roi.mask.integer.RandomAccessibleAsMask','net.imglib2.RandomAccessibleInterval','net.imglib2.roi.mask.integer.RandomAccessibleIntervalAsMaskInterval','net.imglib2.roi.RealMask','net.imglib2.roi.mask.real.RealMaskAsRealRandomAccessible','net.imglib2.roi.RealMaskRealInterval','net.imglib2.roi.mask.real.RealMaskRealIntervalAsRealRandomAccessibleRealInterval','net.imglib2.RealRandomAccessible','net.imglib2.roi.mask.real.RealRandomAccessibleAsRealMask','net.imglib2.RealRandomAccessibleRealInterval','net.imglib2.roi.mask.real.RealRandomAccessibleRealIntervalAsRealMaskRealInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Unwrappers", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MaskAsRandomAccessibleUnwrapper',9],['MaskIntervalAsRandomAccessibleIntervalUnwrapper',9],['RandomAccessibleAsMaskUnwrapper',9],['RandomAccessibleIntervalAsMaskIntervalUnwrapper',9],['RealMaskAsRealRandomAccessibleUnwrapper',9],['RealMaskRealIntervalAsRealRandomAccessibleRealIntervalUnwrapper',9],['RealRandomAccessibleAsRealMaskUnwrapper',9],['RealRandomAccessibleRealIntervalAsRealMaskRealIntervalUnwrapper',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "MaskAsRandomAccessibleUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRAToMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_transform_Transform','xor$java_util_function_Predicate']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_integer_MaskAsRandomAccessible','convert$TR'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.MaskAsRandomAccessibleUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "MaskIntervalAsRandomAccessibleIntervalUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRAToMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(3),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_MaskInterval','xor$net_imglib2_roi_MaskInterval']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(4));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_integer_MaskIntervalAsRandomAccessibleInterval','convert$TR'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.MaskIntervalAsRandomAccessibleIntervalUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="10000.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RandomAccessibleAsMaskUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractMaskToRAConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(6),['randomAccess$','randomAccess$net_imglib2_Interval']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(7));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_integer_RandomAccessibleAsMask','convert$TM'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RandomAccessibleAsMaskUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RandomAccessibleIntervalAsMaskIntervalUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractMaskToRAConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(8),[]);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(9));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_integer_RandomAccessibleIntervalAsMaskInterval','convert$TM'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RandomAccessibleIntervalAsMaskIntervalUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="10000.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RealMaskAsRealRandomAccessibleUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRRAToRealMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(10),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_realtransform_RealTransform','xor$java_util_function_Predicate']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(11));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_real_RealMaskAsRealRandomAccessible','convert$TR'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RealMaskAsRealRandomAccessibleUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RealMaskRealIntervalAsRealRandomAccessibleRealIntervalUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRRAToRealMaskConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(12),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_RealMaskRealInterval','realMax$DA','realMax$net_imglib2_RealPositionable','realMin$DA','realMin$net_imglib2_RealPositionable','transform$net_imglib2_realtransform_AffineGet','xor$net_imglib2_roi_RealMaskRealInterval']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(13));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_real_RealMaskRealIntervalAsRealRandomAccessibleRealInterval','convert$TR'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RealMaskRealIntervalAsRealRandomAccessibleRealIntervalUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="10000.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RealRandomAccessibleAsRealMaskUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRealMaskToRRAConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RealRandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(14),['realRandomAccess$','realRandomAccess$net_imglib2_RealInterval']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(15));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_real_RealRandomAccessibleAsRealMask','convert$TM'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RealRandomAccessibleAsRealMaskUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Unwrappers, "RealRandomAccessibleRealIntervalAsRealMaskRealIntervalUnwrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imagej.roi.AbstractRealMaskToRRAConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RealRandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && $I$(5).isBoolType$net_imglib2_RealRandomAccessible((src).getSource$()) ;
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(16),[]);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(17));
});

Clazz.newMeth(C$, ['convert$net_imglib2_roi_mask_real_RealRandomAccessibleRealIntervalAsRealMaskRealInterval','convert$TM'], function (src) {
return src.getSource$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.Unwrappers.RealRandomAccessibleRealIntervalAsRealMaskRealIntervalUnwrapper',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="10000.0" ']]]}

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
