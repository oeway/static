(function(){var P$=Clazz.newPackage("gnu.trove.list.linked"),p$1={},I$=[[0,['gnu.trove.list.linked.TLinkedList','.IteratorImpl'],'java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLinkedList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractSequentialList', 'java.io.Externalizable');
C$.$classes$=[['IteratorImpl',20]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._size=0;
}, 1);

C$.$fields$=[['I',['_size'],'O',['_head','<T extends TLinkable<T>>','+_tail']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'listIterator$I', function (index) {
return Clazz.new_($I$(1,1).c$$I, [this, null, index]);
});

Clazz.newMeth(C$, 'size$', function () {
return this._size;
});

Clazz.newMeth(C$, ['add$I$TT','add$I$TE'], function (index, linkable) {
if (index < 0 || index > this.size$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index:" + index]);
}this.insert$I$TT(index, linkable);
});

Clazz.newMeth(C$, ['add$TT','add$TE'], function (linkable) {
this.insert$I$TT(this._size, linkable);
return true;
});

Clazz.newMeth(C$, ['addFirst$TT'], function (linkable) {
this.insert$I$TT(0, linkable);
});

Clazz.newMeth(C$, ['addLast$TT'], function (linkable) {
this.insert$I$TT(this.size$(), linkable);
});

Clazz.newMeth(C$, 'clear$', function () {
if (null != this._head ) {
for (var link=this._head.getNext$(); link != null ; link=link.getNext$()) {
var prev=link.getPrevious$();
prev.setNext$TT(null);
link.setPrevious$TT(null);
}
this._head=this._tail=null;
}this._size=0;
});

Clazz.newMeth(C$, 'toArray$', function () {
var o=Clazz.array(java.lang.Object, [this._size]);
var i=0;
for (var link=this._head; link != null ; link=link.getNext$()) {
o[i++]=link;
}
return o;
});

Clazz.newMeth(C$, 'toUnlinkedArray$', function () {
var o=Clazz.array(java.lang.Object, [this._size]);
var i=0;
for (var link=this._head, tmp; link != null ; i++) {
o[i]=link;
tmp=link;
link=link.getNext$();
tmp.setNext$TT(null);
tmp.setPrevious$TT(null);
}
this._size=0;
this._head=this._tail=null;
return o;
});

Clazz.newMeth(C$, ['toUnlinkedArray$TTA'], function (a) {
var size=this.size$();
if (a.length < size) {
a=Clazz.array(a.getClass$().getComponentType$(), size);
}var i=0;
for (var link=this._head, tmp; link != null ; i++) {
a[i]=link;
tmp=link;
link=link.getNext$();
tmp.setNext$TT(null);
tmp.setPrevious$TT(null);
}
this._size=0;
this._head=this._tail=null;
return a;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
for (var link=this._head; link != null ; link=link.getNext$()) {
if (o.equals$O(link)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'get$I', function (index) {
if (index < 0 || index >= this._size ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Size: " + this._size ]);
}if (index > (this._size >> 1)) {
var position=this._size - 1;
var node=this._tail;
while (position > index){
node=node.getPrevious$();
position--;
}
return node;
} else {
var position=0;
var node=this._head;
while (position < index){
node=node.getNext$();
position++;
}
return node;
}});

Clazz.newMeth(C$, 'getFirst$', function () {
return this._head;
});

Clazz.newMeth(C$, 'getLast$', function () {
return this._tail;
});

Clazz.newMeth(C$, ['getNext$TT'], function (current) {
return current.getNext$();
});

Clazz.newMeth(C$, ['getPrevious$TT'], function (current) {
return current.getPrevious$();
});

Clazz.newMeth(C$, 'removeFirst$', function () {
var o=this._head;
if (o == null ) {
return null;
}var n=o.getNext$();
o.setNext$TT(null);
if (null != n ) {
n.setPrevious$TT(null);
}this._head=n;
if (--this._size == 0) {
this._tail=null;
}return o;
});

Clazz.newMeth(C$, 'removeLast$', function () {
var o=this._tail;
if (o == null ) {
return null;
}var prev=o.getPrevious$();
o.setPrevious$TT(null);
if (null != prev ) {
prev.setNext$TT(null);
}this._tail=prev;
if (--this._size == 0) {
this._head=null;
}return o;
});

Clazz.newMeth(C$, ['insert$I$TT'], function (index, linkable) {
if (this._size == 0) {
this._head=this._tail=linkable;
} else if (index == 0) {
linkable.setNext$TT(this._head);
this._head.setPrevious$TT(linkable);
this._head=linkable;
} else if (index == this._size) {
this._tail.setNext$TT(linkable);
linkable.setPrevious$TT(this._tail);
this._tail=linkable;
} else {
var node=this.get$I(index);
var before=node.getPrevious$();
if (before != null ) {
before.setNext$TT(linkable);
}linkable.setPrevious$TT(before);
linkable.setNext$TT(node);
node.setPrevious$TT(linkable);
}this._size++;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (Clazz.instanceOf(o, "gnu.trove.list.TLinkable")) {
var p;
var n;
var link=o;
p=link.getPrevious$();
n=link.getNext$();
if (n == null  && p == null  ) {
if (o !== this._head ) {
return false;
}this._head=this._tail=null;
} else if (n == null ) {
link.setPrevious$TT(null);
p.setNext$TT(null);
this._tail=p;
} else if (p == null ) {
link.setNext$TT(null);
n.setPrevious$TT(null);
this._head=n;
} else {
p.setNext$TT(n);
n.setPrevious$TT(p);
link.setNext$TT(null);
link.setPrevious$TT(null);
}this._size--;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, ['addBefore$TT$TT'], function (current, newElement) {
if (current === this._head ) {
this.addFirst$TT(newElement);
} else if (current == null ) {
this.addLast$TT(newElement);
} else {
var p=current.getPrevious$();
newElement.setNext$TT(current);
p.setNext$TT(newElement);
newElement.setPrevious$TT(p);
current.setPrevious$TT(newElement);
this._size++;
}});

Clazz.newMeth(C$, ['addAfter$TT$TT'], function (current, newElement) {
if (current === this._tail ) {
this.addLast$TT(newElement);
} else if (current == null ) {
this.addFirst$TT(newElement);
} else {
var n=current.getNext$();
newElement.setPrevious$TT(current);
newElement.setNext$TT(n);
current.setNext$TT(newElement);
n.setPrevious$TT(newElement);
this._size++;
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TObjectProcedure', function (procedure) {
var node=this._head;
while (node != null ){
var keep_going=procedure.execute$(node);
if (!keep_going) {
return false;
}node=node.getNext$();
}
return true;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeInt$I(this._size);
out.writeObject$O(this._head);
out.writeObject$O(this._tail);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._size=$in.readInt$();
this._head=$in.readObject$();
this._tail=$in.readObject$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TLinkedList, "IteratorImpl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.ListIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._nextIndex=0;
}, 1);

C$.$fields$=[['I',['_nextIndex'],'O',['_next','<T extends TLinkable<T>>','+_lastReturned']]]

Clazz.newMeth(C$, 'c$$I', function (position) {
;C$.$init$.apply(this);
if (position < 0 || position > this.this$0._size ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}this._nextIndex=position;
if (position == 0) {
this._next=this.this$0._head;
} else if (position == this.this$0._size) {
this._next=null;
} else if (position < (this.this$0._size >> 1)) {
var pos=0;
for (this._next=this.this$0._head; pos < position; pos++) {
this._next=this._next.getNext$();
}
} else {
var pos=this.this$0._size - 1;
for (this._next=this.this$0._tail; pos > position; pos--) {
this._next=this._next.getPrevious$();
}
}}, 1);

Clazz.newMeth(C$, ['add$TT','add$TE'], function (linkable) {
this._lastReturned=null;
this._nextIndex++;
if (this.this$0._size == 0) {
this.b$['gnu.trove.list.linked.TLinkedList'].add$TT.apply(this.b$['gnu.trove.list.linked.TLinkedList'], [linkable]);
} else {
this.b$['gnu.trove.list.linked.TLinkedList'].addBefore$TT$TT.apply(this.b$['gnu.trove.list.linked.TLinkedList'], [this._next, linkable]);
}});

Clazz.newMeth(C$, 'hasNext$', function () {
return this._nextIndex != this.this$0._size;
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this._nextIndex != 0;
});

Clazz.newMeth(C$, 'next$', function () {
if (this._nextIndex == this.this$0._size) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}this._lastReturned=this._next;
this._next=this._next.getNext$();
this._nextIndex++;
return this._lastReturned;
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this._nextIndex;
});

Clazz.newMeth(C$, 'previous$', function () {
if (this._nextIndex == 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}if (this._nextIndex == this.this$0._size) {
this._lastReturned=this._next=this.this$0._tail;
} else {
this._lastReturned=this._next=this._next.getPrevious$();
}this._nextIndex--;
return this._lastReturned;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this._nextIndex - 1;
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._lastReturned == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["must invoke next or previous before invoking remove"]);
}if (this._lastReturned !== this._next ) {
this._nextIndex--;
}this._next=this._lastReturned.getNext$();
this.b$['gnu.trove.list.linked.TLinkedList'].remove$O.apply(this.b$['gnu.trove.list.linked.TLinkedList'], [this._lastReturned]);
this._lastReturned=null;
});

Clazz.newMeth(C$, ['set$TT','set$TE'], function (linkable) {
if (this._lastReturned == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}p$1.swap$TT$TT.apply(this, [this._lastReturned, linkable]);
this._lastReturned=linkable;
});

Clazz.newMeth(C$, 'swap$TT$TT', function (from, to) {
var from_p=from.getPrevious$();
var from_n=from.getNext$();
var to_p=to.getPrevious$();
var to_n=to.getNext$();
if (from_n === to ) {
if (from_p != null ) from_p.setNext$TT(to);
to.setPrevious$TT(from_p);
to.setNext$TT(from);
from.setPrevious$TT(to);
from.setNext$TT(to_n);
if (to_n != null ) to_n.setPrevious$TT(from);
} else if (to_n === from ) {
if (to_p != null ) to_p.setNext$TT(to);
to.setPrevious$TT(from);
to.setNext$TT(from_n);
from.setPrevious$TT(to_p);
from.setNext$TT(to);
if (from_n != null ) from_n.setPrevious$TT(to);
} else {
from.setNext$TT(to_n);
from.setPrevious$TT(to_p);
if (to_p != null ) to_p.setNext$TT(from);
if (to_n != null ) to_n.setPrevious$TT(from);
to.setNext$TT(from_n);
to.setPrevious$TT(from_p);
if (from_p != null ) from_p.setNext$TT(to);
if (from_n != null ) from_n.setPrevious$TT(to);
}if (this.this$0._head === from ) this.this$0._head=to;
 else if (this.this$0._head === to ) this.this$0._head=from;
if (this.this$0._tail === from ) this.this$0._tail=to;
 else if (this.this$0._tail === to ) this.this$0._tail=from;
if (this._lastReturned === from ) this._lastReturned=to;
 else if (this._lastReturned === to ) this._lastReturned=from;
if (this._next === from ) this._next=to;
 else if (this._next === to ) this._next=from;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
