(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,'gnu.trove.iterator.hash.TObjectHashIterator','java.lang.reflect.Array','gnu.trove.impl.hash.TObjectHash',['gnu.trove.map.hash.TObjectCharHashMap','.TCharValueCollection','.TObjectCharValueHashIterator'],'java.util.Arrays','StringBuilder','gnu.trove.impl.Constants',['gnu.trove.map.hash.TObjectCharHashMap','.KeyView'],['gnu.trove.map.hash.TObjectCharHashMap','.TCharValueCollection'],['gnu.trove.map.hash.TObjectCharHashMap','.TObjectCharHashIterator'],'gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectCharHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TObjectHash', ['gnu.trove.map.TObjectCharMap', 'java.io.Externalizable']);
C$.$classes$=[['KeyView',4],['MapBackedView',1026],['TCharValueCollection',0],['TObjectCharHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PUT_ALL_PROC=((P$.TObjectCharHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectCharHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectCharProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['execute$TK$C','execute$'], function (key, value) {
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].put$TK$C.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [key, value]);
return true;
});
})()
), Clazz.new_(P$.TObjectCharHashMap$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['C',['no_entry_value'],'O',['PUT_ALL_PROC','gnu.trove.procedure.TObjectCharProcedure','_values','char[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_CHAR_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_CHAR_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_CHAR_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F$C', function (initialCapacity, loadFactor, noEntryValue) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=noEntryValue;
if (this.no_entry_value != "\u0000") {
$I$(5).fill$CA$C(this._values, this.no_entry_value);
}}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectCharMap', function (map) {
C$.c$$I$F$C.apply(this, [map.size$(), 0.5, map.getNoEntryValue$()]);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TObjectCharHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_value=hashmap.no_entry_value;
if (this.no_entry_value != "\u0000") {
$I$(5).fill$CA$C(this._values, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TObjectCharMap(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(Character.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldKeys=this._set;
var oldVals=this._values;
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(5).fill$OA$O(this._set, $I$(3).FREE);
this._values=Clazz.array(Character.TYPE, [newCapacity]);
$I$(5).fill$CA$C(this._values, this.no_entry_value);
for (var i=oldCapacity; i-- > 0; ) {
if (oldKeys[i] !== $I$(3).FREE  && oldKeys[i] !== $I$(3).REMOVED  ) {
var o=oldKeys[i];
var index=this.insertKey$TT(o);
if (index < 0) {
this.throwObjectContractViolation$O$O(this._set[(-index - 1)], o);
}this._set[index]=o;
this._values[index]=oldVals[i];
}}
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.no_entry_value;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.contains$O(key);
});

Clazz.newMeth(C$, 'containsValue$C', function (val) {
var keys=this._set;
var vals=this._values;
for (var i=vals.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && val == vals[i] ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var index=this.index$O(key);
return index < 0 ? this.no_entry_value : this._values[index];
});

Clazz.newMeth(C$, ['put$TK$C'], function (key, value) {
var index=this.insertKey$TT(key);
return p$1.doPut$C$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['putIfAbsent$TK$C'], function (key, value) {
var index=this.insertKey$TT(key);
if (index < 0) return this._values[-index - 1];
return p$1.doPut$C$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, 'doPut$C$I', function (value, index) {
var previous=this.no_entry_value;
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

Clazz.newMeth(C$, 'remove$O', function (key) {
var prev=this.no_entry_value;
var index=this.index$O(key);
if (index >= 0) {
prev=this._values[index];
this.removeAt$I(index);
}return prev;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=this.no_entry_value;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
var set=map.entrySet$();
for (var entry, $entry = set.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.put$TK$C(entry.getKey$(), (entry.getValue$()).valueOf());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TObjectCharMap', function (map) {
map.forEachEntry$gnu_trove_procedure_TObjectCharProcedure(this.PUT_ALL_PROC);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(5).fill$OA$I$I$O(this._set, 0, this._set.length, $I$(3).FREE);
$I$(5).fill$CA$I$I$C(this._values, 0, this._values.length, this.no_entry_value);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(8,1), [this, null]);
});

Clazz.newMeth(C$, 'keys$', function () {
var keys=Clazz.array(java.lang.Object, [this.size$()]);
var k=this._set;
for (var i=k.length, j=0; i-- > 0; ) {
if (k[i] !== $I$(3).FREE  && k[i] !== $I$(3).REMOVED  ) {
keys[j++]=k[i];
}}
return keys;
});

Clazz.newMeth(C$, ['keys$TKA'], function (a) {
var size=this.size$();
if (a.length < size) {
a=Clazz.array(a.getClass$().getComponentType$(), size);
}var k=this._set;
for (var i=k.length, j=0; i-- > 0; ) {
if (k[i] !== $I$(3).FREE  && k[i] !== $I$(3).REMOVED  ) {
a[j++]=k[i];
}}
return a;
});

Clazz.newMeth(C$, 'valueCollection$', function () {
return Clazz.new_($I$(9,1), [this, null]);
});

Clazz.newMeth(C$, 'values$', function () {
var vals=Clazz.array(Character.TYPE, [this.size$()]);
var v=this._values;
var keys=this._set;
for (var i=v.length, j=0; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
vals[j++]=v[i];
}}
return vals;
});

Clazz.newMeth(C$, 'values$CA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Character.TYPE, [size]);
}var v=this._values;
var keys=this._set;
for (var i=v.length, j=0; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
array[j++]=v[i];
}}
if (array.length > size) {
array[size]=this.no_entry_value;
}return array;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_(1,{K:"Object"},$I$(10,1).c$$gnu_trove_map_hash_TObjectCharHashMap, [this, null, this]);
});

Clazz.newMeth(C$, ['increment$TK'], function (key) {
return this.adjustValue$TK$C(key, "\u0001");
});

Clazz.newMeth(C$, ['adjustValue$TK$C'], function (key, amount) {
var index=this.index$O(key);
if (index < 0) {
return false;
} else {
this._values[$k$=index] = String.fromCharCode((this._values[$k$]).$c()+ (amount));
return true;
}});

Clazz.newMeth(C$, ['adjustOrPutValue$TK$C$C'], function (key, adjust_amount, put_amount) {
var index=this.insertKey$TT(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=(this._values[$k$=index] = String.fromCharCode((this._values[$k$]).$c()+ (adjust_amount)));
isNewMapping=false;
} else {
newValue=(this._values[index]=put_amount);
isNewMapping=true;
}if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return newValue;
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TObjectProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TObjectProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TCharProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectCharProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectCharProcedure', function (procedure) {
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

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TCharFunction', function ($function) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] != null  && keys[i] !== $I$(3).REMOVED  ) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TObjectCharMap"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}try {
var iter=this.iterator$();
while (iter.hasNext$()){
iter.advance$();
var key=iter.key$();
var value=iter.value$();
if (value == this.no_entry_value) {
if (!(that.get$O(key) == that.getNoEntryValue$() && that.containsKey$O(key) )) {
return false;
}} else {
if (value != that.get$O(key)) {
return false;
}}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassCastException")){
} else {
throw ex;
}
}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
hashcode+=$I$(11).hash$I(values[i].$c()) ^ (keys[i] == null  ? 0 : keys[i].hashCode$());
}}
return hashcode;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeChar$I(this.no_entry_value.$c());
out.writeInt$I(this._size);
for (var i=this._set.length; i-- > 0; ) {
if (this._set[i] !== $I$(3).REMOVED  && this._set[i] !== $I$(3).FREE  ) {
out.writeObject$O(this._set[i]);
out.writeChar$I(this._values[i].$c());
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_value=$in.readChar$();
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readObject$();
var val=$in.readChar$();
this.put$TK$C(key, val);
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TObjectCharProcedure(((P$.TObjectCharHashMap$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectCharHashMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectCharProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$TK$C','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(",");
this.$finals$.buf.append$O(key).append$S("=").append$C(value);
return true;
});
})()
), Clazz.new_(P$.TObjectCharHashMap$2.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectCharHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TObjectCharHashMap','.MapBackedView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TObjectHash,[this.b$['gnu.trove.map.hash.TObjectCharHashMap']]);
});

Clazz.newMeth(C$, ['removeElement$TK','removeElement$TE'], function (key) {
return this.this$0.no_entry_value != this.b$['gnu.trove.map.hash.TObjectCharHashMap'].remove$O.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [key]);
});

Clazz.newMeth(C$, ['containsElement$TK','containsElement$TE'], function (key) {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].contains$O.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [key]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectCharHashMap, "MapBackedView", function(){
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
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], []);
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
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], []);
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

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectCharHashMap, "TCharValueCollection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TCharCollection');
C$.$classes$=[['TObjectCharValueHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.this$0.no_entry_value;
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0._size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this.this$0._size;
});

Clazz.newMeth(C$, 'contains$C', function (entry) {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].containsValue$C.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].values$.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$CA', function (dest) {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].values$CA.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [dest]);
});

Clazz.newMeth(C$, 'add$C', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$C', function (entry) {
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=values.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && entry == values[i] ) {
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Character")) {
var ele=(element).charValue$();
if (!this.b$['gnu.trove.map.hash.TObjectCharHashMap'].containsValue$C.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TCharCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.b$['gnu.trove.map.hash.TObjectCharHashMap'].containsValue$C.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$CA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.b$['gnu.trove.map.hash.TObjectCharHashMap'].containsValue$C.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TCharCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$CA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Character.valueOf$C(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TCharCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$C(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$CA', function (array) {
var changed=false;
$I$(5).sort$CA(array);
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=set.length; i-- > 0; ) {
if (set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED   && ($I$(5).binarySearch$CA$C(array, values[i]) < 0) ) {
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Character")) {
var c=(element).charValue$();
if (this.remove$C(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TCharCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$C(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$CA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$C(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TCharProcedure', function (procedure) {
return this.b$['gnu.trove.map.hash.TObjectCharHashMap'].forEachValue$gnu_trove_procedure_TCharProcedure.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].forEachValue$gnu_trove_procedure_TCharProcedure.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [((P$.TObjectCharHashMap$TCharValueCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectCharHashMap$TCharValueCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TCharProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$C','execute$'], function (value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$C(value);
return true;
});
})()
), Clazz.new_(P$.TObjectCharHashMap$TCharValueCollection$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectCharHashMap.TCharValueCollection, "TObjectCharValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.iterator.TCharIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._hash=this.b$['gnu.trove.map.hash.TObjectCharHashMap'];
}, 1);

C$.$fields$=[['I',['_expectedSize','_index'],'O',['_hash','gnu.trove.impl.hash.THash']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this._expectedSize=this._hash.size$();
this._index=this._hash.capacity$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextIndex$() >= 0;
});

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this.b$['gnu.trove.map.hash.TObjectCharHashMap']._values[this._index];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.b$['gnu.trove.map.hash.TObjectCharHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectCharHashMap'], [this._index]);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
this._expectedSize--;
});

Clazz.newMeth(C$, 'moveToNextIndex$', function () {
if ((this._index=this.nextIndex$()) < 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, 'nextIndex$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}var set=this.b$['gnu.trove.map.hash.TObjectCharHashMap']._set;
var i=this._index;
while (i-- > 0 && (set[i] === $I$(3).FREE  || set[i] === $I$(3).REMOVED  ) ){
}
return i;
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectCharHashMap, "TObjectCharHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.iterator.hash.TObjectHashIterator', 'gnu.trove.iterator.TObjectCharIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TObjectCharHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TObjectCharHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TObjectHash.apply(this,[map]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'advance$', function () {
this.moveToNextIndex$();
});

Clazz.newMeth(C$, 'key$', function () {
return this._map._set[this._index];
});

Clazz.newMeth(C$, 'value$', function () {
return this._map._values[this._index];
});

Clazz.newMeth(C$, 'setValue$C', function (val) {
var old=this.value$();
this._map._values[this._index]=val;
return old;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:50 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
