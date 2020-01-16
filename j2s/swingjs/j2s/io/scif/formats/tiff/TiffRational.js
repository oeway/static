(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TiffRational", null, 'Number', 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['numer','denom']]]

Clazz.newMeth(C$, 'c$$J$J', function (numer, denom) {
Clazz.super_(C$, this);
this.numer=numer;
this.denom=denom;
}, 1);

Clazz.newMeth(C$, 'getNumerator$', function () {
return this.numer;
});

Clazz.newMeth(C$, 'getDenominator$', function () {
return this.denom;
});

Clazz.newMeth(C$, 'reduce$', function () {
var sqrt1=(Math.sqrt(this.numer)|0);
var sqrt2=(Math.sqrt(this.denom)|0);
var gcdMax=sqrt1 < sqrt2 ? sqrt1 : sqrt2;
for (var i=gcdMax; i >= 2; i--) {
if (this.numer % i == 0 && this.denom % i == 0 ) {
this.numer=(this.numer/(i)|0);
this.denom=(this.denom/(i)|0);
this.reduce$();
break;
}}
});

Clazz.newMeth(C$, 'byteValue$', function () {
return $b$[0] = (this.longValue$()|0), $b$[0];
});

Clazz.newMeth(C$, 'doubleValue$', function () {
return this.denom == 0 ? 1.7976931348623157E308 : (this.numer / this.denom);
});

Clazz.newMeth(C$, 'floatValue$', function () {
return this.doubleValue$();
});

Clazz.newMeth(C$, 'intValue$', function () {
return (this.longValue$()|0);
});

Clazz.newMeth(C$, 'longValue$', function () {
return this.denom == 0 ? 9223372036854775807 : ((this.numer/this.denom|0));
});

Clazz.newMeth(C$, 'shortValue$', function () {
return ($s$[0] = this.longValue$(), $s$[0]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o != null  && Clazz.instanceOf(o, "io.scif.formats.tiff.TiffRational")  && this.compareTo$io_scif_formats_tiff_TiffRational(o) == 0 ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return ((this.numer - this.denom)|0);
});

Clazz.newMeth(C$, 'toString', function () {
return this.numer + "/" + this.denom ;
});

Clazz.newMeth(C$, ['compareTo$io_scif_formats_tiff_TiffRational','compareTo$','compareTo$TT'], function (q) {
var diff=(this.numer * q.denom - q.numer * this.denom);
if (diff > 2147483647) diff=2147483647;
 else if (diff < -2147483648) diff=-2147483648;
return (diff|0);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
