(function(){var P$=Clazz.newPackage("gnu.trove.list.linked"),p$1={},I$=[[0,['gnu.trove.list.linked.TIntLinkedList','.TIntLink'],'java.util.Arrays','gnu.trove.impl.HashFunctions','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIntLinkedList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['gnu.trove.list.TIntList', 'java.io.Externalizable']);
C$.$classes$=[['TIntLink',8],['RemoveProcedure',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.head=null;
this.tail=this.head;
}, 1);

C$.$fields$=[['I',['no_entry_value','size'],'O',['head','gnu.trove.list.linked.TIntLinkedList.TIntLink','+tail']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (no_entry_value) {
;C$.$init$.apply(this);
this.no_entry_value=no_entry_value;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TIntList', function (list) {
;C$.$init$.apply(this);
this.no_entry_value=list.getNoEntryValue$();
for (var iterator=list.iterator$(); iterator.hasNext$(); ) {
var next=iterator.next$();
this.add$I(next);
}
}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.no_entry_value;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'add$I', function (val) {
var l=Clazz.new_($I$(1,1).c$$I,[val]);
if (C$.no$O(this.head)) {
this.head=l;
this.tail=l;
} else {
l.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(this.tail);
this.tail.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(l);
this.tail=l;
}this.size++;
return true;
});

Clazz.newMeth(C$, 'add$IA', function (vals) {
for (var val, $val = 0, $$val = vals; $val<$$val.length&&((val=($$val[$val])),1);$val++) {
this.add$I(val);
}
});

Clazz.newMeth(C$, 'add$IA$I$I', function (vals, offset, length) {
for (var i=0; i < length; i++) {
var val=vals[offset + i];
this.add$I(val);
}
});

Clazz.newMeth(C$, 'insert$I$I', function (offset, value) {
var tmp=Clazz.new_(C$);
tmp.add$I(value);
this.insert$I$gnu_trove_list_linked_TIntLinkedList(offset, tmp);
});

Clazz.newMeth(C$, 'insert$I$IA', function (offset, values) {
this.insert$I$gnu_trove_list_linked_TIntLinkedList(offset, C$.link$IA$I$I(values, 0, values.length));
});

Clazz.newMeth(C$, 'insert$I$IA$I$I', function (offset, values, valOffset, len) {
this.insert$I$gnu_trove_list_linked_TIntLinkedList(offset, C$.link$IA$I$I(values, valOffset, len));
});

Clazz.newMeth(C$, 'insert$I$gnu_trove_list_linked_TIntLinkedList', function (offset, tmp) {
var l=this.getLinkAt$I(offset);
this.size=this.size + tmp.size;
if (l === this.head ) {
tmp.tail.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(this.head);
this.head.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmp.tail);
this.head=tmp.head;
return;
}if (C$.no$O(l)) {
if (this.size == 0) {
this.head=tmp.head;
this.tail=tmp.tail;
} else {
this.tail.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmp.head);
tmp.head.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(this.tail);
this.tail=tmp.tail;
}} else {
var prev=l.getPrevious$();
l.getPrevious$().setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmp.head);
tmp.tail.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(l);
l.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmp.tail);
tmp.head.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(prev);
}});

Clazz.newMeth(C$, 'link$IA$I$I', function (values, valOffset, len) {
var ret=Clazz.new_(C$);
for (var i=0; i < len; i++) {
ret.add$I(values[valOffset + i]);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'get$I', function (offset) {
if (offset > this.size) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index " + offset + " exceeds size " + this.size ]);
var l=this.getLinkAt$I(offset);
if (C$.no$O(l)) return this.no_entry_value;
return l.getValue$();
});

Clazz.newMeth(C$, 'getLinkAt$I', function (offset) {
if (offset >= this.size$()) return null;
if (offset <= (this.size$() >>> 1)) return C$.getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I$Z(this.head, 0, offset, true);
 else return C$.getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I$Z(this.tail, this.size$() - 1, offset, false);
});

Clazz.newMeth(C$, 'getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I', function (l, idx, offset) {
return C$.getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I$Z(l, idx, offset, true);
}, 1);

Clazz.newMeth(C$, 'getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I$Z', function (l, idx, offset, next) {
var i=idx;
while (C$.got$O(l)){
if (i == offset) {
return l;
}i=i + (next ? 1 : -1);
l=next ? l.getNext$() : l.getPrevious$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'set$I$I', function (offset, val) {
if (offset > this.size) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index " + offset + " exceeds size " + this.size ]);
var l=this.getLinkAt$I(offset);
if (C$.no$O(l)) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["at offset " + offset]);
var prev=l.getValue$();
l.setValue$I(val);
return prev;
});

Clazz.newMeth(C$, 'set$I$IA', function (offset, values) {
this.set$I$IA$I$I(offset, values, 0, values.length);
});

Clazz.newMeth(C$, 'set$I$IA$I$I', function (offset, values, valOffset, length) {
for (var i=0; i < length; i++) {
var value=values[valOffset + i];
this.set$I$I(offset + i, value);
}
});

Clazz.newMeth(C$, 'replace$I$I', function (offset, val) {
return this.set$I$I(offset, val);
});

Clazz.newMeth(C$, 'clear$', function () {
this.size=0;
this.head=null;
this.tail=null;
});

Clazz.newMeth(C$, 'remove$I', function (value) {
var changed=false;
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (l.getValue$() == value) {
changed=true;
p$1.removeLink$gnu_trove_list_linked_TIntLinkedList_TIntLink.apply(this, [l]);
}}
return changed;
});

Clazz.newMeth(C$, 'removeLink$gnu_trove_list_linked_TIntLinkedList_TIntLink', function (l) {
if (C$.no$O(l)) return;
this.size--;
var prev=l.getPrevious$();
var next=l.getNext$();
if (C$.got$O(prev)) {
prev.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(next);
} else {
this.head=next;
}if (C$.got$O(next)) {
next.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(prev);
} else {
this.tail=prev;
}l.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(null);
l.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(null);
}, p$1);

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (collection) {
if (this.isEmpty$()) return false;
for (var o, $o = collection.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (Clazz.instanceOf(o, "java.lang.Integer")) {
var i=o;
if (!(this.contains$I((i).valueOf()))) return false;
} else {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TIntCollection', function (collection) {
if (this.isEmpty$()) return false;
for (var it=collection.iterator$(); it.hasNext$(); ) {
var i=it.next$();
if (!(this.contains$I(i))) return false;
}
return true;
});

Clazz.newMeth(C$, 'containsAll$IA', function (array) {
if (this.isEmpty$()) return false;
for (var i, $i = 0, $$i = array; $i<$$i.length&&((i=($$i[$i])),1);$i++) {
if (!this.contains$I(i)) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (collection) {
var ret=false;
for (var v, $v = collection.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
if (this.add$I(v.intValue$())) ret=true;
}
return ret;
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TIntCollection', function (collection) {
var ret=false;
for (var it=collection.iterator$(); it.hasNext$(); ) {
var i=it.next$();
if (this.add$I(i)) ret=true;
}
return ret;
});

Clazz.newMeth(C$, 'addAll$IA', function (array) {
var ret=false;
for (var i, $i = 0, $$i = array; $i<$$i.length&&((i=($$i[$i])),1);$i++) {
if (this.add$I(i)) ret=true;
}
return ret;
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
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (!collection.contains$I(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'retainAll$IA', function (array) {
$I$(2).sort$IA(array);
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if ($I$(2).binarySearch$IA$I(array, iter.next$()) < 0) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (collection.contains$O(Integer.valueOf$I(iter.next$()))) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TIntCollection', function (collection) {
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if (collection.contains$I(iter.next$())) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'removeAll$IA', function (array) {
$I$(2).sort$IA(array);
var modified=false;
var iter=this.iterator$();
while (iter.hasNext$()){
if ($I$(2).binarySearch$IA$I(array, iter.next$()) >= 0) {
iter.remove$();
modified=true;
}}
return modified;
});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
var l=this.getLinkAt$I(offset);
if (C$.no$O(l)) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["no elemenet at " + offset]);
var prev=l.getValue$();
p$1.removeLink$gnu_trove_list_linked_TIntLinkedList_TIntLink.apply(this, [l]);
return prev;
});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
for (var i=0; i < length; i++) {
this.removeAt$I(offset);
}
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TIntFunction', function ($function) {
for (var l=this.head; C$.got$O(l); ) {
l.setValue$I($function.execute$(l.getValue$()));
l=l.getNext$();
}
});

Clazz.newMeth(C$, 'reverse$', function () {
var h=this.head;
var t=this.tail;
var prev;
var next;
var tmp;
var l=this.head;
while (C$.got$O(l)){
next=l.getNext$();
prev=l.getPrevious$();
tmp=l;
l=l.getNext$();
tmp.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(prev);
tmp.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(next);
}
this.head=t;
this.tail=h;
});

Clazz.newMeth(C$, 'reverse$I$I', function (from, to) {
if (from > to) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["from > to : " + from + ">" + to ]);
var start=this.getLinkAt$I(from);
var stop=this.getLinkAt$I(to);
var prev;
var next;
var tmp=null;
var tmpHead=start.getPrevious$();
var l=start;
while (l !== stop ){
next=l.getNext$();
prev=l.getPrevious$();
tmp=l;
l=l.getNext$();
tmp.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(prev);
tmp.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(next);
}
if (C$.got$O(tmp)) {
tmpHead.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmp);
stop.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(tmpHead);
}start.setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink(stop);
stop.setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink(start);
});

Clazz.newMeth(C$, 'shuffle$java_util_Random', function (rand) {
for (var i=0; i < this.size; i++) {
var l=this.getLinkAt$I(rand.nextInt$I(this.size$()));
p$1.removeLink$gnu_trove_list_linked_TIntLinkedList_TIntLink.apply(this, [l]);
this.add$I(l.getValue$());
}
});

Clazz.newMeth(C$, 'subList$I$I', function (begin, end) {
if (end < begin) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["begin index " + begin + " greater than end index " + end ]);
}if (this.size < begin) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["begin index " + begin + " greater than last index " + this.size ]);
}if (begin < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["begin index can not be < 0"]);
}if (end > this.size) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["end index < " + this.size]);
}var ret=Clazz.new_(C$);
var tmp=this.getLinkAt$I(begin);
for (var i=begin; i < end; i++) {
ret.add$I(tmp.getValue$());
tmp=tmp.getNext$();
}
return ret;
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$IA$I$I(Clazz.array(Integer.TYPE, [this.size]), 0, this.size);
});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
return this.toArray$IA$I$I$I(Clazz.array(Integer.TYPE, [len]), offset, 0, len);
});

Clazz.newMeth(C$, 'toArray$IA', function (dest) {
return this.toArray$IA$I$I(dest, 0, this.size);
});

Clazz.newMeth(C$, 'toArray$IA$I$I', function (dest, offset, len) {
return this.toArray$IA$I$I$I(dest, offset, 0, len);
});

Clazz.newMeth(C$, 'toArray$IA$I$I$I', function (dest, source_pos, dest_pos, len) {
if (len == 0) {
return dest;
}if (source_pos < 0 || source_pos >= this.size$() ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[source_pos]);
}var tmp=this.getLinkAt$I(source_pos);
for (var i=0; i < len; i++) {
dest[dest_pos + i]=tmp.getValue$();
tmp=tmp.getNext$();
}
return dest;
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TIntProcedure', function (procedure) {
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (!procedure.execute$(l.getValue$())) return false;
}
return true;
});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TIntProcedure', function (procedure) {
for (var l=this.tail; C$.got$O(l); l=l.getPrevious$()) {
if (!procedure.execute$(l.getValue$())) return false;
}
return true;
});

Clazz.newMeth(C$, 'sort$', function () {
this.sort$I$I(0, this.size);
});

Clazz.newMeth(C$, 'sort$I$I', function (fromIndex, toIndex) {
var tmp=this.subList$I$I(fromIndex, toIndex);
var vals=tmp.toArray$();
$I$(2).sort$IA(vals);
this.set$I$IA(fromIndex, vals);
});

Clazz.newMeth(C$, 'fill$I', function (val) {
this.fill$I$I$I(0, this.size, val);
});

Clazz.newMeth(C$, 'fill$I$I$I', function (fromIndex, toIndex, val) {
if (fromIndex < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["begin index can not be < 0"]);
}var l=this.getLinkAt$I(fromIndex);
if (toIndex > this.size) {
for (var i=fromIndex; i < this.size; i++) {
l.setValue$I(val);
l=l.getNext$();
}
for (var i=this.size; i < toIndex; i++) {
this.add$I(val);
}
} else {
for (var i=fromIndex; i < toIndex; i++) {
l.setValue$I(val);
l=l.getNext$();
}
}});

Clazz.newMeth(C$, 'binarySearch$I', function (value) {
return this.binarySearch$I$I$I(value, 0, this.size$());
});

Clazz.newMeth(C$, 'binarySearch$I$I$I', function (value, fromIndex, toIndex) {
if (fromIndex < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["begin index can not be < 0"]);
}if (toIndex > this.size) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["end index > size: " + toIndex + " > " + this.size ]);
}if (toIndex < fromIndex) {
return -(fromIndex + 1);
}var middle;
var mid;
var from=fromIndex;
var fromLink=this.getLinkAt$I(fromIndex);
var to=toIndex;
while (from < to){
mid=(from + to) >>> 1;
middle=C$.getLink$gnu_trove_list_linked_TIntLinkedList_TIntLink$I$I(fromLink, from, mid);
if (middle.getValue$() == value) return mid;
if (middle.getValue$() < value) {
from=mid + 1;
fromLink=middle.next;
} else {
to=mid - 1;
}}
return -(from + 1);
});

Clazz.newMeth(C$, 'indexOf$I', function (value) {
return this.indexOf$I$I(0, value);
});

Clazz.newMeth(C$, 'indexOf$I$I', function (offset, value) {
var count=offset;
for (var l=this.getLinkAt$I(offset); C$.got$O(l.getNext$()); l=l.getNext$()) {
if (l.getValue$() == value) return count;
count++;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$I', function (value) {
return this.lastIndexOf$I$I(0, value);
});

Clazz.newMeth(C$, 'lastIndexOf$I$I', function (offset, value) {
if (this.isEmpty$()) return -1;
var last=-1;
var count=offset;
for (var l=this.getLinkAt$I(offset); C$.got$O(l.getNext$()); l=l.getNext$()) {
if (l.getValue$() == value) last=count;
count++;
}
return last;
});

Clazz.newMeth(C$, 'contains$I', function (value) {
if (this.isEmpty$()) return false;
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (l.getValue$() == value) return true;
}
return false;
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TIntLinkedList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TIntLinkedList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TIntIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.l=this.b$['gnu.trove.list.linked.TIntLinkedList'].head;
}, 1);

C$.$fields$=[['O',['l','gnu.trove.list.linked.TIntLinkedList.TIntLink','+current']]]

Clazz.newMeth(C$, 'next$', function () {
if (P$.TIntLinkedList.no$O(this.l)) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var ret=this.l.getValue$();
this.current=this.l;
this.l=this.l.getNext$();
return ret;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return P$.TIntLinkedList.got$O(this.l);
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.current == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
p$1.removeLink$gnu_trove_list_linked_TIntLinkedList_TIntLink.apply(this.b$['gnu.trove.list.linked.TIntLinkedList'], [this.current]);
this.current=null;
});
})()
), Clazz.new_(P$.TIntLinkedList$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TIntProcedure', function (condition) {
var ret=Clazz.new_(C$);
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (condition.execute$(l.getValue$())) ret.add$I(l.getValue$());
}
return ret;
});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TIntProcedure', function (condition) {
var ret=Clazz.new_(C$);
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (!condition.execute$(l.getValue$())) ret.add$I(l.getValue$());
}
return ret;
});

Clazz.newMeth(C$, 'max$', function () {
var ret=-2147483648;
if (this.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (ret < l.getValue$()) ret=l.getValue$();
}
return ret;
});

Clazz.newMeth(C$, 'min$', function () {
var ret=2147483647;
if (this.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
if (ret > l.getValue$()) ret=l.getValue$();
}
return ret;
});

Clazz.newMeth(C$, 'sum$', function () {
var sum=0;
for (var l=this.head; C$.got$O(l); l=l.getNext$()) {
sum+=l.getValue$();
}
return sum;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeInt$I(this.no_entry_value);
out.writeInt$I(this.size);
for (var iterator=this.iterator$(); iterator.hasNext$(); ) {
var next=iterator.next$();
out.writeInt$I(next);
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this.no_entry_value=$in.readInt$();
var len=$in.readInt$();
for (var i=0; i < len; i++) {
this.add$I($in.readInt$());
}
});

Clazz.newMeth(C$, 'got$O', function (ref) {
return ref != null ;
}, 1);

Clazz.newMeth(C$, 'no$O', function (ref) {
return ref == null ;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) return true;
if (o == null  || this.getClass$() !== o.getClass$()  ) return false;
var that=o;
if (this.no_entry_value != that.no_entry_value) return false;
if (this.size != that.size) return false;
var iterator=this.iterator$();
var thatIterator=that.iterator$();
while (iterator.hasNext$()){
if (!thatIterator.hasNext$()) return false;
if (iterator.next$() != thatIterator.next$()) return false;
}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=$I$(3).hash$I(this.no_entry_value);
result=31 * result + this.size;
for (var iterator=this.iterator$(); iterator.hasNext$(); ) {
result=31 * result + $I$(3).hash$I(iterator.next$());
}
return result;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(4,1).c$$S,["{"]);
var it=this.iterator$();
while (it.hasNext$()){
var next=it.next$();
buf.append$I(next);
if (it.hasNext$()) buf.append$S(", ");
}
buf.append$S("}");
return buf.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntLinkedList, "TIntLink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['value'],'O',['previous','gnu.trove.list.linked.TIntLinkedList.TIntLink','+next']]]

Clazz.newMeth(C$, 'c$$I', function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$I', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getPrevious$', function () {
return this.previous;
});

Clazz.newMeth(C$, 'setPrevious$gnu_trove_list_linked_TIntLinkedList_TIntLink', function (previous) {
this.previous=previous;
});

Clazz.newMeth(C$, 'getNext$', function () {
return this.next;
});

Clazz.newMeth(C$, 'setNext$gnu_trove_list_linked_TIntLinkedList_TIntLink', function (next) {
this.next=next;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIntLinkedList, "RemoveProcedure", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'gnu.trove.procedure.TIntProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changed=false;
}, 1);

C$.$fields$=[['Z',['changed']]]

Clazz.newMeth(C$, ['execute$I','execute$'], function (value) {
if (this.this$0.remove$I.apply(this.this$0, [value])) this.changed=true;
return true;
});

Clazz.newMeth(C$, 'isChanged$', function () {
return this.changed;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
