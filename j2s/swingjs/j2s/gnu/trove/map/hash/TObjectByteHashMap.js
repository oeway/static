(function(){var P$=Clazz.newPackage("gnu.trove.map.hash"),p$1={},I$=[[0,'gnu.trove.iterator.hash.TObjectHashIterator','java.lang.reflect.Array','gnu.trove.impl.hash.TObjectHash',['gnu.trove.map.hash.TObjectByteHashMap','.TByteValueCollection','.TObjectByteValueHashIterator'],'java.util.Arrays','StringBuilder','gnu.trove.impl.Constants',['gnu.trove.map.hash.TObjectByteHashMap','.KeyView'],['gnu.trove.map.hash.TObjectByteHashMap','.TByteValueCollection'],['gnu.trove.map.hash.TObjectByteHashMap','.TObjectByteHashIterator'],'gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectByteHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TObjectHash', ['gnu.trove.map.TObjectByteMap', 'java.io.Externalizable']);
C$.$classes$=[['KeyView',4],['MapBackedView',1026],['TByteValueCollection',0],['TObjectByteHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PUT_ALL_PROC=((P$.TObjectByteHashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectByteHashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectByteProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['execute$TK$B','execute$'], function (key, value) {
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].put$TK$B.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [key, ($b$[0] = value, $b$[0])]);
return true;
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TObjectByteHashMap$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['B',['no_entry_value'],'O',['PUT_ALL_PROC','gnu.trove.procedure.TObjectByteProcedure','_values','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(7).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(7).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(7).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$B', function (initialCapacity, loadFactor, noEntryValue) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = noEntryValue, $b$[0]);
if (this.no_entry_value != 0) {
$I$(5).fill$BA$B(this._values, ($b$[0] = this.no_entry_value, $b$[0]));
}}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectByteMap', function (map) {
C$.c$$I$F$B.apply(this, [map.size$(), 0.5, ($b$[0] = map.getNoEntryValue$(), $b$[0])]);
if (Clazz.instanceOf(map, "gnu.trove.map.hash.TObjectByteHashMap")) {
var hashmap=map;
this._loadFactor=hashmap._loadFactor;
this.no_entry_value=($b$[0] = hashmap.no_entry_value, $b$[0]);
if (this.no_entry_value != 0) {
$I$(5).fill$BA$B(this._values, ($b$[0] = this.no_entry_value, $b$[0]));
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.putAll$gnu_trove_map_TObjectByteMap(map);
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
this._set=Clazz.array(java.lang.Object, [newCapacity]);
$I$(5).fill$OA$O(this._set, $I$(3).FREE);
this._values=Clazz.array(Byte.TYPE, [newCapacity]);
$I$(5).fill$BA$B(this._values, ($b$[0] = this.no_entry_value, $b$[0]));
for (var i=oldCapacity; i-- > 0; ) {
if (oldKeys[i] !== $I$(3).FREE  && oldKeys[i] !== $I$(3).REMOVED  ) {
var o=oldKeys[i];
var index=this.insertKey$TT(o);
if (index < 0) {
this.throwObjectContractViolation$O$O(this._set[(-index - 1)], o);
}this._set[index]=o;
this._values[index]=(oldVals[i]|0);
}}
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.no_entry_value, $b$[0];
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this.contains$O(key);
});

Clazz.newMeth(C$, 'containsValue$B', function (val) {
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
return $b$[0] = index < 0 ? (this.no_entry_value|0) : (this._values[index]|0), $b$[0];
});

Clazz.newMeth(C$, ['put$TK$B'], function (key, value) {
var index=this.insertKey$TT(key);
return $b$[0] = p$1.doPut$B$I.apply(this, [(value|0), index]), $b$[0];
});

Clazz.newMeth(C$, ['putIfAbsent$TK$B'], function (key, value) {
var index=this.insertKey$TT(key);
if (index < 0) return $b$[0] = this._values[-index - 1], $b$[0];
return $b$[0] = p$1.doPut$B$I.apply(this, [(value|0), index]), $b$[0];
});

Clazz.newMeth(C$, 'doPut$B$I', function (value, index) {
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

Clazz.newMeth(C$, 'remove$O', function (key) {
var prev=($b$[0] = this.no_entry_value, $b$[0]);
var index=this.index$O(key);
if (index >= 0) {
prev=($b$[0] = this._values[index], $b$[0]);
this.removeAt$I(index);
}return $b$[0] = prev, $b$[0];
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._values[index]=(this.no_entry_value|0);
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
var set=map.entrySet$();
for (var entry, $entry = set.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.put$TK$B(entry.getKey$(), (entry.getValue$()).valueOf());
}
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TObjectByteMap', function (map) {
map.forEachEntry$gnu_trove_procedure_TObjectByteProcedure(this.PUT_ALL_PROC);
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
$I$(5).fill$OA$I$I$O(this._set, 0, this._set.length, $I$(3).FREE);
$I$(5).fill$BA$I$I$B(this._values, 0, this._values.length, ($b$[0] = this.no_entry_value, $b$[0]));
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
var vals=Clazz.array(Byte.TYPE, [this.size$()]);
var v=this._values;
var keys=this._set;
for (var i=v.length, j=0; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
vals[j++]=(v[i]|0);
}}
return vals;
});

Clazz.newMeth(C$, 'values$BA', function (array) {
var size=this.size$();
if (array.length < size) {
array=Clazz.array(Byte.TYPE, [size]);
}var v=this._values;
var keys=this._set;
for (var i=v.length, j=0; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED  ) {
array[j++]=(v[i]|0);
}}
if (array.length > size) {
array[size]=(this.no_entry_value|0);
}return array;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_(1,{K:"Object"},$I$(10,1).c$$gnu_trove_map_hash_TObjectByteHashMap, [this, null, this]);
});

Clazz.newMeth(C$, ['increment$TK'], function (key) {
return this.adjustValue$TK$B(key, ($b$[0] = 1, $b$[0]));
});

Clazz.newMeth(C$, ['adjustValue$TK$B'], function (key, amount) {
var index=this.index$O(key);
if (index < 0) {
return false;
} else {
this._values[$k$=index]=(this._values[$k$]+(amount)|0);
return true;
}});

Clazz.newMeth(C$, ['adjustOrPutValue$TK$B$B'], function (key, adjust_amount, put_amount) {
var index=this.insertKey$TT(key);
var isNewMapping;
var newValue;
if (index < 0) {
index=-index - 1;
newValue=($b$[0] = (this._values[$k$=index]=(this._values[$k$]+(adjust_amount)|0)), $b$[0]);
isNewMapping=false;
} else {
newValue=($b$[0] = (this._values[index]=(put_amount|0)), $b$[0]);
isNewMapping=true;
}if (isNewMapping) {
this.postInsertHook$Z(this.consumeFreeSlot);
}return $b$[0] = newValue, $b$[0];
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TObjectProcedure', function (procedure) {
return this.forEach$gnu_trove_procedure_TObjectProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TByteProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(($b$[0] = values[i], $b$[0])) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectByteProcedure', function (procedure) {
var keys=this._set;
var values=this._values;
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], ($b$[0] = values[i], $b$[0])) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectByteProcedure', function (procedure) {
var modified=false;
var keys=this._set;
var values=this._values;
this.tempDisableAutoCompaction$();
try {
for (var i=keys.length; i-- > 0; ) {
if (keys[i] !== $I$(3).FREE  && keys[i] !== $I$(3).REMOVED   && !procedure.execute$(keys[i], ($b$[0] = values[i], $b$[0])) ) {
this.removeAt$I(i);
modified=true;
}}
} finally {
this.reenableAutoCompaction$Z(true);
}
return modified;
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
var keys=this._set;
var values=this._values;
for (var i=values.length; i-- > 0; ) {
if (keys[i] != null  && keys[i] !== $I$(3).REMOVED  ) {
values[i]=($function.execute$((values[i]|0))|0);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.map.TObjectByteMap"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}try {
var iter=this.iterator$();
while (iter.hasNext$()){
iter.advance$();
var key=iter.key$();
var value=($b$[0] = iter.value$(), $b$[0]);
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
hashcode+=$I$(11).hash$I(values[i]) ^ (keys[i] == null  ? 0 : keys[i].hashCode$());
}}
return hashcode;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeByte$I(this.no_entry_value);
out.writeInt$I(this._size);
for (var i=this._set.length; i-- > 0; ) {
if (this._set[i] !== $I$(3).REMOVED  && this._set[i] !== $I$(3).FREE  ) {
out.writeObject$O(this._set[i]);
out.writeByte$I(this._values[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_value=($b$[0] = $in.readByte$(), $b$[0]);
var size=$in.readInt$();
this.setUp$I(size);
while (size-- > 0){
var key=$in.readObject$();
var val=($b$[0] = $in.readByte$(), $b$[0]);
this.put$TK$B(key, ($b$[0] = val, $b$[0]));
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.forEachEntry$gnu_trove_procedure_TObjectByteProcedure(((P$.TObjectByteHashMap$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectByteHashMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TObjectByteProcedure', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first']]]

Clazz.newMeth(C$, ['execute$TK$B','execute$'], function (key, value) {
if (this.first) this.first=false;
 else this.$finals$.buf.append$S(",");
this.$finals$.buf.append$O(key).append$S("=").append$I(value);
return true;
});
})()
), Clazz.new_(P$.TObjectByteHashMap$2.$init$, [this, {buf:buf}])));
buf.append$S("}");
return buf.toString();
});
var $b$ = new Int8Array(1);
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectByteHashMap, "KeyView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['gnu.trove.map.hash.TObjectByteHashMap','.MapBackedView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_impl_hash_TObjectHash,[this.b$['gnu.trove.map.hash.TObjectByteHashMap']]);
});

Clazz.newMeth(C$, ['removeElement$TK','removeElement$TE'], function (key) {
return this.this$0.no_entry_value != this.b$['gnu.trove.map.hash.TObjectByteHashMap'].remove$O.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [key]);
});

Clazz.newMeth(C$, ['containsElement$TK','containsElement$TE'], function (key) {
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].contains$O.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [key]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectByteHashMap, "MapBackedView", function(){
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
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], []);
});

Clazz.newMeth(C$, ['add$TE'], function (obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].size$.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], []);
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
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].isEmpty$.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], []);
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
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectByteHashMap, "TByteValueCollection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.TByteCollection');
C$.$classes$=[['TObjectByteValueHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(4,1), [this, null]);
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
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].containsValue$B.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [($b$[0] = entry, $b$[0])]);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].values$.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], []);
});

Clazz.newMeth(C$, 'toArray$BA', function (dest) {
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].values$BA.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [dest]);
});

Clazz.newMeth(C$, 'add$B', function (entry) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$B', function (entry) {
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=values.length; i-- > 0; ) {
if ((set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED  ) && entry == values[i] ) {
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Byte")) {
var ele=($b$[0] = (element).byteValue$(), $b$[0]);
if (!this.b$['gnu.trove.map.hash.TObjectByteHashMap'].containsValue$B.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [($b$[0] = ele, $b$[0])])) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TByteCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
if (!this.b$['gnu.trove.map.hash.TObjectByteHashMap'].containsValue$B.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [($b$[0] = iter.next$(), $b$[0])])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$BA', function (array) {
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (!this.b$['gnu.trove.map.hash.TObjectByteHashMap'].containsValue$B.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [($b$[0] = element, $b$[0])])) {
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
$I$(5).sort$BA(array);
var values=this.this$0._values;
var set=this.this$0._set;
for (var i=set.length; i-- > 0; ) {
if (set[i] !== $I$(3).FREE  && set[i] !== $I$(3).REMOVED   && ($I$(5).binarySearch$BA$B(array, ($b$[0] = values[i], $b$[0])) < 0) ) {
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [i]);
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
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].clear$.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], []);
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.b$['gnu.trove.map.hash.TObjectByteHashMap'].forEachValue$gnu_trove_procedure_TByteProcedure.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [procedure]);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(6,1).c$$S,["{"]);
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].forEachValue$gnu_trove_procedure_TByteProcedure.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [((P$.TObjectByteHashMap$TByteValueCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectByteHashMap$TByteValueCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.procedure.TByteProcedure', 1);

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
), Clazz.new_(P$.TObjectByteHashMap$TByteValueCollection$1.$init$, [this, {buf:buf}]))]);
buf.append$S("}");
return buf.toString();
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectByteHashMap.TByteValueCollection, "TObjectByteValueHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.iterator.TByteIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._hash=this.b$['gnu.trove.map.hash.TObjectByteHashMap'];
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
return $b$[0] = this.b$['gnu.trove.map.hash.TObjectByteHashMap']._values[this._index], $b$[0];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this.b$['gnu.trove.map.hash.TObjectByteHashMap'].removeAt$I.apply(this.b$['gnu.trove.map.hash.TObjectByteHashMap'], [this._index]);
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
}var set=this.b$['gnu.trove.map.hash.TObjectByteHashMap']._set;
var i=this._index;
while (i-- > 0 && (set[i] === $I$(3).FREE  || set[i] === $I$(3).REMOVED  ) ){
}
return i;
});
var $b$ = new Int8Array(1);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TObjectByteHashMap, "TObjectByteHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.iterator.hash.TObjectHashIterator', 'gnu.trove.iterator.TObjectByteIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.hash.TObjectByteHashMap']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_hash_TObjectByteHashMap', function (map) {
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
return $b$[0] = this._map._values[this._index], $b$[0];
});

Clazz.newMeth(C$, 'setValue$B', function (val) {
var old=($b$[0] = this.value$(), $b$[0]);
this._map._values[this._index]=(val|0);
return $b$[0] = old, $b$[0];
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:50 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
