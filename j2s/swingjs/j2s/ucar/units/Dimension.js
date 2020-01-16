(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.Factor','StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dimension");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['hashCode'],'O',['_factors','ucar.units.Factor[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$ucar_units_FactorA.apply(this, [Clazz.array($I$(1), [0])]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Factor', function (factor) {
C$.c$$ucar_units_FactorA.apply(this, [Clazz.array($I$(1), -1, [factor])]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_FactorA', function (factors) {
;C$.$init$.apply(this);
this._factors=factors;
}, 1);

Clazz.newMeth(C$, 'getRank$', function () {
return this._factors.length;
});

Clazz.newMeth(C$, 'getFactors$', function () {
var factors=Clazz.array($I$(1), [this._factors.length]);
System.arraycopy$O$I$O$I$I(this._factors, 0, factors, 0, factors.length);
return factors;
});

Clazz.newMeth(C$, 'mult$ucar_units_Dimension', function (that) {
var factors1=this._factors;
var factors2=that._factors;
var i1=0;
var i2=0;
var k=0;
var newFactors=Clazz.array($I$(1), [factors1.length + factors2.length]);
for (; ; ) {
if (i1 == factors1.length) {
var n=factors2.length - i2;
System.arraycopy$O$I$O$I$I(factors2, i2, newFactors, k, n);
k+=n;
break;
}if (i2 == factors2.length) {
var n=factors1.length - i1;
System.arraycopy$O$I$O$I$I(factors1, i1, newFactors, k, n);
k+=n;
break;
}var f1=factors1[i1];
var f2=factors2[i2];
var comp=f1.getID$().compareTo$S(f2.getID$());
if (comp < 0) {
newFactors[k++]=f1;
i1++;
} else if (comp == 0) {
var exponent=f1.getExponent$() + f2.getExponent$();
if (exponent != 0) {
newFactors[k++]=Clazz.new_($I$(1,1).c$$ucar_units_Factor$I,[f1, exponent]);
}i1++;
i2++;
} else {
newFactors[k++]=f2;
i2++;
}}
if (k < newFactors.length) {
var tmp=Clazz.array($I$(1), [k]);
System.arraycopy$O$I$O$I$I(newFactors, 0, tmp, 0, k);
newFactors=tmp;
}return newFactors;
});

Clazz.newMeth(C$, 'pow$I', function (power) {
var factors;
if (power == 0) {
factors=Clazz.array($I$(1), [0]);
} else {
factors=this.getFactors$();
if (power != 1) {
for (var i=factors.length; --i >= 0; ) {
factors[i]=factors[i].pow$I(power);
}
}}return factors;
});

Clazz.newMeth(C$, 'isReciprocalOf$ucar_units_Dimension', function (that) {
var theseFactors=this._factors;
var thoseFactors=that._factors;
var isReciprocalOf;
if (theseFactors.length != thoseFactors.length) {
isReciprocalOf=false;
} else {
var i;
for (i=theseFactors.length; --i >= 0; ) {
if (!theseFactors[i].isReciprocalOf$ucar_units_Factor(thoseFactors[i])) {
break;
}}
isReciprocalOf=i < 0;
}return isReciprocalOf;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
var equals;
if (this === object ) {
equals=true;
} else if (!(Clazz.instanceOf(object, "ucar.units.Dimension"))) {
equals=false;
} else {
var thatFactors=(object)._factors;
if (this._factors.length != thatFactors.length) {
equals=false;
} else {
var i=this._factors.length;
while (--i >= 0){
if (!this._factors[i].equals$O(thatFactors[i])) {
break;
}}
equals=i < 0;
}}return equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.hashCode == 0) {
var hash=0;
for (var i=0; i < this._factors.length; i++) {
hash^=this._factors[i].hashCode$();
}
this.hashCode=hash;
}return this.hashCode;
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
for (var i=this._factors.length; --i >= 0; ) {
if (!this._factors[i].isDimensionless$()) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(2,1).c$$I,[40]);
for (var i=0; i < this._factors.length; i++) {
buf.append$O(this._factors[i]).append$C(".");
}
if (buf.length$() != 0) {
buf.setLength$I(buf.length$() - 1);
}return buf.toString();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
