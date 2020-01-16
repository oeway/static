(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'sun.misc.Unsafe','java.security.AccessController','sun.reflect.misc.ReflectUtil','java.lang.reflect.Modifier','sun.reflect.Reflection',['java.util.concurrent.atomic.AtomicLongFieldUpdater','.CASUpdater'],['java.util.concurrent.atomic.AtomicLongFieldUpdater','.LockedUpdater']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CASUpdater',10],['LockedUpdater',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newUpdater$Class$S', function (tclass, fieldName) {
var $caller=$I$(5).getCallerClass$();
if (true) return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$Class$S$Class,[tclass, fieldName, $caller]);
 else return Clazz.new_(1,{T:"Object"},$I$(7,1).c$$Class$S$Class,[tclass, fieldName, $caller]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAndSet$TT$J', function (obj, newValue) {
var prev;
do {
prev=this.get$TT(obj);
} while (!this.compareAndSet$TT$J$J(obj, prev, newValue));
return prev;
});

Clazz.newMeth(C$, 'getAndIncrement$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + 1;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndDecrement$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev - 1;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndAdd$TT$J', function (obj, delta) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + delta;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'incrementAndGet$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + 1;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'decrementAndGet$TT', function (obj) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev - 1;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'addAndGet$TT$J', function (obj, delta) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=prev + delta;
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndUpdate$TT$java_util_function_LongUnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.applyAsLong$(prev);
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$TT$java_util_function_LongUnaryOperator', function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=updateFunction.applyAsLong$(prev);
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$TT$J$java_util_function_LongBinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.applyAsLong$(prev, x);
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$TT$J$java_util_function_LongBinaryOperator', function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$TT(obj);
next=accumulatorFunction.applyAsLong$(prev, x);
} while (!this.compareAndSet$TT$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'isAncestor$ClassLoader$ClassLoader', function (first, second) {
var acl=first;
do {
acl=acl.getParent$();
if (second === acl ) {
return true;
}} while (acl != null );
return false;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicLongFieldUpdater, "CASUpdater", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicLongFieldUpdater');

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
field=$I$(2).doPrivileged$java_security_PrivilegedExceptionAction(((P$.AtomicLongFieldUpdater$CASUpdater$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater$CASUpdater$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicLongFieldUpdater$CASUpdater$1.$init$, [this, {fieldName:fieldName,tclass:tclass}])));
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !P$.AtomicLongFieldUpdater.isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
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
if (fieldt !== Long.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be long type"]);
if (!$I$(4).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(4).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$reflect_Field(field);
}, 1);

Clazz.newMeth(C$, ['fullCheck$TT'], function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$TT.apply(this, [obj]);
}, p$1);

Clazz.newMeth(C$, ['compareAndSet$TT$J$J'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.compareAndSwapLong$O$J$J$J(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['weakCompareAndSet$TT$J$J'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.compareAndSwapLong$O$J$J$J(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, ['set$TT$J'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
C$.unsafe.putLongVolatile$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['lazySet$TT$J'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
C$.unsafe.putOrderedLong$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['get$TT'], function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getLongVolatile$O$J(obj, this.offset);
});

Clazz.newMeth(C$, ['getAndSet$TT$J'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getAndSetLong$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, ['getAndIncrement$TT'], function (obj) {
return this.getAndAdd$TT$J(obj, 1);
});

Clazz.newMeth(C$, ['getAndDecrement$TT'], function (obj) {
return this.getAndAdd$TT$J(obj, -1);
});

Clazz.newMeth(C$, ['getAndAdd$TT$J'], function (obj, delta) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$TT.apply(this, [obj]);
return C$.unsafe.getAndAddLong$O$J$J(obj, this.offset, delta);
});

Clazz.newMeth(C$, ['incrementAndGet$TT'], function (obj) {
return this.getAndAdd$TT$J(obj, 1) + 1;
});

Clazz.newMeth(C$, ['decrementAndGet$TT'], function (obj) {
return this.getAndAdd$TT$J(obj, -1) - 1;
});

Clazz.newMeth(C$, ['addAndGet$TT$J'], function (obj, delta) {
return this.getAndAdd$TT$J(obj, delta) + delta;
});

Clazz.newMeth(C$, ['ensureProtectedAccess$TT'], function (obj) {
if (this.cclass.isInstance$O(obj)) {
return;
}throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Class " + this.cclass.getName$() + " can not access a protected member of class " + this.tclass.getName$() + " using an instance of " + obj.getClass$().getName$() ])]);
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicLongFieldUpdater, "LockedUpdater", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicLongFieldUpdater');

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
var field=null;
var modifiers=0;
try {
field=$I$(2).doPrivileged$java_security_PrivilegedExceptionAction(((P$.AtomicLongFieldUpdater$LockedUpdater$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater$LockedUpdater$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicLongFieldUpdater$LockedUpdater$1.$init$, [this, {tclass:tclass,fieldName:fieldName}])));
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !P$.AtomicLongFieldUpdater.isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
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
if (fieldt !== Long.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be long type"]);
if (!$I$(4).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(4).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$reflect_Field(field);
}, 1);

Clazz.newMeth(C$, ['fullCheck$TT'], function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$2.ensureProtectedAccess$TT.apply(this, [obj]);
}, p$2);

Clazz.newMeth(C$, ['compareAndSet$TT$J$J'], function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$TT.apply(this, [obj]);
{
var v=C$.unsafe.getLong$O$J(obj, this.offset);
if (v != expect) return false;
C$.unsafe.putLong$O$J$J(obj, this.offset, update);
return true;
}});

Clazz.newMeth(C$, ['weakCompareAndSet$TT$J$J'], function (obj, expect, update) {
return this.compareAndSet$TT$J$J(obj, expect, update);
});

Clazz.newMeth(C$, ['set$TT$J'], function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$TT.apply(this, [obj]);
{
C$.unsafe.putLong$O$J$J(obj, this.offset, newValue);
}});

Clazz.newMeth(C$, ['lazySet$TT$J'], function (obj, newValue) {
this.set$TT$J(obj, newValue);
});

Clazz.newMeth(C$, ['get$TT'], function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$TT.apply(this, [obj]);
{
return C$.unsafe.getLong$O$J(obj, this.offset);
}});

Clazz.newMeth(C$, ['ensureProtectedAccess$TT'], function (obj) {
if (this.cclass.isInstance$O(obj)) {
return;
}throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Class " + this.cclass.getName$() + " can not access a protected member of class " + this.tclass.getName$() + " using an instance of " + obj.getClass$().getName$() ])]);
}, p$2);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
