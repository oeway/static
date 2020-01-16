(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoolArray", null, 'org.scijava.util.AbstractPrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['array','boolean[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[$I$(1).TYPE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$Class$I.apply(this,[$I$(1).TYPE, size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ZA', function (array) {
;C$.superclazz.c$$Class$TArrayType.apply(this,[$I$(1).TYPE, array]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addValue$Z', function (value) {
this.addValue$I$Z(this.size$(), value);
});

Clazz.newMeth(C$, 'removeValue$Z', function (value) {
var index=this.indexOf$Z(value);
if (index < 0) return false;
this.delete$I$I(index, 1);
return true;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
this.checkBounds$I(index);
return this.array[index];
});

Clazz.newMeth(C$, 'setValue$I$Z', function (index, value) {
this.checkBounds$I(index);
var oldValue=this.getValue$I(index);
this.array[index]=value;
return oldValue;
});

Clazz.newMeth(C$, 'addValue$I$Z', function (index, value) {
this.insert$I$I(index, 1);
this.array[index]=value;
});

Clazz.newMeth(C$, 'indexOf$Z', function (value) {
for (var i=0; i < this.size$(); i++) {
if (this.array[i] == value ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$Z', function (value) {
for (var i=this.size$() - 1; i >= 0; i--) {
if (this.array[i] == value ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'contains$Z', function (value) {
return this.indexOf$Z(value) >= 0;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, ['setArray$ZA','setArray$TArrayType'], function (array) {
if (array.length < this.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array too small"]);
}this.array=array;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return new Boolean(this.getValue$I(index));
});

Clazz.newMeth(C$, ['set$I$Boolean','set$I$TE','set$I$TBaseType'], function (index, element) {
return new Boolean(this.setValue$I$Z(index, (element == null  ? this.defaultValue$() : element).valueOf()));
});

Clazz.newMeth(C$, ['add$I$Boolean','add$I$TE','add$I$TBaseType'], function (index, element) {
this.addValue$I$Z(index, (element).valueOf());
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) return -1;
var value=(o).valueOf();
return this.indexOf$Z(value);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) return -1;
var value=(o).valueOf();
return this.lastIndexOf$Z(value);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) return false;
var value=(o).valueOf();
return this.contains$Z(value);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) return false;
var value=(o).valueOf();
return this.removeValue$Z(value);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) return false;
var value=(o).valueOf();
if (this.indexOf$Z(value) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
if (c.size$() == 0) return false;
this.insert$I$I(index, c.size$());
var i=index;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$()).objectValue$()),1);) {
this.setValue$I$Z(i++, e);
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!(Clazz.instanceOf(o, "java.lang.Boolean"))) continue;
var value=(o).valueOf();
var result=this.removeValue$Z(value);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'defaultValue$', function () {
return new Boolean(false);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
