(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'java.util.TreeMap','ucar.units.UnitName','ucar.units.BaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnknownUnit", null, 'ucar.units.BaseUnit');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.map=Clazz.new_(1,{K:"String",V:"ucar.units.UnknownUnit"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['map','java.util.SortedMap']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$ucar_units_UnitName$ucar_units_BaseQuantity.apply(this,[$I$(2).newUnitName$S$S$S(name, null, name), $I$(3).UNKNOWN]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$S', function (name) {
var unit;
name=name.toLowerCase$();
{
unit=C$.map.get$O(name);
if (unit == null ) {
unit=Clazz.new_(C$.c$$S,[name]);
C$.map.put$TK$TV(unit.getName$(), unit);
C$.map.put$TK$TV(unit.getPlural$(), unit);
}}return unit;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (!(Clazz.instanceOf(object, "ucar.units.UnknownUnit"))) {
return false;
}var that=object;
return this.getName$().equalsIgnoreCase$S(that.getName$());
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getName$().toLowerCase$().hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return false;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var unit1=C$.create$S("a");
System.out.println$S("unit_a.equals(unit_a)=" + unit1.equals$O(unit1));
System.out.println$S("unit_a.isDimensionless()=" + unit1.isDimensionless$());
var unit2=C$.create$S("b");
System.out.println$S("unit_a.equals(unit_b)=" + unit1.equals$O(unit2));
unit2=C$.create$S("A");
System.out.println$S("unit_a.equals(unit_A)=" + unit1.equals$O(unit2));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
