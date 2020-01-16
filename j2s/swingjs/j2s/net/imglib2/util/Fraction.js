(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Fraction");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['numerator','denominator']]]

Clazz.newMeth(C$, 'c$$J$J', function (numerator, denominator) {
;C$.$init$.apply(this);
this.numerator=numerator;
this.denominator=denominator;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$J$J.apply(this, [1, 1]);
}, 1);

Clazz.newMeth(C$, 'getNumerator$', function () {
return this.numerator;
});

Clazz.newMeth(C$, 'getDenominator$', function () {
return this.denominator;
});

Clazz.newMeth(C$, 'getRatio$', function () {
return this.numerator / this.denominator;
});

Clazz.newMeth(C$, 'invert$', function () {
var tmp=this.numerator;
this.numerator=this.denominator;
this.denominator=tmp;
});

Clazz.newMeth(C$, 'mul$net_imglib2_util_Fraction', function (fraction) {
this.numerator*=fraction.getNumerator$();
this.denominator*=fraction.getDenominator$();
});

Clazz.newMeth(C$, 'div$net_imglib2_util_Fraction', function (fraction) {
this.numerator*=fraction.getDenominator$();
this.denominator*=fraction.getNumerator$();
});

Clazz.newMeth(C$, 'mulCeil$J', function (value) {
var tmp=value * this.numerator;
if (tmp % this.denominator != 0) return (tmp/this.denominator|0) + 1;
 else return (tmp/this.denominator|0);
});

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$J$J,[this.numerator, this.denominator]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
