(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SynchronizedSet", null, 'gnu.trove.impl.sync.SynchronizedCollection', 'java.util.Set');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set$O', function (s, mutex) {
;C$.superclazz.c$$java_util_Collection$O.apply(this,[s, mutex]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
{
return this.c.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.c.hashCode$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
