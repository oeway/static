(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe','java.security.AccessController','sun.reflect.misc.ReflectUtil','java.lang.reflect.Modifier',['java.util.concurrent.atomic.AtomicIntegerFieldUpdater','.AtomicIntegerFieldUpdaterImpl'],'sun.reflect.Reflection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomicIntegerFieldUpdater", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AtomicIntegerFieldUpdaterImpl',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newUpdater$Class$S', function (tclass, fieldName) {
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$Class$S$Class,[tclass, fieldName, $I$(6).getCallerClass$()]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAndSet$TT$I', function (obj, newValue) {
var prev;
do {
prev=this.get$TT(obj);
} while (!this.compareAndSet$TT$I$I(obj, prev, newValue));
return prev;
});

Clazz.newMeth(C$, 'getAndIncrement$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + 1;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndDecrement$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev - 1;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndAdd$TT$I', function (obj, delta) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + delta;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'incrementAndGet$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + 1;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'decrementAndGet$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev - 1;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'addAndGet$TT$I', function (obj, delta) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + delta;
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndUpdate$TT$java_util_function_IntUnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.applyAsInt$(prev);
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$TT$java_util_function_IntUnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.applyAsInt$(prev);
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$TT$I$java_util_function_IntBinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.applyAsInt$(prev, x);
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$TT$I$java_util_function_IntBinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.applyAsInt$(prev, x);
} while (!this.compareAndSet$TT$I$I(obj, prev, next));
return next;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicIntegerFieldUpdater, "AtomicIntegerFieldUpdaterImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicIntegerFieldUpdater');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['offset'],'O',['tclass','Class','+cclass']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$Class$S$Class', function (tclass, fieldName, $caller) {
Clazz.super_(C$, this);
var field;
var modifiers;
try {
field=$I$(2).doPrivileged$java_security_PrivilegedExceptionAction(((P$.AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1.$init$, [this, {fieldName:fieldName,tclass:tclass}])));
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !C$.isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
$I$(3).checkPackageAccess$Class(tclass);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.PrivilegedActionException")){
var pae = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[pae.getException$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
var fieldt=field.getType$();
if (fieldt !== Integer.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be integer type"]);
if (!$I$(4).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(4).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$reflect_Field(field);
}, 1);

Clazz.newMeth(C$, 'isAncestor$ClassLoader$ClassLoader', function (first, second) {
var acl=first;
do {
acl=acl.getParent$();
if (second === acl ) {
return true;
}} while (acl != null );
return false;
}, 1);

Clazz.newMeth(C$, ['fullCheck$TT'], function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$TT.apply(this, [obj]);
}, p$1);

Clazz.newMeth(C$, ['compareAndSet$TT$I$I'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.compareAndSwapInt$O$J$I$I(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['weakCompareAndSet$TT$I$I'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.compareAndSwapInt$O$J$I$I(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['set$TT$I'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
C$.unsafe.putIntVolatile$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['lazySet$TT$I'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
C$.unsafe.putOrderedInt$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['get$TT'], function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getIntVolatile$O$J(obj, this.offset);
});

Clazz.newMeth(C$, ['getAndSet$TT$I'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getAndSetInt$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['getAndIncrement$TT'], function (obj) {
return this.getAndAdd$TT$I(obj, 1);
});

Clazz.newMeth(C$, ['getAndDecrement$TT'], function (obj) {
return this.getAndAdd$TT$I(obj, -1);
});

Clazz.newMeth(C$, ['getAndAdd$TT$I'], function (obj, delta) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getAndAddInt$O$J$I(obj, this.offset, delta);
});

Clazz.newMeth(C$, ['incrementAndGet$TT'], function (obj) {
return this.getAndAdd$TT$I(obj, 1) + 1;
});

Clazz.newMeth(C$, ['decrementAndGet$TT'], function (obj) {
return this.getAndAdd$TT$I(obj, -1) - 1;
});

Clazz.newMeth(C$, ['addAndGet$TT$I'], function (obj, delta) {
return this.getAndAdd$TT$I(obj, delta) + delta;
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
