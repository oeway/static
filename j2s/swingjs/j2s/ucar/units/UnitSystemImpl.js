(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'java.util.HashMap','ucar.units.UnitDBImpl']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitSystemImpl", null, null, ['ucar.units.UnitSystem', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['quantityMap','java.util.HashMap','baseUnitDB','ucar.units.UnitDB','acceptableUnitDB','ucar.units.UnitDBImpl']]]

Clazz.newMeth(C$, 'c$$ucar_units_UnitDBImpl$ucar_units_UnitDBImpl', function (baseUnitDB, derivedUnitDB) {
;C$.$init$.apply(this);
this.quantityMap=Clazz.new_(1,{K:"ucar.units.BaseQuantity",V:"ucar.units.BaseUnit"},$I$(1,1).c$$I,[baseUnitDB.nameCount$()]);
for (var iter=baseUnitDB.getIterator$(); iter.hasNext$(); ) {
var unit=iter.next$();
var baseUnit=unit;
this.quantityMap.put$TK$TV(baseUnit.getBaseQuantity$(), baseUnit);
}
this.baseUnitDB=baseUnitDB;
this.acceptableUnitDB=Clazz.new_($I$(2,1).c$$I$I,[baseUnitDB.nameCount$() + derivedUnitDB.nameCount$(), baseUnitDB.symbolCount$() + derivedUnitDB.symbolCount$()]);
this.acceptableUnitDB.add$ucar_units_UnitDBImpl(baseUnitDB);
this.acceptableUnitDB.add$ucar_units_UnitDBImpl(derivedUnitDB);
}, 1);

Clazz.newMeth(C$, 'getBaseUnitDB$', function () {
return this.baseUnitDB;
});

Clazz.newMeth(C$, 'getUnitDB$', function () {
return this.acceptableUnitDB;
});

Clazz.newMeth(C$, 'getBaseUnit$ucar_units_BaseQuantity', function (quantity) {
return this.quantityMap.get$O(quantity);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
