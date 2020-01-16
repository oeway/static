(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'java.util.HashMap','java.lang.reflect.Array','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LastRecentlyUsed", null, null, 'java.util.Collection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['top','bottom'],'O',['entries','Object[]','map','java.util.Map','next','int[]','+previous']]]

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.$init$.apply(this);
this.entries=Clazz.array(java.lang.Object, [2 * size]);
this.next=Clazz.array(Integer.TYPE, [2 * size]);
this.previous=Clazz.array(Integer.TYPE, [2 * size]);
this.map=Clazz.new_(1,{K:"Object",V:"Integer"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'next$I', function (index) {
return index < 0 ? this.bottom - 1 : this.next[index] - 1;
});

Clazz.newMeth(C$, 'previous$I', function (index) {
return index < 0 ? this.top - 1 : this.previous[index] - 1;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.entries[index];
});

Clazz.newMeth(C$, ['lookup$TT'], function (value) {
var result=this.map.get$O(value);
return result == null  ? -1 : ((result).valueOf()|0);
});

Clazz.newMeth(C$, ['add$TT','add$TE'], function (value) {
return p$1.add$TT$Z.apply(this, [value, false]);
});

Clazz.newMeth(C$, ['addToEnd$TT'], function (value) {
p$1.add$TT$Z.apply(this, [value, true]);
});

Clazz.newMeth(C$, ['replace$I$TT'], function (index, newValue) {
var previousValue=this.get$I(index);
if (previousValue == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No current entry at position " + index]);
}if (newValue.equals$O(this.previous)) return false;
this.map.remove$O(previousValue);
this.map.put$TK$TV(newValue, new Integer(index));
this.entries[index]=newValue;
return true;
});

Clazz.newMeth(C$, 'clear$', function () {
this.top=this.bottom=0;
this.map.clear$();
for (var i=0; i < this.entries.length; i++) {
this.entries[i]=null;
this.next[i]=this.previous[i]=0;
}
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (values) {
for (var value, $value = values.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.add$TT(value);
}
return true;
});

Clazz.newMeth(C$, 'contains$O', function (value) {
return this.map.containsKey$O(value);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (values) {
return this.map.keySet$().containsAll$java_util_Collection(values);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.top == 0;
});

Clazz.newMeth(C$, 'remove$O', function (value) {
var index=this.map.get$O(value);
if (index == null ) return false;
p$1.remove$I.apply(this, [index.intValue$()]);
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (values) {
var result=true;
for (var value, $value = values.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
result=this.remove$O(value) && result ;
}
return result;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (values) {
for (var index=this.top - 1; index >= 0; ) {
var prev=this.previous[index] - 1;
if (!values.contains$O(this.get$I(index))) {
p$1.remove$I.apply(this, [index]);
}index=prev;
}
return this.containsAll$java_util_Collection(values);
});

Clazz.newMeth(C$, 'size$', function () {
return this.map.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=Clazz.array(java.lang.Object, [this.size$()]);
for (var i=0, index=this.top - 1; index >= 0; i++, index=this.previous[index] - 1) {
result[i]=this.get$I(index);
}
return result;
});

Clazz.newMeth(C$, ['toArray$TSA'], function (array) {
var size=this.size$();
if (array.length >= size) {
for (var i=0, index=this.top - 1; index >= 0; i++, index=this.previous[index] - 1) {
array[i]=this.get$I(index);
}
return array;
}var result=Clazz.array(array.getClass$().getComponentType$(), size);
for (var i=0, index=this.top - 1; index >= 0; i++, index=this.previous[index] - 1) {
result[i]=this.get$I(index);
}
return result;
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.LastRecentlyUsed$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LastRecentlyUsed$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.position=this.b$['org.scijava.util.LastRecentlyUsed'].top - 1;
}, 1);

C$.$fields$=[['I',['position']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.position >= 0;
});

Clazz.newMeth(C$, 'next$', function () {
var result=this.b$['org.scijava.util.LastRecentlyUsed'].entries[this.position];
this.position=this.b$['org.scijava.util.LastRecentlyUsed'].previous[this.position] - 1;
return result;
});

Clazz.newMeth(C$, 'remove$', function () {
p$1.remove$I.apply(this.b$['org.scijava.util.LastRecentlyUsed'], [this.position == 0 ? this.b$['org.scijava.util.LastRecentlyUsed'].top - 1 : this.b$['org.scijava.util.LastRecentlyUsed'].next[this.position] - 1]);
});
})()
), Clazz.new_(P$.LastRecentlyUsed$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'remove$I', function (position) {
Clazz.assert(C$, this, function(){return (this.entries[position] != null )});
this.map.remove$O(this.entries[position]);
this.entries[position]=null;
if (this.next[position] == 0) {
this.top=this.previous[position];
} else {
this.previous[this.next[position] - 1]=this.previous[position];
}if (this.previous[position] == 0) {
this.bottom=this.next[position];
} else {
this.next[this.previous[position] - 1]=this.next[position];
}this.next[position]=this.previous[position]=0;
}, p$1);

Clazz.newMeth(C$, ['add$TT$Z'], function (value, addAtEnd) {
var existing=this.map.get$O(value);
var insert;
if (existing != null ) {
insert=(existing).valueOf();
p$1.remove$I.apply(this, [insert]);
} else if (this.map.size$() == (this.entries.length/2|0)) {
insert=this.bottom - 1;
p$1.remove$I.apply(this, [insert]);
} else {
insert=value.hashCode$() % this.entries.length;
if (insert < 0) insert+=this.entries.length;
while (insert < this.entries.length && this.entries[insert] != null  )insert++;

}p$1.add$I$TT$Z.apply(this, [insert, value, addAtEnd]);
return existing == null ;
}, p$1);

Clazz.newMeth(C$, ['add$I$TT$Z'], function (position, value, atEnd) {
Clazz.assert(C$, this, function(){return (this.next[position] == 0)});
Clazz.assert(C$, this, function(){return (this.previous[position] == 0)});
Clazz.assert(C$, this, function(){return (this.entries[position] == null )});
this.map.put$TK$TV(value, new Integer(position));
this.entries[position]=value;
if (atEnd) {
this.next[position]=this.bottom;
if (this.bottom > 0) this.previous[this.bottom - 1]=position + 1;
this.bottom=position + 1;
if (this.top == 0) this.top=this.bottom;
} else {
this.previous[position]=this.top;
if (this.top > 0) {
this.next[this.top - 1]=position + 1;
}this.top=position + 1;
if (this.bottom == 0) this.bottom=this.top;
}}, p$1);

Clazz.newMeth(C$, 'assertConsistency$', function () {
if (this.top == 0) {
Clazz.assert(C$, this, function(){return (this.bottom == 0)});
Clazz.assert(C$, this, function(){return (this.map.size$() == 0)});
for (var i=0; i < this.entries.length; i++) {
Clazz.assert(C$, this, function(){return (this.entries[i] == null )});
Clazz.assert(C$, this, function(){return (this.next[i] == 0)});
Clazz.assert(C$, this, function(){return (this.previous[i] == 0)});
}
return;
}Clazz.assert(C$, this, function(){return (this.bottom != 0)});
var indices=Clazz.new_(1,{E:"Integer"},$I$(3,1).c$$java_util_Collection,[this.map.values$()]);
Clazz.assert(C$, this, function(){return (indices.size$() == this.map.size$())});
for (var i=0; i < this.entries.length; i++) {
if (indices.contains$O(new Integer(i))) {
Clazz.assert(C$, this, function(){return (this.entries[i] != null )});
Clazz.assert(C$, this, function(){return ((this.map.get$O(this.entries[i])).valueOf() === i )});
if (i == this.top - 1 || this.top == this.bottom ) {
Clazz.assert(C$, this, function(){return (this.next[i] == 0)});
} else {
Clazz.assert(C$, this, function(){return (this.next[i] > 0)});
Clazz.assert(C$, this, function(){return (this.previous[this.next[i] - 1] == i + 1)});
}if (i == this.bottom - 1 || this.top == this.bottom ) {
Clazz.assert(C$, this, function(){return (this.previous[i] == 0)});
} else {
Clazz.assert(C$, this, function(){return (this.previous[i] > 0)});
Clazz.assert(C$, this, function(){return (this.next[this.previous[i] - 1] == i + 1)});
}} else {
Clazz.assert(C$, this, function(){return (this.entries[i] == null )});
Clazz.assert(C$, this, function(){return (this.next[i] == 0)});
Clazz.assert(C$, this, function(){return (this.previous[i] == 0)});
}}
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
