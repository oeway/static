(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.UnitSymbol','ucar.units.UnitName']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitID", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newUnitID$S$S$S', function (name, plural, symbol) {
var id;
try {
id=name == null  ? Clazz.new_($I$(1,1).c$$S,[symbol]) : $I$(2).newUnitName$S$S$S(name, plural, symbol);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.NameException")){
id=null;
} else {
throw e;
}
}
return id;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
