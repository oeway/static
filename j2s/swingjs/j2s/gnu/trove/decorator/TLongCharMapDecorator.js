(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[[0,'java.util.AbstractSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TLongCharMapDecorator", null, 'java.util.AbstractMap', ['java.util.Map', 'java.io.Externalizable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.TLongCharMap']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TLongCharMap', function (map) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'getMap$', function () {
return this._map;
});

Clazz.newMeth(C$, ['put$Long$Character','put$TK$TV'], function (key, value) {
var k;
var v;
if (key == null ) {
k=this._map.getNoEntryKey$();
} else {
k=this.unwrapKey$O(key);
}if (value == null ) {
v=this._map.getNoEntryValue$();
} else {
v=this.unwrapValue$O(value);
}var retval=this._map.put$J$C(k, v);
if (retval == this._map.getNoEntryValue$()) {
return null;
}return this.wrapValue$C(retval);
});

Clazz.newMeth(C$, 'get$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Long")) {
k=this.unwrapKey$O(key);
} else {
return null;
}} else {
k=this._map.getNoEntryKey$();
}var v=this._map.get$J(k);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$C(v);
}});

Clazz.newMeth(C$, 'clear$', function () {
this._map.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Long")) {
k=this.unwrapKey$O(key);
} else {
return null;
}} else {
k=this._map.getNoEntryKey$();
}var v=this._map.remove$J(k);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$C(v);
}});

Clazz.newMeth(C$, 'entrySet$', function () {
return ((P$.TLongCharMapDecorator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongCharMapDecorator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.decorator.TLongCharMapDecorator']._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['gnu.trove.decorator.TLongCharMapDecorator'].isEmpty$.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], []);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var k=(o).getKey$();
var v=(o).getValue$();
return this.b$['gnu.trove.decorator.TLongCharMapDecorator'].containsKey$O.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [k]) && this.b$['gnu.trove.decorator.TLongCharMapDecorator'].get$O.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [k]).equals$O(v) ;
} else {
return false;
}});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TLongCharMapDecorator$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongCharMapDecorator$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['gnu.trove.decorator.TLongCharMapDecorator']._map.iterator$();
}, 1);

C$.$fields$=[['O',['it','gnu.trove.iterator.TLongCharIterator']]]

Clazz.newMeth(C$, 'next$', function () {
this.it.advance$();
var ik=this.it.key$();
var key=(ik == this.b$['gnu.trove.decorator.TLongCharMapDecorator']._map.getNoEntryKey$()) ? null : this.b$['gnu.trove.decorator.TLongCharMapDecorator'].wrapKey$J.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [ik]);
var iv=this.it.value$();
var v=(iv == this.b$['gnu.trove.decorator.TLongCharMapDecorator']._map.getNoEntryValue$()) ? null : this.b$['gnu.trove.decorator.TLongCharMapDecorator'].wrapValue$C.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [iv]);
return ((P$.TLongCharMapDecorator$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TLongCharMapDecorator$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=this.$finals$.v;
}, 1);

C$.$fields$=[['O',['val','Character']]]

Clazz.newMeth(C$, ['equals$O','equals$'], function (o) {
return Clazz.instanceOf(o, "java.util.Map.Entry") && (o).getKey$().equals$O(this.$finals$.key) && (o).getValue$().equals$O(this.val)  ;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.$finals$.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.val;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.$finals$.key.hashCode$() + this.val.hashCode$();
});

Clazz.newMeth(C$, ['setValue$Character','setValue$','setValue$TV'], function (value) {
this.val=value;
return this.b$['gnu.trove.decorator.TLongCharMapDecorator'].put$Long$Character.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [this.$finals$.key, value]);
});
})()
), Clazz.new_(P$.TLongCharMapDecorator$1$1$1.$init$, [this, {key:key,v:v}]));
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
})()
), Clazz.new_(P$.TLongCharMapDecorator$1$1.$init$, [this, null]));
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var modified=false;
if (this.contains$O(o)) {
var key=(o).getKey$();
this.b$['gnu.trove.decorator.TLongCharMapDecorator']._map.remove$J(this.b$['gnu.trove.decorator.TLongCharMapDecorator'].unwrapKey$O.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], [key]));
modified=true;
}return modified;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.decorator.TLongCharMapDecorator'].clear$.apply(this.b$['gnu.trove.decorator.TLongCharMapDecorator'], []);
});
})()
), Clazz.new_(1,{E:"java.util.Map.Entry"},$I$(1,1), [this, null],P$.TLongCharMapDecorator$1));
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
return Clazz.instanceOf(val, "java.lang.Character") && this._map.containsValue$C(this.unwrapValue$O(val)) ;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
if (key == null ) return this._map.containsKey$J(this._map.getNoEntryKey$());
return Clazz.instanceOf(key, "java.lang.Long") && this._map.containsKey$J(this.unwrapKey$O(key)) ;
});

Clazz.newMeth(C$, 'size$', function () {
return this._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
var it=map.entrySet$().iterator$();
for (var i=map.size$(); i-- > 0; ) {
var e=it.next$();
this.put$Long$Character(e.getKey$(), e.getValue$());
}
});

Clazz.newMeth(C$, 'wrapKey$J', function (k) {
return Long.valueOf$J(k);
});

Clazz.newMeth(C$, 'unwrapKey$O', function (key) {
return (key).longValue$();
});

Clazz.newMeth(C$, 'wrapValue$C', function (k) {
return Character.valueOf$C(k);
});

Clazz.newMeth(C$, 'unwrapValue$O', function (value) {
return (value).charValue$();
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._map=$in.readObject$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeObject$O(this._map);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1