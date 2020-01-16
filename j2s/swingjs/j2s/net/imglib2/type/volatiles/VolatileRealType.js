(function(){var P$=Clazz.newPackage("net.imglib2.type.volatiles"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VolatileRealType", null, 'net.imglib2.type.volatiles.AbstractVolatileRealType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT$Z'], function (t, valid) {
;C$.superclazz.c$$TR$Z.apply(this,[t, valid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (t) {
C$.c$$TT$Z.apply(this, [t, true]);
}, 1);

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$TT$Z,[this.t.createVariable$(), true]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$TT$Z,[this.t.copy$(), this.valid]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
