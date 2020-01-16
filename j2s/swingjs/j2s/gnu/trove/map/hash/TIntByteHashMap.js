(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,['gnu.trove.map.hash.TIntByteHashMap','.TIntByteKeyHashIterator'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder',['gnu.trove.map.hash.TIntByteHashMap','.TIntByteValueHashIterator'],['gnu.trove.map.hash.TIntByteHashMap','.TKeyView'],['gnu.trove.map.hash.TIntByteHashMap','.TValueView'],['gnu.trove.map.hash.TIntByteHashMap','.TIntByteHashIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIntByteHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TIntByteHash', ['gnu.trove.map.TIntByteMap', 'java.io.Externalizable']);
C$.$classes$=[['TKeyView',4],['TValueView',4],['TIntByteKeyHashIterator',0],['TIntByteValueHashIterator',0],['TIntByteHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_values','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$I$B', function (initialCapacity, loadFactor, noEntryKey, noEntryValue) {
;C$.superclazz.c$$I$F$I$B.apply(this,[initialCapacity, loadFactor, noEntryKey, ($b$[0] = noEntryValue, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$IA$BA', function (keys, values) {
;C$.superclazz.c$$I.apply(this,[Math.max(keys.length, values.length)]);C$.$init$.apply(this);
var size=Math.min(keys.length, values.length);
for (var i=0; i < size; i++) {
this.put$I$B(keys[i], ($b$[0] = values[i], $b$[0]));
}
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TIntByteMap', function (map) {
;C$.superclazz.c$$I.apply(this,[map.size$()]);C$.$init$.apply(this);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TIntByteHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_key=hashmap.no_entry_key;
this.no_entry_value=($b$[0] = hashmap.no_entry_value, $b$[0]);
if (this.no_entry_key != 0) {
$I$(2).fill$IA$I(this._set, this.no_entry_key);
}if (this.no_entry_value != 0) {
$I$(2).fill$BA$B(this._values, ($b$[0] = this.no_entry_value, $b$[0]));
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TIntByteMap(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(Byte.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldKeys=this._set;
var oldVals=this._values;
var oldStates=this._states;
this._set=Clazz.array(Integer.TYPE, [newCapacity]);
this._values=Clazz.array(Byte.TYPE, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldKeys[i];
var index=this.insertKey$I(o);
this._values[index]=(oldVals[i]|0);
}}
});

Clazz.newMeth(C$, 'put$I$B', function (key, value) {
var index=this.insertKey$I(key);
return $b$[0] = p$1.doPut$I$B$I.apply(this, [key, (value|0), index]), $b$[0];
});

Clazz.newMeth(C$, 'putIfAbsent$I$B', function (key, value) {
var index=this.insertKey$I(key);
if (index < 0) return $b$[0] = this._values[-index - 1], $b$[0];
return $b$[0] = p$1.doPut$I$B$I.apply(this, [key, (value|0), index]), $b$[0];
});

Clazz.newMeth(C$, 'doPut$I$B$I', function (key, value, index) {
var previous=($b$[0] = this.no_entry_value, $b$[0]);
var isNewMapping=true;
if (index < 0) {
index=-index - 1;
previous=($b$[0] = this._values[index], $b$[0]);
isNewMapping=false;
}this._values[index]=(value|0);
if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return $b$[0] = previous, $b$[0];
}, p$1);

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
this.ensureCapacity$I(map.size$());
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.put$I$B(entry.getKey$().intValue$(), ($b$[0] = entry.getValue$().byteValue$(), $b$[0]));
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TIntByteMap', function (map) {
this.ensureCapacity$I(map.size$());
var iter=map.iterator$();
while (iter.hasNext$()){
iter.advance$();
this.put$I$B(iter.key$(), ($b$[0] = iter.value$(), $b$[0]));
}
});

Clazz.newMeth(C$, 'get$I', function (key) {
var index=this.index$I(key);
return $b$[0] = index < 0 ? (this.no_entry_value|0) : (this._values[index]|0), $b$[0];
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(2).fill$IA$I$I$I(this._set, 0, this._set.length, this.no_entry_key);
$I$(2).fill$BA$I$I$B(this._values, 0, this._values.length, ($b$[0] = this.no_entry_value, $b$[0]));
$I$(2).fill$BA$I$I$B(this._states, 0, this._states.length, ($b$[0] = 0, $b$[0]));
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this._size;
});

Clazz.newMeth(C$, 'remove$I', function (key) {
var prev=($b$[0] = this.no_entry_value, $b$[0]);
var index=this.index$I(key);
if (index >= 0) {
prev=($b$[0] = this._values[index], $b$[0]);
this.removeAt$I(index);
}return $b$[0] = prev, $b$[0];
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=(this.no_entry_value|0);
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(6,1), [this, null]);
});

Clazz.newMeth(C$, 'keys$', function () {
var keys=Clazz.array(Integer.TYPE, [this.size$()]);
var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
keys[j++]=k[i];
}}
return keys;
});

Clazz.newMeth(C$, 'keys$IA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Integer.TYPE, [size]);
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
var vals=Clazz.array(Byte.TYPE, [this.size$()]);
var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
vals[j++]=(v[i]|0);
}}
return vals;
});

Clazz.newMeth(C$, 'values$BA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Byte.TYPE, [size]);
}var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
array[j++]=(v[i]|0);
}}
return array;
});

Clazz.newMeth(C$, 'containsValue$B', function (val) {
var states=this._states;
var vals=this._values;
for (var i=vals.length; i-- > 0; ) {
if (states[i] == 1 && val == vals[i] ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsKey$I', function (key) {
return this.contains$I(key);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(8,1).c$$gnu_trove_map_hash_TIntByteHashMap, [this, null, this]);
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TIntProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TIntProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TByteProcedure', function (procedure) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(($b$[0] = values[i], $b$[0])) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TIntByteProcedure', function (procedure) {
var states=this._states;
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], ($b$[0] = values[i], $b$[0])) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
values[i]=($function.execute$((values[i]|0))|0);
}}
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TIntByteProcedure', function (procedure) {
var modified=false;
var states=this._states;
var keys=this._set;
var values=this._values;
this.tempDisableAutoCompaction$();
try {
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], ($b$[0] = values[i], $b$[0])) ) {
this.removeAt$I(i);
modified=true;
}}
} finally {
this.reenableAutoCompaction$Z(true);
}
return modified;
});

Clazz.newMeth(C$, 'increment$I', function (key) {
return this.adjustValue$I$B(key, ($b$[0] = 1, $b$[0]));
});

Clazz.newMeth(C$, 'adjustValue$I$B', function (key, amount) {
var index=this.index$I(key);
if (index < 0) {
return false;
} else {
this._values[$k$=index]=(this._values[$k$]+(amount)|0);
return true;
}});

Clazz.newMeth(C$, 'adjustOrPutValue$I$B$B', function (key, adjust_amount, put_amount) {
var index=this.insertKey$I(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=($b$[0] = (this._values[$k$=index]=(this._values[$k$]+(adjust_amount)|0)), $b$[0]);
isNewMapping=false;
} else {
newValue=($b$[0] = (this._values[index]=(put_amount|0)), $b$[0]);
isNewMapping=true;
}var previousState=($b$[0] = this._states[index], $b$[0]);
if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return $b$[0] = newValue, $b$[0];
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TIntByteMap"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}var values=this._values;
var states=this._states;
var this_no_entry_value=($b$[0] = this.getNoEntryValue$(), $b$[0]);
var that_no_entry_value=($b$[0] = that.getNoEntryValue$(), $b$[0]);
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
var key=this._set[i];
var that_value=($b$[0] = that.get$I(key), $b$[0]);
var this_value=($b$[0] = values[i], $b$[0]);
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
hashcode+=$I$(3).hash$I(this._set[i]) ^ $I$(3).hash$I(this._values[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TIntByteProcedure(((P$.TIntByteHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TIntByteHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TIntByteProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$I$B','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(", ");
this.$finals$.buf.append$I(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$I(value);
return true;
});
})()
), Clazz.new_(P$.TIntByteHashMap$1.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeInt$I(this._set[i]);
out.writeByte$I(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readInt$();
var val=($b$[0] = $in.readByte$(), $b$[0]);
this.put$I$B(key, ($b$[0] = val, $b$[0]));
}
});
var $b$ = new Int8Array(1);
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntByteHashMap, "TKeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.set.TIntSet');

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

Clazz.newMeth(C$, 'contains$I', function (entry) {
return this.this$0.contains$I.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.keys$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$IA', function (dest) {
return this.this$0.keys$IA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$I', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I', function (entry) {
return this.this$0.no_entry_value != this.this$0.remove$I.apply(this.this$0, [entry]);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Integer")) {
var ele=(element).intValue$();
if (!this.this$0.containsKey$I.apply(this.this$0, [ele])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TIntCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsKey$I.apply(this.this$0, [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$IA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.contains$I.apply(this.this$0, [element])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TIntCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$IA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Integer.valueOf$I(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TIntCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$I(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$IA', function (array) {
var changed=false;
$I$(2).sort$IA(array);
var set=this.this$0._set;
var states=this.this$0._states;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$IA$I(array, set[i]) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Integer")) {
var c=(element).intValue$();
if (this.remove$I(c)) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TIntCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.remove$I(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$IA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$I(array[i])) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TIntProcedure', function (procedure) {
return this.this$0.forEachKey$gnu_trove_procedure_TIntProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TIntSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (!that.contains$I(this.this$0._set[i])) {
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
this.this$0.forEachKey$gnu_trove_procedure_TIntProcedure.apply(this.this$0, [((P$.TIntByteHashMap$TKeyView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TIntByteHashMap$TKeyView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TIntProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$I','execute$'], function (key) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$I(key);
return true;
});
})()
), Clazz.new_(P$.TIntByteHashMap$TKeyView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntByteHashMap, "TValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TByteCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(5,1).c$$gnu_trove_impl_hash_TPrimitiveHash, [this, null, this.this$0]);
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.this$0.no_entry_value, $b$[0];
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0._size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this.this$0._size;
});

Clazz.newMeth(C$, 'contains$B', function (entry) {
return this.this$0.containsValue$B.apply(this.this$0, [($b$[0] = entry, $b$[0])]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.this$0.values$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'toArray$BA', function (dest) {
return this.this$0.values$BA.apply(this.this$0, [dest]);
});

Clazz.newMeth(C$, 'add$B', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$B', function (entry) {
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
if (Clazz.instanceOf(element, "java.lang.Byte")) {
var ele=($b$[0] = (element).byteValue$(), $b$[0]);
if (!this.this$0.containsValue$B.apply(this.this$0, [($b$[0] = ele, $b$[0])])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TByteCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.this$0.containsValue$B.apply(this.this$0, [($b$[0] = iter.next$(), $b$[0])])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$BA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.this$0.containsValue$B.apply(this.this$0, [($b$[0] = element, $b$[0])])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TByteCollection', function (collection) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$BA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$O(Byte.valueOf$B(($b$[0] = iter.next$(), $b$[0])))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TByteCollection', function (collection) {
if (this === collection ) {
return false;
}var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$B(($b$[0] = iter.next$(), $b$[0]))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$BA', function (array) {
var changed=false;
$I$(2).sort$BA(array);
var values=this.this$0._values;
var states=this.this$0._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$BA$B(array, ($b$[0] = values[i], $b$[0])) < 0) ) {
this.this$0.removeAt$I.apply(this.this$0, [i]);
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Byte")) {
var c=($b$[0] = (element).byteValue$(), $b$[0]);
if (this.remove$B(($b$[0] = c, $b$[0]))) {
changed=true;
}}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TByteCollection', function (collection) {
if (this === collection ) {
this.clear$();
return true;
}var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=($b$[0] = iter.next$(), $b$[0]);
if (this.remove$B(($b$[0] = element, $b$[0]))) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'removeAll$BA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.remove$B(($b$[0] = array[i], $b$[0]))) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'clear$', function () {
this.this$0.clear$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.this$0.forEachValue$gnu_trove_procedure_TByteProcedure.apply(this.this$0, [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.this$0.forEachValue$gnu_trove_procedure_TByteProcedure.apply(this.this$0, [((P$.TIntByteHashMap$TValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TIntByteHashMap$TValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TByteProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$B','execute$'], function (value) {
if (this.first) {
this.first=false;
} else {
this.$finals$.buf.append$S(", ");
}this.$finals$.buf.append$I(value);
return true;
});
})()
), Clazz.new_(P$.TIntByteHashMap$TValueView$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntByteHashMap, "TIntByteKeyHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TIntIterator');

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
(function(){/*c*/var C$=Clazz.newClass(P$.TIntByteHashMap, "TIntByteValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TByteIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TPrimitiveHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[hash]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return $b$[0] = this.this$0._values[this._index], $b$[0];
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
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntByteHashMap, "TIntByteHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TIntByteIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TIntByteHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'advance$', function () {
this.moveToNextIndex$();
});

Clazz.newMeth(C$, 'key$', function () {
return this.this$0._set[this._index];
});

Clazz.newMeth(C$, 'value$', function () {
return $b$[0] = this.this$0._values[this._index], $b$[0];
});

Clazz.newMeth(C$, 'setValue$B', function (val) {
var old=($b$[0] = this.value$(), $b$[0]);
this.this$0._values[this._index]=(val|0);
return $b$[0] = old, $b$[0];
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
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:49 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
