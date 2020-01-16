(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.util.Util','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractIntegerBitType", null, 'net.imglib2.type.AbstractBitType', 'net.imglib2.type.numeric.IntegerType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg$I', function (bitStorage, nBits) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, nBits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return this.nBits;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 1;
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
this.setInteger$I($I$(1).round$F(real));
});

Clazz.newMeth(C$, 'setReal$D', function (real) {
this.setInteger$J($I$(1).round$D(real));
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setInteger$I(0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setInteger$I(1);
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
return $I$(2).valueOf$J(this.get$());
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$J(b.longValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return Math.pow(2, this.getBitsPerPixel$()) - 1;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'inc$', function () {
this.set$J(this.get$() + 1);
});

Clazz.newMeth(C$, 'dec$', function () {
this.set$J(this.get$() - 1);
});

Clazz.newMeth(C$, ['add$TT','add$'], function (t) {
this.set$J(this.get$() + t.get$());
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (t) {
this.set$J(this.get$() - t.get$());
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (t) {
this.set$J(this.get$() * t.get$());
});

Clazz.newMeth(C$, ['div$TT','div$'], function (t) {
this.set$J((this.get$()/t.get$()|0));
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.set$J(c.get$());
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

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (other) {
return Long.compare$J$J(this.getIntegerLong$(), other.getIntegerLong$());
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (t) {
return this.get$() == t.get$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Long.hashCode$J(this.get$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
