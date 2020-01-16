(function(){var P$=Clazz.newPackage("gnu.trove.set.hash"),I$=[[0,'gnu.trove.impl.HashFunctions',['gnu.trove.set.hash.THashSet','.HashProcedure'],'java.util.Arrays','gnu.trove.impl.hash.TObjectHash','gnu.trove.procedure.array.ToObjectArrayProceedure','java.lang.reflect.Array','gnu.trove.iterator.hash.TObjectHashIterator','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "THashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TObjectHash', ['java.util.Set', 'Iterable', 'java.io.Externalizable']);
C$.$classes$=[['HashProcedure',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (collection) {
C$.c$$I.apply(this, [collection.size$()]);
this.addAll$java_util_Collection(collection);
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (obj) {
var index=this.insertKey$TT(obj);
if (index < 0) {
return false;
}this.postInsertHook$Z(this.consumeFreeSlot);
return true;
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "java.util.Set"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}return this.containsAll$java_util_Collection(that);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var p=Clazz.new_($I$(2,1), [this, null]);
this.forEach$gnu_trove_procedure_TObjectProcedure(p);
return p.getHashCode$();
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldSize=this.size$();
var oldSet=this._set;
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(3).fill$OA$O(this._set, $I$(4).FREE);
var count=0;
for (var i=oldCapacity; i-- > 0; ) {
var o=oldSet[i];
if (o !== $I$(4).FREE  && o !== $I$(4).REMOVED  ) {
var index=this.insertKey$TT(o);
if (index < 0) {
this.throwObjectContractViolation$O$O$I$I$OA(this._set[(-index - 1)], o, this.size$(), oldSize, oldSet);
}count++;
}}
gnu.trove.impl.hash.TObjectHash.reportPotentialConcurrentMod$I$I(this.size$(), oldSize);
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=Clazz.array(java.lang.Object, [this.size$()]);
this.forEach$gnu_trove_procedure_TObjectProcedure(Clazz.new_($I$(5,1).c$$TTA,[result]));
return result;
});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
var size=this.size$();
if (a.length < size) {
a=Clazz.array(a.getClass$().getComponentType$(), size);
}this.forEach$gnu_trove_procedure_TObjectProcedure(Clazz.new_($I$(5,1).c$$TTA,[a]));
if (a.length > size) {
a[size]=null;
}return a;
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(3).fill$OA$I$I$O(this._set, 0, this._set.length, $I$(4).FREE);
});

Clazz.newMeth(C$, 'remove$O', function (obj) {
var index=this.index$O(obj);
if (index >= 0) {
this.removeAt$I(index);
return true;
}return false;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_(1,{E:"Object"},$I$(7,1).c$$gnu_trove_impl_hash_TObjectHash,[this]);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var i=collection.iterator$(); i.hasNext$(); ) {
if (!this.contains$O(i.next$())) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
var changed=false;
var size=collection.size$();
this.ensureCapacity$I(size);
var it=collection.iterator$();
while (size-- > 0){
if (this.add$TE(it.next$())) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
var size=collection.size$();
var it;
it=collection.iterator$();
while (size-- > 0){
if (this.remove$O(it.next$())) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var changed=false;
var size=this.size$();
var it=this.iterator$();
while (size-- > 0){
if (!collection.contains$O(it.next$())) {
it.remove$();
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(8,1).c$$S,["{"]);
this.forEach$gnu_trove_procedure_TObjectProcedure(((P$.THashSet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "THashSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$O','execute$','executenull'], function (value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$O(value);
return true;
});
})()
), Clazz.new_(P$.THashSet$1.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(1);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
this.writeEntries$java_io_ObjectOutput(out);
});

Clazz.newMeth(C$, 'writeEntries$java_io_ObjectOutput', function (out) {
for (var i=this._set.length; i-- > 0; ) {
if (this._set[i] !== $I$(4).REMOVED  && this._set[i] !== $I$(4).FREE  ) {
out.writeObject$O(this._set[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var version=($b$[0] = $in.readByte$(), $b$[0]);
if (version != 0) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
}var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var val=$in.readObject$();
this.add$TE(val);
}
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.THashSet, "HashProcedure", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.procedure.TObjectProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.h=0;
}, 1);

C$.$fields$=[['I',['h']]]

Clazz.newMeth(C$, 'getHashCode$', function () {
return this.h;
});

Clazz.newMeth(C$, ['execute$TE','execute$','execute$TT'], function (key) {
this.h+=$I$(1).hash$O(key);
return true;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
