(function(){var P$=Clazz.newPackage("ucar.units"),p$1={},I$=[[0,'java.util.TreeSet','java.util.Hashtable','ucar.units.UnitID']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitDBImpl", null, null, ['ucar.units.UnitDB', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['unitSet','java.util.Set','nameMap','java.util.Map','+symbolMap']]]

Clazz.newMeth(C$, 'c$$I$I', function (nameCount, symbolCount) {
;C$.$init$.apply(this);
this.unitSet=Clazz.new_(1,{E:"ucar.units.Unit"},$I$(1,1).c$$java_util_Comparator,[((P$.UnitDBImpl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UnitDBImpl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$ucar_units_Unit$ucar_units_Unit','compare$','compare$TT$TT'], function (obj1, obj2) {
return (obj1).getName$().compareTo$S((obj2).getName$());
});
})()
), Clazz.new_(P$.UnitDBImpl$1.$init$, [this, null]))]);
this.nameMap=Clazz.new_(1,{K:"String",V:"ucar.units.Unit"},$I$(2,1).c$$I,[nameCount + 1]);
this.symbolMap=Clazz.new_(1,{K:"String",V:"ucar.units.Unit"},$I$(2,1).c$$I,[symbolCount + 1]);
}, 1);

Clazz.newMeth(C$, 'add$ucar_units_UnitDBImpl', function (that) {
this.unitSet.addAll$java_util_Collection(that.unitSet);
this.nameMap.putAll$java_util_Map(that.nameMap);
this.symbolMap.putAll$java_util_Map(that.symbolMap);
});

Clazz.newMeth(C$, 'nameCount$', function () {
return this.nameMap.size$();
});

Clazz.newMeth(C$, 'symbolCount$', function () {
return this.symbolMap.size$();
});

Clazz.newMeth(C$, 'addUnit$ucar_units_Unit', function (unit) {
if (unit.getName$() == null ) {
throw Clazz.new_(Clazz.load('ucar.units.NameException').c$$S,["Unit name can\'t be null"]);
}p$1.addByName$S$ucar_units_Unit.apply(this, [unit.getName$(), unit]);
p$1.addByName$S$ucar_units_Unit.apply(this, [unit.getPlural$(), unit]);
p$1.addBySymbol$S$ucar_units_Unit.apply(this, [unit.getSymbol$(), unit]);
this.unitSet.add$TE(unit);
});

Clazz.newMeth(C$, 'addAlias$S$S', function (alias, name) {
this.addAlias$S$S$S(alias, name, null);
});

Clazz.newMeth(C$, 'addAlias$S$S$S', function (alias, name, symbol) {
this.addAlias$S$S$S$S(alias, name, symbol, null);
});

Clazz.newMeth(C$, 'addSymbol$S$S', function (symbol, name) {
this.addAlias$S$S$S$S(null, name, symbol, null);
});

Clazz.newMeth(C$, 'addAlias$S$S$S$S', function (alias, name, symbol, plural) {
this.addAlias$ucar_units_UnitID$S($I$(3).newUnitID$S$S$S(alias, plural, symbol), name);
});

Clazz.newMeth(C$, 'addAlias$ucar_units_UnitID$S', function (alias, name) {
var unit=this.getByName$S(name);
if (unit == null ) {
throw Clazz.new_(Clazz.load('ucar.units.NoSuchUnitException').c$$S,[name]);
}p$1.addByName$S$ucar_units_Unit.apply(this, [alias.getName$(), unit]);
p$1.addByName$S$ucar_units_Unit.apply(this, [alias.getPlural$(), unit]);
p$1.addBySymbol$S$ucar_units_Unit.apply(this, [alias.getSymbol$(), unit]);
});

Clazz.newMeth(C$, 'get$S', function (id) {
var unit=this.getBySymbol$S(id);
if (unit == null ) {
unit=this.getByName$S(id);
}return unit;
});

Clazz.newMeth(C$, 'getByName$S', function (name) {
return this.nameMap.get$O(C$.canonicalize$S(name));
});

Clazz.newMeth(C$, 'canonicalize$S', function (name) {
return name.toLowerCase$().replace$C$C(" ", "_");
}, 1);

Clazz.newMeth(C$, 'getBySymbol$S', function (symbol) {
return this.symbolMap.get$O(symbol);
});

Clazz.newMeth(C$, 'toString', function () {
return this.unitSet.toString();
});

Clazz.newMeth(C$, 'getIterator$', function () {
return this.unitSet.iterator$();
});

Clazz.newMeth(C$, 'addByName$S$ucar_units_Unit', function (name, newUnit) {
if (name != null ) {
C$.addUnique$java_util_Map$S$ucar_units_Unit(this.nameMap, C$.canonicalize$S(name), newUnit);
}}, p$1);

Clazz.newMeth(C$, 'addBySymbol$S$ucar_units_Unit', function (symbol, newUnit) {
if (symbol != null ) {
C$.addUnique$java_util_Map$S$ucar_units_Unit(this.symbolMap, symbol, newUnit);
}}, p$1);

Clazz.newMeth(C$, 'addUnique$java_util_Map$S$ucar_units_Unit', function (map, key, newUnit) {
var oldUnit=map.put$TK$TV(key, newUnit);
if (oldUnit != null  && !oldUnit.equals$O(newUnit) ) {
throw Clazz.new_(Clazz.load('ucar.units.UnitExistsException').c$$ucar_units_Unit$ucar_units_Unit,[oldUnit, newUnit]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
