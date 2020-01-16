(function(){var P$=Clazz.newPackage("gnu.trove.set.hash"),I$=[[0,'java.util.Arrays',['gnu.trove.set.hash.TFloatHashSet','.TFloatHashIterator'],'gnu.trove.impl.HashFunctions','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TFloatHashSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'gnu.trove.impl.hash.TFloatHash', ['gnu.trove.set.TFloatSet', 'java.io.Externalizable']);
C$.$classes$=[['TFloatHashIterator',0]];

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

Clazz.newMeth(C$, 'c$$I$F$F', function (initial_capacity, load_factor, no_entry_value) {
;C$.superclazz.c$$I$F$F.apply(this,[initial_capacity, load_factor, no_entry_value]);C$.$init$.apply(this);
if (no_entry_value != 0.0 ) {
$I$(1).fill$FA$F(this._set, no_entry_value);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (collection) {
C$.c$$I.apply(this, [Math.max(collection.size$(), 10)]);
this.addAll$java_util_Collection(collection);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_TFloatCollection', function (collection) {
C$.c$$I.apply(this, [Math.max(collection.size$(), 10)]);
if (Clazz.instanceOf(collection, "gnu.trove.set.hash.TFloatHashSet")) {
var hashset=collection;
this._loadFactor=hashset._loadFactor;
this.no_entry_value=hashset.no_entry_value;
if (this.no_entry_value != 0.0 ) {
$I$(1).fill$FA$F(this._set, this.no_entry_value);
}this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}this.addAll$gnu_trove_TFloatCollection(collection);
}, 1);

Clazz.newMeth(C$, 'c$$FA', function (array) {
C$.c$$I.apply(this, [Math.max(array.length, 10)]);
this.addAll$FA(array);
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(2,1).c$$gnu_trove_impl_hash_TFloatHash, [this, null, this]);
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=Clazz.array(Float.TYPE, [this.size$()]);
var set=this._set;
var states=this._states;
for (var i=states.length, j=0; i-- > 0; ) {
if (states[i] == 1) {
result[j++]=set[i];
}}
return result;
});

Clazz.newMeth(C$, 'toArray$FA', function (dest) {
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

Clazz.newMeth(C$, 'add$F', function (val) {
var index=this.insertKey$F(val);
if (index < 0) {
return false;
}this.postInsertHook$Z(this.consumeFreeSlot);
return true;
});

Clazz.newMeth(C$, 'remove$F', function (val) {
var index=this.index$F(val);
if (index >= 0) {
this.removeAt$I(index);
return true;
}return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Float")) {
var c=(element).floatValue$();
if (!this.contains$F(c)) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TFloatCollection', function (collection) {
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (!this.contains$F(element)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$FA', function (array) {
for (var i=array.length; i-- > 0; ) {
if (!this.contains$F(array[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
var e=element.floatValue$();
if (this.add$F(e)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TFloatCollection', function (collection) {
var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.add$F(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$FA', function (array) {
var changed=false;
for (var i=array.length; i-- > 0; ) {
if (this.add$F(array[i])) {
changed=true;
}}
return changed;
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
$I$(1).sort$FA(array);
var set=this._set;
var states=this._states;
this._autoCompactTemporaryDisable=true;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && ($I$(1).binarySearch$FA$F(array, set[i]) < 0) ) {
this.removeAt$I(i);
changed=true;
}}
this._autoCompactTemporaryDisable=false;
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
var changed=false;
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
this._set=Clazz.array(Float.TYPE, [newCapacity]);
this._states=Clazz.array(Byte.TYPE, [newCapacity]);
for (var i=oldCapacity; i-- > 0; ) {
if (oldStates[i] == 1) {
var o=oldSet[i];
var index=this.insertKey$F(o);
}}
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (!(Clazz.instanceOf(other, "gnu.trove.set.TFloatSet"))) {
return false;
}var that=other;
if (that.size$() != this.size$()) {
return false;
}for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
if (!that.contains$F(this._set[i])) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashcode=0;
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
hashcode+=$I$(3).hash$F(this._set[i]);
}}
return hashcode;
});

Clazz.newMeth(C$, 'toString', function () {
var buffy=Clazz.new_($I$(4,1).c$$I,[this._size * 2 + 2]);
buffy.append$S("{");
for (var i=this._states.length, j=1; i-- > 0; ) {
if (this._states[i] == 1) {
buffy.append$F(this._set[i]);
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
out.writeFloat$F(this.no_entry_value);
for (var i=this._states.length; i-- > 0; ) {
if (this._states[i] == 1) {
out.writeFloat$F(this._set[i]);
}}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
var version=$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var size=$in.readInt$();
if (version >= 1) {
this._loadFactor=$in.readFloat$();
this.no_entry_value=$in.readFloat$();
if (this.no_entry_value != 0.0 ) {
$I$(1).fill$FA$F(this._set, this.no_entry_value);
}}this.setUp$I(size);
while (size-- > 0){
var val=$in.readFloat$();
this.add$F(val);
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TFloatHashSet, "TFloatHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'gnu.trove.impl.hash.THashPrimitiveIterator', 'gnu.trove.iterator.TFloatIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$_hash','gnu.trove.impl.hash.TFloatHash']]]

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TFloatHash', function (hash) {
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
