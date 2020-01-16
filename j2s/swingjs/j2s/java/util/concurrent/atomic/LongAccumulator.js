(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.LongAccumulator',['java.util.concurrent.atomic.LongAccumulator','.SerializationProxy']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LongAccumulator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.atomic.Striped64', 'java.io.Serializable');
C$.$classes$=[['SerializationProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['identity'],'O',['$function','java.util.function.LongBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_function_LongBinaryOperator$J', function (accumulatorFunction, identity) {
Clazz.super_(C$, this);
this.$function=accumulatorFunction;
this.base=this.identity=identity;
}, 1);

Clazz.newMeth(C$, 'accumulate$J', function (x) {
var as;
var b;
var v;
var r;
var m;
var a;
if ((as=this.cells) != null  || (r=this.$function.applyAsLong$(b=this.base, x)) != b && !this.casBase$J$J(b, r)  ) {
var uncontended=true;
if (as == null  || (m=as.length - 1) < 0  || (a=as[P$.Striped64.getProbe$() & m]) == null   || !(uncontended=(r=this.$function.applyAsLong$(v=a.value, x)) == v || a.cas$J$J(v, r) ) ) this.longAccumulate$J$java_util_function_LongBinaryOperator$Z(x, this.$function, uncontended);
}});

Clazz.newMeth(C$, 'get$', function () {
var as=this.cells;
var a;
var result=this.base;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) result=this.$function.applyAsLong$(result, a.value);
}
}return result;
});

Clazz.newMeth(C$, 'reset$', function () {
var as=this.cells;
var a;
this.base=this.identity;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) a.value=this.identity;
}
}});

Clazz.newMeth(C$, 'getThenReset$', function () {
var as=this.cells;
var a;
var result=this.base;
this.base=this.identity;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) {
var v=a.value;
a.value=this.identity;
result=this.$function.applyAsLong$(result, v);
}}
}return result;
});

Clazz.newMeth(C$, 'toString', function () {
return Long.toString$J(this.get$());
});

Clazz.newMeth(C$, 'longValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'intValue$', function () {
return (this.get$()|0);
});

Clazz.newMeth(C$, 'floatValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'doubleValue$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(2,1).c$$java_util_concurrent_atomic_LongAccumulator,[this]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LongAccumulator, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['value','identity'],'O',['$function','java.util.function.LongBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_atomic_LongAccumulator', function (a) {
;C$.$init$.apply(this);
this.$function=a.$function;
this.identity=a.identity;
this.value=a.get$();
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
var a=Clazz.new_($I$(1,1).c$$java_util_function_LongBinaryOperator$J,[this.$function, this.identity]);
a.base=this.value;
return a;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
