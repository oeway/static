(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.UnitDBManager','StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitFormatImpl", null, null, 'ucar.units.UnitFormat');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MUTEX= Clazz.new_();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['MUTEX','java.lang.Object']]]

Clazz.newMeth(C$, 'parse$S', function (spec) {
{
return this.parse$S$ucar_units_UnitDB(spec, $I$(1).instance$());
}});

Clazz.newMeth(C$, 'format$ucar_units_Factor', function (factor) {
return this.format$ucar_units_Factor$StringBuffer(factor, Clazz.new_($I$(2,1).c$$I,[8])).toString();
});

Clazz.newMeth(C$, 'format$ucar_units_Unit', function (unit) {
return this.format$ucar_units_Unit$StringBuffer(unit, Clazz.new_($I$(2,1).c$$I,[80])).toString();
});

Clazz.newMeth(C$, 'longFormat$ucar_units_Unit', function (unit) {
return this.longFormat$ucar_units_Unit$StringBuffer(unit, Clazz.new_($I$(2,1).c$$I,[80])).toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
