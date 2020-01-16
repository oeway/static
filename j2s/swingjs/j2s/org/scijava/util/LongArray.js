(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LongArray", null, 'org.scijava.util.AbstractPrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['array','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Long.TYPE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$Class$I.apply(this,[Long.TYPE, size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (array) {
;C$.superclazz.c$$Class$TArrayType.apply(this,[Long.TYPE, array]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addValue$J', function (value) {
this.addValue$I$J(this.size$(), value);
});

Clazz.newMeth(C$, 'removeValue$J', function (value) {
var index=this.indexOf$J(value);
if (index < 0) return false;
this.delete$I$I(index, 1);
return true;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
this.checkBounds$I(index);
return this.array[index];
});

Clazz.newMeth(C$, 'setValue$I$J', function (index, value) {
this.checkBounds$I(index);
var oldValue=this.getValue$I(index);
this.array[index]=value;
return oldValue;
});

Clazz.newMeth(C$, 'addValue$I$J', function (index, value) {
this.insert$I$I(index, 1);
this.array[index]=value;
});

Clazz.newMeth(C$, 'indexOf$J', function (value) {
for (var i=0; i < this.size$(); i++) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$J', function (value) {
for (var i=this.size$() - 1; i >= 0; i--) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'contains$J', function (value) {
return this.indexOf$J(value) >= 0;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, ['setArray$JA','setArray$TArrayType'], function (array) {
if (array.length < this.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array too small"]);
}this.array=array;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return new Long(this.getValue$I(index));
});

Clazz.newMeth(C$, ['set$I$Long','set$I$TE','set$I$TBaseType'], function (index, element) {
return new Long(this.setValue$I$J(index, (element == null  ? this.defaultValue$() : element).valueOf()));
});

Clazz.newMeth(C$, ['add$I$Long','add$I$TE','add$I$TBaseType'], function (index, element) {
this.addValue$I$J(index, (element).valueOf());
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) return -1;
var value=(o).valueOf();
return this.indexOf$J(value);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) return -1;
var value=(o).valueOf();
return this.lastIndexOf$J(value);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) return false;
var value=(o).valueOf();
return this.contains$J(value);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) return false;
var value=(o).valueOf();
return this.removeValue$J(value);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) return false;
var value=(o).valueOf();
if (this.indexOf$J(value) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
if (c.size$() == 0) return false;
this.insert$I$I(index, c.size$());
var i=index;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$()).objectValue$()),1);) {
this.setValue$I$J(i++, e);
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Long"))) continue;
var value=(o).valueOf();
var result=this.removeValue$J(value);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'defaultValue$', function () {
return new Long(0);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
