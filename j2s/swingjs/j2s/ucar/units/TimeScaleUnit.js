(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.SI','java.text.DateFormat','java.util.Locale','java.util.TimeZone','ucar.units.BaseUnit','ucar.units.UnitName','ucar.units.BaseQuantity','ExceptionInInitializerError','ucar.units.UnitSystemManager','java.util.Date','AssertionError',['ucar.units.TimeScaleUnit','.MyConverter'],'java.util.Calendar']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TimeScaleUnit", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'ucar.units.UnitImpl');
C$.$classes$=[['MyConverter',28]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
C$.dateFormat=$I$(2).getDateInstance$I$java_util_Locale(3, $I$(3).US);
C$.dateFormat.setTimeZone$java_util_TimeZone($I$(4).getTimeZone$S("UTC"));
C$.dateFormat.applyPattern$S(" \'since\' yyyy-MM-dd HH:mm:ss.SSS \'UTC\'");
try {
C$.SECOND=$I$(5).getOrCreate$ucar_units_UnitName$ucar_units_BaseQuantity($I$(6).newUnitName$S$S$S("second", null, "s"), $I$(7).TIME);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(8,1)).initCause$Throwable(e);
} else {
throw e;
}
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_unit','ucar.units.Unit','_origin','java.util.Date']]
,['O',['dateFormat','java.text.SimpleDateFormat','SECOND','ucar.units.BaseUnit']]]

Clazz.newMeth(C$, 'c$$ucar_units_Unit$java_util_Date', function (unit, origin) {
C$.c$$ucar_units_Unit$java_util_Date$ucar_units_UnitName.apply(this, [unit, origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_Unit$java_util_Date$ucar_units_UnitName', function (unit, origin, id) {
;C$.superclazz.c$$ucar_units_UnitName.apply(this,[id]);C$.$init$.apply(this);
if (!unit.isCompatible$ucar_units_Unit($I$(9).instance$().getBaseUnit$ucar_units_BaseQuantity($I$(7).TIME))) {
throw Clazz.new_(Clazz.load('ucar.units.BadUnitException').c$$S,["\"" + unit + "\" is not a unit of time" ]);
}this._unit=unit;
this._origin=origin;
}, 1);

Clazz.newMeth(C$, 'getInstance$ucar_units_Unit$java_util_Date', function (unit, origin) {
try {
return Clazz.instanceOf(unit, "ucar.units.TimeScaleUnit") ? Clazz.new_(C$.c$$ucar_units_Unit$java_util_Date,[(unit)._unit, origin]) : Clazz.new_(C$.c$$ucar_units_Unit$java_util_Date,[unit, origin]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('ucar.units.ShiftException').c$$ucar_units_Unit$java_util_Date,[unit, origin]).initCause$Throwable(e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getUnit$', function () {
return this._unit;
});

Clazz.newMeth(C$, 'getOrigin$', function () {
return this._origin;
});

Clazz.newMeth(C$, 'clone$ucar_units_UnitName', function (id) {
var clone;
try {
clone=Clazz.new_(C$.c$$ucar_units_Unit$java_util_Date$ucar_units_UnitName,[this.getUnit$(), this.getOrigin$(), id]);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.UnitException")){
clone=null;
} else {
throw e;
}
}
return clone;
});

Clazz.newMeth(C$, 'shiftTo$D', function (origin) {
var newOrigin;
try {
newOrigin=Clazz.new_($I$(10,1).c$$J,[this._origin.getTime$() + ((this._unit.convertTo$D$ucar_units_Unit(origin, C$.SECOND) * 1000)|0)]);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.ConversionException")){
throw Clazz.new_(Clazz.load('ucar.units.ShiftException').c$$ucar_units_Unit$D,[this, origin]).initCause$Throwable(e);
} else {
throw e;
}
}
try {
return Clazz.new_(C$.c$$ucar_units_Unit$java_util_Date,[this._unit, newOrigin]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ucar.units.BadUnitException")){
var e = e$$;
{
throw Clazz.new_($I$(11,1));
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.UnitSystemException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('ucar.units.ShiftException').c$$ucar_units_Unit$D,[this, origin]).initCause$Throwable(e);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'shiftTo$java_util_Date', function (origin) {
return C$.getInstance$ucar_units_Unit$java_util_Date(this._unit, origin);
});

Clazz.newMeth(C$, 'myMultiplyBy$ucar_units_Unit', function (that) {
throw Clazz.new_(Clazz.load('ucar.units.MultiplyException').c$$ucar_units_Unit,[this]);
});

Clazz.newMeth(C$, 'myDivideBy$ucar_units_Unit', function (that) {
throw Clazz.new_(Clazz.load('ucar.units.DivideException').c$$ucar_units_Unit,[this]);
});

Clazz.newMeth(C$, 'myDivideInto$ucar_units_Unit', function (that) {
throw Clazz.new_(Clazz.load('ucar.units.DivideException').c$$ucar_units_Unit$ucar_units_Unit,[that, this]);
});

Clazz.newMeth(C$, 'myRaiseTo$I', function (power) {
throw Clazz.new_(Clazz.load('ucar.units.RaiseException').c$$ucar_units_Unit,[this]);
});

Clazz.newMeth(C$, 'getDerivedUnit$', function () {
return this.getUnit$().getDerivedUnit$();
});

Clazz.newMeth(C$, 'getConverterTo$ucar_units_Unit', function (outputUnit) {
return Clazz.new_($I$(12,1).c$$ucar_units_TimeScaleUnit$ucar_units_Unit,[this, outputUnit]);
});

Clazz.newMeth(C$, 'isCompatible$ucar_units_Unit', function (that) {
return Clazz.instanceOf(that, "ucar.units.TimeScaleUnit");
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (!(Clazz.instanceOf(object, "ucar.units.TimeScaleUnit"))) {
return false;
}var that=object;
return this._origin.equals$O(that._origin) && this._unit.equals$O(that._unit) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getUnit$().hashCode$() ^ this.getOrigin$().hashCode$();
});

Clazz.newMeth(C$, 'isDimensionless$', function () {
return false;
});

Clazz.newMeth(C$, 'toString', function () {
var string=C$.superclazz.prototype.toString.apply(this, []);
return string != null  ? string : this.getCanonicalString$();
});

Clazz.newMeth(C$, 'getCanonicalString$', function () {
return this.getUnit$().toString() + C$.dateFormat.format$java_util_Date(this.getOrigin$());
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var tz=$I$(4).getTimeZone$S("UTC");
var calendar=$I$(13).getInstance$java_util_TimeZone(tz);
calendar.clear$();
calendar.set$I$I$I(1970, 0, 1);
Clazz.new_(C$.c$$ucar_units_Unit$java_util_Date,[C$.SECOND, calendar.getTime$()]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TimeScaleUnit, "MyConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'ucar.units.ConverterImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['offset'],'O',['converter','ucar.units.Converter']]]

Clazz.newMeth(C$, 'c$$ucar_units_TimeScaleUnit$ucar_units_Unit', function (fromUnit, toUnit) {
;C$.superclazz.c$$ucar_units_Unit$ucar_units_Unit.apply(this,[fromUnit, toUnit]);C$.$init$.apply(this);
this.converter=fromUnit.getUnit$().getConverterTo$ucar_units_Unit((toUnit).getUnit$());
this.offset=$I$(1).SECOND.convertTo$D$ucar_units_Unit((fromUnit.getOrigin$().getTime$() - (toUnit).getOrigin$().getTime$()) / 1000.0, (toUnit).getUnit$());
}, 1);

Clazz.newMeth(C$, 'convert$D', function (amount) {
return this.converter.convert$D(amount) + this.offset;
});

Clazz.newMeth(C$, 'convert$FA$FA', function (input, output) {
output=this.converter.convert$FA$FA(input, output);
for (var i=input.length; --i >= 0; ) {
output[i] += this.offset;
}
return output;
});

Clazz.newMeth(C$, 'convert$DA$DA', function (input, output) {
output=this.converter.convert$DA$DA(input, output);
for (var i=input.length; --i >= 0; ) {
output[i] += this.offset;
}
return output;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
