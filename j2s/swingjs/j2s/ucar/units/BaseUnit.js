(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'java.util.TreeMap','ucar.units.UnitDimension','ucar.units.UnitName','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseUnit", null, 'ucar.units.DerivedUnitImpl', 'ucar.units.Base');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.nameMap=Clazz.new_(1,{K:"ucar.units.UnitName",V:"ucar.units.BaseUnit"},$I$(1,1));
C$.quantityMap=Clazz.new_(1,{K:"ucar.units.BaseQuantity",V:"ucar.units.BaseUnit"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['baseQuantity','ucar.units.BaseQuantity']]
,['O',['nameMap','java.util.SortedMap','+quantityMap']]]

Clazz.newMeth(C$, 'c$$ucar_units_UnitName$ucar_units_BaseQuantity', function (id, baseQuantity) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
if (id.getSymbol$() == null ) {
throw Clazz.new_(Clazz.load('ucar.units.NameException').c$$S,["Base unit must have symbol"]);
}this.setDimension$ucar_units_UnitDimension(Clazz.new_($I$(2,1).c$$ucar_units_BaseUnit,[this]));
this.baseQuantity=baseQuantity;
}, 1);

Clazz.newMeth(C$, 'getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity', function (id, baseQuantity) {
var baseUnit;
var nameUnit=C$.nameMap.get$O(id);
var quantityUnit=C$.quantityMap.get$O(baseQuantity);
if (nameUnit != null  || quantityUnit != null  ) {
baseUnit=nameUnit != null  ? nameUnit : quantityUnit;
if ((nameUnit != null  && !baseQuantity.equals$O(nameUnit.getBaseQuantity$()) ) || (quantityUnit != null  && !id.equals$O(quantityUnit.getUnitName$()) ) ) {
throw Clazz.new_(Clazz.load('ucar.units.UnitExistsException').c$$S,["Attempt to incompatibly redefine base unit \"" + baseUnit + '\"' ]);
}} else {
baseUnit=Clazz.new_(C$.c$$ucar_units_UnitName$ucar_units_BaseQuantity,[id, baseQuantity]);
C$.quantityMap.put$TK$TV(baseQuantity, baseUnit);
C$.nameMap.put$TK$TV(id, baseUnit);
}return baseUnit;
}, 1);

Clazz.newMeth(C$, 'getBaseQuantity$', function () {
return this.baseQuantity;
});

Clazz.newMeth(C$, 'getID$', function () {
return this.getSymbol$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.getID$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return this.baseQuantity.isDimensionless$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var meter=Clazz.new_(C$.c$$ucar_units_UnitName$ucar_units_BaseQuantity,[$I$(3).newUnitName$S$S$S("meter", null, "m"), $I$(4).LENGTH]);
System.out.println$S("meter.getBaseQuantity()=" + meter.getBaseQuantity$());
System.out.println$S("meter.toDerivedUnit(1.)=" + new Double(meter.toDerivedUnit$D(1.0)).toString());
System.out.println$S("meter.toDerivedUnit(new float[] {2})[0]=" + new Float(meter.toDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [2]), Clazz.array(Float.TYPE, [1]))[0]).toString());
System.out.println$S("meter.fromDerivedUnit(1.)=" + new Double(meter.fromDerivedUnit$D(1.0)).toString());
System.out.println$S("meter.fromDerivedUnit(new float[] {3})[0]=" + new Float(meter.fromDerivedUnit$FA$FA(Clazz.array(Float.TYPE, -1, [3]), Clazz.array(Float.TYPE, [1]))[0]).toString());
System.out.println$S("meter.isCompatible(meter)=" + meter.isCompatible$ucar_units_Unit(meter));
var radian=Clazz.new_(C$.c$$ucar_units_UnitName$ucar_units_BaseQuantity,[$I$(3).newUnitName$S$S$S("radian", null, "rad"), $I$(4).PLANE_ANGLE]);
System.out.println$S("meter.isCompatible(radian)=" + meter.isCompatible$ucar_units_Unit(radian));
System.out.println$S("meter.isDimensionless()=" + meter.isDimensionless$());
System.out.println$S("radian.isDimensionless()=" + radian.isDimensionless$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
