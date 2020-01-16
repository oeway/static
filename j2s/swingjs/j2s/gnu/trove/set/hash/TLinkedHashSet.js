(function(){var P$=Clazz.newPackage("gnu.trove.set.hash"),I$=[[0,'gnu.trove.list.array.TIntArrayList','StringBuilder','gnu.trove.list.linked.TIntLinkedList','java.util.Arrays','gnu.trove.impl.hash.TObjectHash',['gnu.trove.set.hash.TLinkedHashSet','.WriteProcedure'],'gnu.trove.iterator.hash.TObjectHashIterator',['gnu.trove.set.hash.TLinkedHashSet','.ForEachProcedure']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLinkedHashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.set.hash.THashSet');
C$.$classes$=[['WriteProcedure',0],['ForEachProcedure',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['order','gnu.trove.list.TIntList']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (es) {
;C$.superclazz.c$$java_util_Collection.apply(this,[es]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
this.order=((P$.TLinkedHashSet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLinkedHashSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('gnu.trove.list.array.TIntArrayList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (capacity) {
if (capacity > this._data.length) {
var newCap=Math.max(this.b$['gnu.trove.set.hash.TLinkedHashSet']._set.length, capacity);
var tmp=Clazz.array(Integer.TYPE, [newCap]);
System.arraycopy$O$I$O$I$I(this._data, 0, tmp, 0, this._data.length);
this._data=tmp;
}});
})()
), Clazz.new_($I$(1,1).c$$I, [this, null, initialCapacity],P$.TLinkedHashSet$1));
return C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.order.clear$();
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(2,1).c$$S,["{"]);
var first=true;
for (var it=this.iterator$(); it.hasNext$(); ) {
if (first) {
first=false;
} else {
buf.append$S(", ");
}buf.append$O(it.next$());
}
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
var index=this.insertKey$TT(obj);
if (index < 0) {
return false;
}if (!this.order.add$I(index)) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Order not changed after insert"]);
this.postInsertHook$Z(this.consumeFreeSlot);
return true;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this.order.remove$I(index);
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldOrder=Clazz.new_($I$(3,1).c$$gnu_trove_list_TIntList,[this.order]);
var oldSize=this.size$();
var oldSet=this._set;
this.order.clear$();
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(4).fill$OA$O(this._set, $I$(5).FREE);
for (var iterator=oldOrder.iterator$(); iterator.hasNext$(); ) {
var i=iterator.next$();
var o=oldSet[i];
if (o === $I$(5).FREE  || o === $I$(5).REMOVED  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Iterating over empty location while rehashing"]);
}if (o !== $I$(5).FREE  && o !== $I$(5).REMOVED  ) {
var index=this.insertKey$TT(o);
if (index < 0) {
this.throwObjectContractViolation$O$O$I$I$OA(this._set[(-index - 1)], o, this.size$(), oldSize, oldSet);
}if (!this.order.add$I(index)) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Order not changed after insert"]);
}}
});

Clazz.newMeth(C$, 'writeEntries$java_io_ObjectOutput', function (out) {
var writeProcedure=Clazz.new_($I$(6,1).c$$java_io_ObjectOutput, [this, null, out]);
if (!this.order.forEach$gnu_trove_procedure_TIntProcedure(writeProcedure)) throw writeProcedure.getIoException$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TLinkedHashSet$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLinkedHashSet$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('gnu.trove.iterator.hash.TObjectHashIterator'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.localIterator=this.b$['gnu.trove.set.hash.TLinkedHashSet'].order.iterator$();
}, 1);

C$.$fields$=[['I',['lastIndex'],'O',['localIterator','gnu.trove.iterator.TIntIterator']]]

Clazz.newMeth(C$, 'next$', function () {
this.lastIndex=this.localIterator.next$();
return this.objectAtIndex$I(this.lastIndex);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.localIterator.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.localIterator.remove$();
try {
this._hash.tempDisableAutoCompaction$();
this.b$['gnu.trove.set.hash.TLinkedHashSet'].removeAt$I.apply(this.b$['gnu.trove.set.hash.TLinkedHashSet'], [this.lastIndex]);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
});
})()
), Clazz.new_(1,{E:"Object"},$I$(7,1).c$$gnu_trove_impl_hash_TObjectHash, [this, null, this],P$.TLinkedHashSet$2));
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TObjectProcedure', function (procedure) {
var forEachProcedure=Clazz.new_($I$(8,1).c$$OA$gnu_trove_procedure_TObjectProcedure, [this, null, this._set, procedure]);
return this.order.forEach$gnu_trove_procedure_TIntProcedure(forEachProcedure);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLinkedHashSet, "WriteProcedure", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.procedure.TIntProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['output','java.io.ObjectOutput','ioException','java.io.IOException']]]

Clazz.newMeth(C$, 'c$$java_io_ObjectOutput', function (output) {
;C$.$init$.apply(this);
this.output=output;
}, 1);

Clazz.newMeth(C$, 'getIoException$', function () {
return this.ioException;
});

Clazz.newMeth(C$, ['execute$I','execute$'], function (value) {
try {
this.output.writeObject$O(this.this$0._set[value]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.ioException=e;
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLinkedHashSet, "ForEachProcedure", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.procedure.TIntProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changed=false;
}, 1);

C$.$fields$=[['Z',['changed'],'O',['set','Object[]','procedure','gnu.trove.procedure.TObjectProcedure']]]

Clazz.newMeth(C$, 'c$$OA$gnu_trove_procedure_TObjectProcedure', function (set, procedure) {
;C$.$init$.apply(this);
this.set=set;
this.procedure=procedure;
}, 1);

Clazz.newMeth(C$, ['execute$I','execute$'], function (value) {
return this.procedure.execute$(this.set[value]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
