(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConverterImpl", null, null, 'ucar.units.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$ucar_units_Unit', function (fromUnit, toUnit) {
;C$.$init$.apply(this);
if (!fromUnit.isCompatible$ucar_units_Unit(toUnit)) throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[fromUnit, toUnit]);
}, 1);

Clazz.newMeth(C$, 'create$ucar_units_Unit$ucar_units_Unit', function (fromUnit, toUnit) {
return fromUnit.getConverterTo$ucar_units_Unit(toUnit);
}, 1);

Clazz.newMeth(C$, 'convert$F', function (amount) {
return this.convert$D(amount);
});

Clazz.newMeth(C$, 'convert$FA', function (amounts) {
return this.convert$FA$FA(amounts, Clazz.array(Float.TYPE, [amounts.length]));
});

Clazz.newMeth(C$, 'convert$DA', function (amounts) {
return this.convert$DA$DA(amounts, Clazz.array(Double.TYPE, [amounts.length]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
