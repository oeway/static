(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableDoubleSet", null, 'gnu.trove.impl.unmodifiable.TUnmodifiableDoubleCollection', ['gnu.trove.set.TDoubleSet', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TDoubleSet', function (s) {
;C$.superclazz.c$$gnu_trove_TDoubleCollection.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.c.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.c.hashCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
