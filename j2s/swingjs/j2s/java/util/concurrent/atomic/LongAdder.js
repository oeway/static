(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.LongAdder',['java.util.concurrent.atomic.LongAdder','.SerializationProxy']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LongAdder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.atomic.Striped64', 'java.io.Serializable');
C$.$classes$=[['SerializationProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'add$J', function (x) {
var as;
var b;
var v;
var m;
var a;
if ((as=this.cells) != null  || !this.casBase$J$J(b=this.base, b + x) ) {
var uncontended=true;
if (as == null  || (m=as.length - 1) < 0  || (a=as[P$.Striped64.getProbe$() & m]) == null   || !(uncontended=a.cas$J$J(v=a.value, v + x)) ) this.longAccumulate$J$java_util_function_LongBinaryOperator$Z(x, null, uncontended);
}});

Clazz.newMeth(C$, 'increment$', function () {
this.add$J(1);
});

Clazz.newMeth(C$, 'decrement$', function () {
this.add$J(-1);
});

Clazz.newMeth(C$, 'sum$', function () {
var as=this.cells;
var a;
var sum=this.base;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) sum+=a.value;
}
}return sum;
});

Clazz.newMeth(C$, 'reset$', function () {
var as=this.cells;
var a;
this.base=0;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) a.value=0;
}
}});

Clazz.newMeth(C$, 'sumThenReset$', function () {
var as=this.cells;
var a;
var sum=this.base;
this.base=0;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) {
sum+=a.value;
a.value=0;
}}
}return sum;
});

Clazz.newMeth(C$, 'toString', function () {
return Long.toString$J(this.sum$());
});

Clazz.newMeth(C$, 'longValue$', function () {
return this.sum$();
});

Clazz.newMeth(C$, 'intValue$', function () {
return (this.sum$()|0);
});

Clazz.newMeth(C$, 'floatValue$', function () {
return this.sum$();
});

Clazz.newMeth(C$, 'doubleValue$', function () {
return this.sum$();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(2,1).c$$java_util_concurrent_atomic_LongAdder,[this]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LongAdder, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['value']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_atomic_LongAdder', function (a) {
;C$.$init$.apply(this);
this.value=a.sum$();
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
var a=Clazz.new_($I$(1,1));
a.base=this.value;
return a;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
