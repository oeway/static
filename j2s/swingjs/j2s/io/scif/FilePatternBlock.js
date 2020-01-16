(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FilePatternBlock");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.begin=null;
this.end=null;
this.step=null;
}, 1);

C$.$fields$=[['Z',['fixed'],'I',['zeroes'],'S',['block'],'O',['elements','String[]','begin','java.math.BigInteger','+end','+step']]]

Clazz.newMeth(C$, 'c$$S', function (block) {
;C$.$init$.apply(this);
this.block=block;
p$1.explode.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getElements$', function () {
return this.elements;
});

Clazz.newMeth(C$, 'getBlock$', function () {
return this.block;
});

Clazz.newMeth(C$, 'isFixed$', function () {
return this.fixed;
});

Clazz.newMeth(C$, 'getFirst$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'getLast$', function () {
return this.end;
});

Clazz.newMeth(C$, 'getStep$', function () {
return this.step;
});

Clazz.newMeth(C$, 'explode', function () {
var dash=this.block.indexOf$S("-");
var b;
var e;
var s;
if (dash < 0) {
var comma=this.block.indexOf$S(",");
if (comma > 0) {
this.elements=this.block.substring$I$I(1, this.block.length$() - 1).split$S(",");
return;
}b=e=this.block.substring$I$I(1, this.block.length$() - 1);
s="1";
} else {
var colon=this.block.indexOf$S(":");
b=this.block.substring$I$I(1, dash);
if (colon < 0) {
e=this.block.substring$I$I(dash + 1, this.block.length$() - 1);
s="1";
} else {
e=this.block.substring$I$I(dash + 1, colon);
s=this.block.substring$I$I(colon + 1, this.block.length$() - 1);
}}var numeric=true;
try {
this.begin=Clazz.new_($I$(1,1).c$$S,[b]);
this.end=Clazz.new_($I$(1,1).c$$S,[e]);
this.step=Clazz.new_($I$(1,1).c$$S,[s]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
numeric=false;
this.begin=Clazz.new_($I$(1,1).c$$S$I,[b, 26]);
this.end=Clazz.new_($I$(1,1).c$$S$I,[e, 26]);
this.step=Clazz.new_($I$(1,1).c$$S$I,[s, 26]);
} else {
throw exc;
}
}
this.fixed=b.length$() == e.length$();
this.zeroes=0;
for (this.zeroes=0; this.zeroes < e.length$(); this.zeroes++) {
if (e.charAt$I(this.zeroes) != "0") break;
}
var count=this.end.subtract$java_math_BigInteger(this.begin).divide$java_math_BigInteger(this.step).intValue$() + 1;
this.elements=Clazz.array(String, [count]);
for (var i=0; i < count; i++) {
var v=this.begin.add$java_math_BigInteger(this.step.multiply$java_math_BigInteger($I$(1).valueOf$J(i)));
var value=numeric ? v.toString() : v.toString$I(26);
if (!numeric) {
if (Character.isLowerCase$C(b.charAt$I(0))) value=value.toLowerCase$();
 else value=value.toUpperCase$();
}var padChars=this.fixed ? e.length$() - value.length$() : 0;
this.elements[i]=value;
for (var j=0; j < padChars; j++) {
this.elements[i]="0" + this.elements[i];
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
