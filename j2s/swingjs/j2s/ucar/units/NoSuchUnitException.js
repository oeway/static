(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NoSuchUnitException", null, 'ucar.units.SpecificationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_UnitID', function (id) {
C$.c$$S.apply(this, [id.toString()]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (id) {
;C$.superclazz.c$$S.apply(this,["Unit \"" + id + "\" not in database" ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
