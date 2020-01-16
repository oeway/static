(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[[0,'java.util.AbstractSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TDoubleByteMapDecorator", null, 'java.util.AbstractMap', ['java.util.Map', 'java.io.Externalizable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.TDoubleByteMap']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TDoubleByteMap', function (map) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'getMap$', function () {
return this._map;
});

Clazz.newMeth(C$, ['put$Double$Byte','put$TK$TV'], function (key, value) {
var k;
var v;
if (key == null ) {
k=this._map.getNoEntryKey$();
} else {
k=this.unwrapKey$O(key);
}if (value == null ) {
v=($b$[0] = this._map.getNoEntryValue$(), $b$[0]);
} else {
v=($b$[0] = this.unwrapValue$O(value), $b$[0]);
}var retval=($b$[0] = this._map.put$D$B(k, (v|0)), $b$[0]);
if (retval == this._map.getNoEntryValue$()) {
return null;
}return this.wrapValue$B(($b$[0] = retval, $b$[0]));
});

Clazz.newMeth(C$, 'get$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Double")) {
k=this.unwrapKey$O(key);
} else {
return null;
}} else {
k=this._map.getNoEntryKey$();
}var v=($b$[0] = this._map.get$D(k), $b$[0]);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$B(($b$[0] = v, $b$[0]));
}});

Clazz.newMeth(C$, 'clear$', function () {
this._map.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var k;
if (key != null ) {
if (Clazz.instanceOf(key, "java.lang.Double")) {
k=this.unwrapKey$O(key);
} else {
return null;
}} else {
k=this._map.getNoEntryKey$();
}var v=($b$[0] = this._map.remove$D(k), $b$[0]);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$B(($b$[0] = v, $b$[0]));
}});

Clazz.newMeth(C$, 'entrySet$', function () {
return ((P$.TDoubleByteMapDecorator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDoubleByteMapDecorator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.decorator.TDoubleByteMapDecorator']._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].isEmpty$.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], []);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var k=(o).getKey$();
var v=(o).getValue$();
return this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].containsKey$O.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [k]) && this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].get$O.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [k]).equals$O(v) ;
} else {
return false;
}});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TDoubleByteMapDecorator$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDoubleByteMapDecorator$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['gnu.trove.decorator.TDoubleByteMapDecorator']._map.iterator$();
}, 1);

C$.$fields$=[['O',['it','gnu.trove.iterator.TDoubleByteIterator']]]

Clazz.newMeth(C$, 'next$', function () {
this.it.advance$();
var ik=this.it.key$();
var key=(ik == this.b$['gnu.trove.decorator.TDoubleByteMapDecorator']._map.getNoEntryKey$() ) ? null : this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].wrapKey$D.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [ik]);
var iv=($b$[0] = this.it.value$(), $b$[0]);
var v=(iv == this.b$['gnu.trove.decorator.TDoubleByteMapDecorator']._map.getNoEntryValue$()) ? null : this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].wrapValue$B.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [($b$[0] = iv, $b$[0])]);
return ((P$.TDoubleByteMapDecorator$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDoubleByteMapDecorator$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=this.$finals$.v;
}, 1);

C$.$fields$=[['O',['val','Byte']]]

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

Clazz.newMeth(C$, ['setValue$Byte','setValue$','setValue$TV'], function (value) {
this.val=value;
return this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].put$Double$Byte.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [this.$finals$.key, value]);
});
})()
), Clazz.new_(P$.TDoubleByteMapDecorator$1$1$1.$init$, [this, {key:key,v:v}]));
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TDoubleByteMapDecorator$1$1.$init$, [this, null]));
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var modified=false;
if (this.contains$O(o)) {
var key=(o).getKey$();
this.b$['gnu.trove.decorator.TDoubleByteMapDecorator']._map.remove$D(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].unwrapKey$O.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], [key]));
modified=true;
}return modified;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'].clear$.apply(this.b$['gnu.trove.decorator.TDoubleByteMapDecorator'], []);
});
})()
), Clazz.new_(1,{E:"java.util.Map.Entry"},$I$(1,1), [this, null],P$.TDoubleByteMapDecorator$1));
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
return Clazz.instanceOf(val, "java.lang.Byte") && this._map.containsValue$B(($b$[0] = this.unwrapValue$O(val), $b$[0])) ;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
if (key == null ) return this._map.containsKey$D(this._map.getNoEntryKey$());
return Clazz.instanceOf(key, "java.lang.Double") && this._map.containsKey$D(this.unwrapKey$O(key)) ;
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
this.put$Double$Byte(e.getKey$(), e.getValue$());
}
});

Clazz.newMeth(C$, 'wrapKey$D', function (k) {
return Double.valueOf$D(k);
});

Clazz.newMeth(C$, 'unwrapKey$O', function (key) {
return (key).doubleValue$();
});

Clazz.newMeth(C$, 'wrapValue$B', function (k) {
return Byte.valueOf$B(($b$[0] = k, $b$[0]));
});

Clazz.newMeth(C$, 'unwrapValue$O', function (value) {
return $b$[0] = (value).byteValue$(), $b$[0];
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
