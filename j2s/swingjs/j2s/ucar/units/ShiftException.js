(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ShiftException", null, 'ucar.units.OperationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$D', function (unit, origin) {
;C$.superclazz.c$$S.apply(this,["Can't shift origin of unit \"" + unit + "\" to " + new Double(origin).toString() ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$java_util_Date', function (unit, origin) {
;C$.superclazz.c$$S.apply(this,["Can't shift origin of unit \"" + unit + "\" to " + origin ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
