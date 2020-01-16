(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractLocalizingCursorInt", null, 'net.imglib2.AbstractLocalizableInt', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var j=0; j < steps; ++j) this.fwd$();

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
