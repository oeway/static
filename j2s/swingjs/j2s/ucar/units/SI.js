(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.BaseQuantity','ucar.units.OffsetUnit','ucar.units.ScaledUnit','ucar.units.BaseUnit','ucar.units.UnitName','ucar.units.UnitDBImpl']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SI", null, 'ucar.units.UnitSystemImpl');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var ampere=null;
var candela=null;
var kelvin=null;
var kilogram=null;
var meter=null;
var mole=null;
var second=null;
var radian=null;
var steradian=null;
var hertz=null;
var newton=null;
var pascal=null;
var joule=null;
var watt=null;
var coulomb=null;
var volt=null;
var farad=null;
var ohm=null;
var siemens=null;
var weber=null;
var tesla=null;
var henry=null;
var degree_celsius=null;
var lumen=null;
var lux=null;
var becquerel=null;
var gray=null;
var sievert=null;
var minute=null;
var hour=null;
var day=null;
var arc_degree=null;
var arc_minute=null;
var arc_second=null;
var liter=null;
var metric_ton=null;
var nautical_mile=null;
var knot=null;
var angstrom=null;
var are=null;
var hectare=null;
var barn=null;
var bar=null;
var gal=null;
var curie=null;
var roentgen=null;
var rad=null;
var rem=null;
try {
ampere=C$.bu$S$S$ucar_units_BaseQuantity("ampere", "A", $I$(1).ELECTRIC_CURRENT);
candela=C$.bu$S$S$ucar_units_BaseQuantity("candela", "cd", $I$(1).LUMINOUS_INTENSITY);
kelvin=C$.bu$S$S$ucar_units_BaseQuantity("kelvin", "K", $I$(1).THERMODYNAMIC_TEMPERATURE);
kilogram=C$.bu$S$S$ucar_units_BaseQuantity("kilogram", "kg", $I$(1).MASS);
meter=C$.bu$S$S$ucar_units_BaseQuantity("meter", "m", $I$(1).LENGTH);
mole=C$.bu$S$S$ucar_units_BaseQuantity("mole", "mol", $I$(1).AMOUNT_OF_SUBSTANCE);
second=C$.bu$S$S$ucar_units_BaseQuantity("second", "s", $I$(1).TIME);
radian=C$.bu$S$S$ucar_units_BaseQuantity("radian", "rad", $I$(1).PLANE_ANGLE);
steradian=C$.bu$S$S$ucar_units_BaseQuantity("steradian", "sr", $I$(1).SOLID_ANGLE);
hertz=C$.du$S$S$ucar_units_Unit("hertz", "Hz", second.raiseTo$I(-1));
newton=C$.du$S$S$ucar_units_Unit("newton", "N", kilogram.multiplyBy$ucar_units_Unit(meter).divideBy$ucar_units_Unit(second.raiseTo$I(2)));
pascal=C$.du$S$S$ucar_units_Unit("pascal", "Pa", newton.divideBy$ucar_units_Unit(meter.raiseTo$I(2)));
joule=C$.du$S$S$ucar_units_Unit("joule", "J", newton.multiplyBy$ucar_units_Unit(meter));
watt=C$.du$S$S$ucar_units_Unit("watt", "W", joule.divideBy$ucar_units_Unit(second));
coulomb=C$.du$S$S$ucar_units_Unit("coulomb", "C", ampere.multiplyBy$ucar_units_Unit(second));
volt=C$.du$S$S$ucar_units_Unit("volt", "V", watt.divideBy$ucar_units_Unit(ampere));
farad=C$.du$S$S$ucar_units_Unit("farad", "F", coulomb.divideBy$ucar_units_Unit(volt));
ohm=C$.du$S$S$ucar_units_Unit("ohm", "Ohm", volt.divideBy$ucar_units_Unit(ampere));
siemens=C$.du$S$S$ucar_units_Unit("siemens", "S", ohm.raiseTo$I(-1));
weber=C$.du$S$S$ucar_units_Unit("weber", "Wb", volt.multiplyBy$ucar_units_Unit(second));
tesla=C$.du$S$S$ucar_units_Unit("tesla", "T", weber.divideBy$ucar_units_Unit(meter.raiseTo$I(2)));
henry=C$.du$S$S$ucar_units_Unit("henry", "H", weber.divideBy$ucar_units_Unit(ampere));
degree_celsius=C$.du$S$S$ucar_units_Unit("degree celsius", "Cel", Clazz.new_($I$(2,1).c$$ucar_units_Unit$D,[kelvin, 273.15]));
lumen=C$.du$S$S$ucar_units_Unit("lumen", "lm", candela.multiplyBy$ucar_units_Unit(steradian));
lux=C$.du$S$S$ucar_units_Unit("lux", "lx", lumen.divideBy$ucar_units_Unit(meter.raiseTo$I(2)));
becquerel=C$.du$S$S$ucar_units_Unit("becquerel", "Bq", hertz);
gray=C$.du$S$S$ucar_units_Unit("gray", "Gy", joule.divideBy$ucar_units_Unit(kilogram));
sievert=C$.du$S$S$ucar_units_Unit("sievert", "Sv", joule.divideBy$ucar_units_Unit(kilogram));
minute=C$.du$S$S$ucar_units_Unit("minute", "min", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[60, second]));
hour=C$.du$S$S$ucar_units_Unit("hour", "h", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[60, minute]));
day=C$.du$S$S$ucar_units_Unit("day", "d", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[24, hour]));
arc_degree=C$.du$S$S$ucar_units_Unit("arc degree", "deg", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.017453292519943295, radian]));
arc_minute=C$.du$S$S$ucar_units_Unit("arc minute", "\'", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.016666666666666666, arc_degree]));
arc_second=C$.du$S$S$ucar_units_Unit("arc second", "\"", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.016666666666666666, arc_minute]));
liter=C$.du$S$S$ucar_units_Unit("liter", "L", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.001, meter.raiseTo$I(3)]));
metric_ton=C$.du$S$S$ucar_units_Unit("metric ton", "t", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[1000.0, kilogram]));
nautical_mile=C$.du$S$S$ucar_units_Unit("nautical mile", "nmi", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[1852, meter]));
knot=C$.du$S$S$ucar_units_Unit("knot", "kt", nautical_mile.divideBy$ucar_units_Unit(hour));
angstrom=C$.du$S$S$ucar_units_Unit("angstrom", null, Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[1.0E-10, meter]));
are=C$.du$S$S$ucar_units_Unit("are", "are", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[10, meter]).raiseTo$I(2));
hectare=C$.du$S$S$ucar_units_Unit("hectare", "ha", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[100, are]));
barn=C$.du$S$S$ucar_units_Unit("barn", "b", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[1.0E-28, meter.raiseTo$I(2)]));
bar=C$.du$S$S$ucar_units_Unit("bar", "bar", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[100000.0, pascal]));
gal=C$.du$S$S$ucar_units_Unit("gal", "Gal", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.01, meter]).divideBy$ucar_units_Unit(second.raiseTo$I(2)));
curie=C$.du$S$S$ucar_units_Unit("curie", "Ci", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[3.7E10, becquerel]));
roentgen=C$.du$S$S$ucar_units_Unit("roentgen", "R", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[2.58E-4, coulomb.divideBy$ucar_units_Unit(kilogram)]));
rad=C$.du$S$S$ucar_units_Unit("rad", "rd", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.01, gray]));
rem=C$.du$S$S$ucar_units_Unit("rem", "rem", Clazz.new_($I$(3,1).c$$D$ucar_units_Unit,[0.01, sievert]));
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.UnitException")){
var reason=e.getMessage$();
System.err.println$S("Couldn't initialize class SI" + reason == null  ? "" : (": " + reason));
} else {
throw e;
}
}
C$.AMOUNT_OF_SUBSTANCE_UNIT=mole;
C$.ELECTRIC_CURRENT_UNIT=ampere;
C$.LENGTH_UNIT=meter;
C$.LUMINOUS_INTENSITY_UNIT=candela;
C$.MASS_UNIT=kilogram;
C$.PLANE_ANGLE_UNIT=radian;
C$.SOLID_ANGLE_UNIT=steradian;
C$.THERMODYNAMIC_TEMPERATURE_UNIT=kelvin;
C$.TIME_UNIT=second;
C$.AMPERE=ampere;
C$.CANDELA=candela;
C$.KELVIN=kelvin;
C$.KILOGRAM=kilogram;
C$.METER=meter;
C$.METRE=C$.METER;
C$.MOLE=mole;
C$.SECOND=second;
C$.RADIAN=radian;
C$.STERADIAN=steradian;
C$.HERTZ=hertz;
C$.NEWTON=newton;
C$.PASCAL=pascal;
C$.JOULE=joule;
C$.WATT=watt;
C$.COULOMB=coulomb;
C$.VOLT=volt;
C$.FARAD=farad;
C$.OHM=ohm;
C$.SIEMENS=siemens;
C$.WEBER=weber;
C$.TESLA=tesla;
C$.HENRY=henry;
C$.DEGREE_CELSIUS=degree_celsius;
C$.LUMEN=lumen;
C$.LUX=lux;
C$.BECQUEREL=becquerel;
C$.GRAY=gray;
C$.SIEVERT=sievert;
C$.MINUTE=minute;
C$.HOUR=hour;
C$.DAY=day;
C$.ARC_DEGREE=arc_degree;
C$.ARC_MINUTE=arc_minute;
C$.ARC_SECOND=arc_second;
C$.LITER=liter;
C$.LITRE=C$.LITER;
C$.METRIC_TON=metric_ton;
C$.TONNE=C$.METRIC_TON;
C$.NAUTICAL_MILE=nautical_mile;
C$.KNOT=knot;
C$.ANGSTROM=angstrom;
C$.ARE=are;
C$.HECTARE=hectare;
C$.BARN=barn;
C$.BAR=bar;
C$.GAL=gal;
C$.CURIE=curie;
C$.ROENTGEN=roentgen;
C$.RAD=rad;
C$.REM=rem;
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['si','ucar.units.SI','AMOUNT_OF_SUBSTANCE_UNIT','ucar.units.Unit','+ELECTRIC_CURRENT_UNIT','+LENGTH_UNIT','+LUMINOUS_INTENSITY_UNIT','+MASS_UNIT','+PLANE_ANGLE_UNIT','+SOLID_ANGLE_UNIT','+THERMODYNAMIC_TEMPERATURE_UNIT','+TIME_UNIT','AMPERE','ucar.units.BaseUnit','+CANDELA','+KELVIN','+KILOGRAM','+METER','+METRE','+MOLE','+SECOND','+RADIAN','+STERADIAN','HERTZ','ucar.units.Unit','+NEWTON','+PASCAL','+JOULE','+WATT','+COULOMB','+VOLT','+FARAD','+OHM','+SIEMENS','+WEBER','+TESLA','+HENRY','+DEGREE_CELSIUS','+LUMEN','+LUX','+BECQUEREL','+GRAY','+SIEVERT','+MINUTE','+HOUR','+DAY','+ARC_DEGREE','+ARC_MINUTE','+ARC_SECOND','+LITER','+LITRE','+METRIC_TON','+TONNE','+NAUTICAL_MILE','+KNOT','+ANGSTROM','+ARE','+HECTARE','+BARN','+BAR','+GAL','+CURIE','+ROENTGEN','+RAD','+REM']]]

Clazz.newMeth(C$, 'bu$S$S$ucar_units_BaseQuantity', function (name, symbol, quantity) {
return $I$(4).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(5).newUnitName$S$S$S(name, null, symbol), quantity);
}, 1);

Clazz.newMeth(C$, 'du$S$S$ucar_units_Unit', function (name, symbol, definition) {
return definition.clone$ucar_units_UnitName($I$(5).newUnitName$S$S$S(name, null, symbol));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$ucar_units_UnitDBImpl$ucar_units_UnitDBImpl.apply(this,[C$.baseUnitDB$(), C$.derivedUnitDB$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'baseUnitDB$', function () {
var db=Clazz.new_($I$(6,1).c$$I$I,[9, 9]);
db.addUnit$ucar_units_Unit(C$.AMPERE);
db.addUnit$ucar_units_Unit(C$.CANDELA);
db.addUnit$ucar_units_Unit(C$.KELVIN);
db.addUnit$ucar_units_Unit(C$.KILOGRAM);
db.addUnit$ucar_units_Unit(C$.METER);
db.addUnit$ucar_units_Unit(C$.MOLE);
db.addUnit$ucar_units_Unit(C$.SECOND);
db.addUnit$ucar_units_Unit(C$.RADIAN);
db.addUnit$ucar_units_Unit(C$.STERADIAN);
db.addAlias$S$S("metre", "meter");
return db;
}, 1);

Clazz.newMeth(C$, 'derivedUnitDB$', function () {
var db=Clazz.new_($I$(6,1).c$$I$I,[42, 43]);
db.addUnit$ucar_units_Unit(C$.HERTZ);
db.addUnit$ucar_units_Unit(C$.NEWTON);
db.addUnit$ucar_units_Unit(C$.PASCAL);
db.addUnit$ucar_units_Unit(C$.JOULE);
db.addUnit$ucar_units_Unit(C$.WATT);
db.addUnit$ucar_units_Unit(C$.COULOMB);
db.addUnit$ucar_units_Unit(C$.VOLT);
db.addUnit$ucar_units_Unit(C$.FARAD);
db.addUnit$ucar_units_Unit(C$.OHM);
db.addUnit$ucar_units_Unit(C$.SIEMENS);
db.addUnit$ucar_units_Unit(C$.WEBER);
db.addUnit$ucar_units_Unit(C$.TESLA);
db.addUnit$ucar_units_Unit(C$.HENRY);
db.addUnit$ucar_units_Unit(C$.DEGREE_CELSIUS);
db.addUnit$ucar_units_Unit(C$.LUMEN);
db.addUnit$ucar_units_Unit(C$.LUX);
db.addUnit$ucar_units_Unit(C$.BECQUEREL);
db.addUnit$ucar_units_Unit(C$.GRAY);
db.addUnit$ucar_units_Unit(C$.SIEVERT);
db.addUnit$ucar_units_Unit(C$.MINUTE);
db.addUnit$ucar_units_Unit(C$.HOUR);
db.addUnit$ucar_units_Unit(C$.DAY);
db.addUnit$ucar_units_Unit(C$.ARC_DEGREE);
db.addUnit$ucar_units_Unit(C$.ARC_MINUTE);
db.addUnit$ucar_units_Unit(C$.ARC_SECOND);
db.addUnit$ucar_units_Unit(C$.LITER);
db.addUnit$ucar_units_Unit(C$.METRIC_TON);
db.addUnit$ucar_units_Unit(C$.NAUTICAL_MILE);
db.addUnit$ucar_units_Unit(C$.KNOT);
db.addUnit$ucar_units_Unit(C$.ANGSTROM);
db.addUnit$ucar_units_Unit(C$.ARE);
db.addUnit$ucar_units_Unit(C$.HECTARE);
db.addUnit$ucar_units_Unit(C$.BARN);
db.addUnit$ucar_units_Unit(C$.BAR);
db.addUnit$ucar_units_Unit(C$.GAL);
db.addUnit$ucar_units_Unit(C$.CURIE);
db.addUnit$ucar_units_Unit(C$.ROENTGEN);
db.addUnit$ucar_units_Unit(C$.RAD);
db.addUnit$ucar_units_Unit(C$.REM);
db.addAlias$S$S$S("litre", "liter", "l");
db.addAlias$S$S("tonne", "metric ton");
db.addSymbol$S$S("tne", "tonne");
return db;
}, 1);

Clazz.newMeth(C$, 'instance$', function () {
{
if (C$.si == null ) {
try {
C$.si=Clazz.new_(C$);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.UnitException")){
throw Clazz.new_(Clazz.load('ucar.units.UnitSystemException').c$$S$Exception,["Couldn\'t initialize class SI", e]);
} else {
throw e;
}
}
}}return C$.si;
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
C$.instance$();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
