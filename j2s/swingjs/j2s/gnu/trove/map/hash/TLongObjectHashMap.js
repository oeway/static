(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,['gnu.trove.map.hash.TLongObjectHashMap','.KeyView','.TLongHashIterator'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder',['gnu.trove.map.hash.TLongObjectHashMap','.ValueView','.TLongObjectValueHashIterator'],'java.lang.reflect.Array','gnu.trove.impl.Constants',['gnu.trove.map.hash.TLongObjectHashMap','.KeyView'],['gnu.trove.map.hash.TLongObjectHashMap','.ValueView'],['gnu.trove.map.hash.TLongObjectHashMap','.TLongObjectHashIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLongObjectHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TLongHash', ['gnu.trove.map.TLongObjectMap', 'java.io.Externalizable']);
C$.$classes$=[['KeyView',0],['ValueView',4],['MapBackedView',1026],['TLongObjectHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PUT_ALL_PROC=((P$.TLongObjectHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongObjectHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TLongObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['execute$J$TV','execute$','execute$J$TT'], function (key, value) {
this.b$['gnu.trove.map.hash.TLongObjectHashMap'].put$J$TV.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [key, value]);
return true;
});
})()
), Clazz.new_(P$.TLongObjectHashMap$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['L',['no_entry_key'],'O',['PUT_ALL_PROC','gnu.trove.procedure.TLongObjectProcedure','_values','_.V[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_key=$I$(7).DEFAULT_LONG_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=$I$(7).DEFAULT_LONG_NO_ENTRY_VALUE;
}, 1);

Clazz.newMeth(C$, 'c$$I$F$J', function (initialCapacity, loadFactor, noEntryKey) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=noEntryKey;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TLongObjectMap', function (map) {
C$.c$$I$F$J.apply(this, [map.size$(), 0.5, map.getNoEntryKey$()]);
this.putAll$gnu_trove_map_TLongObjectMap(map);
}, 1);

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._values=Clazz.array(java.lang.Object, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldKeys=this._set;
var oldVals=this._values;
var oldStates=this._states;
this._set=Clazz.array(Long.TYPE, [newCapacity]);
this._values=Clazz.array(java.lang.Object, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldKeys[i];
var index=this.insertKey$J(o);
this._values[index]=oldVals[i];
}}
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return this.no_entry_key;
});

Clazz.newMeth(C$, 'containsKey$J', function (key) {
return this.contains$J(key);
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
var states=this._states;
var vals=this._values;
if (null == val ) {
for (var i=vals.length; i-- > 0; ) {
if (states[i] == 1 && null == vals[i]  ) {
return true;
}}
} else {
for (var i=vals.length; i-- > 0; ) {
if (states[i] == 1 && (val === vals[i]  || val.equals$O(vals[i]) ) ) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'get$J', function (key) {
var index=this.index$J(key);
return index < 0 ? null : this._values[index];
});

Clazz.newMeth(C$, ['put$J$TV'], function (key, value) {
var index=this.insertKey$J(key);
return p$1.doPut$TV$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['putIfAbsent$J$TV'], function (key, value) {
var index=this.insertKey$J(key);
if (index < 0) return this._values[-index - 1];
return p$1.doPut$TV$I.apply(this, [value, index]);
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

Clazz.newMeth(C$, 'remove$J', function (key) {
var prev=null;
var index=this.index$J(key);
if (index >= 0) {
prev=this._values[index];
this.removeAt$I(index);
}return prev;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=null;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
var set=map.entrySet$();
for (var entry, $entry = set.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.put$J$TV((entry.getKey$()).valueOf(), entry.getValue$());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TLongObjectMap', function (map) {
map.forEachEntry$gnu_trove_procedure_TLongObjectProcedure(this.PUT_ALL_PROC);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(2).fill$JA$I$I$J(this._set, 0, this._set.length, this.no_entry_key);
$I$(2).fill$BA$I$I$B(this._states, 0, this._states.length, ($b$[0] = 0, $b$[0]));
$I$(2).fill$OA$I$I$O(this._values, 0, this._values.length, null);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(8,1), [this, null]);
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

Clazz.newMeth(C$, 'keys$JA', function (dest) {
if (dest.length < this._size) {
dest=Clazz.array(Long.TYPE, [this._size]);
}var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
dest[j++]=k[i];
}}
return dest;
});

Clazz.newMeth(C$, 'valueCollection$', function () {
return Clazz.new_($I$(9,1), [this, null]);
});

Clazz.newMeth(C$, 'values$', function () {
var vals=Clazz.array(java.lang.Object, [this.size$()]);
var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
vals[j++]=v[i];
}}
return vals;
});

Clazz.newMeth(C$, ['values$TVA'], function (dest) {
if (dest.length < this._size) {
dest=Clazz.array(dest.getClass$().getComponentType$(), this._size);
}var v=this._values;
var states=this._states;
for (var i=v.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
dest[j++]=v[i];
}}
return dest;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_(1,{V:"Object"},$I$(10,1).c$$gnu_trove_map_hash_TLongObjectHashMap, [this, null, this]);
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TLongProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TObjectProcedure', function (procedure) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TLongObjectProcedure', function (procedure) {
var states=this._states;
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(keys[i], values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TLongObjectProcedure', function (procedure) {
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

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TObjectFunction', function ($function) {
var states=this._states;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
values[i]=$function.execute$(values[i]);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TLongObjectMap"))) {
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
if (value == null ) {
if (!(that.get$J(key) == null  && that.containsKey$J(key) )) {
return false;
}} else {
if (!value.equals$O(that.get$J(key))) {
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
var values=this._values;
var states=this._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
hashcode+=$I$(3).hash$J(this._set[i]) ^ (values[i] == null  ? 0 : values[i].hashCode$());
}}
return hashcode;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeLong$J(this.no_entry_key);
out.writeInt$I(this._size);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeLong$J(this._set[i]);
out.writeObject$O(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_key=$in.readLong$();
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readLong$();
var val=$in.readObject$();
this.put$J$TV(key, val);
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TLongObjectProcedure(((P$.TLongObjectHashMap$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongObjectHashMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TLongObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$J$O','execute$','executenull'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(",");
this.$finals$.buf.append$J(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$O(value);
return true;
});
})()
), Clazz.new_(P$.TLongObjectHashMap$2.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.set.TLongSet');
C$.$classes$=[['TLongHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.this$0.no_entry_key;
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0._size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.this$0._size == 0;
});

Clazz.newMeth(C$, 'contains$J', function (entry) {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].containsKey$J.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [entry]);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TLongHash, [this, null, this.b$['gnu.trove.map.hash.TLongObjectHashMap']]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].keys$.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$JA', function (dest) {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].keys$JA.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [dest]);
});

Clazz.newMeth(C$, 'add$J', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$J', function (entry) {
return null != this.b$['gnu.trove.map.hash.TLongObjectHashMap'].remove$J.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [entry]) ;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (!this.b$['gnu.trove.map.hash.TLongObjectHashMap'].containsKey$J.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [(element).longValue$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TLongCollection', function (collection) {
if (collection === this ) {
return true;
}var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.b$['gnu.trove.map.hash.TLongObjectHashMap'].containsKey$J.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [iter.next$()])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$JA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.b$['gnu.trove.map.hash.TLongObjectHashMap'].containsKey$J.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [element])) {
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
this.b$['gnu.trove.map.hash.TLongObjectHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [i]);
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
if (collection === this ) {
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
this.b$['gnu.trove.map.hash.TLongObjectHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].forEachKey$gnu_trove_procedure_TLongProcedure.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [procedure]);
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
var first=true;
for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (first) first=false;
 else buf.append$S(",");
buf.append$J(this.this$0._set[i]);
}}
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap.KeyView, "TLongHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TLongIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$_hash','gnu.trove.impl.hash.TLongHash']]]

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TLongHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[hash]);C$.$init$.apply(this);
this.$_hash=hash;
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this.$_hash._set[this._index];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap, "ValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TLongObjectHashMap','.MapBackedView']);
C$.$classes$=[['TLongObjectValueHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TLongObjectHashMap$ValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongObjectHashMap$ValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['gnu.trove.map.hash.TLongObjectHashMap','.ValueView','.TLongObjectValueHashIterator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['objectAtIndex$I','objectAtIndex$'], function (index) {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap']._values[index];
});
})()
), Clazz.new_($I$(5,1).c$$gnu_trove_map_hash_TLongObjectHashMap, [this, null, this.b$['gnu.trove.map.hash.TLongObjectHashMap']],P$.TLongObjectHashMap$ValueView$1));
});

Clazz.newMeth(C$, ['containsElement$TV','containsElement$TE'], function (value) {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].containsValue$O.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [value]);
});

Clazz.newMeth(C$, ['removeElement$TV','removeElement$TE'], function (value) {
var values=this.this$0._values;
var states=this.this$0._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
if (value === values[i]  || (null != values[i]  && values[i].equals$O(value) ) ) {
this.b$['gnu.trove.map.hash.TLongObjectHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], [i]);
return true;
}}}
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap.ValueView, "TLongObjectValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TLongObjectHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TLongObjectHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'objectAtIndex$I', function (index) {
var states=this.b$['gnu.trove.map.hash.TLongObjectHashMap']._states;
var value=this._map._values[index];
if (states[index] != 1) {
return null;
}return value;
});

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this._map._values[this._index];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap, "MapBackedView", function(){
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
this.b$['gnu.trove.map.hash.TLongObjectHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], []);
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
return this.b$['gnu.trove.map.hash.TLongObjectHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TLongObjectHashMap'], []);
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
(function(){/*c*/var C$=Clazz.newClass(P$.TLongObjectHashMap, "TLongObjectHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TLongObjectIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TLongObjectHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TLongObjectHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
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

Clazz.newMeth(C$, ['setValue$TV'], function (val) {
var old=this.value$();
this._map._values[this._index]=val;
return old;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:49 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
