(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.DerivedUnitImpl','ucar.units.BaseUnit','ucar.units.UnitName','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScaledUnit", null, 'ucar.units.UnitImpl', 'ucar.units.DerivableUnit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['_scale'],'O',['_unit','ucar.units.Unit']]]

Clazz.newMeth(C$, 'c$$D', function (scale) {
C$.c$$D$ucar_units_Unit.apply(this, [scale, $I$(1).DIMENSIONLESS]);
}, 1);

Clazz.newMeth(C$, 'c$$D$ucar_units_Unit', function (scale, unit) {
C$.c$$D$ucar_units_Unit$ucar_units_UnitName.apply(this, [scale, unit, null]);
}, 1);

Clazz.newMeth(C$, 'c$$D$ucar_units_Unit$ucar_units_UnitName', function (scale, unit, id) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
if (!(Clazz.instanceOf(unit, "ucar.units.ScaledUnit"))) {
this._unit=unit;
this._scale=scale;
} else {
this._unit=(unit)._unit;
this._scale=(unit)._scale * scale;
}}, 1);

Clazz.newMeth(C$, 'getInstance$D$ucar_units_Unit', function (scale, unit) {
if (scale == 0 ) {
throw Clazz.new_(Clazz.load('ucar.units.MultiplyException').c$$D$ucar_units_Unit,[scale, unit]);
}return scale == 1  ? unit : Clazz.new_(C$.c$$D$ucar_units_Unit,[scale, unit]);
}, 1);

Clazz.newMeth(C$, 'getScale$', function () {
return this._scale;
});

Clazz.newMeth(C$, 'getUnit$', function () {
return this._unit;
});

Clazz.newMeth(C$, 'clone$ucar_units_UnitName', function (id) {
return Clazz.new_(C$.c$$D$ucar_units_Unit$ucar_units_UnitName,[this._scale, this.getUnit$(), id]);
});

Clazz.newMeth(C$, 'multiplyBy$D', function (scale) {
return C$.getInstance$D$ucar_units_Unit(scale * this._scale, this._unit);
});

Clazz.newMeth(C$, 'myMultiplyBy$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.ScaledUnit") ? Clazz.new_(C$.c$$D$ucar_units_Unit,[this.getScale$() * (that).getScale$(), this.getUnit$().multiplyBy$ucar_units_Unit((that).getUnit$())]) : Clazz.new_(C$.c$$D$ucar_units_Unit,[this.getScale$(), this.getUnit$().multiplyBy$ucar_units_Unit(that)]);
});

Clazz.newMeth(C$, 'myDivideBy$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.ScaledUnit") ? Clazz.new_(C$.c$$D$ucar_units_Unit,[this.getScale$() / (that).getScale$(), this.getUnit$().divideBy$ucar_units_Unit((that).getUnit$())]) : Clazz.new_(C$.c$$D$ucar_units_Unit,[this.getScale$(), this.getUnit$().divideBy$ucar_units_Unit(that)]);
});

Clazz.newMeth(C$, 'myDivideInto$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.ScaledUnit") ? Clazz.new_(C$.c$$D$ucar_units_Unit,[(that).getScale$() / this.getScale$(), this.getUnit$().divideInto$ucar_units_Unit((that).getUnit$())]) : Clazz.new_(C$.c$$D$ucar_units_Unit,[1 / this.getScale$(), this.getUnit$().divideInto$ucar_units_Unit(that)]);
});

Clazz.newMeth(C$, 'myRaiseTo$I', function (power) {
return Clazz.new_(C$.c$$D$ucar_units_Unit,[Math.pow(this.getScale$(), power), this.getUnit$().raiseTo$I(power)]);
});

Clazz.newMeth(C$, 'getDerivedUnit$', function () {
return this.getUnit$().getDerivedUnit$();
});

Clazz.newMeth(C$, 'toDerivedUnit$F', function (amount) {
return this.toDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'toDerivedUnit$D', function (amount) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}return (this._unit).toDerivedUnit$D(amount * this.getScale$());
});

Clazz.newMeth(C$, 'toDerivedUnit$FA$FA', function (input, output) {
var scale=this.getScale$();
for (var i=input.length; --i >= 0; ) {
output[i]=input[i] * scale;
}
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}return (this.getUnit$()).toDerivedUnit$FA$FA(output, output);
});

Clazz.newMeth(C$, 'toDerivedUnit$DA$DA', function (input, output) {
var scale=this.getScale$();
for (var i=input.length; --i >= 0; ) {
output[i]=input[i] * scale;
}
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this, this.getDerivedUnit$()]);
}return (this.getUnit$()).toDerivedUnit$DA$DA(output, output);
});

Clazz.newMeth(C$, 'fromDerivedUnit$F', function (amount) {
return this.fromDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'fromDerivedUnit$D', function (amount) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}return (this.getUnit$()).fromDerivedUnit$D(amount) / this.getScale$();
});

Clazz.newMeth(C$, 'fromDerivedUnit$FA$FA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}(this.getUnit$()).fromDerivedUnit$FA$FA(input, output);
var scale=this.getScale$();
for (var i=input.length; --i >= 0; ) {
output[i] /= scale;
}
return output;
});

Clazz.newMeth(C$, 'fromDerivedUnit$DA$DA', function (input, output) {
if (!(Clazz.instanceOf(this._unit, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[this.getDerivedUnit$(), this]);
}(this.getUnit$()).fromDerivedUnit$DA$DA(input, output);
var scale=this.getScale$();
for (var i=input.length; --i >= 0; ) {
output[i] /= scale;
}
return output;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (this._scale == 1 ) {
return object.equals$O(this._unit);
}if (!(Clazz.instanceOf(object, "ucar.units.ScaledUnit"))) {
return false;
}var that=object;
return this._scale == that._scale  && this._unit.equals$O(that._unit) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.getScale$() == 1  ? 0 : Double.valueOf$D(this.getScale$()).hashCode$()) ^ this.getUnit$().hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return this.getUnit$().isDimensionless$();
});

Clazz.newMeth(C$, 'toString', function () {
var string=C$.superclazz.prototype.toString.apply(this, []);
return string != null  ? string : this.getCanonicalString$();
});

Clazz.newMeth(C$, 'getCanonicalString$', function () {
return $I$(1).DIMENSIONLESS.equals$O(this._unit) ? Double.toString$D(this.getScale$()) : Double.toString$D(this.getScale$()) + " " + this._unit.toString() ;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var meter=$I$(2).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(3).newUnitName$S$S$S("meter", null, "m"), $I$(4).LENGTH);
var nauticalMile=Clazz.new_(C$.c$$D$ucar_units_Unit,[1852.0, meter]);
System.out.println$S("nauticalMile.getUnit().equals(meter)=" + nauticalMile.getUnit$().equals$O(meter));
var nauticalMileMeter=nauticalMile.multiplyBy$ucar_units_Unit(meter);
System.out.println$S("nauticalMileMeter.divideBy(nauticalMile)=" + nauticalMileMeter.divideBy$ucar_units_Unit(nauticalMile));
System.out.println$S("meter.divideBy(nauticalMile)=" + meter.divideBy$ucar_units_Unit(nauticalMile));
System.out.println$S("nauticalMile.raiseTo(2)=" + nauticalMile.raiseTo$I(2));
System.out.println$S("nauticalMile.toDerivedUnit(1.)=" + new Double(nauticalMile.toDerivedUnit$D(1.0)).toString());
System.out.println$S("nauticalMile.toDerivedUnit(new float[]{1,2,3}, new float[3])[1]=" + new Float(nauticalMile.toDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [1, 2, 3]), Clazz.array(Float.TYPE, [3]))[1]).toString());
System.out.println$S("nauticalMile.fromDerivedUnit(1852.)=" + new Double(nauticalMile.fromDerivedUnit$D(1852.0)).toString());
System.out.println$S("nauticalMile.fromDerivedUnit(new float[]{1852},new float[1])[0]=" + new Float(nauticalMile.fromDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [1852]), Clazz.array(Float.TYPE, [1]))[0]).toString());
System.out.println$S("nauticalMile.equals(nauticalMile)=" + nauticalMile.equals$O(nauticalMile));
var nautical2Mile=Clazz.new_(C$.c$$D$ucar_units_Unit,[2, nauticalMile]);
System.out.println$S("nauticalMile.equals(nautical2Mile)=" + nauticalMile.equals$O(nautical2Mile));
System.out.println$S("nauticalMile.isDimensionless()=" + nauticalMile.isDimensionless$());
var radian=$I$(2).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(3).newUnitName$S$S$S("radian", null, "rad"), $I$(4).PLANE_ANGLE);
var degree=Clazz.new_(C$.c$$D$ucar_units_Unit,[0.017453277777777776, radian]);
System.out.println$S("degree.isDimensionless()=" + degree.isDimensionless$());
;}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
