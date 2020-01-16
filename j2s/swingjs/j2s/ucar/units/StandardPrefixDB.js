(function(){var P$=Clazz.newPackage("ucar.units"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "StandardPrefixDB", null, 'ucar.units.PrefixDBImpl');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.instance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['instance','ucar.units.StandardPrefixDB']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
p$1.add$S$S$D.apply(this, ["yotta", "Y", 1.0E24]);
p$1.add$S$S$D.apply(this, ["zetta", "Z", 1.0E21]);
p$1.add$S$S$D.apply(this, ["exa", "E", 1.0E18]);
p$1.add$S$S$D.apply(this, ["peta", "P", 1.0E15]);
p$1.add$S$S$D.apply(this, ["tera", "T", 1.0E12]);
p$1.add$S$S$D.apply(this, ["giga", "G", 1.0E9]);
p$1.add$S$S$D.apply(this, ["mega", "M", 1000000.0]);
p$1.add$S$S$D.apply(this, ["kilo", "k", 1000.0]);
p$1.add$S$S$D.apply(this, ["hecto", "h", 100.0]);
p$1.add$S$S$D.apply(this, ["deca", "da", 10.0]);
this.addName$S$D("deka", 10.0);
p$1.add$S$S$D.apply(this, ["deci", "d", 0.1]);
p$1.add$S$S$D.apply(this, ["centi", "c", 0.01]);
p$1.add$S$S$D.apply(this, ["milli", "m", 0.001]);
p$1.add$S$S$D.apply(this, ["micro", "u", 1.0E-6]);
p$1.add$S$S$D.apply(this, ["nano", "n", 1.0E-9]);
p$1.add$S$S$D.apply(this, ["pico", "p", 1.0E-12]);
p$1.add$S$S$D.apply(this, ["femto", "f", 1.0E-15]);
p$1.add$S$S$D.apply(this, ["atto", "a", 1.0E-18]);
p$1.add$S$S$D.apply(this, ["zepto", "z", 1.0E-21]);
p$1.add$S$S$D.apply(this, ["yocto", "y", 1.0E-24]);
}, 1);

Clazz.newMeth(C$, 'instance$', function () {
if (C$.instance == null ) {
{
if (C$.instance == null ) {
try {
C$.instance=Clazz.new_(C$);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('ucar.units.PrefixDBException').c$$S$Exception,["Couldn\'t create standard prefix-database", e]);
} else {
throw e;
}
}
}}}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'add$S$S$D', function (name, symbol, definition) {
this.addName$S$D(name, definition);
this.addSymbol$S$D(symbol, definition);
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var db=C$.instance$();
System.out.println$S("db.getPrefixBySymbol(\"cm\") = \"" + db.getPrefixBySymbol$S("cm") + '\"' );
System.out.println$S("db.getPrefixBySymbol(\"dm\") = \"" + db.getPrefixBySymbol$S("dm") + '\"' );
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
