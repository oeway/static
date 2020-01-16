(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ObjectArray", null, 'org.scijava.util.AbstractPrimitiveArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['array','_.E[]','objectClass','Class']]]

Clazz.newMeth(C$, ['c$$Class'], function (arrayType) {
;C$.superclazz.c$$Class.apply(this,[arrayType]);C$.$init$.apply(this);
this.objectClass=arrayType;
}, 1);

Clazz.newMeth(C$, 'c$$Class$I', function (arrayType, size) {
;C$.superclazz.c$$Class$I.apply(this,[arrayType, size]);C$.$init$.apply(this);
this.objectClass=arrayType;
}, 1);

Clazz.newMeth(C$, ['c$$TEA'], function (array) {
;C$.superclazz.c$$Class$TArrayType.apply(this,[array.getClass$().getComponentType$(), array]);C$.$init$.apply(this);
this.objectClass=array.getClass$().getComponentType$();
}, 1);

Clazz.newMeth(C$, ['addValue$TE'], function (value) {
this.addValue$I$TE(this.size$(), value);
});

Clazz.newMeth(C$, ['removeValue$TE'], function (value) {
var index=this.indexOf$O(value);
if (index < 0) return false;
this.delete$I$I(index, 1);
return true;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
this.checkBounds$I(index);
return this.array[index];
});

Clazz.newMeth(C$, ['setValue$I$TE'], function (index, value) {
this.checkBounds$I(index);
var oldValue=this.getValue$I(index);
this.array[index]=value;
return oldValue;
});

Clazz.newMeth(C$, ['addValue$I$TE'], function (index, value) {
this.insert$I$I(index, 1);
this.array[index]=value;
});

Clazz.newMeth(C$, 'getArray$', function () {
return this.array;
});

Clazz.newMeth(C$, ['setArray$TEA','setArray$TArrayType'], function (array) {
if (array.length < this.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array too small"]);
}this.array=array;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.getValue$I(index);
});

Clazz.newMeth(C$, ['set$I$TE','set$I$TBaseType'], function (index, element) {
return this.setValue$I$TE(index, element == null  ? this.defaultValue$() : element);
});

Clazz.newMeth(C$, ['add$I$TE','add$I$TBaseType'], function (index, element) {
this.addValue$I$TE(index, element);
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
if (!p$1.compatibleClass$O.apply(this, [o])) return -1;
for (var i=0; i < this.size$(); i++) {
if (this.array[i].equals$O(o)) return i;
}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
if (!p$1.compatibleClass$O.apply(this, [o])) return -1;
for (var i=this.size$() - 1; i >= 0; i--) {
if (this.array[i].equals$O(o)) return i;
}
return -1;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!p$1.compatibleClass$O.apply(this, [o])) return false;
return this.indexOf$O(o) >= 0;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!p$1.compatibleClass$O.apply(this, [o])) return false;
var value=$I$(1).cast$O$Class(o, this.objectClass);
return this.removeValue$TE(value);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!p$1.compatibleClass$O.apply(this, [o])) return false;
if (this.indexOf$O(o) < 0) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (index, c) {
if (c.size$() == 0) return false;
this.insert$I$I(index, c.size$());
var i=index;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
this.setValue$I$TE(i++, e);
}
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!p$1.compatibleClass$O.apply(this, [o])) continue;
var value=$I$(1).cast$O$Class(o, this.objectClass);
var result=this.removeValue$TE(value);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'defaultValue$', function () {
return null;
});

Clazz.newMeth(C$, 'compatibleClass$O', function (o) {
if (o != null  && this.objectClass.isAssignableFrom$Class(o.getClass$()) ) return true;
return false;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
