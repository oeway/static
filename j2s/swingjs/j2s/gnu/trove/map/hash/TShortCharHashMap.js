(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,['gnu.trove.map.hash.TShortCharHashMap','.TShortCharKeyHashIterator'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder',['gnu.trove.map.hash.TShortCharHashMap','.TShortCharValueHashIterator'],['gnu.trove.map.hash.TShortCharHashMap','.TKeyView'],['gnu.trove.map.hash.TShortCharHashMap','.TValueView'],['gnu.trove.map.hash.TShortCharHashMap','.TShortCharHashIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TShortCharHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TShortCharHash', ['gnu.trove.map.TShortCharMap', 'java.io.Externalizable']);
C$.$classes$=[['TKeyView',4],['TValueView',4],['TShortCharKeyHashIterator',0],['TShortCharValueHashIterator',0],['TShortCharHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_values','char[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$H$C', function (initialCapacity, loadFactor, noEntryKey, noEntryValue) {
;C$.superclazz.c$$I$F$H$C.apply(this,[initialCapacity, loadFactor, noEntryKey, noEntryValue]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA$CA', function (keys, values) {
;C$.superclazz.c$$I.apply(this,[Math.max(keys.length, values.length)]);C$.$init$.apply(this);
var size=Math.min(keys.length, values.length);
for (var i=0; i < size; i++) {
this.put$H$C(keys[i], values[i]);
}
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TShortCharMap', function (map) {
;C$.superclazz.c$$I.apply(this,[map.size$()]);C$.$init$.apply(this);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TShortCharHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_key=hashmap.no_entry_key;
this.no_entry_value=hashmap.no_entry_value;
if (this.no_entry_key != 0) {
$I$(2).fill$HA$H(this._set, this.no_entry_key);
}if (this.no_entry_value != "\u0000") {
$I$(2).fill$CA$C(this._values, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TShortCharMap(map);
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
var oldStates=this._states;
this._set=Clazz.array(Short.TYPE, [newCapacity]);
this._values=Clazz.array(Character.TYPE, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldKeys[i];
var index=this.insertKey$H(o);
this._values[index]=oldVals[i];
}}
});

Clazz.newMeth(C$, 'put$H$C', function (key, value) {
var index=this.insertKey$H(key);
return p$1.doPut$H$C$I.apply(this, [key, value, index]);
});

Clazz.newMeth(C$, 'putIfAbsent$H$C', function (key, value) {
var index=this.insertKey$H(key);
if (index < 0) return this._values[-index - 1];
return p$1.doPut$H$C$I.apply(this, [key, value, index]);
});

Clazz.newMeth(C$, 'doPut$H$C$I', function (key, value, index) {
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
this.put$H$C(entry.getKey$().shortValue$(), entry.getValue$().charValue$());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TShortCharMap', function (map) {
this.ensureCapacity$I(map.size$());
var iter=map.iterator$();
while (iter.hasNext$()){
iter.advance$();
this.put$H$C(iter.key$(), iter.value$());
}
});

Clazz.newMeth(C$, 'get$H', function (key) {
var index=this.index$H(key);
return index < 0 ? this.no_entry_value : this._values[index];
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(2).fill$HA$I$I$H(this._set, 0, this._set.length, this.no_entry_key);
$I$(2).fill$CA$I$I$C(this._values, 0, this._values.length, this.no_entry_value);
$I$(2).fill$BA$I$I$B(this._states, 0, this._states.length, ($b$[0] = 0, $b$[0]));
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this._size;
});

Clazz.newMeth(C$, 'remove$H', function (key) {
var prev=this.no_entry_value;
var index=this.index$H(key);
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
var keys=Clazz.array(Short.TYPE, [this.size$()]);
var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
keys[j++]=k[i];
}}
return keys;
});

Clazz.newMeth(C$, 'keys$HA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Short.TYPE, [size]);
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
var vals=Clazz.array(Character.TYPE, [this.size$()]);
var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
vals[j++]=v[i];
}}
return vals;
});

Clazz.newMeth(C$, 'values$CA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Character.TYPE, [size]);
}var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
array[j++]=v[i];
}}
return array;
});

Clazz.newMeth(C$, 'containsValue$C', function (val) {
var states=this._states;
var vals=this._values;
for (var i=vals.length; i-- > 0; ) {
if (states[i] == 1 && val == vals[i] ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsKey$H', function (key) {
return this.contains$H(key);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8,1).c$$gnu_trove_map_hash_TShortCharHashMap, [this, null, this]);
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TShortProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TShortProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TCharProcedure', function (procedure) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TShortCharProcedure', function (procedure) {
var states=this._states;
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TCharFunction', function ($function) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TShortCharProcedure', function (procedure) {
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

Clazz.newMeth(C$, 'increment$H', function (key) {
return this.adjustValue$H$C(key, "\u0001");
});

Clazz.newMeth(C$, 'adjustValue$H$C', function (key, amount) {
var index=this.index$H(key);
if (index < 0) {
return false;
} else {
this._values[$k$=index] = String.fromCharCode((this._values[$k$]).$c()+ (amount));
return true;
}});

Clazz.newMeth(C$, 'adjustOrPutValue$H$C$C', function (key, adjust_amount, put_amount) {
var index=this.insertKey$H(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=(this._values[$k$=index] = String.fromCharCode((this._values[$k$]).$c()+ (adjust_amount)));
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
if (!(Clazz.instanceOf(other, "gnu.trove.map.TShortCharMap"))) {
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
var that_value=that.get$H(key);
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
hashcode+=$I$(3).hash$I(this._set[i]) ^ $I$(3).hash$I(this._values[i].$c());
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TShortCharProcedure(((P$.TShortCharHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TShortCharHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TShortCharProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$H$C','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(", ");
this.$finals$.buf.append$I(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$C(value);
return true;
});
})()
), Clazz.new_(P$.TShortCharHashMap$1.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeShort$I(this._set[i]);
out.writeChar$I(this._values[i].$c());
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readShort$();
var val=$in.readChar$();
this.put$H$C(key, val);
}
});
var $b$ = new Int8Array(1);
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.TShortCharHashMap, "TKeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.set.TShortSet');

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

Clazz.newMeth(C$, 'contains$H', function (entry) {
return this.this$0.contains$H.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.keys$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$HA', function (dest) {
return this.this$0.keys$HA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$H', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$H', function (entry) {
return this.this$0.no_entry_value != this.this$0.remove$H.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Short")) {
var ele=(element).shortValue$();
if (!this.this$0.containsKey$H.apply(this.this$0, [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TShortCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsKey$H.apply(this.this$0, [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$HA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.contains$H.apply(this.this$0, [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TShortCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$HA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Short.valueOf$H(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TShortCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$H(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$HA', function (array) {
var changed=false;
$I$(2).sort$HA(array);
var set=this.this$0._set;
var states=this.this$0._states;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$HA$H(array, set[i]) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Short")) {
var c=(element).shortValue$();
if (this.remove$H(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TShortCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$H(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$HA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$H(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TShortProcedure', function (procedure) {
return this.this$0.forEachKey$gnu_trove_procedure_TShortProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TShortSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (!that.contains$H(this.this$0._set[i])) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
hashcode+=$I$(3).hash$I(this.this$0._set[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.this$0.forEachKey$gnu_trove_procedure_TShortProcedure.apply(this.this$0, [((P$.TShortCharHashMap$TKeyView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TShortCharHashMap$TKeyView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TShortProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$H','execute$'], function (key) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$I(key);
return true;
});
})()
), Clazz.new_(P$.TShortCharHashMap$TKeyView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TShortCharHashMap, "TValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TCharCollection');

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

Clazz.newMeth(C$, 'contains$C', function (entry) {
return this.this$0.containsValue$C.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.values$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$CA', function (dest) {
return this.this$0.values$CA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$C', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$C', function (entry) {
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
if (Clazz.instanceOf(element, "java.lang.Character")) {
var ele=(element).charValue$();
if (!this.this$0.containsValue$C.apply(this.this$0, [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TCharCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsValue$C.apply(this.this$0, [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$CA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.containsValue$C.apply(this.this$0, [element])) {
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
$I$(2).sort$CA(array);
var values=this.this$0._values;
var states=this.this$0._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$CA$C(array, values[i]) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
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
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TCharProcedure', function (procedure) {
return this.this$0.forEachValue$gnu_trove_procedure_TCharProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.this$0.forEachValue$gnu_trove_procedure_TCharProcedure.apply(this.this$0, [((P$.TShortCharHashMap$TValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TShortCharHashMap$TValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TCharProcedure', 1);

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
), Clazz.new_(P$.TShortCharHashMap$TValueView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TShortCharHashMap, "TShortCharKeyHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TShortIterator');

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
(function(){/*c*/var C$=Clazz.newClass(P$.TShortCharHashMap, "TShortCharValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TCharIterator');

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
(function(){/*c*/var C$=Clazz.newClass(P$.TShortCharHashMap, "TShortCharHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TShortCharIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TShortCharHashMap', function (map) {
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

Clazz.newMeth(C$, 'setValue$C', function (val) {
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:50 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
