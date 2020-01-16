(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,'gnu.trove.impl.HashFunctions','gnu.trove.iterator.hash.TObjectHashIterator','gnu.trove.impl.hash.TObjectHash',['gnu.trove.map.hash.TCustomHashMap','.Entry'],['gnu.trove.map.hash.TCustomHashMap','.EntryView','.EntryIterator'],'java.lang.reflect.Array','StringBuilder',['gnu.trove.map.hash.TCustomHashMap','.EqProcedure'],['gnu.trove.map.hash.TCustomHashMap','.HashProcedure'],'java.util.Arrays',['gnu.trove.map.hash.TCustomHashMap','.ValueView'],['gnu.trove.map.hash.TCustomHashMap','.KeyView'],['gnu.trove.map.hash.TCustomHashMap','.EntryView']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TCustomHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TCustomObjectHash', ['gnu.trove.map.TMap', 'java.io.Externalizable']);
C$.$classes$=[['HashProcedure',18],['EqProcedure',26],['ValueView',4],['EntryView',4],['MapBackedView',1026],['KeyView',4],['Entry',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_values','_.V[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy', function (strategy) {
;C$.superclazz.c$$gnu_trove_strategy_HashingStrategy.apply(this,[strategy]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$I', function (strategy, initialCapacity) {
;C$.superclazz.c$$gnu_trove_strategy_HashingStrategy$I.apply(this,[strategy, initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$I$F', function (strategy, initialCapacity, loadFactor) {
;C$.superclazz.c$$gnu_trove_strategy_HashingStrategy$I$F.apply(this,[strategy, initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$java_util_Map', function (strategy, map) {
C$.c$$gnu_trove_strategy_HashingStrategy$I.apply(this, [strategy, map.size$()]);
this.putAll$java_util_Map(map);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$gnu_trove_map_hash_TCustomHashMap', function (strategy, map) {
C$.c$$gnu_trove_strategy_HashingStrategy$I.apply(this, [strategy, map.size$()]);
this.putAll$java_util_Map(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(java.lang.Object, [capacity]);
return capacity;
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
var index=this.insertKey$TT(key);
return p$1.doPut$TV$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['putIfAbsent$TK$TV'], function (key, value) {
var index=this.insertKey$TT(key);
if (index < 0) {
return this._values[-index - 1];
}return p$1.doPut$TV$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['doPut$TV$I'], function (value, index) {
var previous=null;
var isNewMapping=true;
if (index < 0) {
index=-index - 1;
previous=this._values[index];
isNewMapping=false;
}this._values[index]=value;
if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return previous;
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "java.util.Map"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}return this.forEachEntry$gnu_trove_procedure_TObjectObjectProcedure(Clazz.new_(1,{K:"Object",V:"Object"},$I$(8,1).c$$java_util_Map,[that]));
});

Clazz.newMeth(C$, 'hashCode$', function () {
var p=Clazz.new_($I$(9,1), [this, null]);
this.forEachEntry$gnu_trove_procedure_TObjectObjectProcedure(p);
return p.getHashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(7,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TObjectObjectProcedure(((P$.TCustomHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TCustomHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$TK$TV','execute$'], function (key, value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$O(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$O(value);
return true;
});
})()
), Clazz.new_(P$.TCustomHashMap$1.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TObjectProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TObjectProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TObjectProcedure', function (procedure) {
var values=this._values;
var set=this._set;
for (var i=values.length; i-- > 0; ) {
if (set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED   && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectObjectProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectObjectProcedure', function (procedure) {
var modified=false;
var keys=this._set;
var values=this._values;
this.tempDisableAutoCompaction$();
try {
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], values[i]) ) {
this.removeAt$I(i);
modified=true;
}}
} finally {
this.reenableAutoCompaction$Z(true);
}
return modified;
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TObjectFunction', function ($function) {
var values=this._values;
var set=this._set;
for (var i=values.length; i-- > 0; ) {
if (set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldSize=this.size$();
var oldKeys=this._set;
var oldVals=this._values;
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(10).fill$OA$O(this._set, $I$(3).FREE);
this._values=Clazz.array(java.lang.Object, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
var o=oldKeys[i];
if (o === $I$(3).FREE  || o === $I$(3).REMOVED  ) continue;
var index=this.insertKey$TT(o);
if (index < 0) {
this.throwObjectContractViolation$O$O$I$I$OA(this._set[(-index - 1)], o, this.size$(), oldSize, oldKeys);
}this._values[index]=oldVals[i];
}
});

Clazz.newMeth(C$, 'get$O', function (key) {
var index=this.index$O(key);
if (index < 0 || !this.strategy.equals$TT$TT(this._set[index], key) ) {
return null;
}return this._values[index];
});

Clazz.newMeth(C$, 'clear$', function () {
if (this.size$() == 0) {
return;
}C$.superclazz.prototype.clear$.apply(this, []);
$I$(10).fill$OA$I$I$O(this._set, 0, this._set.length, $I$(3).FREE);
$I$(10).fill$OA$I$I$O(this._values, 0, this._values.length, null);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var prev=null;
var index=this.index$O(key);
if (index >= 0) {
prev=this._values[index];
this.removeAt$I(index);
}return prev;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=null;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'values$', function () {
return Clazz.new_($I$(11,1), [this, null]);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(12,1), [this, null]);
});

Clazz.newMeth(C$, 'entrySet$', function () {
return Clazz.new_($I$(13,1), [this, null]);
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
var set=this._set;
var vals=this._values;
if (null == val ) {
for (var i=vals.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && val === vals[i]  ) {
return true;
}}
} else {
for (var i=vals.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && (val === vals[i]  || this.strategy.equals$TT$TT(val, vals[i]) ) ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.contains$O(key);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
this.ensureCapacity$I(map.size$());
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
this.put$TK$TV(e.getKey$(), e.getValue$());
}
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(1);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
for (var i=this._set.length; i-- > 0; ) {
if (this._set[i] !== $I$(3).REMOVED  && this._set[i] !== $I$(3).FREE  ) {
out.writeObject$O(this._set[i]);
out.writeObject$O(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var version=($b$[0] = $in.readByte$(), $b$[0]);
if (version != 0) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
}var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readObject$();
var val=$in.readObject$();
this.put$TK$TV(key, val);
}
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "HashProcedure", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.procedure.TObjectObjectProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.h=0;
}, 1);

C$.$fields$=[['I',['h']]]

Clazz.newMeth(C$, 'getHashCode$', function () {
return this.h;
});

Clazz.newMeth(C$, ['execute$TK$TV','execute$'], function (key, value) {
this.h+=$I$(1).hash$O(key) ^ (value == null  ? 0 : value.hashCode$());
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "EqProcedure", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'gnu.trove.procedure.TObjectObjectProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_otherMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map', function (otherMap) {
;C$.$init$.apply(this);
this._otherMap=otherMap;
}, 1);

Clazz.newMeth(C$, ['execute$TK$TV','execute$'], function (key, value) {
if (value == null  && !this._otherMap.containsKey$O(key) ) {
return false;
}var oValue=this._otherMap.get$O(key);
return oValue === value  || (oValue != null  && oValue.equals$O(value) ) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "ValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TCustomHashMap','.MapBackedView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TCustomHashMap$ValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TCustomHashMap$ValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('gnu.trove.iterator.hash.TObjectHashIterator'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['objectAtIndex$I','objectAtIndex$'], function (index) {
return this.b$['gnu.trove.map.hash.TCustomHashMap']._values[index];
});
})()
), Clazz.new_($I$(2,1).c$$gnu_trove_impl_hash_TObjectHash, [this, null, this.b$['gnu.trove.map.hash.TCustomHashMap']],P$.TCustomHashMap$ValueView$1));
});

Clazz.newMeth(C$, ['containsElement$TV','containsElement$TE'], function (value) {
return this.b$['gnu.trove.map.hash.TCustomHashMap'].containsValue$O.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [value]);
});

Clazz.newMeth(C$, ['removeElement$TV','removeElement$TE'], function (value) {
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=values.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && value === values[i]   || (null != values[i]  && this.this$0.strategy.equals$TT$TT(values[i], value) ) ) {
this.b$['gnu.trove.map.hash.TCustomHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "EntryView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TCustomHashMap','.MapBackedView']);
C$.$classes$=[['EntryIterator',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(5,1).c$$gnu_trove_map_hash_TCustomHashMap, [this, null, this.b$['gnu.trove.map.hash.TCustomHashMap']]);
});

Clazz.newMeth(C$, ['removeElement$java_util_Map_Entry','removeElement$TE'], function (entry) {
var val;
var index;
var key=this.keyForEntry$java_util_Map_Entry(entry);
index=this.b$['gnu.trove.impl.hash.TObjectHash'].index$O.apply(this.b$['gnu.trove.impl.hash.TObjectHash'], [key]);
if (index >= 0) {
val=this.valueForEntry$java_util_Map_Entry(entry);
if (val === this.this$0._values[index]  || (null != val  && this.this$0.strategy.equals$TT$TT(val, this.this$0._values[index]) ) ) {
this.b$['gnu.trove.map.hash.TCustomHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [index]);
return true;
}}return false;
});

Clazz.newMeth(C$, ['containsElement$java_util_Map_Entry','containsElement$TE'], function (entry) {
var val=this.b$['gnu.trove.map.hash.TCustomHashMap'].get$O.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [this.keyForEntry$java_util_Map_Entry(entry)]);
var entryValue=entry.getValue$();
return entryValue === val  || (null != val  && this.this$0.strategy.equals$TT$TT(val, entryValue) ) ;
});

Clazz.newMeth(C$, 'valueForEntry$java_util_Map_Entry', function (entry) {
return entry.getValue$();
});

Clazz.newMeth(C$, 'keyForEntry$java_util_Map_Entry', function (entry) {
return entry.getKey$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap.EntryView, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.iterator.hash.TObjectHashIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TCustomHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TObjectHash.apply(this,[map]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'objectAtIndex$I', function (index) {
return Clazz.new_($I$(4,1).c$$TK$TV$I, [this, null, this.b$['gnu.trove.map.hash.TCustomHashMap']._set[index], this.b$['gnu.trove.map.hash.TCustomHashMap']._values[index], index]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "MapBackedView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet', ['java.util.Set', 'Iterable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'contains$O', function (key) {
return this.containsElement$TE(key);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.removeElement$TE(o);
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.map.hash.TCustomHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TCustomHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=Clazz.array(java.lang.Object, [this.size$()]);
var e=this.iterator$();
for (var i=0; e.hasNext$(); i++) {
result[i]=e.next$();
}
return result;
});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
var size=this.size$();
if (a.length < size) {
a=Clazz.array(a.getClass$().getComponentType$(), size);
}var it=this.iterator$();
var result=a;
for (var i=0; i < size; i++) {
result[i]=it.next$();
}
if (a.length > size) {
a[size]=null;
}return a;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['gnu.trove.map.hash.TCustomHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], []);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var changed=false;
var i=this.iterator$();
while (i.hasNext$()){
if (!collection.contains$O(i.next$())) {
i.remove$();
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'toString', function () {
var i=this.iterator$();
if (!i.hasNext$()) return "{}";
var sb=Clazz.new_($I$(7,1));
sb.append$C("{");
for (; ; ) {
var e=i.next$();
sb.append$O(e === this  ? "(this Collection)" : e);
if (!i.hasNext$()) return sb.append$C("}").toString();
sb.append$S(", ");
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TCustomHashMap','.MapBackedView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(2,1).c$$gnu_trove_impl_hash_TObjectHash,[this.b$['gnu.trove.map.hash.TCustomHashMap']]);
});

Clazz.newMeth(C$, ['removeElement$TK','removeElement$TE'], function (key) {
return null != this.b$['gnu.trove.map.hash.TCustomHashMap'].remove$O.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [key]) ;
});

Clazz.newMeth(C$, ['containsElement$TK','containsElement$TE'], function (key) {
return this.b$['gnu.trove.map.hash.TCustomHashMap'].contains$O.apply(this.b$['gnu.trove.map.hash.TCustomHashMap'], [key]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TCustomHashMap, "Entry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index'],'O',['key','<K>','val','<V>']]]

Clazz.newMeth(C$, 'c$$TK$TV$I', function (key, value, index) {
;C$.$init$.apply(this);
this.key=key;
this.val=value;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.val;
});

Clazz.newMeth(C$, ['setValue$TV'], function (o) {
if (this.this$0._values[this.index] !== this.val ) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}var retval=this.val;
this.this$0._values[this.index]=o;
this.val=o;
return retval;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var e1=this;
var e2=o;
return (e1.getKey$() == null  ? e2.getKey$() == null  : this.this$0.strategy.equals$TT$TT(e1.getKey$(), e2.getKey$())) && (e1.getValue$() == null  ? e2.getValue$() == null  : e1.getValue$().equals$O(e2.getValue$())) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.getKey$() == null  ? 0 : this.getKey$().hashCode$()) ^ (this.getValue$() == null  ? 0 : this.getValue$().hashCode$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.key + "=" + this.val ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:48 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
