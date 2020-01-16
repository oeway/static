(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractPrimitiveArray", null, 'java.util.AbstractList', 'org.scijava.util.PrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maximumGrowth=2147483647;
}, 1);

C$.$fields$=[['I',['size','maximumGrowth'],'O',['type','Class']]]

Clazz.newMeth(C$, 'c$$Class', function (type) {
C$.c$$Class$I.apply(this, [type, 0]);
}, 1);

Clazz.newMeth(C$, ['c$$Class$I','c$null'], function (type, size) {
Clazz.super_(C$, this);
this.type=type;
this.size=size;
this.ensureCapacity$I(size);
}, 1);

Clazz.newMeth(C$, ['c$$Class$TArrayType'], function (type, array) {
Clazz.super_(C$, this);
this.type=type;
this.setArray$TArrayType(array);
this.size=this.capacity$();
}, 1);

Clazz.newMeth(C$, 'getMaximumGrowth$', function () {
return this.maximumGrowth;
});

Clazz.newMeth(C$, 'setMaximumGrowth$I', function (growth) {
if (this.maximumGrowth < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid growth value: " + growth]);
}this.maximumGrowth=growth;
});

Clazz.newMeth(C$, 'copyArray$', function () {
return p$1.copyArray$I.apply(this, [this.size$()]);
});

Clazz.newMeth(C$, 'capacity$', function () {
var array=this.getArray$();
return array == null  ? 0 : $I$(1).getLength$O(array);
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (minCapacity) {
var oldCapacity=this.capacity$();
if (minCapacity <= oldCapacity) return;
var growth=Math.min((oldCapacity/2|0) + 16, this.maximumGrowth);
var newCapacity;
if (growth > 2147483647 - oldCapacity) {
newCapacity=2147483647;
} else newCapacity=oldCapacity + growth;
var newLength=Math.max(minCapacity, newCapacity);
this.setArray$TArrayType(p$1.copyArray$I.apply(this, [newLength]));
});

Clazz.newMeth(C$, 'insert$I$I', function (index, count) {
var oldSize=this.size$();
if (index < 0 || index > oldSize ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Invalid index value"]);
}if (count > 2147483647 - oldSize) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many elements"]);
}if (count <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Count must be positive"]);
}this.setSize$I(oldSize + count);
if (index < oldSize) {
var array=this.getArray$();
System.arraycopy$O$I$O$I$I(array, index, array, index + count, oldSize - index);
}});

Clazz.newMeth(C$, 'delete$I$I', function (index, count) {
var oldSize=this.size$();
if (index < 0 || index > oldSize ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Invalid index value"]);
}if (index < 0 || index + count > oldSize ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range: index=" + index + ", count=" + count + ", size=" + oldSize ]);
}this.setSize$I(oldSize - count);
if (index + count < oldSize) {
var array=this.getArray$();
System.arraycopy$O$I$O$I$I(array, index + count, array, index, oldSize - index - count );
}});

Clazz.newMeth(C$, 'remove$I', function (index) {
var removed=this.get$I(index);
this.delete$I$I(index, 1);
return removed;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'clear$', function () {
this.setSize$I(0);
});

Clazz.newMeth(C$, 'setSize$I', function (size) {
this.ensureCapacity$I(size);
this.size=size;
});

Clazz.newMeth(C$, 'checkBounds$I', function (index) {
if (index >= this.size$()) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Invalid index value"]);
}});

Clazz.newMeth(C$, 'copyArray$I', function (newLength) {
var copy=Clazz.array(this.type, newLength);
var oldArray=this.getArray$();
if (oldArray != null ) System.arraycopy$O$I$O$I$I(oldArray, 0, copy, 0, this.size$());
return copy;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
