(function(){var P$=Clazz.newPackage("gnu.trove.list.array"),p$1={},I$=[[0,'java.util.Arrays',['gnu.trove.list.array.TShortArrayList','.TShortArrayIterator'],'gnu.trove.impl.HashFunctions','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TShortArrayList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['gnu.trove.list.TShortList', 'java.io.Externalizable']);
C$.$classes$=[['TShortArrayIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['_pos'],'H',['no_entry_value'],'O',['_data','short[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$H.apply(this, [10, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (capacity) {
C$.c$$I$H.apply(this, [capacity, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$H', function (capacity, no_entry_value) {
;C$.$init$.apply(this);
this._data=Clazz.array(Short.TYPE, [capacity]);
this._pos=0;
this.no_entry_value=no_entry_value;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_TShortCollection', function (collection) {
C$.c$$I.apply(this, [collection.size$()]);
this.addAll$gnu_trove_TShortCollection(collection);
}, 1);

Clazz.newMeth(C$, 'c$$HA', function (values) {
C$.c$$I.apply(this, [values.length]);
this.add$HA(values);
}, 1);

Clazz.newMeth(C$, 'c$$HA$H$Z', function (values, no_entry_value, wrap) {
;C$.$init$.apply(this);
if (!wrap) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Wrong call"]);
if (values == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["values can not be null"]);
this._data=values;
this._pos=values.length;
this.no_entry_value=no_entry_value;
}, 1);

Clazz.newMeth(C$, 'wrap$HA', function (values) {
return C$.wrap$HA$H(values, 0);
}, 1);

Clazz.newMeth(C$, 'wrap$HA$H', function (values, no_entry_value) {
return ((P$.TShortArrayList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TShortArrayList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('gnu.trove.list.array.TShortArrayList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (capacity) {
if (capacity > this._data.length) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can not grow ArrayList wrapped external array"]);
});
})()
), Clazz.new_(C$.c$$HA$H$Z, [this, null, values, no_entry_value, true],P$.TShortArrayList$1));
}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.no_entry_value;
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (capacity) {
if (capacity > this._data.length) {
var newCap=Math.max(this._data.length << 1, capacity);
var tmp=Clazz.array(Short.TYPE, [newCap]);
System.arraycopy$O$I$O$I$I(this._data, 0, tmp, 0, this._data.length);
this._data=tmp;
}});

Clazz.newMeth(C$, 'size$', function () {
return this._pos;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this._pos == 0;
});

Clazz.newMeth(C$, 'trimToSize$', function () {
if (this._data.length > this.size$()) {
var tmp=Clazz.array(Short.TYPE, [this.size$()]);
this.toArray$HA$I$I(tmp, 0, tmp.length);
this._data=tmp;
}});

Clazz.newMeth(C$, 'add$H', function (val) {
this.ensureCapacity$I(this._pos + 1);
this._data[this._pos++]=val;
return true;
});

Clazz.newMeth(C$, 'add$HA', function (vals) {
this.add$HA$I$I(vals, 0, vals.length);
});

Clazz.newMeth(C$, 'add$HA$I$I', function (vals, offset, length) {
this.ensureCapacity$I(this._pos + length);
System.arraycopy$O$I$O$I$I(vals, offset, this._data, this._pos, length);
this._pos+=length;
});

Clazz.newMeth(C$, 'insert$I$H', function (offset, value) {
if (offset == this._pos) {
this.add$H(value);
return;
}this.ensureCapacity$I(this._pos + 1);
System.arraycopy$O$I$O$I$I(this._data, offset, this._data, offset + 1, this._pos - offset);
this._data[offset]=value;
this._pos++;
});

Clazz.newMeth(C$, 'insert$I$HA', function (offset, values) {
this.insert$I$HA$I$I(offset, values, 0, values.length);
});

Clazz.newMeth(C$, 'insert$I$HA$I$I', function (offset, values, valOffset, len) {
if (offset == this._pos) {
this.add$HA$I$I(values, valOffset, len);
return;
}this.ensureCapacity$I(this._pos + len);
System.arraycopy$O$I$O$I$I(this._data, offset, this._data, offset + len, this._pos - offset);
System.arraycopy$O$I$O$I$I(values, valOffset, this._data, offset, len);
this._pos+=len;
});

Clazz.newMeth(C$, 'get$I', function (offset) {
if (offset >= this._pos) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}return this._data[offset];
});

Clazz.newMeth(C$, 'getQuick$I', function (offset) {
return this._data[offset];
});

Clazz.newMeth(C$, 'set$I$H', function (offset, val) {
if (offset >= this._pos) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}var prev_val=this._data[offset];
this._data[offset]=val;
return prev_val;
});

Clazz.newMeth(C$, 'replace$I$H', function (offset, val) {
if (offset >= this._pos) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}var old=this._data[offset];
this._data[offset]=val;
return old;
});

Clazz.newMeth(C$, 'set$I$HA', function (offset, values) {
this.set$I$HA$I$I(offset, values, 0, values.length);
});

Clazz.newMeth(C$, 'set$I$HA$I$I', function (offset, values, valOffset, length) {
if (offset < 0 || offset + length > this._pos ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}System.arraycopy$O$I$O$I$I(values, valOffset, this._data, offset, length);
});

Clazz.newMeth(C$, 'setQuick$I$H', function (offset, val) {
this._data[offset]=val;
});

Clazz.newMeth(C$, 'clear$', function () {
this.clear$I(10);
});

Clazz.newMeth(C$, 'clear$I', function (capacity) {
this._data=Clazz.array(Short.TYPE, [capacity]);
this._pos=0;
});

Clazz.newMeth(C$, 'reset$', function () {
this._pos=0;
$I$(1).fill$HA$H(this._data, this.no_entry_value);
});

Clazz.newMeth(C$, 'resetQuick$', function () {
this._pos=0;
});

Clazz.newMeth(C$, 'remove$H', function (value) {
for (var index=0; index < this._pos; index++) {
if (value == this._data[index]) {
this.remove$I$I(index, 1);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
var old=this.get$I(offset);
this.remove$I$I(offset, 1);
return old;
});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
if (length == 0) return;
if (offset < 0 || offset >= this._pos ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}if (offset == 0) {
System.arraycopy$O$I$O$I$I(this._data, length, this._data, 0, this._pos - length);
} else if (this._pos - length == offset) {
} else {
System.arraycopy$O$I$O$I$I(this._data, offset + length, this._data, offset, this._pos - (offset + length));
}this._pos-=length;
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(2,1).c$$I, [this, null, 0]);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "java.lang.Short")) {
var c=(element).shortValue$();
if (!this.contains$H(c)) {
return false;
}} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TShortCollection', function (collection) {
if (this === collection ) {
return true;
}var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (!this.contains$H(element)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$HA', function (array) {
for (var i=array.length; i-- > 0; ) {
if (!this.contains$H(array[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
var changed=false;
for (var element, $element = collection.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
var e=element.shortValue$();
if (this.add$H(e)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TShortCollection', function (collection) {
var changed=false;
var iter=collection.iterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (this.add$H(element)) {
changed=true;
}}
return changed;
});

Clazz.newMeth(C$, 'addAll$HA', function (array) {
var changed=false;
for (var element, $element = 0, $$element = array; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (this.add$H(element)) {
changed=true;
}}
return changed;
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
$I$(1).sort$HA(array);
var data=this._data;
for (var i=this._pos; i-- > 0; ) {
if ($I$(1).binarySearch$HA$H(array, data[i]) < 0) {
this.remove$I$I(i, 1);
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
if (collection === this ) {
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

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TShortFunction', function ($function) {
for (var i=this._pos; i-- > 0; ) {
this._data[i]=$function.execute$(this._data[i]);
}
});

Clazz.newMeth(C$, 'reverse$', function () {
this.reverse$I$I(0, this._pos);
});

Clazz.newMeth(C$, 'reverse$I$I', function (from, to) {
if (from == to) {
return;
}if (from > to) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["from cannot be greater than to"]);
}for (var i=from, j=to - 1; i < j; i++, j--) {
p$1.swap$I$I.apply(this, [i, j]);
}
});

Clazz.newMeth(C$, 'shuffle$java_util_Random', function (rand) {
for (var i=this._pos; i-- > 1; ) {
p$1.swap$I$I.apply(this, [i, rand.nextInt$I(i)]);
}
});

Clazz.newMeth(C$, 'swap$I$I', function (i, j) {
var tmp=this._data[i];
this._data[i]=this._data[j];
this._data[j]=tmp;
}, p$1);

Clazz.newMeth(C$, 'subList$I$I', function (begin, end) {
if (end < begin) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["end index " + end + " greater than begin index " + begin ]);
}if (begin < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["begin index can not be < 0"]);
}if (end > this._data.length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["end index < " + this._data.length]);
}var list=Clazz.new_(C$.c$$I,[end - begin]);
for (var i=begin; i < end; i++) {
list.add$H(this._data[i]);
}
return list;
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$I$I(0, this._pos);
});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
var rv=Clazz.array(Short.TYPE, [len]);
this.toArray$HA$I$I(rv, offset, len);
return rv;
});

Clazz.newMeth(C$, 'toArray$HA', function (dest) {
var len=dest.length;
if (dest.length > this._pos) {
len=this._pos;
dest[len]=this.no_entry_value;
}this.toArray$HA$I$I(dest, 0, len);
return dest;
});

Clazz.newMeth(C$, 'toArray$HA$I$I', function (dest, offset, len) {
if (len == 0) {
return dest;
}if (offset < 0 || offset >= this._pos ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset]);
}System.arraycopy$O$I$O$I$I(this._data, offset, dest, 0, len);
return dest;
});

Clazz.newMeth(C$, 'toArray$HA$I$I$I', function (dest, source_pos, dest_pos, len) {
if (len == 0) {
return dest;
}if (source_pos < 0 || source_pos >= this._pos ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[source_pos]);
}System.arraycopy$O$I$O$I$I(this._data, source_pos, dest, dest_pos, len);
return dest;
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (other === this ) {
return true;
} else if (Clazz.instanceOf(other, "gnu.trove.list.array.TShortArrayList")) {
var that=other;
if (that.size$() != this.size$()) return false;
 else {
for (var i=this._pos; i-- > 0; ) {
if (this._data[i] != that._data[i]) {
return false;
}}
return true;
}} else return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var h=0;
for (var i=this._pos; i-- > 0; ) {
h+=$I$(3).hash$I(this._data[i]);
}
return h;
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TShortProcedure', function (procedure) {
for (var i=0; i < this._pos; i++) {
if (!procedure.execute$(this._data[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TShortProcedure', function (procedure) {
for (var i=this._pos; i-- > 0; ) {
if (!procedure.execute$(this._data[i])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'sort$', function () {
$I$(1).sort$HA$I$I(this._data, 0, this._pos);
});

Clazz.newMeth(C$, 'sort$I$I', function (fromIndex, toIndex) {
$I$(1).sort$HA$I$I(this._data, fromIndex, toIndex);
});

Clazz.newMeth(C$, 'fill$H', function (val) {
$I$(1).fill$HA$I$I$H(this._data, 0, this._pos, val);
});

Clazz.newMeth(C$, 'fill$I$I$H', function (fromIndex, toIndex, val) {
if (toIndex > this._pos) {
this.ensureCapacity$I(toIndex);
this._pos=toIndex;
}$I$(1).fill$HA$I$I$H(this._data, fromIndex, toIndex, val);
});

Clazz.newMeth(C$, 'binarySearch$H', function (value) {
return this.binarySearch$H$I$I(value, 0, this._pos);
});

Clazz.newMeth(C$, 'binarySearch$H$I$I', function (value, fromIndex, toIndex) {
if (fromIndex < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[fromIndex]);
}if (toIndex > this._pos) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[toIndex]);
}var low=fromIndex;
var high=toIndex - 1;
while (low <= high){
var mid=(low + high) >>> 1;
var midVal=this._data[mid];
if (midVal < value) {
low=mid + 1;
} else if (midVal > value) {
high=mid - 1;
} else {
return mid;
}}
return -(low + 1);
});

Clazz.newMeth(C$, 'indexOf$H', function (value) {
return this.indexOf$I$H(0, value);
});

Clazz.newMeth(C$, 'indexOf$I$H', function (offset, value) {
for (var i=offset; i < this._pos; i++) {
if (this._data[i] == value) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$H', function (value) {
return this.lastIndexOf$I$H(this._pos, value);
});

Clazz.newMeth(C$, 'lastIndexOf$I$H', function (offset, value) {
for (var i=offset; i-- > 0; ) {
if (this._data[i] == value) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'contains$H', function (value) {
return this.lastIndexOf$H(value) >= 0;
});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TShortProcedure', function (condition) {
var list=Clazz.new_(C$);
for (var i=0; i < this._pos; i++) {
if (condition.execute$(this._data[i])) {
list.add$H(this._data[i]);
}}
return list;
});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TShortProcedure', function (condition) {
var list=Clazz.new_(C$);
for (var i=0; i < this._pos; i++) {
if (!condition.execute$(this._data[i])) {
list.add$H(this._data[i]);
}}
return list;
});

Clazz.newMeth(C$, 'max$', function () {
if (this.size$() == 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot find maximum of an empty list"]);
}var max=-32768;
for (var i=0; i < this._pos; i++) {
if (this._data[i] > max) {
max=this._data[i];
}}
return max;
});

Clazz.newMeth(C$, 'min$', function () {
if (this.size$() == 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot find minimum of an empty list"]);
}var min=32767;
for (var i=0; i < this._pos; i++) {
if (this._data[i] < min) {
min=this._data[i];
}}
return min;
});

Clazz.newMeth(C$, 'sum$', function () {
var sum=($s$[0] = 0, $s$[0]);
for (var i=0; i < this._pos; i++) {
sum+=this._data[i];
}
return sum;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
for (var i=0, end=this._pos - 1; i < end; i++) {
buf.append$I(this._data[i]);
buf.append$S(", ");
}
if (this.size$() > 0) {
buf.append$I(this._data[this._pos - 1]);
}buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeInt$I(this._pos);
out.writeShort$I(this.no_entry_value);
var len=this._data.length;
out.writeInt$I(len);
for (var i=0; i < len; i++) {
out.writeShort$I(this._data[i]);
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._pos=$in.readInt$();
this.no_entry_value=$in.readShort$();
var len=$in.readInt$();
this._data=Clazz.array(Short.TYPE, [len]);
for (var i=0; i < len; i++) {
this._data[i]=$in.readShort$();
}
});
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TShortArrayList, "TShortArrayIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.iterator.TShortIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=0;
this.lastRet=-1;
}, 1);

C$.$fields$=[['I',['cursor','lastRet']]]

Clazz.newMeth(C$, 'c$$I', function (index) {
;C$.$init$.apply(this);
this.cursor=index;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cursor < this.this$0.size$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'next$', function () {
try {
var next=this.this$0.get$I.apply(this.this$0, [this.cursor]);
this.lastRet=this.cursor++;
return next;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastRet == -1) throw Clazz.new_(Clazz.load('IllegalStateException'));
try {
this.this$0.remove$I$I.apply(this.this$0, [this.lastRet, 1]);
if (this.lastRet < this.cursor) this.cursor--;
this.lastRet=-1;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
