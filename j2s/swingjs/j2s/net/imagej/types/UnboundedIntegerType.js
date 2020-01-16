(function(){var P$=Clazz.newPackage("net.imagej.types"),p$1={},I$=[[0,'java.math.BigInteger','java.math.BigDecimal','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnboundedIntegerType", null, null, 'net.imglib2.type.numeric.IntegerType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['v','java.math.BigInteger']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.set$java_math_BigInteger($I$(1).ZERO);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_types_UnboundedIntegerType', function (other) {
;C$.$init$.apply(this);
this.set$net_imagej_types_UnboundedIntegerType(other);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (val) {
;C$.$init$.apply(this);
this.set$J(val);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger', function (val) {
;C$.$init$.apply(this);
this.set$java_math_BigInteger(val);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.v;
});

Clazz.newMeth(C$, ['set$J','setnull'], function (val) {
this.v=$I$(1).valueOf$J(val);
});

Clazz.newMeth(C$, ['set$java_math_BigInteger','setnull'], function (val) {
this.v=val;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_types_UnboundedIntegerType,[this]);
});

Clazz.newMeth(C$, ['set$net_imagej_types_UnboundedIntegerType','set$TT'], function (val) {
this.v=val.v;
});

Clazz.newMeth(C$, ['add$net_imagej_types_UnboundedIntegerType','add$','add$TT'], function (val) {
this.v=this.v.add$java_math_BigInteger(val.v);
});

Clazz.newMeth(C$, ['sub$net_imagej_types_UnboundedIntegerType','sub$','sub$TT'], function (val) {
this.v=this.v.subtract$java_math_BigInteger(val.v);
});

Clazz.newMeth(C$, ['mul$net_imagej_types_UnboundedIntegerType','mul$','mul$TT'], function (val) {
this.v=this.v.multiply$java_math_BigInteger(val.v);
});

Clazz.newMeth(C$, ['div$net_imagej_types_UnboundedIntegerType','div$','div$TT'], function (val) {
this.v=this.v.divide$java_math_BigInteger(val.v);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.v=$I$(1).ZERO;
});

Clazz.newMeth(C$, 'setOne$', function () {
this.v=$I$(1).ONE;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (val) {
p$1.doMul$java_math_BigDecimal.apply(this, [$I$(2).valueOf$D(val)]);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (val) {
p$1.doMul$java_math_BigDecimal.apply(this, [$I$(2).valueOf$D(val)]);
});

Clazz.newMeth(C$, ['mul$java_math_BigInteger','mulnull'], function (val) {
this.v=this.v.multiply$java_math_BigInteger(val);
});

Clazz.newMeth(C$, ['mul$java_math_BigDecimal','mulnull'], function (val) {
p$1.doMul$java_math_BigDecimal.apply(this, [val]);
});

Clazz.newMeth(C$, 'doMul$java_math_BigDecimal', function (factor) {
var val=Clazz.new_($I$(2,1).c$$java_math_BigInteger,[this.v]);
var result=val.multiply$java_math_BigDecimal(factor);
this.v=result.toBigInteger$();
}, p$1);

Clazz.newMeth(C$, 'inc$', function () {
this.v=this.v.add$java_math_BigInteger($I$(1).ONE);
});

Clazz.newMeth(C$, 'dec$', function () {
this.v=this.v.subtract$java_math_BigInteger($I$(1).ONE);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 4.9E-324;
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 1024;
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.v.doubleValue$();
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.v.floatValue$();
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'setReal$F', function (f) {
this.set$J((f|0));
});

Clazz.newMeth(C$, 'setReal$D', function (f) {
this.set$J((f|0));
});

Clazz.newMeth(C$, 'setImaginary$F', function (f) {
});

Clazz.newMeth(C$, 'setImaginary$D', function (f) {
});

Clazz.newMeth(C$, 'setComplexNumber$F$F', function (r, i) {
this.setReal$F(r);
});

Clazz.newMeth(C$, 'setComplexNumber$D$D', function (r, i) {
this.setReal$D(r);
});

Clazz.newMeth(C$, 'getPowerFloat$', function () {
return this.v.floatValue$();
});

Clazz.newMeth(C$, 'getPowerDouble$', function () {
return this.v.doubleValue$();
});

Clazz.newMeth(C$, 'getPhaseFloat$', function () {
return 0;
});

Clazz.newMeth(C$, 'getPhaseDouble$', function () {
return 0;
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
});

Clazz.newMeth(C$, ['compareTo$net_imagej_types_UnboundedIntegerType','compareTo$','compareTo$TT'], function (o) {
return this.v.compareTo$java_math_BigInteger(o.v);
});

Clazz.newMeth(C$, 'getInteger$', function () {
return this.v.intValue$();
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.v.longValue$();
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return this.v;
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (v) {
this.v=v;
});

Clazz.newMeth(C$, ['valueEquals$net_imagej_types_UnboundedIntegerType','valueEquals$','valueEquals$TT'], function (t) {
return $I$(3).equals$O$O(this.get$(), t.get$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.get$().toString();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
