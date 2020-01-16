(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TByteSetDecorator", null, 'java.util.AbstractSet', ['java.util.Set', 'java.io.Externalizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_set','gnu.trove.set.TByteSet']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_set_TByteSet', function (set) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._set=set;
}, 1);

Clazz.newMeth(C$, 'getSet$', function () {
return this._set;
});

Clazz.newMeth(C$, ['add$Byte','add$TE'], function (value) {
return value != null  && this._set.add$B(($b$[0] = value.byteValue$(), $b$[0])) ;
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (this._set.equals$O(other)) {
return true;
} else if (Clazz.instanceOf(other, "java.util.Set")) {
var that=other;
if (that.size$() != this._set.size$()) {
return false;
} else {
var it=that.iterator$();
for (var i=that.size$(); i-- > 0; ) {
var val=it.next$();
if (Clazz.instanceOf(val, "java.lang.Byte")) {
var v=($b$[0] = (val).byteValue$(), $b$[0]);
if (this._set.contains$B(($b$[0] = v, $b$[0]))) {
} else {
return false;
}} else {
return false;
}}
return true;
}} else {
return false;
}});

Clazz.newMeth(C$, 'clear$', function () {
this._set.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (value) {
return Clazz.instanceOf(value, "java.lang.Byte") && this._set.remove$B(($b$[0] = (value).byteValue$(), $b$[0])) ;
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TByteSetDecorator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteSetDecorator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['gnu.trove.decorator.TByteSetDecorator']._set.iterator$();
}, 1);

C$.$fields$=[['O',['it','gnu.trove.iterator.TByteIterator']]]

Clazz.newMeth(C$, 'next$', function () {
return Byte.valueOf$B(($b$[0] = this.it.next$(), $b$[0]));
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TByteSetDecorator$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'size$', function () {
return this._set.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this._set.size$() == 0;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!(Clazz.instanceOf(o, "java.lang.Byte"))) return false;
return this._set.contains$B(($b$[0] = (o).byteValue$(), $b$[0]));
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._set=$in.readObject$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeObject$O(this._set);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
