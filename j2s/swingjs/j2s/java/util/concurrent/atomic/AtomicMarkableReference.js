(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe',['java.util.concurrent.atomic.AtomicMarkableReference','.Pair'],'NoSuchFieldError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomicMarkableReference", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Pair',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UNSAFE=$I$(1).getUnsafe$();
C$.pairOffset=C$.objectFieldOffset$sun_misc_Unsafe$S$Class(C$.UNSAFE, "pair", Clazz.getClass(C$));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pair','java.util.concurrent.atomic.AtomicMarkableReference.Pair']]
,['L',['pairOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$TV$Z', function (initialRef, initialMark) {
;C$.$init$.apply(this);
this.pair=$I$(2).of$TT$Z(initialRef, initialMark);
}, 1);

Clazz.newMeth(C$, 'getReference$', function () {
return this.pair.reference;
});

Clazz.newMeth(C$, 'isMarked$', function () {
return this.pair.mark;
});

Clazz.newMeth(C$, 'get$ZA', function (markHolder) {
var pair=this.pair;
markHolder[0]=pair.mark;
return pair.reference;
});

Clazz.newMeth(C$, 'weakCompareAndSet$TV$TV$Z$Z', function (expectedReference, newReference, expectedMark, newMark) {
return this.compareAndSet$TV$TV$Z$Z(expectedReference, newReference, expectedMark, newMark);
});

Clazz.newMeth(C$, 'compareAndSet$TV$TV$Z$Z', function (expectedReference, newReference, expectedMark, newMark) {
var current=this.pair;
return expectedReference === current.reference  && expectedMark == current.mark   && ((newReference === current.reference  && newMark == current.mark  ) || p$1.casPair$java_util_concurrent_atomic_AtomicMarkableReference_Pair$java_util_concurrent_atomic_AtomicMarkableReference_Pair.apply(this, [current, $I$(2).of$TT$Z(newReference, newMark)]) ) ;
});

Clazz.newMeth(C$, 'set$TV$Z', function (newReference, newMark) {
var current=this.pair;
if (newReference !== current.reference  || newMark != current.mark  ) this.pair=$I$(2).of$TT$Z(newReference, newMark);
});

Clazz.newMeth(C$, 'attemptMark$TV$Z', function (expectedReference, newMark) {
var current=this.pair;
return expectedReference === current.reference  && (newMark == current.mark  || p$1.casPair$java_util_concurrent_atomic_AtomicMarkableReference_Pair$java_util_concurrent_atomic_AtomicMarkableReference_Pair.apply(this, [current, $I$(2).of$TT$Z(expectedReference, newMark)]) ) ;
});

Clazz.newMeth(C$, 'casPair$java_util_concurrent_atomic_AtomicMarkableReference_Pair$java_util_concurrent_atomic_AtomicMarkableReference_Pair', function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.pairOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'objectFieldOffset$sun_misc_Unsafe$S$Class', function (UNSAFE, field, klazz) {
try {
return UNSAFE.objectFieldOffset$reflect_Field(klazz.getDeclaredField$S(field));
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchFieldException")){
var error=Clazz.new_($I$(3,1).c$$S,[field]);
error.initCause$Throwable(e);
throw error;
} else {
throw e;
}
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicMarkableReference, "Pair", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['mark'],'O',['reference','<T>']]]

Clazz.newMeth(C$, 'c$$TT$Z', function (reference, mark) {
;C$.$init$.apply(this);
this.reference=reference;
this.mark=mark;
}, 1);

Clazz.newMeth(C$, 'of$TT$Z', function (reference, mark) {
return Clazz.new_(1,{T:"Object"},C$.c$$TT$Z,[reference, mark]);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
