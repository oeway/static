(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Prefix", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['value'],'S',['id']]]

Clazz.newMeth(C$, 'c$$S$D', function (id, value) {
;C$.$init$.apply(this);
this.id=id;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getID$', function () {
return this.id;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getID$();
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'length$', function () {
return this.id.length$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
