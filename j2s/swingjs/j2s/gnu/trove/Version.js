(function(){var P$=Clazz.newPackage("gnu.trove"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Version");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
System.out.println$S(C$.getVersion$());
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
var version=Clazz.getClass(C$).getPackage$().getImplementationVersion$();
if (version != null ) {
return "trove4j version " + version;
}return "Sorry no Implementation-Version manifest attribute available";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
