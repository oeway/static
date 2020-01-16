(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.BaseUnit','ucar.units.UnitName','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OffsetUnit", null, 'ucar.units.UnitImpl', 'ucar.units.DerivableUnit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['_offset'],'O',['_unit','ucar.units.Unit','_derivedUnit','ucar.units.DerivedUnit']]]

Clazz.newMeth(C$, 'c$$ucar_units_Unit$D', function (unit, offset) {
C$.c$$ucar_units_Unit$D$ucar_units_UnitName.apply(this, [unit, offset, null]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$D$ucar_units_UnitName', function (unit, offset, id) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
if (!(Clazz.instanceOf(unit, "ucar.units.OffsetUnit"))) {
this._unit=unit;
this._offset=offset;
} else {
this._unit=(unit)._unit;
this._offset=(unit)._offset + offset;
}}, 1);

Clazz.newMeth(C$, 'getInstance$ucar_units_Unit$D', function (unit, origin) {
return (origin == 0 ) ? unit : Clazz.new_(C$.c$$ucar_units_Unit$D,[unit, origin]);
}, 1);

Clazz.newMeth(C$, 'getUnit$', function () {
return this._unit;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this._offset;
});

Clazz.newMeth(C$, 'clone$ucar_units_UnitName', function (id) {
return Clazz.new_(C$.c$$ucar_units_Unit$D$ucar_units_UnitName,[this.getUnit$(), this.getOffset$(), id]);
});

Clazz.newMeth(C$, 'multiplyBy$D', function (scale) {
if (scale == 0 ) {
throw Clazz.new_(Clazz.load('ucar.units.MultiplyException').c$$D$ucar_units_Unit,[scale, this]);
}return C$.getInstance$ucar_units_Unit$D(this._unit.multiplyBy$D(scale), this._offset / scale);
});

Clazz.newMeth(C$, 'shiftTo$D', function (origin) {
return C$.getInstance$ucar_units_Unit$D(this._unit, origin + this._offset);
});

Clazz.newMeth(C$, 'myMultiplyBy$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.OffsetUnit") ? this.getUnit$().multiplyBy$ucar_units_Unit((that).getUnit$()) : this.getUnit$().multiplyBy$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'myDivideBy$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.OffsetUnit") ? this.getUnit$().divideBy$ucar_units_Unit((that).getUnit$()) : this.getUnit$().divideBy$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'myDivideInto$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.OffsetUnit") ? this.getUnit$().divideInto$ucar_units_Unit((that).getUnit$()) : this.getUnit$().divideInto$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'myRaiseTo$I', function (power) {
return this.getUnit$().raiseTo$I(power);
});

Clazz.newMeth(C$, 'getDerivedUnit$', function () {
if (this._derivedUnit == null ) {
this._derivedUnit=this.getUnit$().getDerivedUnit$();
}return this._derivedUnit;
});

Clazz.newMeth(C$, 'toDerivedUnit$F', function (amount) {
return this.toDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'toDerivedUnit$D', function (amount) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}return (this.getUnit$()).toDerivedUnit$D(amount + this.getOffset$());
});

Clazz.newMeth(C$, 'toDerivedUnit$FA$FA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}var origin=this.getOffset$();
for (var i=input.length; --i >= 0; ) {
output[i]=input[i] + origin;
}
return (this.getUnit$()).toDerivedUnit$FA$FA(output, output);
});

Clazz.newMeth(C$, 'toDerivedUnit$DA$DA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}var origin=this.getOffset$();
for (var i=input.length; --i >= 0; ) {
output[i]=input[i] + origin;
}
return (this.getUnit$()).toDerivedUnit$DA$DA(output, output);
});

Clazz.newMeth(C$, 'fromDerivedUnit$F', function (amount) {
return this.fromDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'fromDerivedUnit$D', function (amount) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}return (this.getUnit$()).fromDerivedUnit$D(amount) - this.getOffset$();
});

Clazz.newMeth(C$, 'fromDerivedUnit$FA$FA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}(this.getUnit$()).fromDerivedUnit$FA$FA(input, output);
var origin=this.getOffset$();
for (var i=input.length; --i >= 0; ) {
output[i] -= origin;
}
return output;
});

Clazz.newMeth(C$, 'fromDerivedUnit$DA$DA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}(this.getUnit$()).fromDerivedUnit$DA$DA(input, output);
var origin=this.getOffset$();
for (var i=input.length; --i >= 0; ) {
output[i] -= origin;
}
return output;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (this._offset == 0 ) {
return object.equals$O(this._unit);
}if (!(Clazz.instanceOf(object, "ucar.units.OffsetUnit"))) {
return false;
}var that=object;
return this._offset == that._offset  && this._unit.equals$O(that._unit) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.getOffset$() == 0  ? 0 : Double.valueOf$D(this.getOffset$()).hashCode$()) ^ this.getUnit$().hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return this.getUnit$().isDimensionless$();
});

Clazz.newMeth(C$, 'toString', function () {
var string=C$.superclazz.prototype.toString.apply(this, []);
return string != null  ? string : this.getCanonicalString$();
});

Clazz.newMeth(C$, 'getCanonicalString$', function () {
return "(" + this.getUnit$().toString() + ") @ " + new Double(this.getOffset$()).toString() ;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var kelvin=$I$(1).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(2).newUnitName$S$S$S("kelvin", null, "K"), $I$(3).THERMODYNAMIC_TEMPERATURE);
var celsius=Clazz.new_(C$.c$$ucar_units_Unit$D,[kelvin, 273.15]);
System.out.println$S("celsius.equals(kelvin)=" + celsius.equals$O(kelvin));
System.out.println$S("celsius.getUnit().equals(kelvin)=" + celsius.getUnit$().equals$O(kelvin));
var celsiusKelvin=celsius.multiplyBy$ucar_units_Unit(kelvin);
System.out.println$S("celsiusKelvin.divideBy(celsius)=" + celsiusKelvin.divideBy$ucar_units_Unit(celsius));
System.out.println$S("celsius.divideBy(kelvin)=" + celsius.divideBy$ucar_units_Unit(kelvin));
System.out.println$S("kelvin.divideBy(celsius)=" + kelvin.divideBy$ucar_units_Unit(celsius));
System.out.println$S("celsius.raiseTo(2)=" + celsius.raiseTo$I(2));
System.out.println$S("celsius.toDerivedUnit(1.)=" + new Double(celsius.toDerivedUnit$D(1.0)).toString());
System.out.println$S("celsius.toDerivedUnit(new float[]{1,2,3}, new float[3])[1]=" + new Float(celsius.toDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [1, 2, 3]), Clazz.array(Float.TYPE, [3]))[1]).toString());
System.out.println$S("celsius.fromDerivedUnit(274.15)=" + new Double(celsius.fromDerivedUnit$D(274.15)).toString());
System.out.println$S("celsius.fromDerivedUnit(new float[]{274.15f},new float[1])[0]=" + new Float(celsius.fromDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [274.15]), Clazz.array(Float.TYPE, [1]))[0]).toString());
System.out.println$S("celsius.equals(celsius)=" + celsius.equals$O(celsius));
var celsius100=Clazz.new_(C$.c$$ucar_units_Unit$D,[celsius, 100.0]);
System.out.println$S("celsius.equals(celsius100)=" + celsius.equals$O(celsius100));
System.out.println$S("celsius.isDimensionless()=" + celsius.isDimensionless$());
var radian=$I$(1).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(2).newUnitName$S$S$S("radian", null, "rad"), $I$(3).PLANE_ANGLE);
var offRadian=Clazz.new_(C$.c$$ucar_units_Unit$D,[radian, 1.570795]);
System.out.println$S("offRadian.isDimensionless()=" + offRadian.isDimensionless$());
;}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
