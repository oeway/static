(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PrefixSymbol", null, 'ucar.units.Prefix');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$D', function (name, value) {
;C$.superclazz.c$$S$D.apply(this,[name, value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (obj) {
var thatID=(obj).getID$();
var comp=thatID.length$() - this.getID$().length$();
if (comp == 0) comp=this.getID$().compareTo$S(thatID);
return comp;
});

Clazz.newMeth(C$, ['compareTo$S','compareTonull'], function (string) {
var comp=string.length$() - this.getID$().length$();
return comp < 0 ? comp : comp == 0 ? (this.getID$().compareTo$S(string) == 0 ? 0 : -1) : (this.getID$().compareTo$S(string.substring$I$I(0, this.getID$().length$())) == 0 ? 0 : -1);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
