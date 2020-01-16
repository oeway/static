(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imagej.types.UnboundedIntegerType','java.math.BigDecimal','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataTypeVariableBitSignedInteger", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imagej.types.UnboundedIntegerType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "Unbounded integer";
});

Clazz.newMeth(C$, 'longName$', function () {
return "Unbounded integer";
});

Clazz.newMeth(C$, 'description$', function () {
return "An integer data type whose size is unrestricted";
});

Clazz.newMeth(C$, 'isComplex$', function () {
return false;
});

Clazz.newMeth(C$, 'isFloat$', function () {
return false;
});

Clazz.newMeth(C$, 'isSigned$', function () {
return true;
});

Clazz.newMeth(C$, 'isBounded$', function () {
return false;
});

Clazz.newMeth(C$, ['lowerBound$net_imagej_types_UnboundedIntegerType','lowerBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This data type is unbounded"]);
});

Clazz.newMeth(C$, ['upperBound$net_imagej_types_UnboundedIntegerType','upperBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This data type is unbounded"]);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return -1;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imagej_types_UnboundedIntegerType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$java_math_BigInteger(val.get$());
dest.setImag$java_math_BigDecimal($I$(2).ZERO);
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imagej_types_UnboundedIntegerType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
dest.set$java_math_BigInteger(val.getReal$().toBigInteger$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, ['asDouble$net_imagej_types_UnboundedIntegerType','asDouble$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['asLong$net_imagej_types_UnboundedIntegerType','asLong$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['setDouble$net_imagej_types_UnboundedIntegerType$D','setDouble$TT$D'], function (val, v) {
this.setLong$net_imagej_types_UnboundedIntegerType$J(val, (v|0));
});

Clazz.newMeth(C$, ['setLong$net_imagej_types_UnboundedIntegerType$J','setLong$TT$J'], function (val, v) {
val.set$java_math_BigInteger($I$(3).valueOf$J(v));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
