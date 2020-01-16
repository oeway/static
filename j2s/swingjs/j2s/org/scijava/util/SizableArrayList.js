(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SizableArrayList", null, 'java.util.ArrayList', 'org.scijava.util.Sizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
;C$.superclazz.c$$java_util_Collection.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (capacity) {
C$.superclazz.prototype.ensureCapacity$I.apply(this, [capacity < 11 ? 11 : capacity]);
});

Clazz.newMeth(C$, 'setSize$I', function (size) {
var oldSize=this.size$();
if (oldSize == size) return;
if (size < oldSize) {
this.removeRange$I$I(size, oldSize);
} else {
this.ensureCapacity$I(size);
var hackSuccessful=p$1.hackSize$I.apply(this, [size]);
if (!hackSuccessful) {
while (this.size$() < size)this.add$TE(null);

}}});

Clazz.newMeth(C$, 'hackSize$I', function (size) {
var oldSize;
try {
var sizeField=Clazz.getClass($I$(1)).getDeclaredField$S("size");
sizeField.setAccessible$Z(true);
oldSize=(sizeField.get$O(this)).valueOf();
sizeField.set$O$O(this, new Integer(size));
try {
this.get$I(size - 1);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
sizeField.set$O$O(this, new Integer(oldSize));
return false;
} else {
throw exc;
}
}
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
return false;
} else {
throw exc;
}
}
return true;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
