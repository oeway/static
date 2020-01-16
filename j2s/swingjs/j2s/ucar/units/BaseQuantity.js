(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.RegularBaseQuantity','ucar.units.SupplementaryBaseQuantity','ucar.units.UnknownBaseQuantity']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseQuantity", null, null, ['ucar.units.Base', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
C$.AMOUNT_OF_SUBSTANCE=Clazz.new_($I$(1,1).c$$S$S$Z,["Amount of Substance", "N", true]);
C$.ELECTRIC_CURRENT=Clazz.new_($I$(1,1).c$$S$S$Z,["Electric Current", "I", true]);
C$.LENGTH=Clazz.new_($I$(1,1).c$$S$S$Z,["Length", "L", true]);
C$.LUMINOUS_INTENSITY=Clazz.new_($I$(1,1).c$$S$S$Z,["Luminous Intensity", "J", true]);
C$.MASS=Clazz.new_($I$(1,1).c$$S$S$Z,["Mass", "M", true]);
C$.PLANE_ANGLE=Clazz.new_($I$(2,1).c$$S$S$Z,["Plane Angle", null, true]);
C$.SOLID_ANGLE=Clazz.new_($I$(2,1).c$$S$S$Z,["Solid Angle", null, true]);
C$.THERMODYNAMIC_TEMPERATURE=Clazz.new_($I$(1,1).c$$S$S$Z,["Thermodynamic Temperature", "T", true]);
C$.TIME=Clazz.new_($I$(1,1).c$$S$S$Z,["Time", "t", true]);
C$.UNKNOWN=Clazz.new_($I$(3,1));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['name','symbol']]
,['O',['AMOUNT_OF_SUBSTANCE','ucar.units.RegularBaseQuantity','+ELECTRIC_CURRENT','+LENGTH','+LUMINOUS_INTENSITY','+MASS','PLANE_ANGLE','ucar.units.SupplementaryBaseQuantity','+SOLID_ANGLE','THERMODYNAMIC_TEMPERATURE','ucar.units.RegularBaseQuantity','+TIME','UNKNOWN','ucar.units.UnknownBaseQuantity']]]

Clazz.newMeth(C$, 'c$$S$S', function (name, symbol) {
C$.c$$S$S$Z.apply(this, [name, symbol, true]);
if (name == null  || name.length$() == 0  || (symbol != null  && symbol.length$() == 0 ) ) {
throw Clazz.new_(Clazz.load('ucar.units.NameException').c$$S,["Invalid name or symbol"]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z', function (name, symbol, trusted) {
;C$.$init$.apply(this);
this.name=name;
this.symbol=symbol;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getSymbol$', function () {
return this.symbol;
});

Clazz.newMeth(C$, 'getID$', function () {
var id=this.getSymbol$();
return id == null  ? this.getName$() : id;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getID$();
});

Clazz.newMeth(C$, 'equals$O', function (object) {
return this === object  ? true : !(Clazz.instanceOf(object, "ucar.units.BaseQuantity")) ? false : this.getName$().equalsIgnoreCase$S((object).getName$()) && (this.getSymbol$() == null  || this.getSymbol$().equals$O((object).getSymbol$()) ) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getName$().toLowerCase$().hashCode$() ^ (this.getSymbol$() == null  ? 0 : this.getSymbol$().hashCode$());
});

Clazz.newMeth(C$, ['compareTo$ucar_units_BaseQuantity','compareTo$','compareTo$TT'], function (that) {
var comp;
if (this === that ) {
comp=0;
} else {
comp=this.getName$().compareToIgnoreCase$S(that.getName$());
if (comp == 0 && this.getSymbol$() != null  ) {
comp=this.getSymbol$().compareTo$S(that.getSymbol$());
}}return comp;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
System.out.println$S("AMOUNT_OF_SUBSTANCE.getName() = " + C$.AMOUNT_OF_SUBSTANCE.getName$());
System.out.println$S("LUMINOUS_INTENSITY.getSymbol() = " + C$.LUMINOUS_INTENSITY.getSymbol$());
System.out.println$S("PLANE_ANGLE.getSymbol() = " + C$.PLANE_ANGLE.getSymbol$());
System.out.println$S("LENGTH.equals(LENGTH) = " + C$.LENGTH.equals$O(C$.LENGTH));
System.out.println$S("LENGTH.equals(MASS) = " + C$.LENGTH.equals$O(C$.MASS));
System.out.println$S("LENGTH.equals(PLANE_ANGLE) = " + C$.LENGTH.equals$O(C$.PLANE_ANGLE));
System.out.println$S("PLANE_ANGLE.equals(PLANE_ANGLE) = " + C$.PLANE_ANGLE.equals$O(C$.PLANE_ANGLE));
System.out.println$S("PLANE_ANGLE.equals(SOLID_ANGLE) = " + C$.PLANE_ANGLE.equals$O(C$.SOLID_ANGLE));
System.out.println$S("LENGTH.compareTo(LENGTH) = " + C$.LENGTH.compareTo$ucar_units_BaseQuantity(C$.LENGTH));
System.out.println$S("LENGTH.compareTo(MASS) = " + C$.LENGTH.compareTo$ucar_units_BaseQuantity(C$.MASS));
System.out.println$S("LENGTH.compareTo(PLANE_ANGLE) = " + C$.LENGTH.compareTo$ucar_units_BaseQuantity(C$.PLANE_ANGLE));
System.out.println$S("PLANE_ANGLE.compareTo(PLANE_ANGLE) = " + C$.PLANE_ANGLE.compareTo$ucar_units_BaseQuantity(C$.PLANE_ANGLE));
System.out.println$S("PLANE_ANGLE.compareTo(SOLID_ANGLE) = " + C$.PLANE_ANGLE.compareTo$ucar_units_BaseQuantity(C$.SOLID_ANGLE));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
