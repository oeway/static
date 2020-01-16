(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.ScaledUnit','ucar.units.DerivedUnitImpl','ucar.units.BaseUnit','ucar.units.UnitName','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogarithmicUnit", null, 'ucar.units.UnitImpl', 'ucar.units.DerivableUnit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['base','lnBase'],'O',['reference','ucar.units.DerivableUnit','derivedUnit','ucar.units.DerivedUnit']]]

Clazz.newMeth(C$, 'c$$ucar_units_Unit$D', function (reference, base) {
C$.c$$ucar_units_Unit$D$ucar_units_UnitName.apply(this, [reference, base, null]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$D$ucar_units_UnitName', function (reference, base, id) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
if (reference == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null reference argument"]);
}if (!(Clazz.instanceOf(reference, "ucar.units.DerivableUnit"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a DerivableUnit: " + reference]);
}this.reference=reference;
if (base != 2  && base != 10   && base != 2.718281828459045  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid base: " + new Double(base).toString()]);
}this.base=base;
this.lnBase=base == 2.718281828459045  ? 1 : Math.log(base);
this.derivedUnit=reference.getDerivedUnit$();
}, 1);

Clazz.newMeth(C$, 'getInstance$ucar_units_Unit$D', function (unit, base) {
return Clazz.new_(C$.c$$ucar_units_Unit$D,[unit, base]);
}, 1);

Clazz.newMeth(C$, 'getReference$', function () {
return this.reference;
});

Clazz.newMeth(C$, 'getBase$', function () {
return this.base;
});

Clazz.newMeth(C$, 'clone$ucar_units_UnitName', function (id) {
return Clazz.new_(C$.c$$ucar_units_Unit$D$ucar_units_UnitName,[this.reference, this.getBase$(), id]);
});

Clazz.newMeth(C$, 'myMultiplyBy$ucar_units_Unit', function (that) {
if (!that.isDimensionless$()) {
throw Clazz.new_(Clazz.load('ucar.units.MultiplyException').c$$ucar_units_Unit,[that]);
}return Clazz.instanceOf(that, "ucar.units.ScaledUnit") ? Clazz.new_($I$(1,1).c$$D$ucar_units_Unit,[(that).getScale$(), this]) : this;
});

Clazz.newMeth(C$, 'myDivideBy$ucar_units_Unit', function (that) {
if (!that.isDimensionless$()) {
throw Clazz.new_(Clazz.load('ucar.units.DivideException').c$$ucar_units_Unit,[that]);
}return Clazz.instanceOf(that, "ucar.units.ScaledUnit") ? Clazz.new_($I$(1,1).c$$D$ucar_units_Unit,[1.0 / (that).getScale$(), this]) : this;
});

Clazz.newMeth(C$, 'myDivideInto$ucar_units_Unit', function (that) {
throw Clazz.new_(Clazz.load('ucar.units.DivideException').c$$ucar_units_Unit,[that]);
});

Clazz.newMeth(C$, 'myRaiseTo$I', function (power) {
if (power == 0) {
return $I$(2).DIMENSIONLESS;
}if (power == 1) {
return this;
}throw Clazz.new_(Clazz.load('ucar.units.RaiseException').c$$ucar_units_Unit,[this]);
});

Clazz.newMeth(C$, 'getDerivedUnit$', function () {
return this.derivedUnit;
});

Clazz.newMeth(C$, 'toDerivedUnit$F', function (amount) {
return this.toDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'toDerivedUnit$D', function (amount) {
return this.reference.toDerivedUnit$D(Math.exp(amount * this.lnBase));
});

Clazz.newMeth(C$, 'toDerivedUnit$FA$FA', function (input, output) {
for (var i=input.length; --i >= 0; ) {
output[i]=(Math.exp(input[i] * this.lnBase));
}
return this.reference.toDerivedUnit$FA$FA(output, output);
});

Clazz.newMeth(C$, 'toDerivedUnit$DA$DA', function (input, output) {
for (var i=input.length; --i >= 0; ) {
output[i]=Math.exp(input[i] * this.lnBase);
}
return this.reference.toDerivedUnit$DA$DA(output, output);
});

Clazz.newMeth(C$, 'fromDerivedUnit$F', function (amount) {
return this.fromDerivedUnit$D(amount);
});

Clazz.newMeth(C$, 'fromDerivedUnit$D', function (amount) {
return Math.log(this.reference.fromDerivedUnit$D(amount)) / this.lnBase;
});

Clazz.newMeth(C$, 'fromDerivedUnit$FA$FA', function (input, output) {
this.reference.fromDerivedUnit$FA$FA(input, output);
for (var i=input.length; --i >= 0; ) {
output[i]=(Math.log(output[i]) / this.lnBase);
}
return output;
});

Clazz.newMeth(C$, 'fromDerivedUnit$DA$DA', function (input, output) {
this.reference.fromDerivedUnit$DA$DA(input, output);
for (var i=input.length; --i >= 0; ) {
output[i]=(Math.log(output[i]) / this.lnBase);
}
return output;
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (!(Clazz.instanceOf(object, "ucar.units.LogarithmicUnit"))) {
return false;
}var that=object;
return this.base == that.base  && this.reference.equals$O(that.reference) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Double.valueOf$D(this.base).hashCode$() ^ this.getReference$().hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return true;
});

Clazz.newMeth(C$, 'toString', function () {
var string=C$.superclazz.prototype.toString.apply(this, []);
return string != null  ? string : this.getCanonicalString$();
});

Clazz.newMeth(C$, 'getCanonicalString$', function () {
return (this.base == 2  ? "lb" : this.base == 2.718281828459045  ? "ln" : "lg") + "(re " + this.getReference$().toString() + ")" ;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var meter=$I$(3).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(4).newUnitName$S$S$S("meter", null, "m"), $I$(5).LENGTH);
var micron=Clazz.new_($I$(1,1).c$$D$ucar_units_Unit,[1.0E-6, meter]);
var cubicMicron=micron.raiseTo$I(3);
var Bz=Clazz.new_(C$.c$$ucar_units_Unit$D,[cubicMicron, 10.0]);
Clazz.assert(C$, this, function(){return Bz.isDimensionless$()});
Clazz.assert(C$, this, function(){return Bz.equals$O(Bz)});
Clazz.assert(C$, this, function(){return Bz.getReference$().equals$O(cubicMicron)});
Clazz.assert(C$, this, function(){return Bz.getBase$() == 10.0 });
Clazz.assert(C$, this, function(){return !Bz.equals$O(cubicMicron)});
Clazz.assert(C$, this, function(){return !Bz.equals$O(micron)});
Clazz.assert(C$, this, function(){return !Bz.equals$O(meter)});
try {
Bz.multiplyBy$ucar_units_Unit(meter);
Clazz.assert(C$, this, function(){return false});
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.MultiplyException")){
} else {
throw e;
}
}
try {
Bz.divideBy$ucar_units_Unit(meter);
Clazz.assert(C$, this, function(){return false});
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.DivideException")){
} else {
throw e;
}
}
try {
Bz.raiseTo$I(2);
Clazz.assert(C$, this, function(){return false});
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.RaiseException")){
} else {
throw e;
}
}
var value=Bz.toDerivedUnit$F(0);
Clazz.assert(C$, this, function(){return 9.0E-19 < value  && value < 1.1E-18  }, function(){return value});
value=Bz.toDerivedUnit$F(1);
Clazz.assert(C$, this, function(){return 9.0E-18 < value  && value < 1.1E-17  }, function(){return value});
value=Bz.fromDerivedUnit$D(1.0E-18);
Clazz.assert(C$, this, function(){return -0.1 < value  && value < 0.1  }, function(){return value});
value=Bz.fromDerivedUnit$D(1.0E-17);
Clazz.assert(C$, this, function(){return 0.9 < value  && value < 1.1  }, function(){return value});
var string=Bz.toString();
Clazz.assert(C$, this, function(){return string.equals$O("lg(re 9.999999999999999E-19 m3)")}, function(){return string});
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
