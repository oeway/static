(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'net.imagej.types.PreciseFixedFloatType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PreciseFixedComplexFloatType", null, null, 'net.imglib2.type.numeric.ComplexType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['real','net.imagej.types.PreciseFixedFloatType','+imag']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.real=Clazz.new_($I$(1,1));
this.imag=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (r, i) {
;C$.$init$.apply(this);
this.real=Clazz.new_($I$(1,1).c$$D,[r]);
this.imag=Clazz.new_($I$(1,1).c$$D,[i]);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigDecimal$java_math_BigDecimal', function (r, i) {
;C$.$init$.apply(this);
this.real=Clazz.new_($I$(1,1).c$$java_math_BigDecimal,[r]);
this.imag=Clazz.new_($I$(1,1).c$$java_math_BigDecimal,[i]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (r, i) {
;C$.$init$.apply(this);
this.real=Clazz.new_($I$(1,1).c$$S,[r]);
this.imag=Clazz.new_($I$(1,1).c$$S,[i]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_types_PreciseFixedComplexFloatType', function (other) {
C$.c$.apply(this, []);
this.set$net_imagej_types_PreciseFixedComplexFloatType(other);
}, 1);

Clazz.newMeth(C$, 'getReal$', function () {
return this.real;
});

Clazz.newMeth(C$, 'getImag$', function () {
return this.imag;
});

Clazz.newMeth(C$, 'setReal$D', function (r) {
this.real.set$D(r);
});

Clazz.newMeth(C$, 'setImag$D', function (i) {
this.imag.set$D(i);
});

Clazz.newMeth(C$, 'setReal$java_math_BigDecimal', function (r) {
this.real.set$java_math_BigDecimal(r);
});

Clazz.newMeth(C$, 'setImag$java_math_BigDecimal', function (i) {
this.imag.set$java_math_BigDecimal(i);
});

Clazz.newMeth(C$, 'setReal$net_imagej_types_PreciseFixedFloatType', function (r) {
this.real.set$net_imagej_types_PreciseFixedFloatType(r);
});

Clazz.newMeth(C$, 'setImag$net_imagej_types_PreciseFixedFloatType', function (i) {
this.imag.set$net_imagej_types_PreciseFixedFloatType(i);
});

Clazz.newMeth(C$, ['set$net_imagej_types_PreciseFixedComplexFloatType','set$TT'], function (other) {
this.setReal$net_imagej_types_PreciseFixedFloatType(other.getReal$());
this.setImag$net_imagej_types_PreciseFixedFloatType(other.getImag$());
});

Clazz.newMeth(C$, 'add$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType', function (a, b) {
this.real.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getReal$());
this.imag.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getImag$());
});

Clazz.newMeth(C$, ['add$net_imagej_types_PreciseFixedComplexFloatType','add$','add$TT'], function (c) {
this.add$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType(this, c);
});

Clazz.newMeth(C$, 'sub$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType', function (a, b) {
this.real.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getReal$());
this.imag.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getImag$());
});

Clazz.newMeth(C$, ['sub$net_imagej_types_PreciseFixedComplexFloatType','sub$','sub$TT'], function (c) {
this.sub$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType(this, c);
});

Clazz.newMeth(C$, 'mul$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType', function (a, b) {
var t1=Clazz.new_($I$(1,1));
var t2=Clazz.new_($I$(1,1));
var sum1=Clazz.new_($I$(1,1));
var sum2=Clazz.new_($I$(1,1));
t1.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getReal$());
t2.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getImag$());
sum1.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(t1, t2);
t1.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getReal$());
t2.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getImag$());
sum2.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(t1, t2);
this.setReal$net_imagej_types_PreciseFixedFloatType(sum1);
this.setImag$net_imagej_types_PreciseFixedFloatType(sum2);
});

Clazz.newMeth(C$, ['mul$net_imagej_types_PreciseFixedComplexFloatType','mul$','mul$TT'], function (c) {
this.mul$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType(this, c);
});

Clazz.newMeth(C$, 'div$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType', function (a, b) {
var denom=Clazz.new_($I$(1,1));
var sum1=Clazz.new_($I$(1,1));
var sum2=Clazz.new_($I$(1,1));
sum1.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(b.getReal$(), b.getReal$());
sum2.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(b.getImag$(), b.getImag$());
denom.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(sum1, sum2);
sum1.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getReal$());
sum2.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getImag$());
this.real.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(sum1, sum2);
this.real.div$net_imagej_types_PreciseFixedFloatType(denom);
sum1.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getImag$(), b.getReal$());
sum2.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a.getReal$(), b.getImag$());
this.imag.sub$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(sum1, sum2);
this.imag.div$net_imagej_types_PreciseFixedFloatType(denom);
});

Clazz.newMeth(C$, ['div$net_imagej_types_PreciseFixedComplexFloatType','div$','div$TT'], function (c) {
this.div$net_imagej_types_PreciseFixedComplexFloatType$net_imagej_types_PreciseFixedComplexFloatType(this, c);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.real.setZero$();
this.imag.setZero$();
});

Clazz.newMeth(C$, 'setOne$', function () {
this.real.setOne$();
this.imag.setZero$();
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.mul$D(c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.real.mul$D(c);
this.imag.mul$D(c);
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_types_PreciseFixedComplexFloatType,[this]);
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.real.getRealDouble$();
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.real.getRealFloat$();
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return this.imag.getRealDouble$();
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return this.imag.getRealFloat$();
});

Clazz.newMeth(C$, 'setReal$F', function (f) {
this.setReal$D(f);
});

Clazz.newMeth(C$, 'setImaginary$F', function (f) {
this.setImag$D(f);
});

Clazz.newMeth(C$, 'setImaginary$D', function (f) {
this.setImag$D(f);
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.setReal$F(r);
this.setImag$D(i);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.setReal$D(r);
this.setImag$D(i);
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.getPowerDouble$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.getPower$().getRealDouble$();
});

Clazz.newMeth(C$, 'getPower$', function () {
var a=Clazz.new_($I$(1,1));
var b=Clazz.new_($I$(1,1));
var sum=Clazz.new_($I$(1,1));
a.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this.real, this.real);
b.mul$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this.imag, this.imag);
sum.add$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(a, b);
return $I$(1).sqrt$net_imagej_types_PreciseFixedFloatType(sum);
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return this.getPhaseDouble$();
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return this.getPhase$().getRealDouble$();
});

Clazz.newMeth(C$, 'getPhase$', function () {
return $I$(1).atan2$net_imagej_types_PreciseFixedFloatType$net_imagej_types_PreciseFixedFloatType(this.imag, this.real);
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
this.imag.negate$();
});

Clazz.newMeth(C$, ['valueEquals$net_imagej_types_PreciseFixedComplexFloatType','valueEquals$','valueEquals$TT'], function (t) {
if (t == null ) return false;
return this.getReal$().valueEquals$net_imagej_types_PreciseFixedFloatType(t.getReal$()) && this.getImag$().valueEquals$net_imagej_types_PreciseFixedFloatType(t.getImag$()) ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
