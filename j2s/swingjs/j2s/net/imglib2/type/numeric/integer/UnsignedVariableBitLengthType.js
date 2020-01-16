(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType','net.imglib2.type.numeric.integer.UnsignedLongType','net.imglib2.util.Util','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedVariableBitLengthType", null, 'net.imglib2.type.AbstractBit64Type', 'net.imglib2.type.numeric.IntegerType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.typeFactory=$I$(1).LONG$java_util_function_Function((P$.UnsignedVariableBitLengthType$lambda1$||(P$.UnsignedVariableBitLengthType$lambda1$=(((P$.UnsignedVariableBitLengthType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "UnsignedVariableBitLengthType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg$I,[img, this.b$['net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType'].nBits]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType"},P$.UnsignedVariableBitLengthType$lambda1.$init$, [this, null]))))));
}, 1);

C$.$fields$=[['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg$I', function (bitStorage, nBits) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, nBits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (value, nBits) {
;C$.superclazz.c$$J$I.apply(this,[value, nBits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_LongAccess$I', function (access, nBits) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_LongAccess$I.apply(this,[access, nBits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (nBits) {
;C$.superclazz.c$$I.apply(this,[nBits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['set$J','setnull'], function (value) {
this.setBits$J(value);
});

Clazz.newMeth(C$, 'get$', function () {
return this.getBits$();
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','set$TT'], function (c) {
this.setBits$J(c.getBits$());
});

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg$I,[this.img, this.nBits]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return this.typeFactory;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$I,[this.nBits]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$J$I,[this.getBits$(), this.nBits]);
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','div$','div$TT'], function (t) {
this.setBits$J($I$(3).divide$J$J(this.getBits$(), t.getBits$()));
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.setReal$D(this.getRealDouble$() * c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.setReal$D(this.getRealDouble$() * c);
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.getIntegerLong$();
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.getIntegerLong$();
});

Clazz.newMeth(C$, 'setReal$F', function (real) {
this.setInteger$I($I$(4).round$F(real));
});

Clazz.newMeth(C$, 'setReal$D', function (real) {
this.setInteger$J($I$(4).round$D(real));
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setInteger$I(0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setInteger$I(1);
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return this.nBits;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 1;
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.getIntegerLong$();
});

Clazz.newMeth(C$, 'getInteger$', function () {
return (this.get$()|0);
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
if (this.get$() < 0) return $I$(5).valueOf$J(this.get$()).add$java_math_BigInteger(Clazz.new_($I$(5,1).c$$S$I,["2", 10]).pow$I(this.nBits));
return $I$(5).valueOf$J(this.get$());
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.setBits$J(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.setBits$J(f);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.setBits$J(b.longValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return Math.pow(2, this.getBitsPerPixel$()) - 1;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'inc$', function () {
this.setBits$J(this.get$() + 1);
});

Clazz.newMeth(C$, 'dec$', function () {
this.set$J(this.get$() - 1);
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','add$','add$TT'], function (t) {
this.set$J(this.get$() + t.get$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','sub$','sub$TT'], function (t) {
this.set$J(this.get$() - t.get$());
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','mul$','mul$TT'], function (t) {
this.set$J(this.get$() * t.get$());
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'setImaginary$F', function (complex) {
});

Clazz.newMeth(C$, 'setImaginary$D', function (complex) {
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.getRealFloat$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.getRealDouble$();
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.setReal$F(r);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.setReal$D(r);
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','compareTo$','compareTo$TT'], function (t) {
return Long.compareUnsigned$J$J(this.getBits$(), t.getBits$());
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_numeric_integer_UnsignedVariableBitLengthType','valueEquals$','valueEquals$TT'], function (t) {
return this.getBits$() == t.getBits$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(4).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Long.hashCode$J(this.getBits$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
