(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[[0,'java.util.AbstractSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TByteIntMapDecorator", null, 'java.util.AbstractMap', ['java.util.Map', 'java.io.Externalizable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.TByteIntMap']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TByteIntMap', function (map) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'getMap$', function () {
return this._map;
});

Clazz.newMeth(C$, ['put$Byte$Integer','put$TK$TV'], function (key, value) {
var k;
var v;
if (key == null ) {
k=($b$[0] = this._map.getNoEntryKey$(), $b$[0]);
} else {
k=($b$[0] = this.unwrapKey$O(key), $b$[0]);
}if (value == null ) {
v=this._map.getNoEntryValue$();
} else {
v=this.unwrapValue$O(value);
}var retval=this._map.put$B$I(($b$[0] = k, $b$[0]), v);
if (retval == this._map.getNoEntryValue$()) {
return null;
}return this.wrapValue$I(retval);
});

Clazz.newMeth(C$, 'get$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Byte")) {
k=($b$[0] = this.unwrapKey$O(key), $b$[0]);
} else {
return null;
}} else {
k=($b$[0] = this._map.getNoEntryKey$(), $b$[0]);
}var v=this._map.get$B(($b$[0] = k, $b$[0]));
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$I(v);
}});

Clazz.newMeth(C$, 'clear$', function () {
this._map.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Byte")) {
k=($b$[0] = this.unwrapKey$O(key), $b$[0]);
} else {
return null;
}} else {
k=($b$[0] = this._map.getNoEntryKey$(), $b$[0]);
}var v=this._map.remove$B(($b$[0] = k, $b$[0]));
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$I(v);
}});

Clazz.newMeth(C$, 'entrySet$', function () {
return ((P$.TByteIntMapDecorator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteIntMapDecorator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.decorator.TByteIntMapDecorator']._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['gnu.trove.decorator.TByteIntMapDecorator'].isEmpty$.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], []);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var k=(o).getKey$();
var v=(o).getValue$();
return this.b$['gnu.trove.decorator.TByteIntMapDecorator'].containsKey$O.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [k]) && this.b$['gnu.trove.decorator.TByteIntMapDecorator'].get$O.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [k]).equals$O(v) ;
} else {
return false;
}});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TByteIntMapDecorator$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteIntMapDecorator$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['gnu.trove.decorator.TByteIntMapDecorator']._map.iterator$();
}, 1);

C$.$fields$=[['O',['it','gnu.trove.iterator.TByteIntIterator']]]

Clazz.newMeth(C$, 'next$', function () {
this.it.advance$();
var ik=($b$[0] = this.it.key$(), $b$[0]);
var key=(ik == this.b$['gnu.trove.decorator.TByteIntMapDecorator']._map.getNoEntryKey$()) ? null : this.b$['gnu.trove.decorator.TByteIntMapDecorator'].wrapKey$B.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [($b$[0] = ik, $b$[0])]);
var iv=this.it.value$();
var v=(iv == this.b$['gnu.trove.decorator.TByteIntMapDecorator']._map.getNoEntryValue$()) ? null : this.b$['gnu.trove.decorator.TByteIntMapDecorator'].wrapValue$I.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [iv]);
return ((P$.TByteIntMapDecorator$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TByteIntMapDecorator$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=this.$finals$.v;
}, 1);

C$.$fields$=[['O',['val','Integer']]]

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

Clazz.newMeth(C$, ['setValue$Integer','setValue$','setValue$TV'], function (value) {
this.val=value;
return this.b$['gnu.trove.decorator.TByteIntMapDecorator'].put$Byte$Integer.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [this.$finals$.key, value]);
});
})()
), Clazz.new_(P$.TByteIntMapDecorator$1$1$1.$init$, [this, {key:key,v:v}]));
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TByteIntMapDecorator$1$1.$init$, [this, null]));
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var modified=false;
if (this.contains$O(o)) {
var key=(o).getKey$();
this.b$['gnu.trove.decorator.TByteIntMapDecorator']._map.remove$B(($b$[0] = this.b$['gnu.trove.decorator.TByteIntMapDecorator'].unwrapKey$O.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], [key]), $b$[0]));
modified=true;
}return modified;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.decorator.TByteIntMapDecorator'].clear$.apply(this.b$['gnu.trove.decorator.TByteIntMapDecorator'], []);
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(1,{E:"java.util.Map.Entry"},$I$(1,1), [this, null],P$.TByteIntMapDecorator$1));
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
return Clazz.instanceOf(val, "java.lang.Integer") && this._map.containsValue$I(this.unwrapValue$O(val)) ;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
if (key == null ) return this._map.containsKey$B(($b$[0] = this._map.getNoEntryKey$(), $b$[0]));
return Clazz.instanceOf(key, "java.lang.Byte") && this._map.containsKey$B(($b$[0] = this.unwrapKey$O(key), $b$[0])) ;
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
this.put$Byte$Integer(e.getKey$(), e.getValue$());
}
});

Clazz.newMeth(C$, 'wrapKey$B', function (k) {
return Byte.valueOf$B(($b$[0] = k, $b$[0]));
});

Clazz.newMeth(C$, 'unwrapKey$O', function (key) {
return $b$[0] = (key).byteValue$(), $b$[0];
});

Clazz.newMeth(C$, 'wrapValue$I', function (k) {
return Integer.valueOf$I(k);
});

Clazz.newMeth(C$, 'unwrapValue$O', function (value) {
return (value).intValue$();
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._map=$in.readObject$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeObject$O(this._map);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
