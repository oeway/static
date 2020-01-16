(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'ucar.units.OffsetUnit','ucar.units.TimeScaleUnit','ucar.units.ScaledUnit','ucar.units.LogarithmicUnit',['ucar.units.UnitImpl','.MyConverter'],'StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnitImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['ucar.units.Unit', 'java.io.Serializable']);
C$.$classes$=[['MyConverter',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['id','ucar.units.UnitName']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$ucar_units_UnitName.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_UnitName', function (id) {
;C$.$init$.apply(this);
this.id=id;
}, 1);

Clazz.newMeth(C$, 'getUnitName$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.id == null  ? null : this.id.getName$();
});

Clazz.newMeth(C$, 'getPlural$', function () {
return this.id == null  ? null : this.id.getPlural$();
});

Clazz.newMeth(C$, 'getSymbol$', function () {
return this.id == null  ? null : this.id.getSymbol$();
});

Clazz.newMeth(C$, 'shiftTo$D', function (origin) {
return $I$(1).getInstance$ucar_units_Unit$D(this, origin);
});

Clazz.newMeth(C$, 'shiftTo$java_util_Date', function (origin) {
return $I$(2).getInstance$ucar_units_Unit$java_util_Date(this, origin);
});

Clazz.newMeth(C$, 'multiplyBy$ucar_units_Unit', function (that) {
return this.myMultiplyBy$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'multiplyBy$D', function (scale) {
return $I$(3).getInstance$D$ucar_units_Unit(scale, this);
});

Clazz.newMeth(C$, 'divideBy$ucar_units_Unit', function (that) {
return this.myDivideBy$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'divideInto$ucar_units_Unit', function (that) {
return this.myDivideInto$ucar_units_Unit(that);
});

Clazz.newMeth(C$, 'raiseTo$I', function (power) {
return this.myRaiseTo$I(power);
});

Clazz.newMeth(C$, 'log$D', function (base) {
return $I$(4).getInstance$ucar_units_Unit$D(this, base);
});

Clazz.newMeth(C$, 'getConverterTo$ucar_units_Unit', function (outputUnit) {
return Clazz.new_($I$(5,1).c$$ucar_units_Unit$ucar_units_Unit,[this, outputUnit]);
});

Clazz.newMeth(C$, 'convertTo$F$ucar_units_Unit', function (amount, outputUnit) {
return this.convertTo$D$ucar_units_Unit(amount, outputUnit);
});

Clazz.newMeth(C$, 'convertTo$D$ucar_units_Unit', function (amount, outputUnit) {
return this.getConverterTo$ucar_units_Unit(outputUnit).convert$D(amount);
});

Clazz.newMeth(C$, 'convertTo$FA$ucar_units_Unit', function (amounts, outputUnit) {
return this.convertTo$FA$ucar_units_Unit$FA(amounts, outputUnit, Clazz.array(Float.TYPE, [amounts.length]));
});

Clazz.newMeth(C$, 'convertTo$DA$ucar_units_Unit', function (amounts, outputUnit) {
return this.convertTo$DA$ucar_units_Unit$DA(amounts, outputUnit, Clazz.array(Double.TYPE, [amounts.length]));
});

Clazz.newMeth(C$, 'convertTo$FA$ucar_units_Unit$FA', function (input, outputUnit, output) {
return this.getConverterTo$ucar_units_Unit(outputUnit).convert$FA$FA(input, output);
});

Clazz.newMeth(C$, 'convertTo$DA$ucar_units_Unit$DA', function (input, outputUnit, output) {
return this.getConverterTo$ucar_units_Unit(outputUnit).convert$DA$DA(input, output);
});

Clazz.newMeth(C$, 'isCompatible$ucar_units_Unit', function (that) {
var u1=this.getDerivedUnit$();
return u1.equals$O(that.getDerivedUnit$());
});

Clazz.newMeth(C$, 'equals$S$S', function (s1, s2) {
return (s1 == null  && s2 == null  ) || (s1 != null  && s2 != null   && s1.equals$O(s2) ) ;
}, 1);

Clazz.newMeth(C$, 'equalsIgnoreCase$S$S', function (s1, s2) {
return (s1 == null  && s2 == null  ) || (s1 != null  && s2 != null   && s1.equalsIgnoreCase$S(s2) ) ;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var string=this.getSymbol$();
return string != null  ? string : this.getName$();
});

Clazz.newMeth(C$, 'makeLabel$S', function (quantityID) {
var buf=Clazz.new_($I$(6,1).c$$S,[quantityID]);
if (quantityID.indexOf$S(" ") != -1) {
buf.insert$I$C(0, "(").append$C(")");
}buf.append$C("/");
var start=buf.length$();
buf.append$S(this.toString());
if (buf.substring$I(start).indexOf$I(" ") != -1) {
buf.insert$I$C(start, "(").append$C(")");
}return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.UnitImpl, "MyConverter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'ucar.units.ConverterImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['fromUnit','ucar.units.DerivableUnit','+toUnit']]]

Clazz.newMeth(C$, 'c$$ucar_units_Unit$ucar_units_Unit', function (fromUnit, toUnit) {
;C$.superclazz.c$$ucar_units_Unit$ucar_units_Unit.apply(this,[fromUnit, toUnit]);C$.$init$.apply(this);
if (!(Clazz.instanceOf(fromUnit, "ucar.units.DerivableUnit")) || !(Clazz.instanceOf(toUnit, "ucar.units.DerivableUnit")) ) {
throw Clazz.new_(Clazz.load('ucar.units.ConversionException').c$$ucar_units_Unit$ucar_units_Unit,[fromUnit, toUnit]);
}this.fromUnit=fromUnit;
this.toUnit=toUnit;
}, 1);

Clazz.newMeth(C$, 'convert$D', function (amount) {
var output;
try {
output=this.toUnit.fromDerivedUnit$D(this.fromUnit.toDerivedUnit$D(amount));
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.ConversionException")){
output=0;
} else {
throw e;
}
}
return output;
});

Clazz.newMeth(C$, 'convert$FA$FA', function (input, output) {
try {
this.toUnit.fromDerivedUnit$FA$FA(this.fromUnit.toDerivedUnit$FA$FA(input, output), output);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.ConversionException")){
} else {
throw e;
}
}
return output;
});

Clazz.newMeth(C$, 'convert$DA$DA', function (input, output) {
try {
this.toUnit.fromDerivedUnit$DA$DA(this.fromUnit.toDerivedUnit$DA$DA(input, output), output);
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.ConversionException")){
} else {
throw e;
}
}
return output;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
