(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.UnitDimension','ucar.units.UnitName','ucar.units.BaseUnit','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DerivedUnitImpl", null, 'ucar.units.UnitImpl', ['ucar.units.DerivedUnit', 'ucar.units.DerivableUnit']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DIMENSIONLESS=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dimension','ucar.units.UnitDimension']]
,['O',['DIMENSIONLESS','ucar.units.DerivedUnitImpl']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$ucar_units_UnitDimension$ucar_units_UnitName.apply(this, [Clazz.new_($I$(1,1)), C$.dimensionlessID$()]);
}, 1);

Clazz.newMeth(C$, 'dimensionlessID$', function () {
var id;
try {
id=$I$(2).newUnitName$S$S$S("1", "1", "1");
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.NameException")){
id=null;
} else {
throw e;
}
}
return id;
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_UnitDimension', function (dimension) {
C$.c$$ucar_units_UnitDimension$ucar_units_UnitName.apply(this, [dimension, null]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_UnitName', function (id) {
C$.c$$ucar_units_UnitDimension$ucar_units_UnitName.apply(this, [null, id]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_UnitDimension$ucar_units_UnitName', function (dimension, id) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
this.dimension=dimension;
}, 1);

Clazz.newMeth(C$, 'setDimension$ucar_units_UnitDimension', function (dimension) {
this.dimension=dimension;
});

Clazz.newMeth(C$, 'getDimension$', function () {
return this.dimension;
});

Clazz.newMeth(C$, 'getQuantityDimension$', function () {
return this.getDimension$().getQuantityDimension$();
});

Clazz.newMeth(C$, 'isReciprocalOf$ucar_units_DerivedUnit', function (that) {
return this.dimension.isReciprocalOf$ucar_units_Dimension(that.getDimension$());
});

Clazz.newMeth(C$, 'getDerivedUnit$', function () {
return this;
});

Clazz.newMeth(C$, 'clone$ucar_units_UnitName', function (id) {
return Clazz.new_(C$.c$$ucar_units_UnitDimension$ucar_units_UnitName,[this.dimension, id]);
});

Clazz.newMeth(C$, 'myMultiplyBy$ucar_units_Unit', function (that) {
var result;
if (this.dimension.getRank$() == 0) {
result=that;
} else {
if (!(Clazz.instanceOf(that, "ucar.units.DerivedUnit"))) {
result=that.multiplyBy$ucar_units_Unit(this);
} else {
var thatDimension=(that).getDimension$();
result=thatDimension.getRank$() == 0 ? this : Clazz.new_(C$.c$$ucar_units_UnitDimension,[this.dimension.multiplyBy$ucar_units_UnitDimension(thatDimension)]);
}}return result;
});

Clazz.newMeth(C$, 'myDivideBy$ucar_units_Unit', function (that) {
var result;
if (this.dimension.getRank$() == 0) {
result=that.raiseTo$I(-1);
} else {
if (!(Clazz.instanceOf(that, "ucar.units.DerivedUnit"))) {
result=that.divideInto$ucar_units_Unit(this);
} else {
var thatDimension=(that).getDimension$();
result=thatDimension.getRank$() == 0 ? this : Clazz.new_(C$.c$$ucar_units_UnitDimension,[this.dimension.divideBy$ucar_units_UnitDimension(thatDimension)]);
}}return result;
});

Clazz.newMeth(C$, 'myDivideInto$ucar_units_Unit', function (that) {
return that.divideBy$ucar_units_Unit(this);
});

Clazz.newMeth(C$, 'myRaiseTo$I', function (power) {
return power == 1 ? this : Clazz.new_(C$.c$$ucar_units_UnitDimension,[this.dimension.raiseTo$I(power)]);
});

Clazz.newMeth(C$, 'toDerivedUnit$F', function (amount) {
return amount;
});

Clazz.newMeth(C$, 'toDerivedUnit$D', function (amount) {
return amount;
});

Clazz.newMeth(C$, 'toDerivedUnit$FA$FA', function (input, output) {
if (input !== output ) {
System.arraycopy$O$I$O$I$I(input, 0, output, 0, input.length);
}return output;
});

Clazz.newMeth(C$, 'toDerivedUnit$DA$DA', function (input, output) {
if (input !== output ) {
System.arraycopy$O$I$O$I$I(input, 0, output, 0, input.length);
}return output;
});

Clazz.newMeth(C$, 'fromDerivedUnit$F', function (amount) {
return amount;
});

Clazz.newMeth(C$, 'fromDerivedUnit$D', function (amount) {
return amount;
});

Clazz.newMeth(C$, 'fromDerivedUnit$FA$FA', function (input, output) {
return this.toDerivedUnit$FA$FA(input, output);
});

Clazz.newMeth(C$, 'fromDerivedUnit$DA$DA', function (input, output) {
return this.toDerivedUnit$DA$DA(input, output);
});

Clazz.newMeth(C$, 'isCompatible$ucar_units_Unit', function (that) {
var unit=that.getDerivedUnit$();
return this.equals$O(unit) || this.isReciprocalOf$ucar_units_DerivedUnit(unit) ;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (!(Clazz.instanceOf(object, "ucar.units.DerivedUnit"))) {
return false;
}var that=object;
return (Clazz.instanceOf(this, "ucar.units.BaseUnit") && Clazz.instanceOf(that, "ucar.units.BaseUnit") ) ? false : this.dimension.equals$O(that.getDimension$());
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Clazz.instanceOf(this, "ucar.units.BaseUnit") ? System.identityHashCode$O(this) : this.dimension.hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return this.dimension.isDimensionless$();
});

Clazz.newMeth(C$, 'toString', function () {
var string=C$.superclazz.prototype.toString.apply(this, []);
return string != null  ? string : this.getCanonicalString$();
});

Clazz.newMeth(C$, 'getCanonicalString$', function () {
return this.dimension.toString();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var second=$I$(3).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(2).newUnitName$S$S$S("second", null, "s"), $I$(4).TIME);
System.out.println$S("second = \"" + second + '\"' );
var meter=$I$(3).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(2).newUnitName$S$S$S("meter", null, "m"), $I$(4).LENGTH);
System.out.println$S("meter = \"" + meter + '\"' );
var meterSecond=meter.myMultiplyBy$ucar_units_Unit(second);
System.out.println$S("meterSecond = \"" + meterSecond + '\"' );
var meterPerSecond=meter.myDivideBy$ucar_units_Unit(second);
System.out.println$S("meterPerSecond = \"" + meterPerSecond + '\"' );
var secondPerMeter=second.myDivideBy$ucar_units_Unit(meter);
System.out.println$S("secondPerMeter = \"" + secondPerMeter + '\"' );
System.out.println$S("meterPerSecond.isReciprocalOf(secondPerMeter)=" + meterPerSecond.isReciprocalOf$ucar_units_DerivedUnit(secondPerMeter));
System.out.println$S("meter.toDerivedUnit(1.0)=" + new Double(meter.toDerivedUnit$D(1.0)).toString());
System.out.println$S("meter.toDerivedUnit(new double[] {1,2,3}, new double[3])[1]=" + new Double(meter.toDerivedUnit$DA$DA(Clazz.array(Double.TYPE, -1, [1, 2, 3]), Clazz.array(Double.TYPE, [3]))[1]).toString());
System.out.println$S("meter.fromDerivedUnit(1.0)=" + new Double(meter.fromDerivedUnit$D(1.0)).toString());
System.out.println$S("meter.fromDerivedUnit(new double[] {1,2,3}, new double[3])[2]=" + new Double(meter.fromDerivedUnit$DA$DA(Clazz.array(Double.TYPE, -1, [1, 2, 3]), Clazz.array(Double.TYPE, [3]))[2]).toString());
System.out.println$S("meter.isCompatible(meter)=" + meter.isCompatible$ucar_units_Unit(meter));
System.out.println$S("meter.isCompatible(second)=" + meter.isCompatible$ucar_units_Unit(second));
System.out.println$S("meter.equals(meter)=" + meter.equals$O(meter));
System.out.println$S("meter.equals(second)=" + meter.equals$O(second));
System.out.println$S("meter.isDimensionless()=" + meter.isDimensionless$());
var sPerS=second.myDivideBy$ucar_units_Unit(second);
System.out.println$S("sPerS = \"" + sPerS + '\"' );
System.out.println$S("sPerS.isDimensionless()=" + sPerS.isDimensionless$());
meterPerSecond.raiseTo$I(2);
meter.myDivideBy$ucar_units_Unit(meterPerSecond);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
