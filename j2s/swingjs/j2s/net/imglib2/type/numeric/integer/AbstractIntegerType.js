(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractIntegerType", null, 'net.imglib2.type.numeric.real.AbstractRealType', 'net.imglib2.type.numeric.IntegerType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 1;
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

Clazz.newMeth(C$, 'inc$', function () {
this.setInteger$J(this.getIntegerLong$() + 1);
});

Clazz.newMeth(C$, 'dec$', function () {
this.setInteger$J(this.getIntegerLong$() - 1);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setInteger$I(0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setInteger$I(1);
});

Clazz.newMeth(C$, 'toString', function () {
return Long.toString$J(this.getIntegerLong$());
});

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (other) {
return Long.compare$J$J(this.getIntegerLong$(), other.getIntegerLong$());
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (other) {
return this.getIntegerLong$() == this.getIntegerLong$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Long.hashCode$J(this.getIntegerLong$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
