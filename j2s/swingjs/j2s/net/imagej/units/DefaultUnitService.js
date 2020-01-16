(function(){var P$=Clazz.newPackage("net.imagej.units"),p$1={},I$=[[0,'java.util.HashMap','ucar.units.UnitFormatManager','net.imagej.units.LinearCalibrator',['net.imagej.units.DefaultUnitService','.UnitDef']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultUnitService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'net.imagej.units.UnitService');
C$.$classes$=[['UnitDef',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.userDefinedUnits=Clazz.new_(1,{K:"String",V:"net.imagej.units.DefaultUnitService.UnitDef"},$I$(1,1));
this.unitFormatter=$I$(2).instance$();
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','userDefinedUnits','java.util.Map','unitFormatter','ucar.units.UnitFormat']]]

Clazz.newMeth(C$, 'value$D$S$S', function (inputValue, inputUnit, outputUnit) {
return p$1.findConversion$D$S$S.apply(this, [inputValue, inputUnit, outputUnit]);
});

Clazz.newMeth(C$, 'defineUnit$S$S$D', function (unitName, baseUnit, scale) {
this.defineUnit$S$S$D$D(unitName, baseUnit, scale, 0);
});

Clazz.newMeth(C$, 'defineUnit$S$S$D$D', function (unitName, baseUnit, scale, offset) {
this.defineUnit$S$S$net_imagej_units_Calibrator(unitName, baseUnit, Clazz.new_($I$(3,1).c$$D$D,[scale, offset]));
});

Clazz.newMeth(C$, 'defineUnit$S$S$net_imagej_units_Calibrator', function (unitName, baseUnit, calibrator) {
var err=null;
if (this.userDefinedUnits.get$O(baseUnit) == null ) {
if (!p$1.definedInternally$S.apply(this, [baseUnit])) {
err="base unit has not been defined: " + baseUnit;
}} else {
if (this.userDefinedUnits.get$O(unitName) != null ) {
err="unit has already been defined: " + unitName;
} else if (p$1.definedInternally$S.apply(this, [unitName])) {
err="can't redefine internal unit " + unitName;
}}if (err != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[err]);
}var unitDef=Clazz.new_($I$(4,1).c$$S$net_imagej_units_Calibrator, [this, null, baseUnit, calibrator]);
this.userDefinedUnits.put$TK$TV(unitName, unitDef);
});

Clazz.newMeth(C$, 'findConversion$D$S$S', function (measure, unit1, unit2) {
var unit=this.userDefinedUnits.get$O(unit1);
if (unit != null ) {
return p$1.findConversion$D$S$S.apply(this, [unit.calibrator.toOutput$D(measure), unit.baseUnit, unit2]);
}unit=this.userDefinedUnits.get$O(unit2);
if (unit != null ) {
return p$1.findConversion$D$S$S.apply(this, [unit.calibrator.toInput$D(measure), unit1, unit.baseUnit]);
}try {
var u1=p$1.parseUnit$S.apply(this, [unit1]);
var u2=p$1.parseUnit$S.apply(this, [unit2]);
return u1.convertTo$D$ucar_units_Unit(measure, u2);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.ConversionException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'definedInternally$S', function (unitName) {
var o=p$1.parseUnit$S.apply(this, [unitName]);
if (o == null  || Clazz.instanceOf(o, "ucar.units.UnknownUnit") ) return false;
if (Clazz.instanceOf(o.getDerivedUnit$(), "ucar.units.UnknownUnit")) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'parseUnit$S', function (unitName) {
try {
return this.unitFormatter.parse$S(unitName);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ucar.units.NoSuchUnitException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.UnitParseException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.SpecificationException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.UnitDBException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.PrefixDBException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.UnitSystemException")){
var exc = e$$;
{
this.log.error$O$Throwable("Cannot parse unit: " + unitName, exc);
}
} else {
throw e$$;
}
}
return null;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.units.DefaultUnitService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultUnitService, "UnitDef", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['baseUnit'],'O',['calibrator','net.imagej.units.Calibrator']]]

Clazz.newMeth(C$, 'c$$S$net_imagej_units_Calibrator', function (baseUnit, calibrator) {
;C$.$init$.apply(this);
this.baseUnit=baseUnit;
this.calibrator=calibrator;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
