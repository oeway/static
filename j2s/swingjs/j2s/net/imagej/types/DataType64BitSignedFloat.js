(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imglib2.type.numeric.real.DoubleType','java.math.BigDecimal']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataType64BitSignedFloat", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imglib2.type.numeric.real.DoubleType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "64-bit float";
});

Clazz.newMeth(C$, 'longName$', function () {
return "64-bit signed float";
});

Clazz.newMeth(C$, 'description$', function () {
return "A float data type ranging between -1.7976931348623157E308 and 1.7976931348623157E308";
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
return true;
});

Clazz.newMeth(C$, ['lowerBound$net_imglib2_type_numeric_real_DoubleType','lowerBound$TT'], function (dest) {
dest.set$D(-1.7976931348623157E308);
});

Clazz.newMeth(C$, ['upperBound$net_imglib2_type_numeric_real_DoubleType','upperBound$TT'], function (dest) {
dest.set$D(1.7976931348623157E308);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return 64;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imglib2_type_numeric_real_DoubleType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$D(val.get$());
dest.setImag$java_math_BigDecimal($I$(2).ZERO);
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imglib2_type_numeric_real_DoubleType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
this.setDouble$net_imglib2_type_numeric_real_DoubleType$D(dest, val.getReal$().doubleValue$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return true;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, ['asDouble$net_imglib2_type_numeric_real_DoubleType','asDouble$TT'], function (val) {
return val.get$();
});

Clazz.newMeth(C$, ['asLong$net_imglib2_type_numeric_real_DoubleType','asLong$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['setDouble$net_imglib2_type_numeric_real_DoubleType$D','setDouble$TT$D'], function (val, v) {
val.set$D(v);
});

Clazz.newMeth(C$, ['setLong$net_imglib2_type_numeric_real_DoubleType$J','setLong$TT$J'], function (val, v) {
this.setDouble$net_imglib2_type_numeric_real_DoubleType$D(val, v);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.types.DataType64BitSignedFloat',null,['org.scijava.plugin.Plugin']],['type="net.imagej.types.DataType.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
