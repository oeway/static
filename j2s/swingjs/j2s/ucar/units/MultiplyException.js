(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MultiplyException", null, 'ucar.units.OperationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit', function (unit) {
;C$.superclazz.c$$S.apply(this,["Can't multiply unit \"" + unit + '\"' ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$ucar_units_Unit', function (A, B) {
;C$.superclazz.c$$S.apply(this,["Can't multiply unit \"" + A + "\" by unit \"" + B + '\"' ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$ucar_units_Unit', function (scale, unit) {
;C$.superclazz.c$$S.apply(this,["Can't multiply unit \"" + unit + "\" by " + new Double(scale).toString() ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
