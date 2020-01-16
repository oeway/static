(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnitClassException", null, 'ucar.units.UnitFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit', function (unit) {
C$.c$$S.apply(this, ["\"" + unit.getClass$().getName$() + "\" is an unknown unit class" ]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
