(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Token");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['kind','beginLine','beginColumn','endLine','endColumn'],'S',['image'],'O',['next','ucar.units.Token','+specialToken']]]

Clazz.newMeth(C$, 'getValue$', function () {
return null;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (kind) {
C$.c$$I$S.apply(this, [kind, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (kind, image) {
;C$.$init$.apply(this);
this.kind=kind;
this.image=image;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.image;
});

Clazz.newMeth(C$, 'newToken$I$S', function (ofKind, image) {
switch (ofKind) {
default:
return Clazz.new_(C$.c$$I$S,[ofKind, image]);
}
}, 1);

Clazz.newMeth(C$, 'newToken$I', function (ofKind) {
return C$.newToken$I$S(ofKind, null);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
