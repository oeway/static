(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'AssertionError','ucar.units.UnitFormatManager','ucar.units.UnitName']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Test");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'myAssert$Z', function (value) {
if (!value) {
throw Clazz.new_($I$(1,1));
}}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var format=$I$(2).instance$();
var t1=format.parse$S("secs since 1970-01-01 00:00:00");
var t2=format.parse$S("secs since 1999-02-03 00:00:00");
System.out.println$S("t1 = " + t1);
System.out.println$S("t2 = " + t2);
System.out.println$S("t1.isCompatible(t2) = " + t1.isCompatible$ucar_units_Unit(t2));
System.out.println$S("t2.convertTo(0.0, t1) = " + new Double(t2.convertTo$D$ucar_units_Unit(0.0, t1)).toString());
t1=format.parse$S("years since 1930-07-27");
t1=format.parse$S("years since 1930");
t1=format.parse$S("12 secs since 1970-01-02T00:00:00Z");
System.out.println$S("format.parse(\"\") = \"" + format.parse$S("") + '\"' );
System.out.println$S("format.parse(\"s\") = \"" + format.parse$S("s") + '\"' );
System.out.println$S("format.parse(\"SeCoNd\") = \"" + format.parse$S("SeCoNd") + '\"' );
System.out.println$S("format.parse(\"min\") = \"" + format.parse$S("min") + '\"' );
System.out.println$S("format.parse(\"min\").toString() = \"" + format.parse$S("min").toString() + '\"' );
System.out.println$S("format.parse(\"60 s\") = \"" + format.parse$S("60 s") + '\"' );
System.out.println$S("format.parse(\"Cel\") = \"" + format.parse$S("Cel") + '\"' );
System.out.println$S("format.parse(\"Cel\").toString() = \"" + format.parse$S("Cel").toString() + '\"' );
System.out.println$S("format.parse(\"min @ 1970-01-01 00:00:00 UTC\") = \"" + format.parse$S("min @ 1970-01-01 00:00:00 UTC") + '\"' );
System.out.println$S("format.parse(\"min @ 2000-01-01 00 UTC\").toString() = \"" + format.parse$S("min @ 2000-01-01 00 UTC").toString() + '\"' );
System.out.println$S("format.parse(\"g/kg\") = \"" + format.parse$S("g/kg") + '\"' );
System.out.println$S("format.longFormat(format.parse(\"g/kg\")) = \"" + format.longFormat$ucar_units_Unit(format.parse$S("g/kg")) + '\"' );
var celsius=format.parse$S("Cel");
var kelvin=format.parse$S("K");
System.out.println$S("celsius.getConverterTo(kelvin).convert(0) = \"" + new Float(celsius.getConverterTo$ucar_units_Unit(kelvin).convert$F(0)).toString() + '\"' );
System.out.println$S("kelvin.getConverterTo(celsius).convert(273.15) = \"" + new Double(kelvin.getConverterTo$ucar_units_Unit(celsius).convert$D(273.15)).toString() + '\"' );
C$.myAssert$Z(kelvin.isCompatible$ucar_units_Unit(celsius));
C$.myAssert$Z(!kelvin.equals$O(celsius));
C$.myAssert$Z(kelvin.hashCode$() != celsius.hashCode$());
var fahrenheit=format.parse$S("fahrenheit");
fahrenheit=fahrenheit.clone$ucar_units_UnitName($I$(3).newUnitName$S("fahrenheit"));
kelvin=kelvin.clone$ucar_units_UnitName($I$(3).newUnitName$S("kelvin"));
C$.myAssert$Z(kelvin.isCompatible$ucar_units_Unit(fahrenheit));
C$.myAssert$Z(fahrenheit.isCompatible$ucar_units_Unit(kelvin));
var kelvinUnit=format.parse$S("kelvin").clone$ucar_units_UnitName($I$(3).newUnitName$S("kelvin"));
var fahrenUnit=format.parse$S("fahrenheit").clone$ucar_units_UnitName($I$(3).newUnitName$S("fahrenheit"));
C$.myAssert$Z(kelvinUnit.isCompatible$ucar_units_Unit(fahrenUnit));
var second=format.parse$S("s");
var minute=format.parse$S("min");
System.out.println$S("second.getConverterTo(minute).convert(60) = \"" + new Float(second.getConverterTo$ucar_units_Unit(minute).convert$F(60)).toString() + '\"' );
System.out.println$S("minute.getConverterTo(second).convert(1) = \"" + new Float(minute.getConverterTo$ucar_units_Unit(second).convert$F(1)).toString() + '\"' );
var mixingRatio=format.parse$S("g/kg").clone$ucar_units_UnitName($I$(3).newUnitName$S("mixing ratio"));
System.out.println$S("mixingRatio.toString() = \"" + mixingRatio.toString() + '\"' );
System.out.println$S("format.longFormat(mixingRatio) = \"" + format.longFormat$ucar_units_Unit(mixingRatio) + '\"' );
System.out.println$S("format.longFormat(format.parse(\"(g/kg)/(lb/ton)\")) = \"" + format.longFormat$ucar_units_Unit(format.parse$S("(g/kg)/(lb/ton)")) + '\"' );
System.out.println$S("format.parse(\"(g/mol)/(lb/kmol)\").toString() = \"" + format.parse$S("(g/mol)/(lb/kmol)").toString() + '\"' );
System.out.println$S("format.longFormat(format.parse(\"(g/mol)/(lb/kmol)\")) = \"" + format.longFormat$ucar_units_Unit(format.parse$S("(g/mol)/(lb/kmol)")) + '\"' );
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
