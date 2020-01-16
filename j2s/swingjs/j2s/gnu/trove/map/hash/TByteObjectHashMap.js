(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,['gnu.trove.map.hash.TByteObjectHashMap','.KeyView','.TByteHashIterator'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder',['gnu.trove.map.hash.TByteObjectHashMap','.ValueView','.TByteObjectValueHashIterator'],'java.lang.reflect.Array','gnu.trove.impl.Constants',['gnu.trove.map.hash.TByteObjectHashMap','.KeyView'],['gnu.trove.map.hash.TByteObjectHashMap','.ValueView'],['gnu.trove.map.hash.TByteObjectHashMap','.TByteObjectHashIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TByteObjectHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TByteHash', ['gnu.trove.map.TByteObjectMap', 'java.io.Externalizable']);
C$.$classes$=[['KeyView',0],['ValueView',4],['MapBackedView',1026],['TByteObjectHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PUT_ALL_PROC=((P$.TByteObjectHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteObjectHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TByteObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['execute$B$TV','execute$','execute$B$TT'], function (key, value) {
this.b$['gnu.trove.map.hash.TByteObjectHashMap'].put$B$TV.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = key, $b$[0]), value]);
return true;
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TByteObjectHashMap$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['B',['no_entry_key'],'O',['PUT_ALL_PROC','gnu.trove.procedure.TByteObjectProcedure','_values','_.V[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_key=($b$[0] = $I$(7).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=($b$[0] = $I$(7).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$B', function (initialCapacity, loadFactor, noEntryKey) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=($b$[0] = noEntryKey, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TByteObjectMap', function (map) {
C$.c$$I$F$B.apply(this, [map.size$(), 0.5, ($b$[0] = map.getNoEntryKey$(), $b$[0])]);
this.putAll$gnu_trove_map_TByteObjectMap(map);
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
this._set=Clazz.array(Byte.TYPE, [newCapacity]);
this._values=Clazz.array(java.lang.Object, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=($b$[0] = oldKeys[i], $b$[0]);
var index=this.insertKey$B(($b$[0] = o, $b$[0]));
this._values[index]=oldVals[i];
}}
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return $b$[0] = this.no_entry_key, $b$[0];
});

Clazz.newMeth(C$, 'containsKey$B', function (key) {
return this.contains$B(($b$[0] = key, $b$[0]));
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

Clazz.newMeth(C$, 'get$B', function (key) {
var index=this.index$B(($b$[0] = key, $b$[0]));
return index < 0 ? null : this._values[index];
});

Clazz.newMeth(C$, ['put$B$TV'], function (key, value) {
var index=this.insertKey$B(($b$[0] = key, $b$[0]));
return p$1.doPut$TV$I.apply(this, [value, index]);
});

Clazz.newMeth(C$, ['putIfAbsent$B$TV'], function (key, value) {
var index=this.insertKey$B(($b$[0] = key, $b$[0]));
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

Clazz.newMeth(C$, 'remove$B', function (key) {
var prev=null;
var index=this.index$B(($b$[0] = key, $b$[0]));
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
this.put$B$TV((entry.getKey$()).valueOf(), entry.getValue$());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TByteObjectMap', function (map) {
map.forEachEntry$gnu_trove_procedure_TByteObjectProcedure(this.PUT_ALL_PROC);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(2).fill$BA$I$I$B(this._set, 0, this._set.length, ($b$[0] = this.no_entry_key, $b$[0]));
$I$(2).fill$BA$I$I$B(this._states, 0, this._states.length, ($b$[0] = 0, $b$[0]));
$I$(2).fill$OA$I$I$O(this._values, 0, this._values.length, null);
});

Clazz.newMeth(C$, 'keySet$', function () {
return Clazz.new_($I$(8,1), [this, null]);
});

Clazz.newMeth(C$, 'keys$', function () {
var keys=Clazz.array(Byte.TYPE, [this.size$()]);
var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
keys[j++]=(k[i]|0);
}}
return keys;
});

Clazz.newMeth(C$, 'keys$BA', function (dest) {
if (dest.length < this._size) {
dest=Clazz.array(Byte.TYPE, [this._size]);
}var k=this._set;
var states=this._states;
for (var i=k.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
dest[j++]=(k[i]|0);
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
return Clazz.new_(1,{V:"Object"},$I$(10,1).c$$gnu_trove_map_hash_TByteObjectHashMap, [this, null, this]);
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TByteProcedure(procedure);
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

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TByteObjectProcedure', function (procedure) {
var states=this._states;
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(($b$[0] = keys[i], $b$[0]), values[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TByteObjectProcedure', function (procedure) {
var modified=false;
var states=this._states;
var keys=this._set;
var values=this._values;
this.tempDisableAutoCompaction$();
try {
for (var i=keys.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(($b$[0] = keys[i], $b$[0]), values[i]) ) {
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
if (!(Clazz.instanceOf(other, "gnu.trove.map.TByteObjectMap"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}try {
var iter=this.iterator$();
while (iter.hasNext$()){
iter.advance$();
var key=($b$[0] = iter.key$(), $b$[0]);
var value=iter.value$();
if (value == null ) {
if (!(that.get$B(($b$[0] = key, $b$[0])) == null  && that.containsKey$B(($b$[0] = key, $b$[0])) )) {
return false;
}} else {
if (!value.equals$O(that.get$B(($b$[0] = key, $b$[0])))) {
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
hashcode+=$I$(3).hash$I(this._set[i]) ^ (values[i] == null  ? 0 : values[i].hashCode$());
}}
return hashcode;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeByte$I(this.no_entry_key);
out.writeInt$I(this._size);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeByte$I(this._set[i]);
out.writeObject$O(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_key=($b$[0] = $in.readByte$(), $b$[0]);
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=($b$[0] = $in.readByte$(), $b$[0]);
var val=$in.readObject$();
this.put$B$TV(($b$[0] = key, $b$[0]), val);
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TByteObjectProcedure(((P$.TByteObjectHashMap$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteObjectHashMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TByteObjectProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$B$O','execute$','executenull'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(",");
this.$finals$.buf.append$I(key);
this.$finals$.buf.append$S("=");
this.$finals$.buf.append$O(value);
return true;
});
})()
), Clazz.new_(P$.TByteObjectHashMap$2.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.set.TByteSet');
C$.$classes$=[['TByteHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.this$0.no_entry_key, $b$[0];
});

Clazz.newMeth(C$, 'size$', function () {
return this.this$0._size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.this$0._size == 0;
});

Clazz.newMeth(C$, 'contains$B', function (entry) {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].containsKey$B.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = entry, $b$[0])]);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TByteHash, [this, null, this.b$['gnu.trove.map.hash.TByteObjectHashMap']]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].keys$.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$BA', function (dest) {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].keys$BA.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [dest]);
});

Clazz.newMeth(C$, 'add$B', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$B', function (entry) {
return null != this.b$['gnu.trove.map.hash.TByteObjectHashMap'].remove$B.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = entry, $b$[0])]) ;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (!this.b$['gnu.trove.map.hash.TByteObjectHashMap'].containsKey$B.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = (element).byteValue$(), $b$[0])])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TByteCollection', function (collection) {
if (collection === this ) {
return true;
}var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.b$['gnu.trove.map.hash.TByteObjectHashMap'].containsKey$B.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = iter.next$(), $b$[0])])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$BA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.b$['gnu.trove.map.hash.TByteObjectHashMap'].containsKey$B.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [($b$[0] = element, $b$[0])])) {
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
var set=this.this$0._set;
var states=this.this$0._states;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(2).binarySearch$BA$B(array, ($b$[0] = set[i], $b$[0])) < 0) ) {
this.b$['gnu.trove.map.hash.TByteObjectHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [i]);
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
if (collection === this ) {
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
this.b$['gnu.trove.map.hash.TByteObjectHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].forEachKey$gnu_trove_procedure_TByteProcedure.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [procedure]);
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TByteSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (!that.contains$B(($b$[0] = this.this$0._set[i], $b$[0]))) {
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
var first=true;
for (var i=this.this$0._states.length; i-- > 0; ) {
if (this.this$0._states[i] == 1) {
if (first) first=false;
 else buf.append$S(",");
buf.append$I(this.this$0._set[i]);
}}
return buf.toString();
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap.KeyView, "TByteHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TByteIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$_hash','gnu.trove.impl.hash.TByteHash']]]

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TByteHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[hash]);C$.$init$.apply(this);
this.$_hash=hash;
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return $b$[0] = this.$_hash._set[this._index], $b$[0];
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap, "ValueView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TByteObjectHashMap','.MapBackedView']);
C$.$classes$=[['TByteObjectValueHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TByteObjectHashMap$ValueView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteObjectHashMap$ValueView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['gnu.trove.map.hash.TByteObjectHashMap','.ValueView','.TByteObjectValueHashIterator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['objectAtIndex$I','objectAtIndex$'], function (index) {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap']._values[index];
});
})()
), Clazz.new_($I$(5,1).c$$gnu_trove_map_hash_TByteObjectHashMap, [this, null, this.b$['gnu.trove.map.hash.TByteObjectHashMap']],P$.TByteObjectHashMap$ValueView$1));
});

Clazz.newMeth(C$, ['containsElement$TV','containsElement$TE'], function (value) {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].containsValue$O.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [value]);
});

Clazz.newMeth(C$, ['removeElement$TV','removeElement$TE'], function (value) {
var values=this.this$0._values;
var states=this.this$0._states;
for (var i=values.length; i-- > 0; ) {
if (states[i] == 1) {
if (value === values[i]  || (null != values[i]  && values[i].equals$O(value) ) ) {
this.b$['gnu.trove.map.hash.TByteObjectHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], [i]);
return true;
}}}
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap.ValueView, "TByteObjectValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TByteObjectHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TByteObjectHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'objectAtIndex$I', function (index) {
var states=this.b$['gnu.trove.map.hash.TByteObjectHashMap']._states;
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
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap, "MapBackedView", function(){
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
this.b$['gnu.trove.map.hash.TByteObjectHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], []);
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
return this.b$['gnu.trove.map.hash.TByteObjectHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TByteObjectHashMap'], []);
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
(function(){/*c*/var C$=Clazz.newClass(P$.TByteObjectHashMap, "TByteObjectHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TByteObjectIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TByteObjectHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TByteObjectHashMap', function (map) {
;C$.superclazz.c$$gnu_trove_impl_hash_TPrimitiveHash.apply(this,[map]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'advance$', function () {
this.moveToNextIndex$();
});

Clazz.newMeth(C$, 'key$', function () {
return $b$[0] = this._map._set[this._index], $b$[0];
});

Clazz.newMeth(C$, 'value$', function () {
return this._map._values[this._index];
});

Clazz.newMeth(C$, ['setValue$TV'], function (val) {
var old=this.value$();
this._map._values[this._index]=val;
return old;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:47 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
