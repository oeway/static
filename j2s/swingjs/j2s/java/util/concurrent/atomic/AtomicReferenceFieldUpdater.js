(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe',['java.util.concurrent.atomic.AtomicReferenceFieldUpdater','.AtomicReferenceFieldUpdaterImpl'],'sun.reflect.Reflection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomicReferenceFieldUpdater", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AtomicReferenceFieldUpdaterImpl',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newUpdater$Class$Class$S', function (tclass, vclass, fieldName) {
return Clazz.new_(1,{T:"Object",V:"Object"},$I$(2,1).c$$Class$Class$S$Class,[tclass, vclass, fieldName, $I$(3).getCallerClass$()]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAndSet$TT$TV', function (obj, newValue) {
var prev;
do {
prev=this.get$TT(obj);
} while (!this.compareAndSet$TT$TV$TV(obj, prev, newValue));
return prev;
});

Clazz.newMeth(C$, 'getAndUpdate$TT$java_util_function_UnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.apply$(prev);
} while (!this.compareAndSet$TT$TV$TV(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$TT$java_util_function_UnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.apply$(prev);
} while (!this.compareAndSet$TT$TV$TV(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$TT$TV$java_util_function_BinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.apply$(prev, x);
} while (!this.compareAndSet$TT$TV$TV(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$TT$TV$java_util_function_BinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.apply$(prev, x);
} while (!this.compareAndSet$TT$TV$TV(obj, prev, next));
return next;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicReferenceFieldUpdater, "AtomicReferenceFieldUpdaterImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicReferenceFieldUpdater');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['offset'],'O',['tclass','Class','+vclass','+cclass']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$Class$Class$S$Class', function (tclass, vclass, fieldName, $caller) {
Clazz.super_(C$, this);
var field;
var fieldClass;
var modifiers;
try {
field=tclass.getDeclaredField$S(fieldName);
fieldClass=field.getType$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ex]);
} else {
throw ex;
}
}
if (vclass !== fieldClass ) throw Clazz.new_(Clazz.load('ClassCastException'));
if (vclass.isPrimitive$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be reference type"]);
this.cclass=null;
this.tclass=tclass;
if (vclass === Clazz.getClass(java.lang.Object) ) this.vclass=null;
 else this.vclass=vclass;
this.offset=C$.unsafe.objectFieldOffset$reflect_Field(field);
}, 1);

Clazz.newMeth(C$, ['targetCheck$TT'], function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$TT.apply(this, [obj]);
});

Clazz.newMeth(C$, ['updateCheck$TT$TV'], function (obj, update) {
if (!this.tclass.isInstance$O(obj) || (update != null  && this.vclass != null   && !this.vclass.isInstance$O(update) ) ) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$TT.apply(this, [obj]);
});

Clazz.newMeth(C$, ['compareAndSet$TT$TV$TV'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null   || (update != null  && this.vclass != null   && this.vclass !== update.getClass$()  ) ) this.updateCheck$TT$TV(obj, update);
return C$.unsafe.compareAndSwapObject$O$J$O$O(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['weakCompareAndSet$TT$TV$TV'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null   || (update != null  && this.vclass != null   && this.vclass !== update.getClass$()  ) ) this.updateCheck$TT$TV(obj, update);
return C$.unsafe.compareAndSwapObject$O$J$O$O(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['set$TT$TV'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null   || (newValue != null  && this.vclass != null   && this.vclass !== newValue.getClass$()  ) ) this.updateCheck$TT$TV(obj, newValue);
C$.unsafe.putObjectVolatile$O$J$O(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['lazySet$TT$TV'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null   || (newValue != null  && this.vclass != null   && this.vclass !== newValue.getClass$()  ) ) this.updateCheck$TT$TV(obj, newValue);
C$.unsafe.putOrderedObject$O$J$O(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['get$TT'], function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) this.targetCheck$TT(obj);
return C$.unsafe.getObjectVolatile$O$J(obj, this.offset);
});

Clazz.newMeth(C$, ['getAndSet$TT$TV'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null   || (newValue != null  && this.vclass != null   && this.vclass !== newValue.getClass$()  ) ) this.updateCheck$TT$TV(obj, newValue);
return C$.unsafe.getAndSetObject$O$J$O(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['ensureProtectedAccess$TT'], function (obj) {
if (this.cclass.isInstance$O(obj)) {
return;
}throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Class " + this.cclass.getName$() + " can not access a protected member of class " + this.tclass.getName$() + " using an instance of " + obj.getClass$().getName$() ])]);
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
