(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedCharSet", null, 'gnu.trove.impl.sync.TSynchronizedCharCollection', 'gnu.trove.set.TCharSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TCharSet', function (s) {
;C$.superclazz.c$$gnu_trove_TCharCollection.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TCharSet$O', function (s, mutex) {
;C$.superclazz.c$$gnu_trove_TCharCollection$O.apply(this,[s, mutex]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1