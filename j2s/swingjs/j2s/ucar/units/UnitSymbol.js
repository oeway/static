(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnitSymbol", null, 'ucar.units.UnitID');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['symbol']]]

Clazz.newMeth(C$, 'c$$S', function (symbol) {
Clazz.super_(C$, this);
if (symbol == null ) {
throw Clazz.new_(Clazz.load('ucar.units.NameException').c$$S,["Symbol can\'t be null"]);
}this.symbol=symbol;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return null;
});

Clazz.newMeth(C$, 'getPlural$', function () {
return null;
});

Clazz.newMeth(C$, 'getSymbol$', function () {
return this.symbol;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getSymbol$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
