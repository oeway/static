(function(){var P$=Clazz.newPackage("net.imagej.roi"),p$1={},I$=[[0,'net.imglib2.roi.Mask','net.imagej.roi.MaskConversionUtil','net.imglib2.roi.MaskInterval','net.imglib2.roi.RealMask','net.imglib2.roi.RealMaskRealInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultROIService", null, 'org.scijava.service.AbstractService', 'net.imagej.roi.ROIService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['convertService','org.scijava.convert.ConvertService']]]

Clazz.newMeth(C$, 'toMask$O', function (o) {
var returnType="Mask";
p$1.checkNull$O$S.apply(this, [o, "Mask"]);
var m=this.convertService.convert$O$Class(o, Clazz.getClass($I$(1),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_transform_Transform','xor$java_util_function_Predicate']));
if (m != null ) return m;
var ra=this.convertService.convert$O$reflect_Type(o, $I$(2).randomAccessibleType$());
if (ra != null  && $I$(2).isBoolType$net_imglib2_RandomAccessible(ra) ) return this.toMask$O(ra);
throw p$1.cannotConvert$O$S.apply(this, [o, "Mask"]);
});

Clazz.newMeth(C$, 'toMaskInterval$O', function (o) {
var returnType="MaskInterval";
p$1.checkNull$O$S.apply(this, [o, "MaskInterval"]);
var mi=this.convertService.convert$O$Class(o, Clazz.getClass($I$(3),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_MaskInterval','xor$net_imglib2_roi_MaskInterval']));
if (mi != null ) return mi;
var rai=this.convertService.convert$O$reflect_Type(o, $I$(2).randomAccessibleIntervalType$());
if (rai != null  && $I$(2).isBoolType$net_imglib2_RandomAccessible(rai) ) return this.toMaskInterval$O(rai);
throw p$1.cannotConvert$O$S.apply(this, [o, "MaskInterval"]);
});

Clazz.newMeth(C$, 'toRealMask$O', function (o) {
var returnType="RealMask";
p$1.checkNull$O$S.apply(this, [o, "RealMask"]);
var m=this.convertService.convert$O$Class(o, Clazz.getClass($I$(4),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_realtransform_RealTransform','xor$java_util_function_Predicate']));
if (m != null ) return m;
var rra=this.convertService.convert$O$reflect_Type(o, $I$(2).realRandomAccessibleType$());
if (rra != null  && $I$(2).isBoolType$net_imglib2_RealRandomAccessible(rra) ) return this.toRealMask$O(rra);
throw p$1.cannotConvert$O$S.apply(this, [o, "RealMask"]);
});

Clazz.newMeth(C$, 'toRealMaskRealInterval$O', function (o) {
var returnType="RealMaskRealInterval";
p$1.checkNull$O$S.apply(this, [o, "RealMaskRealInterval"]);
var mri=this.convertService.convert$O$Class(o, Clazz.getClass($I$(5),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_RealMaskRealInterval','realMax$DA','realMax$net_imglib2_RealPositionable','realMin$DA','realMin$net_imglib2_RealPositionable','transform$net_imglib2_realtransform_AffineGet','xor$net_imglib2_roi_RealMaskRealInterval']));
if (mri != null ) return mri;
var rrari=this.convertService.convert$O$reflect_Type(o, $I$(2).realRandomAccessibleRealIntervalType$());
if (rrari != null  && $I$(2).isBoolType$net_imglib2_RealRandomAccessible(rrari) ) return this.toRealMaskRealInterval$O(rrari);
throw p$1.cannotConvert$O$S.apply(this, [o, "RealMaskRealInterval"]);
});

Clazz.newMeth(C$, 'toMaskPredicate$O', function (o) {
var returnType="MaskPredicate";
p$1.checkNull$O$S.apply(this, [o, "MaskPredicate"]);
var m=this.convertService.convert$O$Class(o, Clazz.getClass($I$(1),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_transform_Transform','xor$java_util_function_Predicate']));
if (m != null ) return m;
var rm=this.convertService.convert$O$Class(o, Clazz.getClass($I$(4),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_realtransform_RealTransform','xor$java_util_function_Predicate']));
if (rm != null ) return rm;
var ra=this.convertService.convert$O$reflect_Type(o, $I$(2).randomAccessibleType$());
if (ra != null  && $I$(2).isBoolType$net_imglib2_RandomAccessible(ra) ) return this.toMask$O(ra);
var rra=this.convertService.convert$O$reflect_Type(o, $I$(2).realRandomAccessibleType$());
if (rra != null  && $I$(2).isBoolType$net_imglib2_RealRandomAccessible(rra) ) return this.toRealMask$O(rra);
throw p$1.cannotConvert$O$S.apply(this, [o, "MaskPredicate"]);
});

Clazz.newMeth(C$, 'toRandomAcessible$O', function (o) {
var returnType="RandomAccessible<BoolType>";
p$1.checkNull$O$S.apply(this, [o, "RandomAccessible<BoolType>"]);
var ra=this.convertService.convert$O$reflect_Type(o, $I$(2).randomAccessibleType$());
if (ra != null  && $I$(2).isBoolType$net_imglib2_RandomAccessible(ra) ) return ra;
var m=this.convertService.convert$O$Class(o, Clazz.getClass($I$(1),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_transform_Transform','xor$java_util_function_Predicate']));
if (m != null ) return this.toRandomAcessible$O(m);
throw p$1.cannotConvert$O$S.apply(this, [o, "RandomAccessible<BoolType>"]);
});

Clazz.newMeth(C$, 'toRandomAccessibleInterval$O', function (o) {
var returnType="RandomAccessibleInterval<BoolType>";
p$1.checkNull$O$S.apply(this, [o, "RandomAccessibleInterval<BoolType>"]);
var rai=this.convertService.convert$O$reflect_Type(o, $I$(2).randomAccessibleIntervalType$());
if (rai != null  && $I$(2).isBoolType$net_imglib2_RandomAccessible(rai) ) return rai;
var mi=this.convertService.convert$O$Class(o, Clazz.getClass($I$(3),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_MaskInterval','xor$net_imglib2_roi_MaskInterval']));
if (mi != null ) return this.toRandomAccessibleInterval$O(mi);
throw p$1.cannotConvert$O$S.apply(this, [o, "RandomAccessibleInterval<BoolType>"]);
});

Clazz.newMeth(C$, 'toRealRandomAccessible$O', function (o) {
var returnType="RealRandomAccessible<BoolType>";
p$1.checkNull$O$S.apply(this, [o, "RealRandomAccessible<BoolType>"]);
var rra=this.convertService.convert$O$reflect_Type(o, $I$(2).realRandomAccessibleType$());
if (rra != null  && $I$(2).isBoolType$net_imglib2_RealRandomAccessible(rra) ) return rra;
var m=this.convertService.convert$O$Class(o, Clazz.getClass($I$(4),['and$java_util_function_Predicate','minus$java_util_function_Predicate','negate$','or$java_util_function_Predicate','transform$net_imglib2_realtransform_RealTransform','xor$java_util_function_Predicate']));
if (m != null ) return this.toRealRandomAccessible$O(m);
throw p$1.cannotConvert$O$S.apply(this, [o, "RealRandomAccessible<BoolType>"]);
});

Clazz.newMeth(C$, 'toRealRandomAccessibleRealInterval$O', function (o) {
var returnType="RealRandomAccessibleRealInterval<BoolType>";
p$1.checkNull$O$S.apply(this, [o, "RealRandomAccessibleRealInterval<BoolType>"]);
var rrari=this.convertService.convert$O$reflect_Type(o, $I$(2).realRandomAccessibleRealIntervalType$());
if (rrari != null  && $I$(2).isBoolType$net_imglib2_RealRandomAccessible(rrari) ) return rrari;
var mri=this.convertService.convert$O$Class(o, Clazz.getClass($I$(5),['and$java_util_function_Predicate','isEmpty$','minus$java_util_function_Predicate','or$net_imglib2_roi_RealMaskRealInterval','realMax$DA','realMax$net_imglib2_RealPositionable','realMin$DA','realMin$net_imglib2_RealPositionable','transform$net_imglib2_realtransform_AffineGet','xor$net_imglib2_roi_RealMaskRealInterval']));
if (mri != null ) return this.toRealRandomAccessibleRealInterval$O(mri);
throw p$1.cannotConvert$O$S.apply(this, [o, "RealRandomAccessibleRealInterval<BoolType>"]);
});

Clazz.newMeth(C$, 'checkNull$O$S', function (o, s) {
if (o == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot convert null to " + s]);
}, p$1);

Clazz.newMeth(C$, 'cannotConvert$O$S', function (o, s) {
return Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot convert " + o.getClass$() + " to " + s ]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.roi.DefaultROIService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
