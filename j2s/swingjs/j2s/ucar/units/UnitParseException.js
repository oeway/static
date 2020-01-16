(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnitParseException", null, 'ucar.units.SpecificationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (reason) {
;C$.superclazz.c$$S.apply(this,["Parse error: " + reason]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (spec, reason) {
;C$.superclazz.c$$S.apply(this,["Couldn't parse \"" + spec + "\": " + reason ]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, e) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.initCause$Throwable(e);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
