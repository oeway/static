(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Factor", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['_exponent'],'O',['_base','ucar.units.Base']]]

Clazz.newMeth(C$, 'c$$ucar_units_Base', function (base) {
C$.c$$ucar_units_Base$I.apply(this, [base, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Factor$I', function (factor, exponent) {
C$.c$$ucar_units_Base$I.apply(this, [factor.getBase$(), exponent]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Base$I', function (base, exponent) {
;C$.$init$.apply(this);
this._base=base;
this._exponent=exponent;
}, 1);

Clazz.newMeth(C$, 'getBase$', function () {
return this._base;
});

Clazz.newMeth(C$, 'getID$', function () {
return this.getBase$().getID$();
});

Clazz.newMeth(C$, 'getExponent$', function () {
return this._exponent;
});

Clazz.newMeth(C$, 'pow$I', function (power) {
return Clazz.new_(C$.c$$ucar_units_Base$I,[this.getBase$(), this.getExponent$() * power]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getExponent$() == 0 ? "" : this.getExponent$() == 1 ? this.getBase$().toString() : this.getBase$().toString() + this.getExponent$();
});

Clazz.newMeth(C$, 'equals$O', function (object) {
var equals;
if (this === object ) {
equals=true;
} else if (!(Clazz.instanceOf(object, "ucar.units.Factor"))) {
equals=false;
} else {
var that=object;
equals=this.getExponent$() != that.getExponent$() ? false : this.getExponent$() == 0 || this.getBase$().equals$O(that.getBase$()) ;
}return equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getExponent$() == 0 ? this.getClass$().hashCode$() : this.getExponent$() ^ this.getBase$().hashCode$();
});

Clazz.newMeth(C$, 'isReciprocalOf$ucar_units_Factor', function (that) {
return this.getBase$().equals$O(that.getBase$()) && this.getExponent$() == -that.getExponent$() ;
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return this.getExponent$() == 0 || this.getBase$().isDimensionless$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
