(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedShortSet", null, 'gnu.trove.impl.sync.TSynchronizedShortCollection', 'gnu.trove.set.TShortSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TShortSet', function (s) {
;C$.superclazz.c$$gnu_trove_TShortCollection.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TShortSet$O', function (s, mutex) {
;C$.superclazz.c$$gnu_trove_TShortCollection$O.apply(this,[s, mutex]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
