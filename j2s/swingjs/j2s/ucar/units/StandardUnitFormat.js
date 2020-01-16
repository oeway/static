(function(){var P$=Clazz.newPackage("ucar.units"),p$1={},I$=[[0,'java.text.DateFormat','java.util.Locale','java.util.TimeZone',['ucar.units.StandardUnitFormat','.JJCalls'],['ucar.units.StandardUnitFormat','.LookaheadSuccess'],'java.util.ArrayList','java.io.StringReader','ucar.units.UnitSystemManager','ucar.units.BaseQuantity','java.util.Arrays','ucar.units.PrefixDBManager','AssertionError','java.util.Date','ucar.units.DerivedUnitImpl','java.io.LineNumberReader','java.io.InputStreamReader','Error','ucar.units.UnknownUnit','java.util.Calendar','ucar.units.SimpleCharStream','ucar.units.StandardUnitFormatTokenManager','ucar.units.Token','ucar.units.StandardUnitFormatConstants']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StandardUnitFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'ucar.units.UnitFormatImpl', 'ucar.units.StandardUnitFormatConstants');
C$.$classes$=[['LookaheadSuccess',26],['JJCalls',24]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.factorComparator=((P$.StandardUnitFormat$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StandardUnitFormat$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$ucar_units_Factor$ucar_units_Factor','compare$','compare$TT$TT'], function (f1, f2) {
var comp=f2.getExponent$() - f1.getExponent$();
if (comp == 0) comp=f1.getID$().compareTo$S(f2.getID$());
return comp;
});
})()
), Clazz.new_(P$.StandardUnitFormat$1.$init$, [this, null]));
{
C$.dateFormat=$I$(1).getDateInstance$I$java_util_Locale(3, $I$(2).US);
C$.dateFormat.setTimeZone$java_util_TimeZone($I$(3).getTimeZone$S("UTC"));
C$.dateFormat.applyPattern$S(" \'@\' yyyy-MM-dd HH:mm:ss.SSS \'UTC\'");
};
{
C$.jj_la1_init_0$();
};
}

Clazz.newMeth(C$, '$init$', function () {
this.jj_la1=Clazz.array(Integer.TYPE, [36]);
this.jj_2_rtns=Clazz.array($I$(4), [8]);
this.jj_rescan=false;
this.jj_gc=0;
this.jj_ls=Clazz.new_($I$(5,1));
this.jj_expentries=Clazz.new_(1,{E:"int[]"},$I$(6,1));
this.jj_kind=-1;
this.jj_lasttokens=Clazz.array(Integer.TYPE, [100]);
}, 1);

C$.$fields$=[['Z',['jj_rescan'],'I',['jj_ntk','jj_la','jj_gen','jj_gc','jj_kind','jj_endpos'],'O',['token_source','ucar.units.StandardUnitFormatTokenManager','jj_input_stream','ucar.units.SimpleCharStream','token','ucar.units.Token','+jj_nt','+jj_scanpos','+jj_lastpos','jj_la1','int[]','jj_2_rtns','ucar.units.StandardUnitFormat.JJCalls[]','jj_ls','ucar.units.StandardUnitFormat.LookaheadSuccess','jj_expentries','java.util.List','jj_expentry','int[]','+jj_lasttokens']]
,['O',['_instance','ucar.units.StandardUnitFormat','dateFormat','java.text.SimpleDateFormat','factorComparator','java.util.Comparator','jj_la1_0','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_io_Reader.apply(this, [Clazz.new_($I$(7,1).c$$S,[""])]);
}, 1);

Clazz.newMeth(C$, 'instance$', function () {
if (C$._instance == null ) {
{
if (C$._instance == null ) C$._instance=Clazz.new_(C$);
}}return C$._instance;
}, 1);

Clazz.newMeth(C$, 'isTimeUnit$ucar_units_Unit', function (unit) {
return unit.isCompatible$ucar_units_Unit($I$(8).instance$().getBaseUnit$ucar_units_BaseQuantity($I$(9).TIME));
}, 1);

Clazz.newMeth(C$, 'parse$S$ucar_units_UnitDB', function (spec, unitDB) {
if (spec == null ) throw Clazz.new_(Clazz.load('ucar.units.UnitParseException').c$$S,[spec]);
this.ReInit$java_io_Reader(Clazz.new_($I$(7,1).c$$S,[spec.trim$()]));
try {
var unit=this.unitSpec$ucar_units_UnitDB(unitDB);
return unit;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ucar.units.TokenMgrError")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('ucar.units.UnitParseException').c$$S$Throwable,[spec, e]);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.ParseException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('ucar.units.UnitParseException').c$$S$Throwable,[spec, e]);
}
} else if (Clazz.exceptionOf(e$$,"ucar.units.OperationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('ucar.units.SpecificationException').c$$S$Throwable,[spec, e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'format$ucar_units_Factor$StringBuffer', function (factor, buf) {
return buf.append$S(factor.toString());
});

Clazz.newMeth(C$, 'format$ucar_units_Unit$StringBuffer', function (unit, buf) {
return p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit, buf, true]);
});

Clazz.newMeth(C$, 'longFormat$ucar_units_Unit$StringBuffer', function (unit, buf) {
return p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit, buf, false]);
});

Clazz.newMeth(C$, 'format$ucar_units_Unit$StringBuffer$Z', function (unit, buf, normalize) {
var done=false;
if (!normalize) {
var id=unit.getSymbol$();
if (id == null ) id=unit.getName$();
if (id != null ) {
buf.append$S(id.replace$C$C(" ", "_"));
done=true;
}}if (!done) {
if (Clazz.instanceOf(unit, "ucar.units.BaseUnit")) p$1.format$ucar_units_BaseUnit$StringBuffer.apply(this, [unit, buf]);
 else if (Clazz.instanceOf(unit, "ucar.units.DerivedUnit")) p$1.format$ucar_units_DerivedUnit$StringBuffer.apply(this, [unit, buf]);
 else if (Clazz.instanceOf(unit, "ucar.units.ScaledUnit")) p$1.format$ucar_units_ScaledUnit$StringBuffer$Z.apply(this, [unit, buf, normalize]);
 else if (Clazz.instanceOf(unit, "ucar.units.OffsetUnit")) p$1.format$ucar_units_OffsetUnit$StringBuffer$Z.apply(this, [unit, buf, normalize]);
 else if (Clazz.instanceOf(unit, "ucar.units.TimeScaleUnit")) p$1.format$ucar_units_TimeScaleUnit$StringBuffer$Z.apply(this, [unit, buf, normalize]);
 else throw Clazz.new_(Clazz.load('ucar.units.UnitClassException').c$$ucar_units_Unit,[unit]);
}return buf;
}, p$1);

Clazz.newMeth(C$, 'format$ucar_units_BaseUnit$StringBuffer', function (baseUnit, buf) {
return buf.append$S(baseUnit.getSymbol$());
}, p$1);

Clazz.newMeth(C$, 'format$ucar_units_DerivedUnit$StringBuffer', function (unit, buf) {
var factors=unit.getDimension$().getFactors$();
$I$(10).sort$TTA$java_util_Comparator(factors, C$.factorComparator);
for (var i=0; i < factors.length; i++) this.format$ucar_units_Factor$StringBuffer(factors[i], buf).append$C(".");

if (factors.length != 0) buf.setLength$I(buf.length$() - 1);
return buf;
}, p$1);

Clazz.newMeth(C$, 'format$ucar_units_ScaledUnit$StringBuffer$Z', function (unit, buf, normalize) {
var scale=unit.getScale$();
if (scale != 0.0 ) {
if (scale == 1 ) {
p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit.getUnit$(), buf, normalize]);
} else {
buf.append$D(scale).append$C(" ");
var start=buf.length$();
p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit.getUnit$(), buf, normalize]);
if (start == buf.length$()) buf.setLength$I(start - 1);
}}return buf;
}, p$1);

Clazz.newMeth(C$, 'format$ucar_units_OffsetUnit$StringBuffer$Z', function (unit, buf, normalize) {
var offset=unit.getOffset$();
if (offset == 0.0 ) {
p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit.getUnit$(), buf, normalize]);
} else {
var start=buf.length$();
p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit.getUnit$(), buf, normalize]);
return (C$.isBlackSpace$StringBuffer$I(buf, start) ? buf : buf.insert$I$C(start, "(").append$C(")")).append$S(" @ ").append$D(offset);
}return buf;
}, p$1);

Clazz.newMeth(C$, 'isBlackSpace$StringBuffer$I', function (buf, start) {
return buf.substring$I(start).indexOf$I(" ") == -1;
}, 1);

Clazz.newMeth(C$, 'format$ucar_units_TimeScaleUnit$StringBuffer$Z', function (unit, buf, normalize) {
return p$1.format$ucar_units_Unit$StringBuffer$Z.apply(this, [unit.getUnit$(), buf, normalize]).append$S(C$.dateFormat.format$java_util_Date(unit.getOrigin$()));
}, p$1);

Clazz.newMeth(C$, 'getUnit$ucar_units_UnitDB$S', function (unitDB, string) {
return unitDB.get$S(string);
}, 1);

Clazz.newMeth(C$, 'getPrefix$S', function (string) {
var prefixDB=$I$(11).instance$();
var prefix=prefixDB.getPrefixByName$S(string);
if (prefix == null ) prefix=prefixDB.getPrefixBySymbol$S(string);
return prefix;
}, 1);

Clazz.newMeth(C$, 'myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit', function (parser, spec, unit) {
if (!parser.parse$S(spec).equals$O(unit)) {
throw Clazz.new_($I$(12,1).c$$O,[spec + " != " + unit ]);
}System.out.println$S(spec + " -> " + unit );
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var parser=C$.instance$();
var m=parser.parse$S("m");
var s=parser.parse$S("s");
var epoch=parser.parse$S("s @ 1970-01-01 00:00:00 UTC");
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m m", m.multiplyBy$ucar_units_Unit(m));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m.m", m.multiplyBy$ucar_units_Unit(m));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "(m)(m)", m.multiplyBy$ucar_units_Unit(m));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m/s/s", m.divideBy$ucar_units_Unit(s).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2", m.raiseTo$I(2));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2.s", m.raiseTo$I(2).multiplyBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2/s", m.raiseTo$I(2).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m^2/s", m.raiseTo$I(2).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m s @ 5", m.multiplyBy$ucar_units_Unit(s).shiftTo$D(5.0));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2 s @ 5", m.raiseTo$I(2).multiplyBy$ucar_units_Unit(s).shiftTo$D(5));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2 s-1 @ 5", m.raiseTo$I(2).multiplyBy$ucar_units_Unit(s.raiseTo$I(-1)).shiftTo$D(5));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m s from 5", m.multiplyBy$ucar_units_Unit(s).shiftTo$D(5));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s@19700101", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s@19700101T000000", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s@19700101T000000.00", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s @ 1970-01-01T00:00:00.00", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s @ 1970-01-01 00:00:00.00", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s @ 1970-01-01 00:00:00.00 +0", epoch);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "s @ 1970-01-01T00:00:00.00 -12", epoch.shiftTo$java_util_Date(Clazz.new_($I$(13,1).c$$J,[43200000])));
if (!parser.parse$S("days since 2009-06-14 04:00:00").equals$O(parser.parse$S("days since 2009-06-14 04:00:00 +00:00"))) {
throw Clazz.new_($I$(12,1));
}C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "lg(re: 1)", $I$(14).DIMENSIONLESS.log$D(10));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "0.1 lg(re 1 mm)", m.multiplyBy$D(0.001).log$D(10).multiplyBy$D(0.1));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m", m);
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "2 m s", m.multiplyBy$ucar_units_Unit(s).multiplyBy$D(2));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "3.14 m.s", m.multiplyBy$ucar_units_Unit(s).multiplyBy$D(3.14));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "1e9 (m)", m.multiplyBy$D(1.0E9));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "(m s)2", m.multiplyBy$ucar_units_Unit(s).raiseTo$I(2));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2.s-1", m.raiseTo$I(2).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2 s^-1", m.raiseTo$I(2).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "(m/s)2", m.divideBy$ucar_units_Unit(s).raiseTo$I(2));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2/s-1", m.raiseTo$I(2).divideBy$ucar_units_Unit(s.raiseTo$I(-1)));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m2/s^-1", m.raiseTo$I(2).divideBy$ucar_units_Unit(s.raiseTo$I(-1)));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, ".5 m/(.25 s)2", m.multiplyBy$D(0.5).divideBy$ucar_units_Unit(s.multiplyBy$D(0.25).raiseTo$I(2)));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m.m-1.m", m.multiplyBy$ucar_units_Unit(m.raiseTo$I(-1)).multiplyBy$ucar_units_Unit(m));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "2.0 m 1/2 s-1*(m/s^1)^-1 (1e9 m-1)(1e9 s-1)-1.m/s", m.multiplyBy$D(2).multiplyBy$D(0.5).multiplyBy$ucar_units_Unit(s.raiseTo$I(-1)).multiplyBy$ucar_units_Unit(m.divideBy$ucar_units_Unit(s.raiseTo$I(1)).raiseTo$I(-1)).multiplyBy$ucar_units_Unit(m.raiseTo$I(-1).multiplyBy$D(1.0E9)).multiplyBy$ucar_units_Unit(s.raiseTo$I(-1).multiplyBy$D(1.0E9).raiseTo$I(-1)).multiplyBy$ucar_units_Unit(m).divideBy$ucar_units_Unit(s));
C$.myAssert$ucar_units_StandardUnitFormat$S$ucar_units_Unit(parser, "m/km", m.divideBy$ucar_units_Unit(m.multiplyBy$D(1000.0)));
var lineInput=Clazz.new_($I$(15,1).c$$java_io_Reader,[Clazz.new_($I$(16,1).c$$java_io_InputStream,[System.$in])]);
for (; ; ) {
System.out.print$S("Enter a unit specification or ^D to quit: ");
var spec=lineInput.readLine$();
if (spec == null ) break;
try {
System.out.println$O(parser.parse$S(spec.trim$()));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.getMessage$());
} else {
throw e;
}
}
}
System.out.println$S("");
}, 1);

Clazz.newMeth(C$, 'unitSpec$ucar_units_UnitDB', function (unitDB) {
var unit=$I$(14).DIMENSIONLESS;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
case 8:
case 12:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
unit=this.shiftExpr$ucar_units_UnitDB(unitDB);
break;
default:
this.jj_la1[0]=this.jj_gen;
;}
p$1.jj_consume_token$I.apply(this, [0]);
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'shiftExpr$ucar_units_UnitDB', function (unitDB) {
var unit;
var timestamp;
var origin;
unit=this.productExpr$ucar_units_UnitDB(unitDB);
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 15:
p$1.jj_consume_token$I.apply(this, [15]);
if (C$.isTimeUnit$ucar_units_Unit(unit)) {
timestamp=this.timeOriginExpr$();
unit=unit.shiftTo$java_util_Date(timestamp);
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
case 12:
origin=this.number$();
unit=unit.shiftTo$D(origin);
break;
default:
this.jj_la1[1]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}break;
default:
this.jj_la1[2]=this.jj_gen;
;}
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'productExpr$ucar_units_UnitDB', function (unitDB) {
var unit;
var unit2;
unit=this.powerExpr$ucar_units_UnitDB(unitDB);
 label_1 : while (true){
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
case 2:
case 3:
case 5:
case 8:
case 12:
case 13:
case 14:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
;break;
default:
this.jj_la1[3]=this.jj_gen;
break label_1;
}
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 14:
p$1.jj_consume_token$I.apply(this, [14]);
unit2=this.powerExpr$ucar_units_UnitDB(unitDB);
unit=unit.divideBy$ucar_units_Unit(unit2);
break;
default:
this.jj_la1[6]=this.jj_gen;
if (p$1.jj_2_1$I.apply(this, [2])) {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
case 12:
case 13:
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 12:
p$1.jj_consume_token$I.apply(this, [12]);
break;
case 13:
p$1.jj_consume_token$I.apply(this, [13]);
break;
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[4]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
break;
default:
this.jj_la1[5]=this.jj_gen;
;}
unit2=this.powerExpr$ucar_units_UnitDB(unitDB);
unit=unit.multiplyBy$ucar_units_Unit(unit2);
} else {
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}}
}
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'powerExpr$ucar_units_UnitDB', function (unitDB) {
var unit;
var exponent;
unit=this.basicExpr$ucar_units_UnitDB(unitDB);
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
case 11:
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 11:
p$1.jj_consume_token$I.apply(this, [11]);
break;
default:
this.jj_la1[7]=this.jj_gen;
;}
exponent=this.integer$();
unit=unit.raiseTo$I(exponent);
break;
default:
this.jj_la1[8]=this.jj_gen;
;}
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'basicExpr$ucar_units_UnitDB', function (unitDB) {
var unit;
var number;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
case 12:
number=this.number$();
unit=$I$(14).DIMENSIONLESS.multiplyBy$D(number);
break;
case 16:
case 17:
case 18:
unit=this.unitIdentifier$ucar_units_UnitDB(unitDB);
break;
case 19:
case 20:
case 21:
unit=this.logExpr$ucar_units_UnitDB(unitDB);
break;
case 8:
p$1.jj_consume_token$I.apply(this, [8]);
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[9]=this.jj_gen;
;}
unit=this.shiftExpr$ucar_units_UnitDB(unitDB);
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[10]=this.jj_gen;
;}
p$1.jj_consume_token$I.apply(this, [9]);
break;
default:
this.jj_la1[11]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'logExpr$ucar_units_UnitDB', function (unitDB) {
var base;
var ref;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 19:
p$1.jj_consume_token$I.apply(this, [19]);
base=2;
break;
case 20:
p$1.jj_consume_token$I.apply(this, [20]);
base=2.718281828459045;
break;
case 21:
p$1.jj_consume_token$I.apply(this, [21]);
base=10;
break;
default:
this.jj_la1[12]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
ref=this.productExpr$ucar_units_UnitDB(unitDB);
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[13]=this.jj_gen;
;}
p$1.jj_consume_token$I.apply(this, [9]);
{
if (true) return ref.log$D(base);
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'number$', function () {
var number;
if (p$1.jj_2_2$I.apply(this, [2147483647])) {
number=this.real$();
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
number=this.integer$();
break;
default:
this.jj_la1[14]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}{
if (true) return number;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'real$', function () {
var sign=1;
var tenFactor=1;
var udecimal;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
sign=this.sign$();
break;
default:
this.jj_la1[15]=this.jj_gen;
;}
if (p$1.jj_2_3$I.apply(this, [2])) {
udecimal=this.unsignedDecimal$();
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 10:
tenFactor=this.tenFactor$();
break;
default:
this.jj_la1[16]=this.jj_gen;
;}
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 5:
udecimal=this.unsignedInteger$();
tenFactor=this.tenFactor$();
break;
default:
this.jj_la1[17]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}{
if (true) return sign * udecimal * tenFactor ;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'sign$', function () {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
p$1.jj_consume_token$I.apply(this, [2]);
{
if (true) return 1;
}break;
case 3:
p$1.jj_consume_token$I.apply(this, [3]);
{
if (true) return -1;
}break;
default:
this.jj_la1[18]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'unsignedDecimal$', function () {
var integer=0;
var token;
var fraction=0;
if (p$1.jj_2_4$I.apply(this, [3])) {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 5:
integer=this.unsignedInteger$();
break;
default:
this.jj_la1[19]=this.jj_gen;
;}
p$1.jj_consume_token$I.apply(this, [12]);
token=p$1.jj_consume_token$I.apply(this, [5]);
fraction=(Double.valueOf$S("." + token.image)).valueOf();
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 5:
integer=this.unsignedInteger$();
p$1.jj_consume_token$I.apply(this, [12]);
break;
default:
this.jj_la1[20]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}{
if (true) return integer + fraction;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'tenFactor$', function () {
var token;
token=p$1.jj_consume_token$I.apply(this, [10]);
{
if (true) return (Double.valueOf$S("1" + token.image)).valueOf();
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'integer$', function () {
var magnitude;
var sign=1;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
sign=this.sign$();
break;
default:
this.jj_la1[21]=this.jj_gen;
;}
magnitude=this.unsignedInteger$();
{
if (true) return sign * magnitude;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'unsignedInteger$', function () {
var token;
token=p$1.jj_consume_token$I.apply(this, [5]);
{
if (true) return (Integer.valueOf$S(token.image)).valueOf();
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'unitIdentifier$ucar_units_UnitDB', function (unitDB) {
var token;
var unit;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 17:
token=p$1.jj_consume_token$I.apply(this, [17]);
break;
case 18:
token=p$1.jj_consume_token$I.apply(this, [18]);
break;
case 16:
token=p$1.jj_consume_token$I.apply(this, [16]);
break;
default:
this.jj_la1[22]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
var string=token.image;
var scale=1;
for (unit=C$.getUnit$ucar_units_UnitDB$S(unitDB, string); unit == null ; unit=C$.getUnit$ucar_units_UnitDB$S(unitDB, string)) {
var prefix=C$.getPrefix$S(string);
if (prefix == null ) {
try {
unit=$I$(18).create$S(string);
break;
} catch (e) {
if (Clazz.exceptionOf(e,"ucar.units.NameException")){
} else {
throw e;
}
}
}scale *= prefix.getValue$();
string=string.substring$I(prefix.length$());
}
unit=unit.multiplyBy$D(scale);
{
if (true) return unit;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'timeOriginExpr$', function () {
var calendar;
calendar=this.dateExpr$();
if (p$1.jj_2_6$I.apply(this, [2])) {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 17:
p$1.jj_consume_token$I.apply(this, [17]);
break;
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[23]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
this.clockExpr$java_util_Calendar(calendar);
if (p$1.jj_2_5$I.apply(this, [2])) {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 1:
p$1.jj_consume_token$I.apply(this, [1]);
break;
default:
this.jj_la1[24]=this.jj_gen;
;}
this.zoneExpr$java_util_Calendar(calendar);
} else {
;}} else {
;}{
if (true) return calendar.getTime$();
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'dateExpr$', function () {
var sign=1;
var year;
var month=1;
var day=1;
var packed=true;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
sign=this.sign$();
break;
default:
this.jj_la1[25]=this.jj_gen;
;}
year=this.unsignedInteger$();
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 3:
p$1.jj_consume_token$I.apply(this, [3]);
month=this.unsignedInteger$();
packed=false;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 3:
p$1.jj_consume_token$I.apply(this, [3]);
day=this.unsignedInteger$();
break;
default:
this.jj_la1[26]=this.jj_gen;
;}
break;
default:
this.jj_la1[27]=this.jj_gen;
;}
if (packed) {
if (year >= 10000101) {
day=year % 100;
year=(year/(100)|0);
}if (year >= 100001) {
month=year % 100;
year=(year/(100)|0);
}if (sign < 0) year=-year;
}if (month < 1 || month > 12 ) {
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid month in timestamp"]);
}if (day < 1 || day > 31 ) {
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid day in timestamp"]);
}var calendar=$I$(19).getInstance$java_util_TimeZone($I$(3).getTimeZone$S("UTC"));
calendar.clear$();
calendar.set$I$I$I(year, month - 1, day);
{
if (true) return calendar;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'clockExpr$java_util_Calendar', function (calendar) {
var hour;
var minute=0;
var seconds=0;
var packed=true;
if (p$1.jj_2_7$I.apply(this, [2147483647])) {
hour=this.unsignedDecimal$();
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 5:
hour=this.unsignedInteger$();
break;
default:
this.jj_la1[28]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 4:
p$1.jj_consume_token$I.apply(this, [4]);
minute=this.unsignedInteger$();
packed=false;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 4:
p$1.jj_consume_token$I.apply(this, [4]);
if (p$1.jj_2_8$I.apply(this, [2147483647])) {
seconds=this.unsignedDecimal$();
} else {
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 5:
seconds=this.unsignedInteger$();
break;
default:
this.jj_la1[29]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
}break;
default:
this.jj_la1[30]=this.jj_gen;
;}
break;
default:
this.jj_la1[31]=this.jj_gen;
;}
if (packed) {
if (hour >= 100000 ) {
seconds=hour % 100;
hour /= 100;
}if (hour >= 1000 ) {
minute=((hour % 100)|0);
hour /= 100;
}}if (hour < 0  || hour > 23  ) {
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid hour in timestamp"]);
}if (minute < 0 || minute > 59 ) {
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid minute in timestamp"]);
}if (seconds < 0  || seconds > 61  ) {
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid seconds in timestamp"]);
}calendar.set$I$I(11, (Math.round(hour)|0));
calendar.set$I$I(12, minute);
var s=(seconds|0);
calendar.set$I$I(13, s);
var ms=(((seconds - s) * 1000)|0);
calendar.set$I$I(14, ms);
{
if (true) return calendar;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'zoneExpr$java_util_Calendar', function (calendar) {
var sign=1;
var zoneHour;
var zoneMinute=0;
var token;
var timeZone;
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
case 5:
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 2:
case 3:
sign=this.sign$();
break;
default:
this.jj_la1[32]=this.jj_gen;
;}
zoneHour=this.unsignedInteger$();
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 4:
case 5:
switch ((this.jj_ntk == -1) ? p$1.jj_ntk.apply(this, []) : this.jj_ntk) {
case 4:
p$1.jj_consume_token$I.apply(this, [4]);
break;
default:
this.jj_la1[33]=this.jj_gen;
;}
zoneMinute=this.unsignedInteger$();
break;
default:
this.jj_la1[34]=this.jj_gen;
;}
if (zoneHour >= 100) {
zoneMinute+=zoneHour % 100;
zoneHour=(zoneHour/(100)|0);
}if (zoneHour > 23 || zoneMinute > 59 ) {
{
if (true) throw Clazz.new_(Clazz.load('ucar.units.ParseException').c$$S,["invalid time-zone in timestamp"]);
}}timeZone=$I$(3).getTimeZone$S("UTC");
timeZone.setRawOffset$I(sign * (zoneHour * 60 + zoneMinute) * 60 * 1000 );
break;
case 18:
token=p$1.jj_consume_token$I.apply(this, [18]);
timeZone=$I$(3).getTimeZone$S(token.image);
break;
default:
this.jj_la1[35]=this.jj_gen;
p$1.jj_consume_token$I.apply(this, [-1]);
throw Clazz.new_(Clazz.load('ucar.units.ParseException'));
}
calendar.setTimeZone$java_util_TimeZone(timeZone);
{
if (true) return calendar;
}throw Clazz.new_($I$(17,1).c$$S,["Missing return statement in function"]);
});

Clazz.newMeth(C$, 'jj_2_1$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_1.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [0, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_2$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_2.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [1, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_3$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_3.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [2, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_4$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_4.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [3, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_5$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_5.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [4, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_6$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_6.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [5, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_7$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_7.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [6, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_2_8$I', function (xla) {
this.jj_la=xla;
this.jj_lastpos=this.jj_scanpos=this.token;
try {
return !p$1.jj_3_8.apply(this, []);
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
return true;
} else {
throw ls;
}
} finally {
p$1.jj_save$I$I.apply(this, [7, xla]);
}
}, p$1);

Clazz.newMeth(C$, 'jj_3R_40', function () {
if (p$1.jj_scan_token$I.apply(this, [21])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_33', function () {
if (p$1.jj_3R_24.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_39', function () {
if (p$1.jj_scan_token$I.apply(this, [20])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_41', function () {
if (p$1.jj_3R_3.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_23', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_33.apply(this, [])) this.jj_scanpos=xsp;
if (p$1.jj_3R_14.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_38', function () {
if (p$1.jj_scan_token$I.apply(this, [19])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_8', function () {
if (p$1.jj_3R_5.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_5', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [1])) this.jj_scanpos=xsp;
if (p$1.jj_3R_7.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_31', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_38.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_39.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_40.apply(this, [])) return true;
}}if (p$1.jj_3R_41.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_26', function () {
if (p$1.jj_scan_token$I.apply(this, [10])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_6', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [17])) {
this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [1])) return true;
}if (p$1.jj_3R_8.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_13', function () {
if (p$1.jj_3R_14.apply(this, [])) return true;
if (p$1.jj_scan_token$I.apply(this, [12])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_22', function () {
if (p$1.jj_scan_token$I.apply(this, [8])) return true;
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [1])) this.jj_scanpos=xsp;
if (p$1.jj_3R_32.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_21', function () {
if (p$1.jj_3R_31.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_20', function () {
if (p$1.jj_3R_30.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_6', function () {
if (p$1.jj_3R_14.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_7', function () {
if (p$1.jj_3R_5.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_4', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_6.apply(this, [])) this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [12])) return true;
if (p$1.jj_scan_token$I.apply(this, [5])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_19', function () {
if (p$1.jj_3R_29.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_18', function () {
if (p$1.jj_3R_14.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_32', function () {
if (p$1.jj_3R_41.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_17', function () {
if (p$1.jj_3R_5.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_5', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3_4.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_13.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_9', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_19.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_20.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_21.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_22.apply(this, [])) return true;
}}}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_35', function () {
if (p$1.jj_scan_token$I.apply(this, [3])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_8', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_17.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_18.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_34', function () {
if (p$1.jj_scan_token$I.apply(this, [2])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_24', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_34.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_35.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_12', function () {
if (p$1.jj_3R_14.apply(this, [])) return true;
if (p$1.jj_3R_26.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_25', function () {
if (p$1.jj_3R_26.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_16', function () {
if (p$1.jj_scan_token$I.apply(this, [18])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_10', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [11])) this.jj_scanpos=xsp;
if (p$1.jj_3R_23.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_3', function () {
if (p$1.jj_3R_5.apply(this, [])) return true;
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_25.apply(this, [])) this.jj_scanpos=xsp;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_3', function () {
if (p$1.jj_3R_9.apply(this, [])) return true;
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_10.apply(this, [])) this.jj_scanpos=xsp;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_11', function () {
if (p$1.jj_3R_24.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_4', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_11.apply(this, [])) this.jj_scanpos=xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3_3.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_12.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_2', function () {
if (p$1.jj_3R_4.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_30', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [17])) {
this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [18])) {
this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [16])) return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_28', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [4])) this.jj_scanpos=xsp;
if (p$1.jj_3R_14.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_27', function () {
if (p$1.jj_3R_24.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_15', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_27.apply(this, [])) this.jj_scanpos=xsp;
if (p$1.jj_3R_14.apply(this, [])) return true;
xsp=this.jj_scanpos;
if (p$1.jj_3R_28.apply(this, [])) this.jj_scanpos=xsp;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_37', function () {
if (p$1.jj_3R_23.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_2', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_scan_token$I.apply(this, [12])) {
this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [13])) {
this.jj_scanpos=xsp;
if (p$1.jj_scan_token$I.apply(this, [1])) return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_36', function () {
if (p$1.jj_3R_4.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3_1', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_2.apply(this, [])) this.jj_scanpos=xsp;
if (p$1.jj_3R_3.apply(this, [])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_7', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_15.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_16.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_14', function () {
if (p$1.jj_scan_token$I.apply(this, [5])) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'jj_3R_29', function () {
var xsp;
xsp=this.jj_scanpos;
if (p$1.jj_3R_36.apply(this, [])) {
this.jj_scanpos=xsp;
if (p$1.jj_3R_37.apply(this, [])) return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'jj_la1_init_0$', function () {
C$.jj_la1_0=Clazz.array(Integer.TYPE, -1, [4133164, 4140, 32768, 4157742, 12290, 12290, 16384, 2048, 2092, 2, 2, 4133164, 3670016, 2, 44, 12, 1024, 32, 12, 32, 32, 12, 458752, 131074, 2, 12, 8, 8, 32, 32, 16, 16, 12, 16, 48, 262188]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function (stream) {
C$.c$$java_io_InputStream$S.apply(this, [stream, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S', function (stream, encoding) {
Clazz.super_(C$, this);
try {
this.jj_input_stream=Clazz.new_($I$(20,1).c$$java_io_InputStream$S$I$I,[stream, encoding, 1, 1]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
this.token_source=Clazz.new_($I$(21,1).c$$ucar_units_SimpleCharStream,[this.jj_input_stream]);
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

}, 1);

Clazz.newMeth(C$, 'ReInit$java_io_InputStream', function (stream) {
this.ReInit$java_io_InputStream$S(stream, null);
});

Clazz.newMeth(C$, 'ReInit$java_io_InputStream$S', function (stream, encoding) {
try {
this.jj_input_stream.ReInit$java_io_InputStream$S$I$I(stream, encoding, 1, 1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
this.token_source.ReInit$ucar_units_SimpleCharStream(this.jj_input_stream);
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

});

Clazz.newMeth(C$, 'c$$java_io_Reader', function (stream) {
Clazz.super_(C$, this);
this.jj_input_stream=Clazz.new_($I$(20,1).c$$java_io_Reader$I$I,[stream, 1, 1]);
this.token_source=Clazz.new_($I$(21,1).c$$ucar_units_SimpleCharStream,[this.jj_input_stream]);
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

}, 1);

Clazz.newMeth(C$, 'ReInit$java_io_Reader', function (stream) {
this.jj_input_stream.ReInit$java_io_Reader$I$I(stream, 1, 1);
this.token_source.ReInit$ucar_units_SimpleCharStream(this.jj_input_stream);
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

});

Clazz.newMeth(C$, 'c$$ucar_units_StandardUnitFormatTokenManager', function (tm) {
Clazz.super_(C$, this);
this.token_source=tm;
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

}, 1);

Clazz.newMeth(C$, 'ReInit$ucar_units_StandardUnitFormatTokenManager', function (tm) {
this.token_source=tm;
this.token=Clazz.new_($I$(22,1));
this.jj_ntk=-1;
this.jj_gen=0;
for (var i=0; i < 36; i++) this.jj_la1[i]=-1;

for (var i=0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i]=Clazz.new_($I$(4,1));

});

Clazz.newMeth(C$, 'jj_consume_token$I', function (kind) {
var oldToken;
if ((oldToken=this.token).next != null ) this.token=this.token.next;
 else this.token=this.token.next=this.token_source.getNextToken$();
this.jj_ntk=-1;
if (this.token.kind == kind) {
this.jj_gen++;
if (++this.jj_gc > 100) {
this.jj_gc=0;
for (var i=0; i < this.jj_2_rtns.length; i++) {
var c=this.jj_2_rtns[i];
while (c != null ){
if (c.gen < this.jj_gen) c.first=null;
c=c.next;
}
}
}return this.token;
}this.token=oldToken;
this.jj_kind=kind;
throw this.generateParseException$();
}, p$1);

Clazz.newMeth(C$, 'jj_scan_token$I', function (kind) {
if (this.jj_scanpos === this.jj_lastpos ) {
this.jj_la--;
if (this.jj_scanpos.next == null ) {
this.jj_lastpos=this.jj_scanpos=this.jj_scanpos.next=this.token_source.getNextToken$();
} else {
this.jj_lastpos=this.jj_scanpos=this.jj_scanpos.next;
}} else {
this.jj_scanpos=this.jj_scanpos.next;
}if (this.jj_rescan) {
var i=0;
var tok=this.token;
while (tok != null  && tok !== this.jj_scanpos  ){
i++;
tok=tok.next;
}
if (tok != null ) p$1.jj_add_error_token$I$I.apply(this, [kind, i]);
}if (this.jj_scanpos.kind != kind) return true;
if (this.jj_la == 0 && this.jj_scanpos === this.jj_lastpos  ) throw this.jj_ls;
return false;
}, p$1);

Clazz.newMeth(C$, 'getNextToken$', function () {
if (this.token.next != null ) this.token=this.token.next;
 else this.token=this.token.next=this.token_source.getNextToken$();
this.jj_ntk=-1;
this.jj_gen++;
return this.token;
});

Clazz.newMeth(C$, 'getToken$I', function (index) {
var t=this.token;
for (var i=0; i < index; i++) {
if (t.next != null ) t=t.next;
 else t=t.next=this.token_source.getNextToken$();
}
return t;
});

Clazz.newMeth(C$, 'jj_ntk', function () {
if ((this.jj_nt=this.token.next) == null ) return (this.jj_ntk=(this.token.next=this.token_source.getNextToken$()).kind);
 else return (this.jj_ntk=this.jj_nt.kind);
}, p$1);

Clazz.newMeth(C$, 'jj_add_error_token$I$I', function (kind, pos) {
if (pos >= 100) return;
if (pos == this.jj_endpos + 1) {
this.jj_lasttokens[this.jj_endpos++]=kind;
} else if (this.jj_endpos != 0) {
this.jj_expentry=Clazz.array(Integer.TYPE, [this.jj_endpos]);
for (var i=0; i < this.jj_endpos; i++) {
this.jj_expentry[i]=this.jj_lasttokens[i];
}
 jj_entries_loop : for (var it=this.jj_expentries.iterator$(); it.hasNext$(); ) {
var oldentry=(it.next$());
if (oldentry.length == this.jj_expentry.length) {
for (var i=0; i < this.jj_expentry.length; i++) {
if (oldentry[i] != this.jj_expentry[i]) {
continue jj_entries_loop;
}}
this.jj_expentries.add$TE(this.jj_expentry);
break jj_entries_loop;
}}
if (pos != 0) this.jj_lasttokens[(this.jj_endpos=pos) - 1]=kind;
}}, p$1);

Clazz.newMeth(C$, 'generateParseException$', function () {
this.jj_expentries.clear$();
var la1tokens=Clazz.array(Boolean.TYPE, [22]);
if (this.jj_kind >= 0) {
la1tokens[this.jj_kind]=true;
this.jj_kind=-1;
}for (var i=0; i < 36; i++) {
if (this.jj_la1[i] == this.jj_gen) {
for (var j=0; j < 32; j++) {
if ((C$.jj_la1_0[i] & (1 << j)) != 0) {
la1tokens[j]=true;
}}
}}
for (var i=0; i < 22; i++) {
if (la1tokens[i]) {
this.jj_expentry=Clazz.array(Integer.TYPE, [1]);
this.jj_expentry[0]=i;
this.jj_expentries.add$TE(this.jj_expentry);
}}
this.jj_endpos=0;
p$1.jj_rescan_token.apply(this, []);
p$1.jj_add_error_token$I$I.apply(this, [0, 0]);
var exptokseq=Clazz.array(Integer.TYPE, [this.jj_expentries.size$(), null]);
for (var i=0; i < this.jj_expentries.size$(); i++) {
exptokseq[i]=this.jj_expentries.get$I(i);
}
return Clazz.new_(Clazz.load('ucar.units.ParseException').c$$ucar_units_Token$IAA$SA,[this.token, exptokseq, $I$(23).tokenImage]);
});

Clazz.newMeth(C$, 'enable_tracing$', function () {
});

Clazz.newMeth(C$, 'disable_tracing$', function () {
});

Clazz.newMeth(C$, 'jj_rescan_token', function () {
this.jj_rescan=true;
for (var i=0; i < 8; i++) {
try {
var p=this.jj_2_rtns[i];
do {
if (p.gen > this.jj_gen) {
this.jj_la=p.arg;
this.jj_lastpos=this.jj_scanpos=p.first;
switch (i) {
case 0:
p$1.jj_3_1.apply(this, []);
break;
case 1:
p$1.jj_3_2.apply(this, []);
break;
case 2:
p$1.jj_3_3.apply(this, []);
break;
case 3:
p$1.jj_3_4.apply(this, []);
break;
case 4:
p$1.jj_3_5.apply(this, []);
break;
case 5:
p$1.jj_3_6.apply(this, []);
break;
case 6:
p$1.jj_3_7.apply(this, []);
break;
case 7:
p$1.jj_3_8.apply(this, []);
break;
}
}p=p.next;
} while (p != null );
} catch (ls) {
if (Clazz.exceptionOf(ls,"ucar.units.StandardUnitFormat.LookaheadSuccess")){
} else {
throw ls;
}
}
}
this.jj_rescan=false;
}, p$1);

Clazz.newMeth(C$, 'jj_save$I$I', function (index, xla) {
var p=this.jj_2_rtns[index];
while (p.gen > this.jj_gen){
if (p.next == null ) {
p=p.next=Clazz.new_($I$(4,1));
break;
}p=p.next;
}
p.gen=this.jj_gen + xla - this.jj_la;
p.first=this.token;
p.arg=xla;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardUnitFormat, "LookaheadSuccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardUnitFormat, "JJCalls", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['gen','arg'],'O',['first','ucar.units.Token','next','ucar.units.StandardUnitFormat.JJCalls']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
