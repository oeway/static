(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,'gnu.trove.iterator.hash.TObjectHashIterator','java.lang.reflect.Array','gnu.trove.impl.hash.TObjectHash',['gnu.trove.map.hash.TObjectFloatHashMap','.TFloatValueCollection','.TObjectFloatValueHashIterator'],'java.util.Arrays','StringBuilder','gnu.trove.impl.Constants',['gnu.trove.map.hash.TObjectFloatHashMap','.KeyView'],['gnu.trove.map.hash.TObjectFloatHashMap','.TFloatValueCollection'],['gnu.trove.map.hash.TObjectFloatHashMap','.TObjectFloatHashIterator'],'gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectFloatHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TObjectHash', ['gnu.trove.map.TObjectFloatMap', 'java.io.Externalizable']);
C$.$classes$=[['KeyView',4],['MapBackedView',1026],['TFloatValueCollection',0],['TObjectFloatHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PUT_ALL_PROC=((P$.TObjectFloatHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectFloatHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectFloatProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['execute$TK$F','execute$'], function (key, value) {
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].put$TK$F.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [key, value]);
return true;
});
})()
), Clazz.new_(P$.TObjectFloatHashMap$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['F',['no_entry_value'],'O',['PUT_ALL_PROC','gnu.trove.procedure.TObjectFloatProcedure','_values','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_FLOAT_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_FLOAT_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=$I$(7).DEFAULT_FLOAT_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F$F', function (initialCapacity, loadFactor, noEntryValue) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=noEntryValue;
if (this.no_entry_value != 0.0 ) {
$I$(5).fill$FA$F(this._values, this.no_entry_value);
}}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectFloatMap', function (map) {
C$.c$$I$F$F.apply(this, [map.size$(), 0.5, map.getNoEntryValue$()]);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TObjectFloatHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_value=hashmap.no_entry_value;
if (this.no_entry_value != 0.0 ) {
$I$(5).fill$FA$F(this._values, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TObjectFloatMap(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(Float.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldKeys=this._set;
var oldVals=this._values;
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(5).fill$OA$O(this._set, $I$(3).FREE);
this._values=Clazz.array(Float.TYPE, [newCapacity]);
$I$(5).fill$FA$F(this._values, this.no_entry_value);
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

Clazz.newMeth(C$, 'containsValue$F', function (val) {
var keys=this._set;
var vals=this._values;
for (var i=vals.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && val == vals[i]  ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var index=this.index$O(key);
return index < 0 ? this.no_entry_value : this._values[index];
});

Clazz.newMeth(C$, ['put$TK$F'], function (key, value) {
var index=this.insertKey$TT(key);
return p$1.doPut$F$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['putIfAbsent$TK$F'], function (key, value) {
var index=this.insertKey$TT(key);
if (index < 0) return this._values[-index - 1];
return p$1.doPut$F$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, 'doPut$F$I', function (value, index) {
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
this.put$TK$F(entry.getKey$(), (entry.getValue$()).valueOf());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TObjectFloatMap', function (map) {
map.forEachEntry$gnu_trove_procedure_TObjectFloatProcedure(this.PUT_ALL_PROC);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(5).fill$OA$I$I$O(this._set, 0, this._set.length, $I$(3).FREE);
$I$(5).fill$FA$I$I$F(this._values, 0, this._values.length, this.no_entry_value);
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
var vals=Clazz.array(Float.TYPE, [this.size$()]);
var v=this._values;
var keys=this._set;
for (var i=v.length, j=0; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
vals[j++]=v[i];
}}
return vals;
});

Clazz.newMeth(C$, 'values$FA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Float.TYPE, [size]);
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
return Clazz.new_(1,{K:"Object"},$I$(10,1).c$$gnu_trove_map_hash_TObjectFloatHashMap, [this, null, this]);
});

Clazz.newMeth(C$, ['increment$TK'], function (key) {
return this.adjustValue$TK$F(key, 1.0);
});

Clazz.newMeth(C$, ['adjustValue$TK$F'], function (key, amount) {
var index=this.index$O(key);
if (index < 0) {
return false;
} else {
this._values[index] += amount;
return true;
}});

Clazz.newMeth(C$, ['adjustOrPutValue$TK$F$F'], function (key, adjust_amount, put_amount) {
var index=this.insertKey$TT(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=(this._values[index] += adjust_amount);
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

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TFloatProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectFloatProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectFloatProcedure', function (procedure) {
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

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TFloatFunction', function ($function) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] != null  && keys[i] !== $I$(3).REMOVED  ) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TObjectFloatMap"))) {
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
if (value == this.no_entry_value ) {
if (!(that.get$O(key) == that.getNoEntryValue$()  && that.containsKey$O(key) )) {
return false;
}} else {
if (value != that.get$O(key) ) {
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
hashcode+=$I$(11).hash$F(values[i]) ^ (keys[i] == null  ? 0 : keys[i].hashCode$());
}}
return hashcode;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeFloat$F(this.no_entry_value);
out.writeInt$I(this._size);
for (var i=this._set.length; i-- > 0; ) {
if (this._set[i] !== $I$(3).REMOVED  && this._set[i] !== $I$(3).FREE  ) {
out.writeObject$O(this._set[i]);
out.writeFloat$F(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_value=$in.readFloat$();
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readObject$();
var val=$in.readFloat$();
this.put$TK$F(key, val);
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TObjectFloatProcedure(((P$.TObjectFloatHashMap$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectFloatHashMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectFloatProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$TK$F','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(",");
this.$finals$.buf.append$O(key).append$S("=").append$F(value);
return true;
});
})()
), Clazz.new_(P$.TObjectFloatHashMap$2.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectFloatHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TObjectFloatHashMap','.MapBackedView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TObjectHash,[this.b$['gnu.trove.map.hash.TObjectFloatHashMap']]);
});

Clazz.newMeth(C$, ['removeElement$TK','removeElement$TE'], function (key) {
return this.this$0.no_entry_value != this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].remove$O.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [key]) ;
});

Clazz.newMeth(C$, ['containsElement$TK','containsElement$TE'], function (key) {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].contains$O.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [key]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectFloatHashMap, "MapBackedView", function(){
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
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], []);
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
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], []);
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
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectFloatHashMap, "TFloatValueCollection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TFloatCollection');
C$.$classes$=[['TObjectFloatValueHashIterator',0]];

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

Clazz.newMeth(C$, 'contains$F', function (entry) {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].containsValue$F.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].values$.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$FA', function (dest) {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].values$FA.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [dest]);
});

Clazz.newMeth(C$, 'add$F', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$F', function (entry) {
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=values.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && entry == values[i]  ) {
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Float")) {
var ele=(element).floatValue$();
if (!this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].containsValue$F.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TFloatCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].containsValue$F.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$FA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].containsValue$F.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TFloatCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$FA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Float.valueOf$F(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TFloatCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$F(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$FA', function (array) {
var changed=false;
$I$(5).sort$FA(array);
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=set.length; i-- > 0; ) {
if (set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED   && ($I$(5).binarySearch$FA$F(array, values[i]) < 0) ) {
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Float")) {
var c=(element).floatValue$();
if (this.remove$F(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TFloatCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$F(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$FA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$F(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TFloatProcedure', function (procedure) {
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].forEachValue$gnu_trove_procedure_TFloatProcedure.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].forEachValue$gnu_trove_procedure_TFloatProcedure.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [((P$.TObjectFloatHashMap$TFloatValueCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectFloatHashMap$TFloatValueCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TFloatProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$F','execute$'], function (value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$F(value);
return true;
});
})()
), Clazz.new_(P$.TObjectFloatHashMap$TFloatValueCollection$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectFloatHashMap.TFloatValueCollection, "TObjectFloatValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.iterator.TFloatIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._hash=this.b$['gnu.trove.map.hash.TObjectFloatHashMap'];
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
return this.b$['gnu.trove.map.hash.TObjectFloatHashMap']._values[this._index];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.b$['gnu.trove.map.hash.TObjectFloatHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectFloatHashMap'], [this._index]);
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
}var set=this.b$['gnu.trove.map.hash.TObjectFloatHashMap']._set;
var i=this._index;
while (i-- > 0 && (set[i] === $I$(3).FREE  || set[i] === $I$(3).REMOVED  ) ){
}
return i;
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectFloatHashMap, "TObjectFloatHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.iterator.hash.TObjectHashIterator', 'gnu.trove.iterator.TObjectFloatIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TObjectFloatHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TObjectFloatHashMap', function (map) {
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

Clazz.newMeth(C$, 'setValue$F', function (val) {
var old=this.value$();
this._map._values[this._index]=val;
return old;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:50 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
