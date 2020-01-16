(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.Operators']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Mask", null, null, 'net.imglib2.roi.MaskPredicate');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_Predicate', function (other) {
return $I$(1).AND.apply$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'or$java_util_function_Predicate', function (other) {
return $I$(1).OR.apply$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'negate$', function () {
return $I$(1).NEGATE.apply$java_util_function_Predicate(this);
});

Clazz.newMeth(C$, 'minus$java_util_function_Predicate', function (other) {
return $I$(1).MINUS.apply$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'xor$java_util_function_Predicate', function (other) {
return $I$(1).XOR.apply$java_util_function_Predicate$java_util_function_Predicate(this, other);
});

Clazz.newMeth(C$, 'transform$net_imglib2_transform_Transform', function (transformToSource) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["TODO, not yet implemented"]);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
