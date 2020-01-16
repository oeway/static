(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'java.util.TreeSet','java.util.TreeMap','ucar.units.PrefixName','ucar.units.PrefixSymbol']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PrefixDBImpl", null, null, ['ucar.units.PrefixDB', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['nameSet','java.util.SortedSet','+symbolSet','valueMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.nameSet=Clazz.new_(1,{E:"ucar.units.Prefix"},$I$(1,1));
this.symbolSet=Clazz.new_(1,{E:"ucar.units.Prefix"},$I$(1,1));
this.valueMap=Clazz.new_(1,{K:"Double",V:"ucar.units.Prefix"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'addName$S$D', function (name, value) {
var prefix=Clazz.new_($I$(3,1).c$$S$D,[name, value]);
this.nameSet.add$TE(prefix);
});

Clazz.newMeth(C$, 'addSymbol$S$D', function (symbol, value) {
var prefix=Clazz.new_($I$(4,1).c$$S$D,[symbol, value]);
this.symbolSet.add$TE(prefix);
this.valueMap.put$TK$TV( new Double(value), prefix);
});

Clazz.newMeth(C$, 'getPrefixByName$S', function (string) {
return C$.getPrefix$S$java_util_Set(string, this.nameSet);
});

Clazz.newMeth(C$, 'getPrefixBySymbol$S', function (string) {
return C$.getPrefix$S$java_util_Set(string, this.symbolSet);
});

Clazz.newMeth(C$, 'getPrefixByValue$D', function (value) {
return this.valueMap.get$O( new Double(value));
});

Clazz.newMeth(C$, 'getPrefix$S$java_util_Set', function (string, set) {
for (var iter=set.iterator$(); iter.hasNext$(); ) {
var prefix=iter.next$();
var comp=prefix.compareTo$S(string);
if (comp == 0) {
return prefix;
}if (comp > 0) {
break;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "nameSet=" + this.nameSet + "symbolSet=" + this.symbolSet + "valueMap=" + this.valueMap ;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.nameSet.iterator$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var db=Clazz.new_(C$);
db.addName$S$D("mega", 1000000.0);
System.out.println$S("mega=" + new Double(db.getPrefixByName$S("mega").getValue$()).toString());
db.addSymbol$S$D("m", 0.001);
System.out.println$S("m=" + new Double(db.getPrefixBySymbol$S("m").getValue$()).toString());
System.out.println$S("1e-3=" + db.getPrefixByValue$D(0.001).getID$());
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
