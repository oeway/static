(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.SI']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitSystemManager", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['instance','ucar.units.UnitSystem']]]

Clazz.newMeth(C$, 'instance$', function () {
{
if (C$.instance == null ) {
C$.instance=$I$(1).instance$();
}}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'setInstance$ucar_units_UnitSystem', function (instance) {
if (instance != null ) {
throw Clazz.new_(Clazz.load('ucar.units.UnitSystemException').c$$S,["Unit system already used"]);
}C$.instance=instance;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1