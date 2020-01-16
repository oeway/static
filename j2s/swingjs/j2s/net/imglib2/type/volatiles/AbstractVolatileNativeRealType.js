(function(){var P$=Clazz.newPackage("net.imglib2.type.volatiles"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractVolatileNativeRealType", null, 'net.imglib2.type.volatiles.AbstractVolatileRealType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TR$Z'], function (t, valid) {
;C$.superclazz.c$$TR$Z.apply(this,[t, valid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return this.t.getEntitiesPerPixel$();
});

Clazz.newMeth(C$, 'updateIndex$I', function (i) {
this.t.updateIndex$I(i);
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.t.getIndex$();
});

Clazz.newMeth(C$, 'incIndex$', function () {
this.t.incIndex$();
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.t.incIndex$I(increment);
});

Clazz.newMeth(C$, 'decIndex$', function () {
this.t.decIndex$();
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.t.decIndex$I(decrement);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
