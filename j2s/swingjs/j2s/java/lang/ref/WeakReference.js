(function(){var P$=Clazz.newPackage("java.lang.ref"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WeakReference", null, 'java.lang.ref.Reference');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ok=true;
{
try {

new WeakMap()
} catch (t) {
C$.ok=false;
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['o','java.lang.Object']]
,['Z',['ok']]]

Clazz.newMeth(C$, ['c$$TT'], function (referent) {
;C$.superclazz.c$$TT.apply(this,[null]);C$.$init$.apply(this);
if (C$.ok) {

this.o = new WeakMap();
this.o.set(this, referent);
} else {
this.o=referent;
}}, 1);

Clazz.newMeth(C$, ['c$$TT$ref_ReferenceQueue'], function (referent, q) {
C$.c$$TT.apply(this, [referent]);
}, 1);

Clazz.newMeth(C$, ['get$TT'], function (referent) {
return (C$.ok ? this.o.get(this) :this.o);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
