(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imglib2.type.numeric.real.FloatType','java.math.BigDecimal']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataType32BitSignedFloat", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imglib2.type.numeric.real.FloatType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "32-bit float";
});

Clazz.newMeth(C$, 'longName$', function () {
return "32-bit signed float";
});

Clazz.newMeth(C$, 'description$', function () {
return "A floating data type ranging from -3.4028235E38 to 3.4028235E38";
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

Clazz.newMeth(C$, ['lowerBound$net_imglib2_type_numeric_real_FloatType','lowerBound$TT'], function (dest) {
dest.set$F(-3.4028235E38);
});

Clazz.newMeth(C$, ['upperBound$net_imglib2_type_numeric_real_FloatType','upperBound$TT'], function (dest) {
dest.set$F(3.4028235E38);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return 32;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imglib2_type_numeric_real_FloatType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$F(val.get$());
dest.setImag$java_math_BigDecimal($I$(2).ZERO);
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imglib2_type_numeric_real_FloatType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
dest.set$F(val.getReal$().floatValue$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return true;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, ['asDouble$net_imglib2_type_numeric_real_FloatType','asDouble$TT'], function (val) {
return val.get$();
});

Clazz.newMeth(C$, ['asLong$net_imglib2_type_numeric_real_FloatType','asLong$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['setDouble$net_imglib2_type_numeric_real_FloatType$D','setDouble$TT$D'], function (val, v) {
val.setReal$D(v);
});

Clazz.newMeth(C$, ['setLong$net_imglib2_type_numeric_real_FloatType$J','setLong$TT$J'], function (val, v) {
val.setReal$F(v);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.types.DataType32BitSignedFloat',null,['org.scijava.plugin.Plugin']],['type="net.imagej.types.DataType.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
