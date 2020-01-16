(function(){var P$=Clazz.newPackage("gnu.trove.set.hash"),I$=[[0,'java.util.Arrays',['gnu.trove.set.hash.TLongHashSet','.TLongHashIterator'],'gnu.trove.impl.HashFunctions','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLongHashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TLongHash', ['gnu.trove.set.TLongSet', 'java.io.Externalizable']);
C$.$classes$=[['TLongHashIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, load_factor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, load_factor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$J', function (initial_capacity, load_factor, no_entry_value) {
;C$.superclazz.c$$I$F$J.apply(this,[initial_capacity, load_factor, no_entry_value]);C$.$init$.apply(this);
if (no_entry_value != 0) {
$I$(1).fill$JA$J(this._set, no_entry_value);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (collection) {
C$.c$$I.apply(this, [Math.max(collection.size$(), 10)]);
this.addAll$java_util_Collection(collection);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_TLongCollection', function (collection) {
C$.c$$I.apply(this, [Math.max(collection.size$(), 10)]);
if (Clazz.instanceOf(collection, "gnu.trove.set.hash.TLongHashSet")) {
var hashset=collection;
this._loadFactor=hashset._loadFactor;
this.no_entry_value=hashset.no_entry_value;
if (this.no_entry_value != 0) {
$I$(1).fill$JA$J(this._set, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.addAll$gnu_trove_TLongCollection(collection);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (array) {
C$.c$$I.apply(this, [Math.max(array.length, 10)]);
this.addAll$JA(array);
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(2,1).c$$gnu_trove_impl_hash_TLongHash, [this, null, this]);
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=Clazz.array(Long.TYPE, [this.size$()]);
var set=this._set;
var states=this._states;
for (var i=states.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
result[j++]=set[i];
}}
return result;
});

Clazz.newMeth(C$, 'toArray$JA', function (dest) {
var set=this._set;
var states=this._states;
for (var i=states.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
dest[j++]=set[i];
}}
if (dest.length > this._size) {
dest[this._size]=this.no_entry_value;
}return dest;
});

Clazz.newMeth(C$, 'add$J', function (val) {
var index=this.insertKey$J(val);
if (index < 0) {
return false;
}this.postInsertHook$Z(this.consumeFreeSlot);
return true;
});

Clazz.newMeth(C$, 'remove$J', function (val) {
var index=this.index$J(val);
if (index >= 0) {
this.removeAt$I(index);
return true;
}return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Long")) {
var c=(element).longValue$();
if (!this.contains$J(c)) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TLongCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (!this.contains$J(element)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$JA', function (array) {
for (var i=array.length; i-- > 0; ) {
if (!this.contains$J(array[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
var e=element.longValue$();
if (this.add$J(e)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TLongCollection', function (collection) {
var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.add$J(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$JA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.add$J(array[i])) {
changed=true;
}}
return changed;
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
$I$(1).sort$JA(array);
var set=this._set;
var states=this._states;
this._autoCompactTemporaryDisable=true;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(1).binarySearch$JA$J(array, set[i]) < 0) ) {
this.removeAt$I(i);
changed=true;
}}
this._autoCompactTemporaryDisable=false;
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
var changed=false;
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
C$.superclazz.prototype.clear$.apply(this, []);
var set=this._set;
var states=this._states;
for (var i=set.length; i-- > 0; ) {
set[i]=this.no_entry_value;
states[i]=(0|0);
}
});

Clazz.newMeth(C$, 'rehash$I', function (newCapacity) {
var oldCapacity=this._set.length;
var oldSet=this._set;
var oldStates=this._states;
this._set=Clazz.array(Long.TYPE, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldSet[i];
var index=this.insertKey$J(o);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TLongSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
if (!that.contains$J(this._set[i])) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
hashcode+=$I$(3).hash$J(this._set[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buffy=Clazz.new_($I$(4,1).c$$I,[this._size * 2 + 2]);
buffy.append$S("{");
for (var i=this._states.length, j=1; i-- > 0; ) {
if (this._states[i] == 1) {
buffy.append$J(this._set[i]);
if (j++ < this._size) {
buffy.append$S(",");
}}}
buffy.append$S("}");
return buffy.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(1);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this._size);
out.writeFloat$F(this._loadFactor);
out.writeLong$J(this.no_entry_value);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeLong$J(this._set[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var version=$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var size=$in.readInt$();
if (version >= 1) {
this._loadFactor=$in.readFloat$();
this.no_entry_value=$in.readLong$();
if (this.no_entry_value != 0) {
$I$(1).fill$JA$J(this._set, this.no_entry_value);
}}this.setUp$I(size);
while (size-- > 0){
var val=$in.readLong$();
this.add$J(val);
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLongHashSet, "TLongHashIterator", function(){
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
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
