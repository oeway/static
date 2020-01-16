(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[[0,'sun.misc.Unsafe','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomicReference", null, null, 'java.io.Serializable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
{
try {
C$.valueOffset=C$.unsafe.objectFieldOffset$reflect_Field(Clazz.getClass(C$).getDeclaredField$S("value"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<V>']]
,['L',['valueOffset'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$TV', function (initialValue) {
;C$.$init$.apply(this);
this.value=initialValue;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.value;
});

Clazz.newMeth(C$, 'set$TV', function (newValue) {
this.value=newValue;
});

Clazz.newMeth(C$, 'lazySet$TV', function (newValue) {
C$.unsafe.putOrderedObject$O$J$O(this, C$.valueOffset, newValue);
});

Clazz.newMeth(C$, 'compareAndSet$TV$TV', function (expect, update) {
return C$.unsafe.compareAndSwapObject$O$J$O$O(this, C$.valueOffset, expect, update);
});

Clazz.newMeth(C$, 'weakCompareAndSet$TV$TV', function (expect, update) {
return C$.unsafe.compareAndSwapObject$O$J$O$O(this, C$.valueOffset, expect, update);
});

Clazz.newMeth(C$, 'getAndSet$TV', function (newValue) {
return C$.unsafe.getAndSetObject$O$J$O(this, C$.valueOffset, newValue);
});

Clazz.newMeth(C$, 'getAndUpdate$java_util_function_UnaryOperator', function (updateFunction) {
var prev;
var next;
do {
prev=this.get$();
next=updateFunction.apply$(prev);
} while (!this.compareAndSet$TV$TV(prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$java_util_function_UnaryOperator', function (updateFunction) {
var prev;
var next;
do {
prev=this.get$();
next=updateFunction.apply$(prev);
} while (!this.compareAndSet$TV$TV(prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$TV$java_util_function_BinaryOperator', function (x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$();
next=accumulatorFunction.apply$(prev, x);
} while (!this.compareAndSet$TV$TV(prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$TV$java_util_function_BinaryOperator', function (x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$();
next=accumulatorFunction.apply$(prev, x);
} while (!this.compareAndSet$TV$TV(prev, next));
return next;
});

Clazz.newMeth(C$, 'toString', function () {
return String.valueOf$O(this.get$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
