(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,['gnu.trove.map.hash.TLongLongHashMap','.TLongLongKeyHashIterator'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder',['gnu.trove.map.hash.TLongLongHashMap','.TLongLongValueHashIterator'],['gnu.trove.map.hash.TLongLongHashMap','.TKeyView'],['gnu.trove.map.hash.TLongLongHashMap','.TValueView'],['gnu.trove.map.hash.TLongLongHashMap','.TLongLongHashIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLongLongHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TLongLongHash', ['gnu.trove.map.TLongLongMap', 'java.io.Externalizable']);
C$.$classes$=[['TKeyView',4],['TValueView',4],['TLongLongKeyHashIterator',0],['TLongLongValueHashIterator',0],['TLongLongHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_values','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$J$J', function (initialCapacity, loadFactor, noEntryKey, noEntryValue) {
;C$.superclazz.c$$I$F$J$J.apply(this,[initialCapacity, loadFactor, noEntryKey, noEntryValue]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (keys, values) {
;C$.superclazz.c$$I.apply(this,[Math.max(keys.length, values.length)]);C$.$init$.apply(this);
var size=Math.min(keys.length, values.length);
for (var i=0; i < size; i++) {
this.put$J$J(keys[i], values[i]);
}
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TLongLongMap', function (map) {
;C$.superclazz.c$$I.apply(this,[map.size$()]);C$.$init$.apply(this);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TLongLongHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_key=hashmap.no_entry_key;
this.no_entry_value=hashmap.no_entry_value;
if (this.no_entry_key != 0) {
$I$(2).fill$JA$J(this._set, this.no_entry_key);
}if (this.no_entry_value != 0) {
$I$(2).fill$JA$J(this._values, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TLongLongMap(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(Long.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldKeys=this._set;
var oldVals=this._values;
var oldStates=this._states;
this._set=Clazz.array(Long.TYPE, [newCapacity]);
this._values=Clazz.array(Long.TYPE, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldKeys[i];
var index=this.insertKey$J(o);
this._values[index]=oldVals[i];
}}
});

Clazz.newMeth(C$, 'put$J$J', function (key, value) {
var index=this.insertKey$J(key);
return p$1.doPut$J$J$I.apply(this, [key, value, index]);
});

Clazz.newMeth(C$, 'putIfAbsent$J$J', function (key, value) {
var index=this.insertKey$J(key);
if (index < 0) return this._values[-index - 1];
return p$1.doPut$J$J$I.apply(this, [key, value, index]);
});

Clazz.newMeth(C$, 'doPut$J$J$I', function (key, value, index) {
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

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
this.ensureCapacity$I(map.size$());
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.put$J$J(entry.getKey$().longValue$(), entry.getValue$().longValue$());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TLongLongMap', function (map) {
this.ensureCapacity$I(map.size$());
var iter=map.iterator$();
while (iter.hasNext$()){
iter.advance$();
this.put$J$J(iter.key$(), iter.value$());
}
});

Clazz.newMeth(C$, 'get$J', function (key) {
var index=this.index$J(key);
return index < 0 ? this.no_entry_value : this._values[index];
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(2).fill$JA$I$I$J(this._set, 0, this._set.length, this.no_entry_key);
$I$(2).fill$JA$I$I$J(this._values, 0, this._values.length, this.no_entry_value);
$I$(2).fill$BA$I$I$B(this._states, 0, this._states.length, ($b$[0] = 0, $b$[0]));
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this._size;
});

Clazz.newMeth(C$, 'remove$J', function (key) {
var prev=this.no_entry_value;
var index=this.index$J(key);
if (index >= 0) {
prev=this._values[index];
this.removeAt$I(index);
}return prev;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=this.no_entry_value;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(6,1), [this, null]);
});

Clazz.newMeth(C$, 'keys$', function () {
var keys=Clazz.array(Long.TYPE, [this.size$()]);
var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
keys[j++]=k[i];
}}
return keys;
});

Clazz.newMeth(C$, 'keys$JA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Long.TYPE, [size]);
}var keys=this._set;
var states=this._states;
for (var i=keys.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
array[j++]=keys[i];
}}
return array;
});

Clazz.newMeth(C$, 'valueCollection$', function () {
return Clazz.new_($I$(7,1), [this, null]);
});

Clazz.newMeth(C$, 'values$', function () {
var vals=Clazz.array(Long.TYPE, [this.size$()]);
var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
vals[j++]=v[i];
}}
return vals;
});

Clazz.newMeth(C$, 'values$JA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Long.TYPE, [size]);
}var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
array[j++]=v[i];
}}
return array;
});

Clazz.newMeth(C$, 'containsValue$J', function (val) {
var states=this._states;
var vals=this._values;
for (var i=vals.length; i-- > 0; ) {
if (states[i] == 1 && val == vals[i] ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsKey$J', function (key) {
return this.contains$J(key);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8,1).c$$gnu_trove_map_hash_TLongLongHashMap, [this, null, this]);
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TLongProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TLongProcedure', function (procedure) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TLongLongProcedure', function (procedure) {
var states=this._states;
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TLongFunction', function ($function) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TLongLongProcedure', function (procedure) {
var modified=false;
var states=this._states;
var keys=this._set;
var values=this._values;
this.tempDisableAutoCompaction$();
try {
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], values[i]) ) {
this.removeAt$I(i);
modified=true;
}}
} finally {
this.reenableAutoCompaction$Z(true);
}
return modified;
});

Clazz.newMeth(C$, 'increment$J', function (key) {
return this.adjustValue$J$J(key, 1);
});

Clazz.newMeth(C$, 'adjustValue$J$J', function (key, amount) {
var index=this.index$J(key);
if (index < 0) {
return false;
} else {
this._values[index]+=amount;
return true;
}});

Clazz.newMeth(C$, 'adjustOrPutValue$J$J$J', function (key, adjust_amount, put_amount) {
var index=this.insertKey$J(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=(this._values[index]+=adjust_amount);
isNewMapping=false;
} else {
newValue=(this._values[index]=put_amount);
isNewMapping=true;
}var previousState=($b$[0] = this._states[index], $b$[0]);
if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return newValue;
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TLongLongMap"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}var values=this._values;
var states=this._states;
var this_no_entry_value=this.getNoEntryValue$();
var that_no_entry_value=that.getNoEntryValue$();
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
var key=this._set[i];
var that_value=that.get$J(key);
var this_value=values[i];
if ((this_value != that_value) && (this_value != this_no_entry_value) && (that_value != that_no_entry_value)  ) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
var states=this._states;
for (var i=this._values.length; i-- > 0; ) {
if (states[i] == 1) {
hashcode+=$I$(3).hash$J(this._set[i]) ^ $I$(3).hash$J(this._values[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TLongLongProcedure(((P$.TLongLongHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongLongHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TLongLongProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$J$J','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(", ");
this.$finals$.buf.append$J(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$J(value);
return true;
});
})()
), Clazz.new_(P$.TLongLongHashMap$1.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeLong$J(this._set[i]);
out.writeLong$J(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readLong$();
var val=$in.readLong$();
this.put$J$J(key, val);
}
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongLongHashMap, "TKeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.set.TLongSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TPrimitiveHash, [this, null, this.this$0]);
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.this$0.no_entry_key;
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0._size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this.this$0._size;
});

Clazz.newMeth(C$, 'contains$J', function (entry) {
return this.this$0.contains$J.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.keys$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$JA', function (dest) {
return this.this$0.keys$JA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$J', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$J', function (entry) {
return this.this$0.no_entry_value != this.this$0.remove$J.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Long")) {
var ele=(element).longValue$();
if (!this.this$0.containsKey$J.apply(this.this$0, [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TLongCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsKey$J.apply(this.this$0, [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$JA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.contains$J.apply(this.this$0, [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TLongCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$JA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Long.valueOf$J(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TLongCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$J(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$JA', function (array) {
var changed=false;
$I$(2).sort$JA(array);
var set=this.this$0._set;
var states=this.this$0._states;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$JA$J(array, set[i]) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Long")) {
var c=(element).longValue$();
if (this.remove$J(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TLongCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$J(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$JA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$J(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.this$0.forEachKey$gnu_trove_procedure_TLongProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TLongSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (!that.contains$J(this.this$0._set[i])) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
hashcode+=$I$(3).hash$J(this.this$0._set[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.this$0.forEachKey$gnu_trove_procedure_TLongProcedure.apply(this.this$0, [((P$.TLongLongHashMap$TKeyView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongLongHashMap$TKeyView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TLongProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$J','execute$'], function (key) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$J(key);
return true;
});
})()
), Clazz.new_(P$.TLongLongHashMap$TKeyView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongLongHashMap, "TValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TLongCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(5,1).c$$gnu_trove_impl_hash_TPrimitiveHash, [this, null, this.this$0]);
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

Clazz.newMeth(C$, 'contains$J', function (entry) {
return this.this$0.containsValue$J.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.values$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$JA', function (dest) {
return this.this$0.values$JA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$J', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$J', function (entry) {
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=values.length; i-- > 0; ) {
if ((set[i] != 0 && set[i] != 2 ) && entry == values[i] ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Long")) {
var ele=(element).longValue$();
if (!this.this$0.containsValue$J.apply(this.this$0, [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TLongCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsValue$J.apply(this.this$0, [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$JA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.containsValue$J.apply(this.this$0, [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TLongCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$JA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Long.valueOf$J(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TLongCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$J(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$JA', function (array) {
var changed=false;
$I$(2).sort$JA(array);
var values=this.this$0._values;
var states=this.this$0._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$JA$J(array, values[i]) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Long")) {
var c=(element).longValue$();
if (this.remove$J(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TLongCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$J(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$JA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$J(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.this$0.forEachValue$gnu_trove_procedure_TLongProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.this$0.forEachValue$gnu_trove_procedure_TLongProcedure.apply(this.this$0, [((P$.TLongLongHashMap$TValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongLongHashMap$TValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TLongProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$J','execute$'], function (value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$J(value);
return true;
});
})()
), Clazz.new_(P$.TLongLongHashMap$TValueView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongLongHashMap, "TLongLongKeyHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TLongIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TPrimitiveHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[hash]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this.this$0._set[this._index];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.this$0.removeAt$I.apply(this.this$0, [this._index]);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
this._expectedSize--;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongLongHashMap, "TLongLongValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TLongIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TPrimitiveHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[hash]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this.this$0._values[this._index];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.this$0.removeAt$I.apply(this.this$0, [this._index]);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
this._expectedSize--;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongLongHashMap, "TLongLongHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TLongLongIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TLongLongHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'advance$', function () {
this.moveToNextIndex$();
});

Clazz.newMeth(C$, 'key$', function () {
return this.this$0._set[this._index];
});

Clazz.newMeth(C$, 'value$', function () {
return this.this$0._values[this._index];
});

Clazz.newMeth(C$, 'setValue$J', function (val) {
var old=this.value$();
this.this$0._values[this._index]=val;
return old;
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.this$0.removeAt$I.apply(this.this$0, [this._index]);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
this._expectedSize--;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:49 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
