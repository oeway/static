(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntArray", null, 'org.scijava.util.AbstractPrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['array','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Integer.TYPE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$Class$I.apply(this,[Integer.TYPE, size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (array) {
;C$.superclazz.c$$Class$TArrayType.apply(this,[Integer.TYPE, array]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addValue$I', function (value) {
this.addValue$I$I(this.size$(), value);
});

Clazz.newMeth(C$, 'removeValue$I', function (value) {
var index=this.indexOf$I(value);
if (index < 0) return false;
this.delete$I$I(index, 1);
return true;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
this.checkBounds$I(index);
return this.array[index];
});

Clazz.newMeth(C$, 'setValue$I$I', function (index, value) {
this.checkBounds$I(index);
var oldValue=this.getValue$I(index);
this.array[index]=value;
return oldValue;
});

Clazz.newMeth(C$, 'addValue$I$I', function (index, value) {
this.insert$I$I(index, 1);
this.array[index]=value;
});

Clazz.newMeth(C$, 'indexOf$I', function (value) {
for (var i=0; i < this.size$(); i++) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$I', function (value) {
for (var i=this.size$() - 1; i >= 0; i--) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'contains$I', function (value) {
return this.indexOf$I(value) >= 0;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, ['setArray$IA','setArray$TArrayType'], function (array) {
if (array.length < this.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array too small"]);
}this.array=array;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return new Integer(this.getValue$I(index));
});

Clazz.newMeth(C$, ['set$I$Integer','set$I$TE','set$I$TBaseType'], function (index, element) {
return new Integer(this.setValue$I$I(index, (element == null  ? this.defaultValue$() : element).valueOf()));
});

Clazz.newMeth(C$, ['add$I$Integer','add$I$TE','add$I$TBaseType'], function (index, element) {
this.addValue$I$I(index, (element).valueOf());
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) return -1;
var value=(o).valueOf();
return this.indexOf$I(value);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) return -1;
var value=(o).valueOf();
return this.lastIndexOf$I(value);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) return false;
var value=(o).valueOf();
return this.contains$I(value);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) return false;
var value=(o).valueOf();
return this.removeValue$I(value);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) return false;
var value=(o).valueOf();
if (this.indexOf$I(value) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
if (c.size$() == 0) return false;
this.insert$I$I(index, c.size$());
var i=index;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$()).intValue$()),1);) {
this.setValue$I$I(i++, e);
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) continue;
var value=(o).valueOf();
var result=this.removeValue$I(value);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'defaultValue$', function () {
return new Integer(0);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1