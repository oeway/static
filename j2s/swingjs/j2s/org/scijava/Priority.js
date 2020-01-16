(function(){var P$=Clazz.newPackage("org.scijava"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Priority");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'compare$org_scijava_Prioritized$org_scijava_Prioritized', function (p1, p2) {
var priority1=p1 == null  ? -Infinity : p1.getPriority$();
var priority2=p2 == null  ? -Infinity : p2.getPriority$();
if (priority1 == priority2 ) return 0;
return priority1 > priority2  ? -1 : 1;
}, 1);

Clazz.newMeth(C$, 'inject$O$D', function (o, priority) {
if (!(Clazz.instanceOf(o, "org.scijava.Prioritized"))) return false;
(o).setPriority$D(priority);
return true;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
