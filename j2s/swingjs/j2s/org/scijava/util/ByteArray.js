(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteArray", null, 'org.scijava.util.AbstractPrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['array','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Byte.TYPE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$Class$I.apply(this,[Byte.TYPE, size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (array) {
;C$.superclazz.c$$Class$TArrayType.apply(this,[Byte.TYPE, array]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addValue$B', function (value) {
this.addValue$I$B(this.size$(), ($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'removeValue$B', function (value) {
var index=this.indexOf$B(($b$[0] = value, $b$[0]));
if (index < 0) return false;
this.delete$I$I(index, 1);
return true;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
this.checkBounds$I(index);
return $b$[0] = this.array[index], $b$[0];
});

Clazz.newMeth(C$, 'setValue$I$B', function (index, value) {
this.checkBounds$I(index);
var oldValue=($b$[0] = this.getValue$I(index), $b$[0]);
this.array[index]=(value|0);
return $b$[0] = oldValue, $b$[0];
});

Clazz.newMeth(C$, 'addValue$I$B', function (index, value) {
this.insert$I$I(index, 1);
this.array[index]=(value|0);
});

Clazz.newMeth(C$, 'indexOf$B', function (value) {
for (var i=0; i < this.size$(); i++) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$B', function (value) {
for (var i=this.size$() - 1; i >= 0; i--) {
if (this.array[i] == value) return i;
}
return -1;
});

Clazz.newMeth(C$, 'contains$B', function (value) {
return this.indexOf$B(($b$[0] = value, $b$[0])) >= 0;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, ['setArray$BA','setArray$TArrayType'], function (array) {
if (array.length < this.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array too small"]);
}this.array=array;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return new Byte(this.getValue$I(index));
});

Clazz.newMeth(C$, ['set$I$Byte','set$I$TE','set$I$TBaseType'], function (index, element) {
return new Byte(this.setValue$I$B(index, (element == null  ? this.defaultValue$() : element).valueOf()));
});

Clazz.newMeth(C$, ['add$I$Byte','add$I$TE','add$I$TBaseType'], function (index, element) {
this.addValue$I$B(index, (element).valueOf());
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return -1;
var value=(o).valueOf();
return this.indexOf$B(($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return -1;
var value=(o).valueOf();
return this.lastIndexOf$B(($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return false;
var value=(o).valueOf();
return this.contains$B(($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return false;
var value=(o).valueOf();
return this.removeValue$B(($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return false;
var value=(o).valueOf();
if (this.indexOf$B(($b$[0] = value, $b$[0])) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
if (c.size$() == 0) return false;
this.insert$I$I(index, c.size$());
var i=index;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$()).objectValue$()),1);) {
this.setValue$I$B(i++, ($b$[0] = e, $b$[0]));
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) continue;
var value=(o).valueOf();
var result=this.removeValue$B(($b$[0] = value, $b$[0]));
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'defaultValue$', function () {
return new Integer(0);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
