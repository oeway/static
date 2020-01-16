(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[[0,'java.util.AbstractSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectLongMapDecorator", null, 'java.util.AbstractMap', ['java.util.Map', 'java.io.Externalizable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_map','gnu.trove.map.TObjectLongMap']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectLongMap', function (map) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this._map=map;
}, 1);

Clazz.newMeth(C$, 'getMap$', function () {
return this._map;
});

Clazz.newMeth(C$, ['put$TK$Long','put$TK$TV'], function (key, value) {
if (value == null ) return this.wrapValue$J(this._map.put$TK$J(key, this._map.getNoEntryValue$()));
return this.wrapValue$J(this._map.put$TK$J(key, this.unwrapValue$O(value)));
});

Clazz.newMeth(C$, 'get$O', function (key) {
var v=this._map.get$O(key);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$J(v);
}});

Clazz.newMeth(C$, 'clear$', function () {
this._map.clear$();
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var v=this._map.remove$O(key);
if (v == this._map.getNoEntryValue$()) {
return null;
} else {
return this.wrapValue$J(v);
}});

Clazz.newMeth(C$, 'entrySet$', function () {
return ((P$.TObjectLongMapDecorator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectLongMapDecorator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.b$['gnu.trove.decorator.TObjectLongMapDecorator']._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].isEmpty$.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], []);
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var k=(o).getKey$();
var v=(o).getValue$();
return this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].containsKey$O.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], [k]) && this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].get$O.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], [k]).equals$O(v) ;
} else {
return false;
}});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TObjectLongMapDecorator$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectLongMapDecorator$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['gnu.trove.decorator.TObjectLongMapDecorator']._map.iterator$();
}, 1);

C$.$fields$=[['O',['it','gnu.trove.iterator.TObjectLongIterator']]]

Clazz.newMeth(C$, 'next$', function () {
this.it.advance$();
var key=this.it.key$();
var v=this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].wrapValue$J.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], [this.it.value$()]);
return ((P$.TObjectLongMapDecorator$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TObjectLongMapDecorator$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=this.$finals$.v;
}, 1);

C$.$fields$=[['O',['val','Long']]]

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

Clazz.newMeth(C$, ['setValue$Long','setValue$','setValue$TV'], function (value) {
this.val=value;
return this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].put$TK$Long.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], [this.$finals$.key, value]);
});
})()
), Clazz.new_(P$.TObjectLongMapDecorator$1$1$1.$init$, [this, {v:v,key:key}]));
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
})()
), Clazz.new_(P$.TObjectLongMapDecorator$1$1.$init$, [this, null]));
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$TE'], function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var modified=false;
if (this.contains$O(o)) {
var key=(o).getKey$();
this.b$['gnu.trove.decorator.TObjectLongMapDecorator']._map.remove$O(key);
modified=true;
}return modified;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['gnu.trove.decorator.TObjectLongMapDecorator'].clear$.apply(this.b$['gnu.trove.decorator.TObjectLongMapDecorator'], []);
});
})()
), Clazz.new_(1,{E:"java.util.Map.Entry"},$I$(1,1), [this, null],P$.TObjectLongMapDecorator$1));
});

Clazz.newMeth(C$, 'containsValue$O', function (val) {
return Clazz.instanceOf(val, "java.lang.Long") && this._map.containsValue$J(this.unwrapValue$O(val)) ;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
return this._map.containsKey$O(key);
});

Clazz.newMeth(C$, 'size$', function () {
return this._map.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this._map.size$() == 0;
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
var it=map.entrySet$().iterator$();
for (var i=map.size$(); i-- > 0; ) {
var e=it.next$();
this.put$TK$Long(e.getKey$(), e.getValue$());
}
});

Clazz.newMeth(C$, 'wrapValue$J', function (k) {
return Long.valueOf$J(k);
});

Clazz.newMeth(C$, 'unwrapValue$O', function (value) {
return (value).longValue$();
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
