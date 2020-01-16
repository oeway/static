(function(){var P$=Clazz.newPackage("net.imglib2.type.volatiles"),I$=[[0,'net.imglib2.util.Util','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractVolatileRealType", null, 'net.imglib2.Volatile', 'net.imglib2.type.numeric.RealType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TR$Z'], function (t, valid) {
;C$.superclazz.c$$TT$Z.apply(this,[t, valid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.t.getRealDouble$();
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.t.getRealFloat$();
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return this.t.getImaginaryDouble$();
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return this.t.getImaginaryFloat$();
});

Clazz.newMeth(C$, 'setReal$F', function (f) {
this.t.setReal$F(f);
});

Clazz.newMeth(C$, 'setReal$D', function (f) {
this.t.setReal$D(f);
});

Clazz.newMeth(C$, 'setImaginary$F', function (f) {
this.t.setImaginary$F(f);
});

Clazz.newMeth(C$, 'setImaginary$D', function (f) {
this.t.setImaginary$D(f);
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.t.setComplexNumber$F$F(r, i);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.t.setComplexNumber$D$D(r, i);
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.t.getPowerFloat$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.t.getPowerDouble$();
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return this.t.getPhaseFloat$();
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return this.t.getPhaseDouble$();
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
this.t.complexConjugate$();
});

Clazz.newMeth(C$, 'inc$', function () {
this.t.inc$();
});

Clazz.newMeth(C$, 'dec$', function () {
this.t.dec$();
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return this.t.getMaxValue$();
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return this.t.getMinValue$();
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return this.t.getMinIncrement$();
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return this.t.getBitsPerPixel$();
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.t.set$TT(c.t);
this.valid=c.valid;
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
this.t.add$(c.t);
this.valid&=c.valid;
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
this.t.sub$(c.t);
this.valid&=c.valid;
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (c) {
this.t.mul$(c.t);
this.valid&=c.valid;
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
this.t.div$(c.t);
this.valid&=c.valid;
});

Clazz.newMeth(C$, 'setZero$', function () {
this.t.setZero$();
});

Clazz.newMeth(C$, 'setOne$', function () {
this.t.setOne$();
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.t.mul$F(c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.t.mul$D(c);
});

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (o) {
return this.t.compareTo$(o.t);
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (other) {
return this.isValid$() == other.isValid$()  && this.t.valueEquals$(other.t) ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(1).combineHash$I$I($I$(2).hashCode$Z(this.isValid$()), this.t.hashCode$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
