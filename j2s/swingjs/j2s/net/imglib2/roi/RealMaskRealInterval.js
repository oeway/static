(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.util.Intervals','net.imglib2.roi.KnownConstant','net.imglib2.roi.Operators',['net.imglib2.roi.Operators','.RealTransformMaskOperator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "RealMaskRealInterval", null, null, ['net.imglib2.roi.RealMask', 'net.imglib2.RealInterval']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isEmpty$', function () {
return $I$(1).isEmpty$net_imglib2_RealInterval(this) || this.knownConstant$() === $I$(2).ALL_FALSE  ;
});

Clazz.newMeth(C$, 'and$java_util_function_Predicate', function (other) {
return $I$(3).AND.applyRealInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'or$net_imglib2_roi_RealMaskRealInterval', function (other) {
return $I$(3).OR.applyRealInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'minus$java_util_function_Predicate', function (other) {
return $I$(3).MINUS.applyRealInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'xor$net_imglib2_roi_RealMaskRealInterval', function (other) {
return $I$(3).XOR.applyRealInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'transform$net_imglib2_realtransform_AffineGet', function (transformToSource) {
return Clazz.new_($I$(4,1).c$$net_imglib2_realtransform_RealTransform,[transformToSource]).applyRealInterval$java_util_function_Predicate(this);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var i=0; i < this.numDimensions$(); i++) min[i]=this.realMin$I(i);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
for (var i=0; i < this.numDimensions$(); i++) min.setPosition$D$I(this.realMin$I(i), i);

});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
for (var i=0; i < this.numDimensions$(); i++) max[i]=this.realMax$I(i);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
for (var i=0; i < this.numDimensions$(); i++) max.setPosition$D$I(this.realMax$I(i), i);

});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
