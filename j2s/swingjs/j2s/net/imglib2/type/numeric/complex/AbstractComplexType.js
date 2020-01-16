(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.complex"),I$=[[0,'net.imglib2.type.numeric.real.DoubleType','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractComplexType", null, null, 'net.imglib2.type.numeric.ComplexType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.setReal$D(c.getRealDouble$());
this.setImaginary$D(c.getImaginaryDouble$());
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.setReal$F(this.getRealFloat$() * c);
this.setImaginary$F(this.getImaginaryFloat$() * c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.setReal$D(this.getRealDouble$() * c);
this.setImaginary$D(this.getImaginaryDouble$() * c);
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
this.setReal$D(this.getRealDouble$() + c.getRealDouble$());
this.setImaginary$D(this.getImaginaryDouble$() + c.getImaginaryDouble$());
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
var a1=this.getRealDouble$();
var b1=this.getImaginaryDouble$();
var c1=c.getRealDouble$();
var d1=c.getImaginaryDouble$();
this.setReal$D((a1 * c1 + b1 * d1) / (c1 * c1 + d1 * d1));
this.setImaginary$D((b1 * c1 - a1 * d1) / (c1 * c1 + d1 * d1));
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (t) {
var a=this.getRealDouble$();
var b=this.getImaginaryDouble$();
var c=t.getRealDouble$();
var d=t.getImaginaryDouble$();
this.setReal$D(a * c - b * d);
this.setImaginary$D(a * d + b * c);
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
this.setReal$D(this.getRealDouble$() - c.getRealDouble$());
this.setImaginary$D(this.getImaginaryDouble$() - c.getImaginaryDouble$());
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
this.setImaginary$D(-this.getImaginaryDouble$());
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
var real=this.getRealDouble$();
var imaginary=this.getImaginaryDouble$();
return Math.sqrt(real * real + imaginary * imaginary);
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
var real=this.getRealDouble$();
var imaginary=this.getImaginaryDouble$();
return Math.sqrt(real * real + imaginary * imaginary);
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return Math.atan2(this.getImaginaryDouble$(), this.getRealDouble$());
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return Math.atan2(this.getImaginaryDouble$(), this.getRealDouble$());
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setReal$F(1);
this.setImaginary$F(0);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setReal$F(0);
this.setImaginary$F(0);
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.setReal$F(r);
this.setImaginary$F(i);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.setReal$D(r);
this.setImaginary$D(i);
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (other) {
return $I$(1).equals$D$D(this.getRealDouble$(), other.getRealDouble$()) && $I$(1).equals$D$D(this.getImaginaryDouble$(), other.getImaginaryDouble$()) ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var rHash=Double.hashCode$D(this.getRealDouble$());
var iHash=Double.hashCode$D(this.getImaginaryDouble$());
return $I$(2).combineHash$I$I(rHash, iHash);
});

Clazz.newMeth(C$, 'toString', function () {
return "(" + new Double(this.getRealDouble$()).toString() + ") + (" + new Double(this.getImaginaryDouble$()).toString() + ")i" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
