(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.real"),I$=[[0,'net.imglib2.type.numeric.real.DoubleType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractRealType", null, 'net.imglib2.type.numeric.complex.AbstractComplexType', 'net.imglib2.type.numeric.RealType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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

Clazz.newMeth(C$, 'inc$', function () {
this.setReal$D(this.getRealDouble$() + 1);
});

Clazz.newMeth(C$, 'dec$', function () {
this.setReal$D(this.getRealDouble$() - 1);
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.setReal$D(c.getRealDouble$());
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.setReal$D(this.getRealDouble$() * c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.setReal$D(this.getRealDouble$() * c);
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
this.setReal$D(this.getRealDouble$() + c.getRealDouble$());
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
this.setReal$D(this.getRealDouble$() / c.getRealDouble$());
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (c) {
this.setReal$D(this.getRealDouble$() * c.getRealDouble$());
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
this.setReal$D(this.getRealDouble$() - c.getRealDouble$());
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setReal$F(0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setReal$F(1);
});

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (other) {
return Double.compare$D$D(this.getRealDouble$(), other.getRealDouble$());
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (other) {
return $I$(1).equals$D$D(this.getRealDouble$(), other.getRealDouble$());
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Double.hashCode$D(this.getRealDouble$());
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.getRealFloat$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.getRealDouble$();
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "" + new Double(this.getRealDouble$()).toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
