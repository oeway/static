(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.mask.integer.MaskAsRandomAccessible','net.imglib2.type.logic.BoolType','net.imglib2.roi.mask.integer.MaskIntervalAsRandomAccessibleInterval','net.imglib2.roi.mask.real.RealMaskAsRealRandomAccessible','net.imglib2.roi.mask.real.RealMaskRealIntervalAsRealRandomAccessibleRealInterval','net.imglib2.roi.mask.integer.RandomAccessibleAsMask','net.imglib2.roi.mask.integer.RandomAccessibleIntervalAsMaskInterval','net.imglib2.roi.mask.real.RealRandomAccessibleAsRealMask','net.imglib2.roi.mask.real.RealRandomAccessibleRealIntervalAsRealMaskRealInterval','net.imglib2.roi.mask.integer.DefaultMask','net.imglib2.roi.BoundaryType','net.imglib2.roi.KnownConstant','net.imglib2.roi.mask.integer.DefaultMaskInterval','net.imglib2.roi.mask.real.DefaultRealMask','net.imglib2.roi.mask.real.DefaultRealMaskRealInterval','java.util.Arrays','net.imglib2.FinalInterval','net.imglib2.FinalRealInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Masks");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_Mask$java_util_function_Predicate', function (left, right) {
return left.and$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_MaskInterval$java_util_function_Predicate', function (left, right) {
return left.and$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'or$net_imglib2_roi_Mask$java_util_function_Predicate', function (left, right) {
return left.or$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'or$net_imglib2_roi_MaskInterval$net_imglib2_roi_MaskInterval', function (left, right) {
return left.or$net_imglib2_roi_MaskInterval(right);
}, 1);

Clazz.newMeth(C$, 'xor$net_imglib2_roi_Mask$java_util_function_Predicate', function (left, right) {
return left.xor$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'xor$net_imglib2_roi_MaskInterval$net_imglib2_roi_MaskInterval', function (left, right) {
return left.xor$net_imglib2_roi_MaskInterval(right);
}, 1);

Clazz.newMeth(C$, 'minus$net_imglib2_roi_Mask$java_util_function_Predicate', function (left, right) {
return left.minus$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'minus$net_imglib2_roi_MaskInterval$java_util_function_Predicate', function (left, right) {
return left.minus$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'negate$net_imglib2_roi_Mask', function (arg) {
return arg.negate$();
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_RealMask$java_util_function_Predicate', function (left, right) {
return left.and$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_RealMaskRealInterval$java_util_function_Predicate', function (left, right) {
return left.and$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'or$net_imglib2_roi_RealMask$java_util_function_Predicate', function (left, right) {
return left.or$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'or$net_imglib2_roi_RealMaskRealInterval$net_imglib2_roi_RealMaskRealInterval', function (left, right) {
return left.or$net_imglib2_roi_RealMaskRealInterval(right);
}, 1);

Clazz.newMeth(C$, 'xor$net_imglib2_roi_RealMask$java_util_function_Predicate', function (left, right) {
return left.xor$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'xor$net_imglib2_roi_RealMaskRealInterval$net_imglib2_roi_RealMaskRealInterval', function (left, right) {
return left.xor$net_imglib2_roi_RealMaskRealInterval(right);
}, 1);

Clazz.newMeth(C$, 'minus$net_imglib2_roi_RealMask$java_util_function_Predicate', function (left, right) {
return left.minus$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'minus$net_imglib2_roi_RealMaskRealInterval$java_util_function_Predicate', function (left, right) {
return left.minus$java_util_function_Predicate(right);
}, 1);

Clazz.newMeth(C$, 'negate$net_imglib2_roi_RealMask', function (arg) {
return arg.negate$();
}, 1);

Clazz.newMeth(C$, 'toRandomAccessible$net_imglib2_roi_Mask', function (mask) {
if (Clazz.instanceOf(mask, "net.imglib2.roi.MaskInterval")) return C$.toRandomAccessibleInterval$net_imglib2_roi_MaskInterval(mask);
return Clazz.new_(1,{B:"net.imglib2.type.logic.BoolType"},$I$(1,1).c$$net_imglib2_roi_Mask$TB,[mask, Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'toRandomAccessibleInterval$net_imglib2_roi_MaskInterval', function (mask) {
return Clazz.new_(1,{B:"net.imglib2.type.logic.BoolType"},$I$(3,1).c$$net_imglib2_roi_MaskInterval$TB,[mask, Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'toRealRandomAccessible$net_imglib2_roi_RealMask', function (mask) {
if (Clazz.instanceOf(mask, "net.imglib2.roi.RealMaskRealInterval")) return C$.toRealRandomAccessibleRealInterval$net_imglib2_roi_RealMaskRealInterval(mask);
return Clazz.new_(1,{B:"net.imglib2.type.logic.BoolType"},$I$(4,1).c$$net_imglib2_roi_RealMask$TB,[mask, Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'toRealRandomAccessibleRealInterval$net_imglib2_roi_RealMaskRealInterval', function (mask) {
return Clazz.new_(1,{B:"net.imglib2.type.logic.BoolType"},$I$(5,1).c$$net_imglib2_roi_RealMaskRealInterval$TB,[mask, Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'toMask$net_imglib2_RandomAccessible', function (ra) {
if (Clazz.instanceOf(ra, "net.imglib2.RandomAccessibleInterval")) return C$.toMaskInterval$net_imglib2_RandomAccessibleInterval(ra);
return Clazz.new_(1,{B:"Object"},$I$(6,1).c$$net_imglib2_RandomAccessible,[ra]);
}, 1);

Clazz.newMeth(C$, 'toMaskInterval$net_imglib2_RandomAccessibleInterval', function (rai) {
return Clazz.new_(1,{B:"Object"},$I$(7,1).c$$net_imglib2_RandomAccessibleInterval,[rai]);
}, 1);

Clazz.newMeth(C$, 'toRealMask$net_imglib2_RealRandomAccessible', function (rra) {
if (Clazz.instanceOf(rra, "net.imglib2.RealRandomAccessibleRealInterval")) return C$.toRealMaskRealInterval$net_imglib2_RealRandomAccessibleRealInterval(rra);
return Clazz.new_(1,{B:"Object"},$I$(8,1).c$$net_imglib2_RealRandomAccessible,[rra]);
}, 1);

Clazz.newMeth(C$, 'toRealMaskRealInterval$net_imglib2_RealRandomAccessibleRealInterval', function (rrari) {
return Clazz.new_(1,{B:"Object"},$I$(9,1).c$$net_imglib2_RealRandomAccessibleRealInterval,[rrari]);
}, 1);

Clazz.newMeth(C$, 'emptyMask$I', function (numDims) {
return Clazz.new_($I$(10,1).c$$I$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[numDims, $I$(11).UNSPECIFIED, (P$.Masks$lambda1$||(P$.Masks$lambda1$=(((P$.Masks$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.Localizable"},P$.Masks$lambda1.$init$, [this, null]))))), $I$(12).ALL_FALSE]);
}, 1);

Clazz.newMeth(C$, 'emptyMaskInterval$I', function (numDims) {
return Clazz.new_($I$(13,1).c$$net_imglib2_Interval$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[C$.emptyInterval$I(numDims), $I$(11).UNSPECIFIED, (P$.Masks$lambda2$||(P$.Masks$lambda2$=(((P$.Masks$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.Localizable"},P$.Masks$lambda2.$init$, [this, null]))))), $I$(12).ALL_FALSE]);
}, 1);

Clazz.newMeth(C$, 'emptyRealMask$I', function (numDims) {
return Clazz.new_($I$(14,1).c$$I$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[numDims, $I$(11).UNSPECIFIED, (P$.Masks$lambda3$||(P$.Masks$lambda3$=(((P$.Masks$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.RealLocalizable"},P$.Masks$lambda3.$init$, [this, null]))))), $I$(12).ALL_FALSE]);
}, 1);

Clazz.newMeth(C$, 'emptyRealMaskRealInterval$I', function (numDims) {
return Clazz.new_($I$(15,1).c$$net_imglib2_RealInterval$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[C$.emptyRealInterval$I(numDims), $I$(11).UNSPECIFIED, (P$.Masks$lambda4$||(P$.Masks$lambda4$=(((P$.Masks$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.RealLocalizable"},P$.Masks$lambda4.$init$, [this, null]))))), $I$(12).ALL_FALSE]);
}, 1);

Clazz.newMeth(C$, 'emptyInterval$I', function (numDims) {
var min=Clazz.array(Long.TYPE, [numDims]);
$I$(16).fill$JA$J(min, 9223372036854775807);
var max=Clazz.array(Long.TYPE, [numDims]);
$I$(16).fill$JA$J(max, -9223372036854775808);
return Clazz.new_($I$(17,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'emptyRealInterval$I', function (numDims) {
var min=Clazz.array(Double.TYPE, [numDims]);
$I$(16).fill$DA$D(min, Infinity);
var max=Clazz.array(Double.TYPE, [numDims]);
$I$(16).fill$DA$D(max, -Infinity);
return Clazz.new_($I$(18,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'allMask$I', function (numDims) {
return Clazz.new_($I$(10,1).c$$I$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[numDims, $I$(11).UNSPECIFIED, (P$.Masks$lambda5$||(P$.Masks$lambda5$=(((P$.Masks$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (true);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.Localizable"},P$.Masks$lambda5.$init$, [this, null]))))), $I$(12).ALL_TRUE]);
}, 1);

Clazz.newMeth(C$, 'allRealMask$I', function (numDims) {
return Clazz.new_($I$(14,1).c$$I$net_imglib2_roi_BoundaryType$java_util_function_Predicate$net_imglib2_roi_KnownConstant,[numDims, $I$(11).UNSPECIFIED, (P$.Masks$lambda6$||(P$.Masks$lambda6$=(((P$.Masks$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Masks$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (true);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.RealLocalizable"},P$.Masks$lambda6.$init$, [this, null]))))), $I$(12).ALL_TRUE]);
}, 1);

Clazz.newMeth(C$, 'sameTypesAndDimensions$TM$TM', function (mask1, mask2) {
return mask1.maskType$() === mask2.maskType$()  && mask1.boundaryType$() === mask2.boundaryType$()   && mask1.numDimensions$() == mask2.numDimensions$() ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
