(function(){var P$=Clazz.newPackage("net.imglib2.roi.composite"),I$=[[0,'net.imglib2.roi.KnownConstant']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealTransformUnaryCompositeRealMaskRealInterval", null, 'net.imglib2.AbstractWrappedRealInterval', ['net.imglib2.roi.composite.UnaryCompositeMaskPredicate', 'net.imglib2.roi.RealMaskRealInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['operator','net.imglib2.roi.Operators.RealTransformMaskOperator','arg0','java.util.function.Predicate','boundaryType','net.imglib2.roi.BoundaryType','predicate','java.util.function.Predicate','knownConstantOp','java.util.function.UnaryOperator']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_Operators_RealTransformMaskOperator$java_util_function_Predicate$net_imglib2_RealInterval$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator', function (operator, arg0, interval, boundaryType, knownConstantOp) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
this.operator=operator;
this.arg0=arg0;
this.boundaryType=boundaryType;
this.predicate=operator.predicate$java_util_function_Predicate(arg0);
this.knownConstantOp=knownConstantOp;
}, 1);

Clazz.newMeth(C$, 'boundaryType$', function () {
return this.boundaryType;
});

Clazz.newMeth(C$, 'knownConstant$', function () {
return this.knownConstantOp.apply$($I$(1).of$java_util_function_Predicate(this.arg0));
});

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (localizable) {
return this.predicate.test$(localizable);
});

Clazz.newMeth(C$, 'operator$', function () {
return this.operator;
});

Clazz.newMeth(C$, 'arg0$', function () {
return this.arg0;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.roi.composite.RealTransformUnaryCompositeRealMask")) {
var rtucrm=obj;
return this.operator.equals$O(rtucrm.operator$()) && this.arg0.equals$O(rtucrm.arg0$()) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.arg0.hashCode$() + this.operator.hashCode$()) * 33;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
