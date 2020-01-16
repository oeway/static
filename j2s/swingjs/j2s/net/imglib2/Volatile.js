(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Volatile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['valid'],'O',['t','<T>']]]

Clazz.newMeth(C$, 'c$$TT$Z', function (t, valid) {
;C$.$init$.apply(this);
this.t=t;
this.valid=valid;
}, 1);

Clazz.newMeth(C$, 'c$$TT', function (t) {
C$.c$$TT$Z.apply(this, [t, false]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.t;
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.valid;
});

Clazz.newMeth(C$, 'setValid$Z', function (valid) {
this.valid=valid;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
