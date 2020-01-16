(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imagej.types.PreciseFixedFloatType','java.math.BigDecimal']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataTypeVariableBitSignedFloat", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imagej.types.PreciseFixedFloatType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "Fixed float";
});

Clazz.newMeth(C$, 'longName$', function () {
return "Fixed point float";
});

Clazz.newMeth(C$, 'description$', function () {
return "A float data type whose size is unrestricted and precise to 25 decimal places";
});

Clazz.newMeth(C$, 'isComplex$', function () {
return false;
});

Clazz.newMeth(C$, 'isFloat$', function () {
return true;
});

Clazz.newMeth(C$, 'isSigned$', function () {
return true;
});

Clazz.newMeth(C$, 'isBounded$', function () {
return false;
});

Clazz.newMeth(C$, ['lowerBound$net_imagej_types_PreciseFixedFloatType','lowerBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This data type is unbounded"]);
});

Clazz.newMeth(C$, ['upperBound$net_imagej_types_PreciseFixedFloatType','upperBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This data type is unbounded"]);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return -1;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imagej_types_PreciseFixedFloatType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$java_math_BigDecimal(val.get$());
dest.setImag$java_math_BigDecimal($I$(2).ZERO);
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imagej_types_PreciseFixedFloatType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
dest.set$java_math_BigDecimal(val.getReal$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, ['asDouble$net_imagej_types_PreciseFixedFloatType','asDouble$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['asLong$net_imagej_types_PreciseFixedFloatType','asLong$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['setDouble$net_imagej_types_PreciseFixedFloatType$D','setDouble$TT$D'], function (val, v) {
val.set$D(v);
});

Clazz.newMeth(C$, ['setLong$net_imagej_types_PreciseFixedFloatType$J','setLong$TT$J'], function (val, v) {
val.set$J(v);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
