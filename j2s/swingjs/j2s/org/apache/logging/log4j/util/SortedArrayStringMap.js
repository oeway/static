(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),p$1={},I$=[[0,'java.io.ObjectInputStream','java.lang.reflect.Modifier','java.util.Arrays','java.util.HashMap','java.util.Objects','StringBuilder','java.io.ByteArrayOutputStream','java.io.ObjectOutputStream','java.io.ByteArrayInputStream','org.apache.logging.log4j.util.FilteredObjectInputStream','org.apache.logging.log4j.status.StatusLogger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SortedArrayStringMap", null, null, 'org.apache.logging.log4j.util.IndexedStringMap');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PUT_ALL=((P$.SortedArrayStringMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SortedArrayStringMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.apache.logging.log4j.util.TriConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['accept$S$O$org_apache_logging_log4j_util_StringMap','accept$','accept$TK$TV$TS'], function (key, value, contextData) {
contextData.putValue$S$O(key, value);
});
})()
), Clazz.new_(P$.SortedArrayStringMap$1.$init$, [this, null]));
C$.EMPTY=Clazz.array(String, -1, []);
{
var methods=Clazz.getClass($I$(1)).getMethods$();
var setMethod=null;
var getMethod=null;
for (var method, $method = 0, $$method = methods; $method<$$method.length&&((method=($$method[$method])),1);$method++) {
if (method.getName$().equals$O("setObjectInputFilter")) {
setMethod=method;
} else if (method.getName$().equals$O("getObjectInputFilter")) {
getMethod=method;
}}
var newMethod=null;
try {
if (setMethod != null ) {
var clazz=Clazz.forName("org.apache.logging.log4j.util.internal.DefaultObjectInputFilter");
methods=clazz.getMethods$();
for (var method, $method = 0, $$method = methods; $method<$$method.length&&((method=($$method[$method])),1);$method++) {
if (method.getName$().equals$O("newInstance") && $I$(2).isStatic$I(method.getModifiers$()) ) {
newMethod=method;
break;
}}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
} else {
throw ex;
}
}
C$.newObjectInputFilter=newMethod;
C$.setObjectInputFilter=setMethod;
C$.getObjectInputFilter=getMethod;
};
}

Clazz.newMeth(C$, '$init$', function () {
this.keys=C$.EMPTY;
this.values=C$.EMPTY;
}, 1);

C$.$fields$=[['Z',['immutable','iterating'],'I',['size','threshold'],'O',['keys','String[]','values','Object[]']]
,['I',['DEFAULT_INITIAL_CAPACITY','HASHVAL'],'L',['serialVersionUID'],'S',['FROZEN'],'O',['PUT_ALL','org.apache.logging.log4j.util.TriConsumer','EMPTY','String[]','setObjectInputFilter','java.lang.reflect.Method','+getObjectInputFilter','+newObjectInputFilter']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [4]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.$init$.apply(this);
if (initialCapacity < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Initial capacity must be at least zero but was " + initialCapacity]);
}this.threshold=C$.ceilingNextPowerOfTwo$I(initialCapacity == 0 ? 1 : initialCapacity);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_util_ReadOnlyStringMap', function (other) {
;C$.$init$.apply(this);
if (Clazz.instanceOf(other, "org.apache.logging.log4j.util.SortedArrayStringMap")) {
p$1.initFrom0$org_apache_logging_log4j_util_SortedArrayStringMap.apply(this, [other]);
} else if (other != null ) {
p$1.resize$I.apply(this, [C$.ceilingNextPowerOfTwo$I(other.size$())]);
other.forEach$org_apache_logging_log4j_util_TriConsumer$TS(C$.PUT_ALL, this);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
;C$.$init$.apply(this);
p$1.resize$I.apply(this, [C$.ceilingNextPowerOfTwo$I(map.size$())]);
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.putValue$S$O(entry.getKey$(), entry.getValue$());
}
}, 1);

Clazz.newMeth(C$, 'assertNotFrozen', function () {
if (this.immutable) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Frozen collection cannot be modified"]);
}}, p$1);

Clazz.newMeth(C$, 'assertNoConcurrentModification', function () {
if (this.iterating) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}, p$1);

Clazz.newMeth(C$, 'clear$', function () {
if (this.keys === C$.EMPTY ) {
return;
}p$1.assertNotFrozen.apply(this, []);
p$1.assertNoConcurrentModification.apply(this, []);
$I$(3).fill$OA$I$I$O(this.keys, 0, this.size, null);
$I$(3).fill$OA$I$I$O(this.values, 0, this.size, null);
this.size=0;
});

Clazz.newMeth(C$, 'containsKey$S', function (key) {
return this.indexOfKey$S(key) >= 0;
});

Clazz.newMeth(C$, 'toMap$', function () {
var result=Clazz.new_(1,{V:"String",K:"String"},$I$(4,1).c$$I,[this.size$()]);
for (var i=0; i < this.size$(); i++) {
var value=this.getValueAt$I(i);
result.put$TK$TV(this.getKeyAt$I(i), value == null  ? null : String.valueOf$O(value));
}
return result;
});

Clazz.newMeth(C$, 'freeze$', function () {
this.immutable=true;
});

Clazz.newMeth(C$, 'isFrozen$', function () {
return this.immutable;
});

Clazz.newMeth(C$, 'getValue$S', function (key) {
var index=this.indexOfKey$S(key);
if (index < 0) {
return null;
}return this.values[index];
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'indexOfKey$S', function (key) {
if (this.keys === C$.EMPTY ) {
return -1;
}if (key == null ) {
return p$1.nullKeyIndex.apply(this, []);
}var start=this.size > 0 && this.keys[0] == null   ? 1 : 0;
return $I$(3).binarySearch$OA$I$I$O(this.keys, start, this.size, key);
});

Clazz.newMeth(C$, 'nullKeyIndex', function () {
return this.size > 0 && this.keys[0] == null   ? 0 : ~0;
}, p$1);

Clazz.newMeth(C$, 'putValue$S$O', function (key, value) {
p$1.assertNotFrozen.apply(this, []);
p$1.assertNoConcurrentModification.apply(this, []);
if (this.keys === C$.EMPTY ) {
p$1.inflateTable$I.apply(this, [this.threshold]);
}var index=this.indexOfKey$S(key);
if (index >= 0) {
this.keys[index]=key;
this.values[index]=value;
} else {
p$1.insertAt$I$S$O.apply(this, [~index, key, value]);
}});

Clazz.newMeth(C$, 'insertAt$I$S$O', function (index, key, value) {
p$1.ensureCapacity.apply(this, []);
System.arraycopy$O$I$O$I$I(this.keys, index, this.keys, index + 1, this.size - index);
System.arraycopy$O$I$O$I$I(this.values, index, this.values, index + 1, this.size - index);
this.keys[index]=key;
this.values[index]=value;
this.size++;
}, p$1);

Clazz.newMeth(C$, 'putAll$org_apache_logging_log4j_util_ReadOnlyStringMap', function (source) {
if (source === this  || source == null   || source.isEmpty$() ) {
return;
}p$1.assertNotFrozen.apply(this, []);
p$1.assertNoConcurrentModification.apply(this, []);
if (Clazz.instanceOf(source, "org.apache.logging.log4j.util.SortedArrayStringMap")) {
if (this.size == 0) {
p$1.initFrom0$org_apache_logging_log4j_util_SortedArrayStringMap.apply(this, [source]);
} else {
p$1.merge$org_apache_logging_log4j_util_SortedArrayStringMap.apply(this, [source]);
}} else if (source != null ) {
source.forEach$org_apache_logging_log4j_util_TriConsumer$TS(C$.PUT_ALL, this);
}});

Clazz.newMeth(C$, 'initFrom0$org_apache_logging_log4j_util_SortedArrayStringMap', function (other) {
if (this.keys.length < other.size) {
this.keys=Clazz.array(String, [other.threshold]);
this.values=Clazz.array(java.lang.Object, [other.threshold]);
}System.arraycopy$O$I$O$I$I(other.keys, 0, this.keys, 0, other.size);
System.arraycopy$O$I$O$I$I(other.values, 0, this.values, 0, other.size);
this.size=other.size;
this.threshold=other.threshold;
}, p$1);

Clazz.newMeth(C$, 'merge$org_apache_logging_log4j_util_SortedArrayStringMap', function (other) {
var myKeys=this.keys;
var myVals=this.values;
var newSize=other.size + this.size;
this.threshold=C$.ceilingNextPowerOfTwo$I(newSize);
if (this.keys.length < this.threshold) {
this.keys=Clazz.array(String, [this.threshold]);
this.values=Clazz.array(java.lang.Object, [this.threshold]);
}var overwrite=true;
if (other.size$() > this.size$()) {
System.arraycopy$O$I$O$I$I(myKeys, 0, this.keys, other.size, this.size);
System.arraycopy$O$I$O$I$I(myVals, 0, this.values, other.size, this.size);
System.arraycopy$O$I$O$I$I(other.keys, 0, this.keys, 0, other.size);
System.arraycopy$O$I$O$I$I(other.values, 0, this.values, 0, other.size);
this.size=other.size;
overwrite=false;
} else {
System.arraycopy$O$I$O$I$I(myKeys, 0, this.keys, 0, this.size);
System.arraycopy$O$I$O$I$I(myVals, 0, this.values, 0, this.size);
System.arraycopy$O$I$O$I$I(other.keys, 0, this.keys, this.size, other.size);
System.arraycopy$O$I$O$I$I(other.values, 0, this.values, this.size, other.size);
}for (var i=this.size; i < newSize; i++) {
var index=this.indexOfKey$S(this.keys[i]);
if (index < 0) {
p$1.insertAt$I$S$O.apply(this, [~index, this.keys[i], this.values[i]]);
} else if (overwrite) {
this.keys[index]=this.keys[i];
this.values[index]=this.values[i];
}}
$I$(3).fill$OA$I$I$O(this.keys, this.size, newSize, null);
$I$(3).fill$OA$I$I$O(this.values, this.size, newSize, null);
}, p$1);

Clazz.newMeth(C$, 'ensureCapacity', function () {
if (this.size >= this.threshold) {
p$1.resize$I.apply(this, [this.threshold * 2]);
}}, p$1);

Clazz.newMeth(C$, 'resize$I', function (newCapacity) {
var oldKeys=this.keys;
var oldValues=this.values;
this.keys=Clazz.array(String, [newCapacity]);
this.values=Clazz.array(java.lang.Object, [newCapacity]);
System.arraycopy$O$I$O$I$I(oldKeys, 0, this.keys, 0, this.size);
System.arraycopy$O$I$O$I$I(oldValues, 0, this.values, 0, this.size);
this.threshold=newCapacity;
}, p$1);

Clazz.newMeth(C$, 'inflateTable$I', function (toSize) {
this.threshold=toSize;
this.keys=Clazz.array(String, [toSize]);
this.values=Clazz.array(java.lang.Object, [toSize]);
}, p$1);

Clazz.newMeth(C$, 'remove$S', function (key) {
if (this.keys === C$.EMPTY ) {
return;
}var index=this.indexOfKey$S(key);
if (index >= 0) {
p$1.assertNotFrozen.apply(this, []);
p$1.assertNoConcurrentModification.apply(this, []);
System.arraycopy$O$I$O$I$I(this.keys, index + 1, this.keys, index, this.size - 1 - index );
System.arraycopy$O$I$O$I$I(this.values, index + 1, this.values, index, this.size - 1 - index );
this.keys[this.size - 1]=null;
this.values[this.size - 1]=null;
this.size--;
}});

Clazz.newMeth(C$, 'getKeyAt$I', function (index) {
if (index < 0 || index >= this.size ) {
return null;
}return this.keys[index];
});

Clazz.newMeth(C$, 'getValueAt$I', function (index) {
if (index < 0 || index >= this.size ) {
return null;
}return this.values[index];
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
this.iterating=true;
try {
for (var i=0; i < this.size; i++) {
action.accept$(this.keys[i], this.values[i]);
}
} finally {
this.iterating=false;
}
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_TriConsumer$TT', function (action, state) {
this.iterating=true;
try {
for (var i=0; i < this.size; i++) {
action.accept$(this.keys[i], this.values[i], state);
}
} finally {
this.iterating=false;
}
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj === this ) {
return true;
}if (!(Clazz.instanceOf(obj, "org.apache.logging.log4j.util.SortedArrayStringMap"))) {
return false;
}var other=obj;
if (this.size$() != other.size$()) {
return false;
}for (var i=0; i < this.size$(); i++) {
if (!$I$(5).equals$O$O(this.keys[i], other.keys[i])) {
return false;
}if (!$I$(5).equals$O$O(this.values[i], other.values[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=37;
result=31 * result + this.size;
result=31 * result + C$.hashCode$OA$I(this.keys, this.size);
result=31 * result + C$.hashCode$OA$I(this.values, this.size);
return result;
});

Clazz.newMeth(C$, 'hashCode$OA$I', function (values, length) {
var result=1;
for (var i=0; i < length; i++) {
result=31 * result + (values[i] == null  ? 0 : values[i].hashCode$());
}
return result;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(6,1).c$$I,[256]);
sb.append$C("{");
for (var i=0; i < this.size; i++) {
if (i > 0) {
sb.append$S(", ");
}sb.append$S(this.keys[i]).append$C("=");
sb.append$O(this.values[i] === this  ? "(this map)" : this.values[i]);
}
sb.append$C("}");
return sb.toString();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
if (this.keys === C$.EMPTY ) {
s.writeInt$I(C$.ceilingNextPowerOfTwo$I(this.threshold));
} else {
s.writeInt$I(this.keys.length);
}s.writeInt$I(this.size);
if (this.size > 0) {
for (var i=0; i < this.size; i++) {
s.writeObject$O(this.keys[i]);
try {
s.writeObject$O(C$.marshall$O(this.values[i]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.handleSerializationException$Throwable$I$S.apply(this, [e, i, this.keys[i]]);
s.writeObject$O(null);
} else {
throw e;
}
}
}
}}, p$1);

Clazz.newMeth(C$, 'marshall$O', function (obj) {
if (obj == null ) {
return null;
}var bout=Clazz.new_($I$(7,1));
try {
var oos=Clazz.new_($I$(8,1).c$$java_io_OutputStream,[bout]);
/*try*/ {
oos.writeObject$O(obj);
oos.flush$();
return bout.toByteArray$();
}
}finally{/*res*/
try{oos&&oos.close$&&oos.close$()}catch(_){}}
}, 1);

Clazz.newMeth(C$, 'unmarshall$BA$java_io_ObjectInputStream', function (data, inputStream) {
var bin=Clazz.new_($I$(9,1).c$$BA,[data]);
var allowedClasses=null;
var ois;
if (Clazz.instanceOf(inputStream, "org.apache.logging.log4j.util.FilteredObjectInputStream")) {
allowedClasses=(inputStream).getAllowedClasses$();
ois=Clazz.new_($I$(10,1).c$$java_io_InputStream$java_util_Collection,[bin, allowedClasses]);
} else {
try {
var obj=C$.getObjectInputFilter.invoke$O$OA(inputStream, []);
var filter=C$.newObjectInputFilter.invoke$O$OA(null, [obj]);
ois=Clazz.new_($I$(1,1).c$$java_io_InputStream,[bin]);
C$.setObjectInputFilter.invoke$O$OA(ois, [filter]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalAccessException") || Clazz.exceptionOf(ex,"java.lang.reflect.InvocationTargetException")){
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["Unable to set ObjectInputFilter on stream"]);
} else {
throw ex;
}
}
}try {
return ois.readObject$();
} finally {
ois.close$();
}
}, 1);

Clazz.newMeth(C$, 'ceilingNextPowerOfTwo$I', function (x) {
var BITS_PER_INT=32;
return 1 << (32 - Integer.numberOfLeadingZeros$I(x - 1));
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
if (!(Clazz.instanceOf(s, "org.apache.logging.log4j.util.FilteredObjectInputStream")) && C$.setObjectInputFilter == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["readObject requires a FilteredObjectInputStream or an ObjectInputStream that accepts an ObjectInputFilter"]);
}s.defaultReadObject$();
this.keys=C$.EMPTY;
this.values=C$.EMPTY;
var capacity=s.readInt$();
if (capacity < 0) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Illegal capacity: " + capacity]);
}var mappings=s.readInt$();
if (mappings < 0) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Illegal mappings count: " + mappings]);
}if (mappings > 0) {
p$1.inflateTable$I.apply(this, [capacity]);
} else {
this.threshold=capacity;
}for (var i=0; i < mappings; i++) {
this.keys[i]=s.readObject$();
try {
var marshalledObject=s.readObject$();
this.values[i]=marshalledObject == null  ? null : C$.unmarshall$BA$java_io_ObjectInputStream(marshalledObject, s);
} catch (error) {
if (Clazz.exceptionOf(error,"Exception") || Clazz.exceptionOf(error,"LinkageError")){
p$1.handleSerializationException$Throwable$I$S.apply(this, [error, i, this.keys[i]]);
this.values[i]=null;
} else {
throw error;
}
}
}
this.size=mappings;
}, p$1);

Clazz.newMeth(C$, 'handleSerializationException$Throwable$I$S', function (t, i, key) {
$I$(11).getLogger$().warn$S$O$O$O("Ignoring {} for key[{}] (\'{}\')", String.valueOf$O(t), new Integer(i), this.keys[i]);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
