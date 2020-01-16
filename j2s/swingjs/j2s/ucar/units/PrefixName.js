(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PrefixName", null, 'ucar.units.Prefix');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$D', function (name, value) {
;C$.superclazz.c$$S$D.apply(this,[name, value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (obj) {
return this.getID$().compareToIgnoreCase$S((obj).getID$());
});

Clazz.newMeth(C$, ['compareTo$S','compareTonull'], function (string) {
return this.getID$().length$() >= string.length$() ? this.getID$().compareToIgnoreCase$S(string) : this.getID$().compareToIgnoreCase$S(string.substring$I$I(0, this.getID$().length$()));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
