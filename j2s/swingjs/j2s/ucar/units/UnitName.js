(function(){var P$=Clazz.newPackage("ucar.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnitName", null, 'ucar.units.UnitID', 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['name','plural','symbol']]]

Clazz.newMeth(C$, 'c$$S$S', function (name, symbol) {
C$.c$$S$S$S.apply(this, [name, null, symbol]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (name, plural, symbol) {
Clazz.super_(C$, this);
if (name == null ) {
throw Clazz.new_(Clazz.load('ucar.units.NameException').c$$S,["Unit name can\'t be null"]);
}this.name=name;
this.plural=plural == null  ? this.makePlural$S(name) : plural;
this.symbol=symbol;
}, 1);

Clazz.newMeth(C$, 'newUnitName$S', function (name) {
return C$.newUnitName$S$S(name, null);
}, 1);

Clazz.newMeth(C$, 'newUnitName$S$S', function (name, plural) {
return C$.newUnitName$S$S$S(name, plural, null);
}, 1);

Clazz.newMeth(C$, 'newUnitName$S$S$S', function (name, plural, symbol) {
return Clazz.new_(C$.c$$S$S$S,[name, plural, symbol]);
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getPlural$', function () {
return this.plural;
});

Clazz.newMeth(C$, 'getSymbol$', function () {
return this.symbol;
});

Clazz.newMeth(C$, 'toString', function () {
var string=this.getSymbol$();
return string == null  ? this.getName$() : string;
});

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (object) {
return this.getName$().compareToIgnoreCase$S((object).getName$());
});

Clazz.newMeth(C$, 'equals$O', function (object) {
return Clazz.instanceOf(object, "ucar.units.UnitName") && this.compareTo$O(object) == 0 ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getName$().toLowerCase$().hashCode$();
});

Clazz.newMeth(C$, 'makePlural$S', function (name) {
var plural;
var length=name.length$();
var lastChar=name.charAt$I(length - 1);
if (lastChar != "y") {
plural=name + (lastChar == "s" || lastChar == "x"  || lastChar == "z"  || name.endsWith$S("ch")  ? "es" : "s");
} else {
if (length == 1) {
plural=name + "s";
} else {
var penultimateChar=name.charAt$I(length - 2);
plural=(penultimateChar == "a" || penultimateChar == "e"  || penultimateChar == "i"  || penultimateChar == "o"  || penultimateChar == "u" ) ? name + "s" : name.substring$I$I(0, length - 1) + "ies";
}}return plural;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
