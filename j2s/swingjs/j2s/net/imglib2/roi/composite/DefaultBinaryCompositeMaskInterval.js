(function(){var P$=Clazz.newPackage("net.imglib2.roi.composite"),I$=[[0,'net.imglib2.util.Intervals','net.imglib2.roi.KnownConstant']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultBinaryCompositeMaskInterval", null, 'net.imglib2.AbstractWrappedInterval', ['net.imglib2.roi.composite.BinaryCompositeMaskPredicate', 'net.imglib2.roi.MaskInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['operator','net.imglib2.roi.Operators.BinaryMaskOperator','arg0','java.util.function.Predicate','+arg1','boundaryType','net.imglib2.roi.BoundaryType','predicate','java.util.function.Predicate','knownConstantOp','java.util.function.BinaryOperator']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_Operators_BinaryMaskOperator$java_util_function_Predicate$java_util_function_Predicate$net_imglib2_Interval$net_imglib2_roi_BoundaryType$java_util_function_BinaryOperator', function (operator, arg0, arg1, interval, boundaryType, knownConstantOp) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
this.operator=operator;
this.arg0=arg0;
this.arg1=arg1;
this.boundaryType=boundaryType;
this.predicate=operator.predicate$java_util_function_Predicate$java_util_function_Predicate(arg0, arg1);
this.knownConstantOp=knownConstantOp;
}, 1);

Clazz.newMeth(C$, 'boundaryType$', function () {
return this.boundaryType;
});

Clazz.newMeth(C$, 'knownConstant$', function () {
return $I$(1).isEmpty$net_imglib2_Interval(this.sourceInterval) ? $I$(2).ALL_FALSE : this.knownConstantOp.apply$($I$(2).of$java_util_function_Predicate(this.arg0), $I$(2).of$java_util_function_Predicate(this.arg1));
});

Clazz.newMeth(C$, ['test$net_imglib2_Localizable','test$','test$TT'], function (localizable) {
return this.predicate.test$(localizable);
});

Clazz.newMeth(C$, 'operator$', function () {
return this.operator;
});

Clazz.newMeth(C$, 'arg0$', function () {
return this.arg0;
});

Clazz.newMeth(C$, 'arg1$', function () {
return this.arg1;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "net.imglib2.roi.composite.BinaryCompositeMaskPredicate")) || !(Clazz.instanceOf(obj, "net.imglib2.roi.MaskInterval")) ) return false;
var b=obj;
return b.operator$() === this.operator  && this.arg0.equals$O(b.arg0$())  && this.arg1.equals$O(b.arg1$()) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.arg0.hashCode$() * this.arg0.hashCode$() + this.arg1.hashCode$() * this.arg1.hashCode$() + this.operator.hashCode$()) * 47;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
