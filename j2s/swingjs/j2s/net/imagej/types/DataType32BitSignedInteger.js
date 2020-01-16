(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imglib2.type.numeric.integer.IntType','java.math.BigDecimal']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataType32BitSignedInteger", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imglib2.type.numeric.integer.IntType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "32-bit int";
});

Clazz.newMeth(C$, 'longName$', function () {
return "32-bit signed integer";
});

Clazz.newMeth(C$, 'description$', function () {
return "An integer data type ranging between -2147483648 and 2147483647";
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
return true;
});

Clazz.newMeth(C$, ['lowerBound$net_imglib2_type_numeric_integer_IntType','lowerBound$TT'], function (dest) {
dest.set$I(-2147483648);
});

Clazz.newMeth(C$, ['upperBound$net_imglib2_type_numeric_integer_IntType','upperBound$TT'], function (dest) {
dest.set$I(2147483647);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return 32;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imglib2_type_numeric_integer_IntType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$J(val.get$());
dest.setImag$java_math_BigDecimal($I$(2).ZERO);
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imglib2_type_numeric_integer_IntType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
this.setLong$net_imglib2_type_numeric_integer_IntType$J(dest, val.getReal$().longValue$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return true;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return true;
});

Clazz.newMeth(C$, ['asDouble$net_imglib2_type_numeric_integer_IntType','asDouble$TT'], function (val) {
return val.get$();
});

Clazz.newMeth(C$, ['asLong$net_imglib2_type_numeric_integer_IntType','asLong$TT'], function (val) {
return val.get$();
});

Clazz.newMeth(C$, ['setDouble$net_imglib2_type_numeric_integer_IntType$D','setDouble$TT$D'], function (val, v) {
this.setLong$net_imglib2_type_numeric_integer_IntType$J(val, (v|0));
});

Clazz.newMeth(C$, ['setLong$net_imglib2_type_numeric_integer_IntType$J','setLong$TT$J'], function (val, v) {
if (v < -2147483648) val.set$I(-2147483648);
 else if (v > 2147483647) val.set$I(2147483647);
 else val.set$I((v|0));
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.types.DataType32BitSignedInteger',null,['org.scijava.plugin.Plugin']],['type="net.imagej.types.DataType.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
