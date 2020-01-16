(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imglib2.type.numeric.complex.ComplexFloatType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DataType64BitSignedComplexFloat", null, 'org.scijava.AbstractContextual', 'net.imagej.types.DataType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['type','net.imglib2.type.numeric.complex.ComplexFloatType']]]

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'shortName$', function () {
return "64-bit complex";
});

Clazz.newMeth(C$, 'longName$', function () {
return "64-bit complex float";
});

Clazz.newMeth(C$, 'description$', function () {
return "A complex floating data type with 32-bit float subcomponents";
});

Clazz.newMeth(C$, 'isComplex$', function () {
return true;
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

Clazz.newMeth(C$, ['lowerBound$net_imglib2_type_numeric_complex_ComplexFloatType','lowerBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["complex numbers are unbounded"]);
});

Clazz.newMeth(C$, ['upperBound$net_imglib2_type_numeric_complex_ComplexFloatType','upperBound$TT'], function (dest) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["complex numbers are unbounded"]);
});

Clazz.newMeth(C$, 'bitCount$', function () {
return 64;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, ['cast$net_imglib2_type_numeric_complex_ComplexFloatType$net_imagej_types_BigComplex','castnull','cast$TT$net_imagej_types_BigComplex'], function (val, dest) {
dest.setReal$F(val.getRealFloat$());
dest.setImag$D(val.getImaginaryFloat$());
});

Clazz.newMeth(C$, ['cast$net_imagej_types_BigComplex$net_imglib2_type_numeric_complex_ComplexFloatType','cast$net_imagej_types_BigComplex$TT','castnull'], function (val, dest) {
dest.setReal$F(val.getReal$().floatValue$());
dest.setImaginary$F(val.getImag$().floatValue$());
});

Clazz.newMeth(C$, 'hasDoubleRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, 'hasLongRepresentation$', function () {
return false;
});

Clazz.newMeth(C$, ['asDouble$net_imglib2_type_numeric_complex_ComplexFloatType','asDouble$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['asLong$net_imglib2_type_numeric_complex_ComplexFloatType','asLong$TT'], function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['setDouble$net_imglib2_type_numeric_complex_ComplexFloatType$D','setDouble$TT$D'], function (val, v) {
val.setReal$D(v);
val.setImaginary$F(0);
});

Clazz.newMeth(C$, ['setLong$net_imglib2_type_numeric_complex_ComplexFloatType$J','setLong$TT$J'], function (val, v) {
val.setReal$F(v);
val.setImaginary$F(0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
