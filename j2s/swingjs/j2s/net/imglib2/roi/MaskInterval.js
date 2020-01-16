(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.util.Intervals','net.imglib2.roi.KnownConstant','net.imglib2.roi.Operators']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "MaskInterval", null, null, ['net.imglib2.roi.Mask', 'net.imglib2.Interval']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isEmpty$', function () {
return $I$(1).isEmpty$net_imglib2_Interval(this) || this.knownConstant$() === $I$(2).ALL_TRUE  ;
});

Clazz.newMeth(C$, 'and$java_util_function_Predicate', function (other) {
return $I$(3).AND.applyInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'or$net_imglib2_roi_MaskInterval', function (other) {
return $I$(3).OR.applyInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'minus$java_util_function_Predicate', function (other) {
return $I$(3).MINUS.applyInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'xor$net_imglib2_roi_MaskInterval', function (other) {
return $I$(3).XOR.applyInterval$java_util_function_Predicate$java_util_function_Predicate(this, other);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
